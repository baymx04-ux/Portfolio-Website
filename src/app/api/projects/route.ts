import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects, saveProject } from '@/lib/storage';

const AUTH_COOKIE_NAME = 'jk_portfolio_admin_auth';

function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get(AUTH_COOKIE_NAME);
  return cookie?.value === 'authenticated_session_jk';
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const all = searchParams.get('all') === 'true';

  const projects = getAllProjects();
  if (all && isAuthenticated(request)) {
    return NextResponse.json({ projects });
  }

  // Public only sees published projects unless requesting specific
  const published = projects.filter((p) => p.status === 'published');
  return NextResponse.json({ projects: published });
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, description, techStack, imageUrl, liveUrl, githubUrl, featured, status } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const newProject = saveProject({
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      description,
      techStack: Array.isArray(techStack) ? techStack : (techStack ? techStack.split(',').map((s: string) => s.trim()) : []),
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      liveUrl: liveUrl || '',
      githubUrl: githubUrl || '',
      featured: Boolean(featured),
      status: status === 'draft' ? 'draft' : 'published',
      order: 0,
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (err) {
    console.error('Failed to create project:', err);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
