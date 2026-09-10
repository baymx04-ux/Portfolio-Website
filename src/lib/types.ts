export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'published' | 'draft';
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  authenticated: boolean;
}
