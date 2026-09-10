import fs from 'fs';
import path from 'path';
import { Project } from './types';
import { initialProjects } from './initial-projects';

const dataDir = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataDir, 'projects.json');

function ensureDataFile(): void {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify(initialProjects, null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error ensuring data file:', err);
  }
}

export function getAllProjects(): Project[] {
  ensureDataFile();
  try {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const projects: Project[] = JSON.parse(fileContent);
    return projects.sort((a, b) => a.order - b.order);
  } catch (err) {
    console.error('Error reading projects.json:', err);
    return initialProjects;
  }
}

export function getPublishedProjects(): Project[] {
  return getAllProjects().filter((p) => p.status === 'published');
}

export function getProjectById(id: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((p) => p.id === id);
}

export function saveProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }): Project {
  ensureDataFile();
  const projects = getAllProjects();
  const now = new Date().toISOString();

  if (project.id) {
    // Update existing
    const index = projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      const updated: Project = {
        ...projects[index],
        ...project,
        updatedAt: now,
      };
      projects[index] = updated;
      fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2), 'utf-8');
      return updated;
    }
  }

  // Create new
  const newId = `proj_${Date.now()}`;
  const newProject: Project = {
    ...project,
    id: newId,
    order: projects.length + 1,
    createdAt: now,
    updatedAt: now,
  };

  projects.push(newProject);
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2), 'utf-8');
  return newProject;
}

export function deleteProject(id: string): boolean {
  ensureDataFile();
  const projects = getAllProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length !== projects.length) {
    fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf-8');
    return true;
  }
  return false;
}
