import type { Prisma, Project as ProjectRecord } from '@prisma/client';
import type { Project } from './types';
import { getDb } from './db';

function toProject(row: ProjectRecord): Project {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    techStack: row.techStack,
    imageUrl: row.imageUrl,
    liveUrl: row.liveUrl ?? undefined,
    githubUrl: row.githubUrl ?? undefined,
    featured: row.featured,
    status: row.status as Project['status'],
    order: row.order,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const rows = await getDb().project.findMany({ orderBy: { order: 'asc' } });
  return rows.map(toProject);
}

export async function getPublishedProjects(): Promise<Project[]> {
  const rows = await getDb().project.findMany({
    where: { status: 'published' },
    orderBy: { order: 'asc' },
  });
  return rows.map(toProject);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const row = await getDb().project.findUnique({ where: { id } });
  return row ? toProject(row) : null;
}

type ProjectInput = Omit<Project, 'id' | 'createdAt' | 'updatedAt'> & { id?: string };

function toUpdateData(project: ProjectInput): Prisma.ProjectUncheckedUpdateInput {
  return {
    title: project.title,
    slug: project.slug,
    description: project.description,
    techStack: project.techStack,
    imageUrl: project.imageUrl,
    liveUrl: project.liveUrl || null,
    githubUrl: project.githubUrl || null,
    featured: project.featured,
    status: project.status,
    order: project.order,
  };
}

function toCreateData(project: ProjectInput, id: string, order: number): Prisma.ProjectUncheckedCreateInput {
  return {
    id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    techStack: project.techStack,
    imageUrl: project.imageUrl,
    liveUrl: project.liveUrl || null,
    githubUrl: project.githubUrl || null,
    featured: project.featured,
    status: project.status,
    order,
  };
}

export async function saveProject(project: ProjectInput): Promise<Project> {
  const db = getDb();

  if (project.id) {
    const existing = await db.project.findUnique({ where: { id: project.id } });
    if (existing) {
      const row = await db.project.update({
        where: { id: project.id },
        data: toUpdateData(project),
      });
      return toProject(row);
    }
  }

  const max = await db.project.aggregate({ _max: { order: true } });
  const order = project.order || (max._max.order ?? 0) + 1;
  const id = project.id ?? `proj_${Date.now()}`;
  const row = await db.project.create({ data: toCreateData(project, id, order) });
  return toProject(row);
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    const row = await getDb().project.delete({ where: { id } });
    return row.id === id;
  } catch {
    return false;
  }
}