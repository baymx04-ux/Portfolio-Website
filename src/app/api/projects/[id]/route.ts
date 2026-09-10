import { NextRequest, NextResponse } from 'next/server';
import { getProjectById, saveProject, deleteProject } from '@/lib/storage';

const AUTH_COOKIE_NAME = 'jk_portfolio_admin_auth';

function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get(AUTH_COOKIE_NAME);
  return cookie?.value === 'authenticated_session_jk';
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json({ project });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const existing = await getProjectById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const updated = await saveProject({
      ...existing,
      ...body,
      id,
      techStack: Array.isArray(body.techStack)
        ? body.techStack
        : (body.techStack ? body.techStack.split(',').map((s: string) => s.trim()) : existing.techStack),
    });

    return NextResponse.json({ success: true, project: updated });
  } catch {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteProject(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: 'Project deleted successfully' });
}
