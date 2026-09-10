'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/types';

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isSubmittingAuth, setIsSubmittingAuth] = useState<boolean>(false);

  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState<boolean>(false);

  // Drawer / Modal state
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form fields
  const [formTitle, setFormTitle] = useState<string>('');
  const [formSlug, setFormSlug] = useState<string>('');
  const [formDescription, setFormDescription] = useState<string>('');
  const [formTechStack, setFormTechStack] = useState<string[]>([]);
  const [newTagInput, setNewTagInput] = useState<string>('');
  const [formLiveUrl, setFormLiveUrl] = useState<string>('');
  const [formGithubUrl, setFormGithubUrl] = useState<string>('');
  const [formImageUrl, setFormImageUrl] = useState<string>('');
  const [formFeatured, setFormFeatured] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Check auth session on load
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchProjects();
        }
      } catch (err) {
        console.error('Failed to check auth', err);
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, []);

  const fetchProjects = async () => {
    setLoadingProjects(true);
    try {
      const res = await fetch('/api/projects?all=true');
      const data = await res.json();
      if (data.projects) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error('Failed to fetch projects', err);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setIsSubmittingAuth(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        fetchProjects();
      } else {
        setPasswordError('Access Denied: Invalid administrative password.');
      }
    } catch {
      setPasswordError('Authentication request failed.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setPasswordInput('');
  };

  const openAddDrawer = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormSlug('');
    setFormDescription('');
    setFormTechStack(['React', 'Node.js', 'Express.js', 'MongoDB']);
    setFormLiveUrl('');
    setFormGithubUrl('');
    setFormImageUrl('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80');
    setFormFeatured(false);
    setFormStatus('published');
    setDrawerOpen(true);
  };

  const openEditDrawer = (project: Project) => {
    setEditingProject(project);
    setFormTitle(project.title);
    setFormSlug(project.slug);
    setFormDescription(project.description);
    setFormTechStack([...project.techStack]);
    setFormLiveUrl(project.liveUrl || '');
    setFormGithubUrl(project.githubUrl || '');
    setFormImageUrl(project.imageUrl);
    setFormFeatured(project.featured);
    setFormStatus(project.status);
    setDrawerOpen(true);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTagInput.trim()) {
      e.preventDefault();
      if (!formTechStack.includes(newTagInput.trim())) {
        setFormTechStack([...formTechStack, newTagInput.trim()]);
      }
      setNewTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormTechStack(formTechStack.filter((t) => t !== tagToRemove));
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;
    setIsSaving(true);

    const payload = {
      title: formTitle,
      slug: formSlug || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      description: formDescription,
      techStack: formTechStack,
      liveUrl: formLiveUrl,
      githubUrl: formGithubUrl,
      imageUrl: formImageUrl,
      featured: formFeatured,
      status: formStatus,
    };

    try {
      if (editingProject) {
        // Update
        const res = await fetch(`/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          await fetchProjects();
          setDrawerOpen(false);
        }
      } else {
        // Create
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          await fetchProjects();
          setDrawerOpen(false);
        }
      }
    } catch (err) {
      console.error('Error saving project', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error('Failed to delete project', err);
    }
  };

  // Loading state
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-code-sm text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-pine animate-pulse"></span>
          <span>INITIALIZING CONSOLE SUBSYSTEM...</span>
        </div>
      </div>
    );
  }

  // 1. Password Authentication Gate (when not logged in)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between py-12 px-6">
        <div className="max-w-[440px] w-full mx-auto my-auto">
          {/* Header Marker */}
          <div className="flex items-center justify-between pb-3 border-b border-border mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pine"></span>
              <span className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
                Restricted Terminal
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-ink font-semibold">REF: AUTH-GATE</span>
          </div>

          {/* Form Card */}
          <div className="bg-surface border border-border p-space-6 rounded-[0px]">
            <div className="mb-space-6">
              <h1 className="font-headline-sm text-headline-sm text-ink font-semibold">
                Administrative Access
              </h1>
              <p className="font-body-sm text-body-sm text-ink-muted mt-1 leading-relaxed">
                Provide administrative authorization credentials to access the project management console.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-space-4">
              <div>
                <label
                  htmlFor="admin-password"
                  className="block font-code-sm text-code-sm text-ink-muted uppercase mb-1.5"
                >
                  Passcode
                </label>
                <input
                  id="admin-password"
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter administrator passcode"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-background border border-border px-space-4 py-2.5 rounded-[2px] font-code-md text-code-md text-ink focus:outline-none focus:border-pine placeholder:text-outline-variant"
                />
              </div>

              {passwordError && (
                <div className="p-space-2 bg-error-container/20 border border-error text-error font-code-sm text-code-sm">
                  {passwordError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingAuth}
                className="w-full bg-pine text-surface-container-lowest font-body-sm text-body-sm font-semibold py-2.5 rounded-[2px] hover:bg-primary transition-colors cursor-pointer text-center mt-2 disabled:opacity-50"
              >
                {isSubmittingAuth ? 'Verifying Credentials...' : 'Authenticate Console'}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="font-code-sm text-code-sm text-ink-muted hover:text-pine transition-colors inline-flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Return to Public Portfolio</span>
            </Link>
          </div>
        </div>

        <div className="text-center font-code-sm text-[11px] text-ink-muted">
          Secured Architecture • Authorized Engineering Sessions Only
        </div>
      </div>
    );
  }

  // 2. Full Admin Dashboard Console
  const publishedCount = projects.filter((p) => p.status === 'published').length;
  const draftCount = projects.filter((p) => p.status === 'draft').length;

  return (
    <div className="min-h-screen bg-background text-ink flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface border-r border-border z-50 flex flex-col justify-between hidden md:flex">
        <div className="flex flex-col">
          {/* Sidebar Top */}
          <div className="h-16 px-space-6 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-space-3">
              <div className="w-7 h-7 rounded-[2px] bg-background border border-border flex items-center justify-center font-code-sm font-bold text-pine">
                JK
              </div>
              <span className="font-code-md text-code-md text-ink font-bold tracking-tight uppercase">
                Console
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-pine animate-pulse"></span>
          </div>

          {/* Navigation */}
          <div className="p-space-4">
            <div className="font-code-sm text-[11px] text-ink-muted uppercase tracking-wider px-space-3 mb-space-2">
              CMS &amp; Catalog
            </div>
            <nav className="space-y-1">
              <button
                type="button"
                className="w-full flex items-center gap-space-3 px-space-3 py-space-2 bg-surface-container text-pine border-l-2 border-pine font-medium font-label-md text-label-md text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">folder_data</span>
                Projects
              </button>
              <button
                type="button"
                onClick={() => alert('Telemetry: Node v22.20.0 running on Windows with Docker runner healthy.')}
                className="w-full flex items-center gap-space-3 px-space-3 py-space-2 text-ink-muted hover:bg-surface-container-high hover:text-ink transition-colors font-label-md text-label-md text-left cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">monitoring</span>
                System Stats
              </button>
            </nav>
          </div>
        </div>

        {/* Sidebar Bottom */}
        <div className="p-space-4 border-t border-border flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-code-sm text-code-sm text-ink-muted hover:text-pine transition-colors py-1"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Exit to Portfolio</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-code-sm text-code-sm text-error/80 hover:text-error transition-colors py-1 text-left cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-background/90 backdrop-blur-xs border-b border-border sticky top-0 z-40 flex items-center justify-between px-space-6 sm:px-space-8">
          <div className="flex items-center gap-2 font-code-sm text-code-sm">
            <span className="text-ink-muted uppercase tracking-wider">Environment:</span>
            <span className="text-pine font-bold">PROD-LIVE</span>
            <span className="text-border mx-1">|</span>
            <span className="text-ink-muted">USER: JUNAID_KANWAR</span>
          </div>

          <div className="flex items-center gap-space-4">
            <Link
              href="/"
              className="font-code-sm text-code-sm text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
            >
              <span>View Live Site</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </Link>
            <button
              onClick={handleLogout}
              className="md:hidden font-code-sm text-code-sm text-error"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-space-6 sm:p-space-8 max-w-[1200px] w-full mx-auto flex flex-col gap-space-8 flex-1">
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-space-6 border-b border-border gap-space-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-ink-muted font-code-sm text-code-sm tracking-wider uppercase">
                <span>Console</span>
                <span>/</span>
                <span>Inventory Control</span>
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-headline-lg text-ink font-display">
                Projects Management
              </h1>
            </div>

            <div className="flex items-center gap-space-3">
              <button
                onClick={fetchProjects}
                className="px-space-4 py-space-2 bg-surface hover:bg-surface-container-high text-ink font-code-md text-code-md rounded-[2px] border border-border transition-colors flex items-center gap-2 cursor-pointer"
                title="Refresh project list"
              >
                <span className="material-symbols-outlined text-[18px]">sync</span>
                <span>Refresh</span>
              </button>
              <button
                onClick={openAddDrawer}
                className="px-space-5 py-space-2 bg-pine text-[#F1F2EC] hover:bg-primary transition-colors font-code-md text-code-md font-medium rounded-[2px] flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Add new project</span>
              </button>
            </div>
          </div>

          {/* Metrics Strip */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-space-4">
            <div className="bg-surface p-space-4 border border-border rounded-[0px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-ink-muted">
                <span className="font-code-sm text-[11px] uppercase tracking-wider">Total Projects</span>
                <span className="material-symbols-outlined text-[18px]">folder</span>
              </div>
              <div className="mt-space-3 flex items-baseline gap-space-2">
                <span className="font-code-md text-2xl font-bold text-ink">{projects.length}</span>
                <span className="font-code-sm text-code-sm text-ink-muted">catalog items</span>
              </div>
            </div>

            <div className="bg-surface p-space-4 border border-border rounded-[0px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-ink-muted">
                <span className="font-code-sm text-[11px] uppercase tracking-wider">Published</span>
                <span className="w-2 h-2 rounded-full bg-pine inline-block"></span>
              </div>
              <div className="mt-space-3 flex items-baseline gap-space-2">
                <span className="font-code-md text-2xl font-bold text-pine">{publishedCount}</span>
                <span className="font-code-sm text-code-sm text-ink-muted">live on site</span>
              </div>
            </div>

            <div className="bg-surface p-space-4 border border-border rounded-[0px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-ink-muted">
                <span className="font-code-sm text-[11px] uppercase tracking-wider">Drafts</span>
                <span className="w-2 h-2 rounded-full bg-ink-muted inline-block"></span>
              </div>
              <div className="mt-space-3 flex items-baseline gap-space-2">
                <span className="font-code-md text-2xl font-bold text-ink-muted">{draftCount}</span>
                <span className="font-code-sm text-code-sm text-ink-muted">unlisted</span>
              </div>
            </div>

            <div className="bg-surface p-space-4 border border-border rounded-[0px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-ink-muted">
                <span className="font-code-sm text-[11px] uppercase tracking-wider">Persistence</span>
                <span className="material-symbols-outlined text-[18px] text-copper">database</span>
              </div>
              <div className="mt-space-3 flex items-baseline gap-space-2">
                <span className="font-code-md text-2xl font-bold text-ink">ACTIVE</span>
                <span className="font-code-sm text-code-sm text-copper font-medium">Auto-synced</span>
              </div>
            </div>
          </section>

          {/* Primary Data Table */}
          <section className="flex flex-col gap-space-4">
            <div className="flex items-center justify-between px-space-2">
              <div className="flex items-center gap-space-3">
                <span className="font-code-md text-code-md text-ink uppercase tracking-wider font-bold">
                  Catalog Records
                </span>
                <span className="px-space-2 py-0.5 bg-surface text-ink-muted text-code-sm font-code-sm border border-border">
                  TABLE-P01
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-ink-muted">
                Displaying {projects.length} entries
              </span>
            </div>

            <div className="border border-border bg-surface overflow-hidden rounded-[0px]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-surface-container font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
                      <th className="py-space-3 px-space-4 font-normal">Project Title</th>
                      <th className="py-space-3 px-space-4 font-normal">Tech Stack</th>
                      <th className="py-space-3 px-space-4 font-normal">Status</th>
                      <th className="py-space-3 px-space-4 font-normal">Updated</th>
                      <th className="py-space-3 px-space-4 font-normal text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border font-body-sm text-body-sm">
                    {loadingProjects ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center font-code-sm text-ink-muted">
                          Fetching database records...
                        </td>
                      </tr>
                    ) : projects.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center font-code-sm text-ink-muted">
                          No projects found in database. Click &quot;Add new project&quot; to create one.
                        </td>
                      </tr>
                    ) : (
                      projects.map((project) => (
                        <tr
                          key={project.id}
                          className="hover:bg-surface-container/60 transition-colors"
                        >
                          <td className="py-space-4 px-space-4">
                            <div className="flex items-center gap-2">
                              <span className="font-body-md text-body-md font-semibold text-ink">
                                {project.title}
                              </span>
                              {project.featured && (
                                <span className="px-1.5 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-code-sm text-[10px] rounded-[2px] uppercase font-bold">
                                  Featured
                                </span>
                              )}
                            </div>
                            <span className="font-code-sm text-code-sm text-ink-muted block mt-0.5">
                              /projects/{project.slug}
                            </span>
                          </td>

                          <td className="py-space-4 px-space-4">
                            <div className="flex flex-wrap gap-1 max-w-[240px]">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-1.5 py-0.5 bg-surface-container text-ink-muted border border-border text-[11px] font-code-sm rounded-[2px]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="py-space-4 px-space-4 whitespace-nowrap">
                            {project.status === 'published' ? (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-bright border border-pine/30 text-pine font-code-sm text-code-sm rounded-[2px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-pine"></span>
                                Published
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-dim border border-border text-ink-muted font-code-sm text-code-sm rounded-[2px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-ink-muted"></span>
                                Draft
                              </span>
                            )}
                          </td>

                          <td className="py-space-4 px-space-4 font-code-sm text-code-sm text-ink-muted whitespace-nowrap">
                            {new Date(project.updatedAt).toLocaleDateString()}
                          </td>

                          <td className="py-space-4 px-space-4 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-space-3 font-code-sm text-code-sm">
                              <button
                                onClick={() => openEditDrawer(project)}
                                className="text-pine font-medium hover:underline focus:outline-none cursor-pointer"
                                type="button"
                              >
                                Edit
                              </button>
                              <span className="text-border">|</span>
                              {deleteConfirmId === project.id ? (
                                <div className="inline-flex items-center gap-2">
                                  <button
                                    onClick={() => handleDeleteProject(project.id)}
                                    className="text-error font-bold hover:underline cursor-pointer"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirmId(null)}
                                    className="text-ink-muted hover:underline cursor-pointer"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setDeleteConfirmId(project.id)}
                                  className="text-ink-muted hover:text-error transition-colors focus:outline-none cursor-pointer"
                                  type="button"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-space-3 bg-surface border-t border-border flex items-center justify-between text-code-sm font-code-sm text-ink-muted">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-pine animate-pulse"></span>
                  <span>Data Store: Synchronized with Portfolio Page</span>
                </div>
                <div>{projects.length} Total Entries</div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Slide-over Drawer / Modal for Add / Edit Project */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-ink/30 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-xl bg-surface border-l border-border h-full flex flex-col justify-between overflow-y-auto p-space-6 shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-space-4 border-b border-border mb-space-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-2">
                    <span className="w-2 h-2 rounded-full bg-pine"></span>
                    <span className="font-code-sm text-code-sm uppercase tracking-wider text-ink-muted">
                      {editingProject ? 'Modify Record' : 'Create Record'}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-ink font-semibold mt-1">
                    {editingProject ? `Edit: ${editingProject.title}` : 'Add New Project'}
                  </h2>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 hover:bg-surface-container-high rounded-[2px] transition-colors cursor-pointer text-ink-muted hover:text-ink"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Drawer Form */}
              <form id="project-form" onSubmit={handleSaveProject} className="flex flex-col gap-space-4">
                {/* Title */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="proj-title"
                    className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                  >
                    Project Title *
                  </label>
                  <input
                    id="proj-title"
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Code Arena"
                    className="w-full bg-background border border-border rounded-[2px] px-space-3 py-space-2 text-ink font-body-sm text-body-sm focus:outline-none focus:border-pine"
                  />
                </div>

                {/* Slug */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="proj-slug"
                    className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                  >
                    Canonical Slug
                  </label>
                  <div className="flex items-center bg-background border border-border rounded-[2px] px-space-3 py-space-2 focus-within:border-pine">
                    <span className="font-code-sm text-code-sm text-ink-muted select-none">
                      /projects/
                    </span>
                    <input
                      id="proj-slug"
                      type="text"
                      value={formSlug}
                      onChange={(e) => setFormSlug(e.target.value)}
                      placeholder="code-arena"
                      className="w-full bg-transparent text-ink font-code-sm text-code-sm ml-1 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="proj-desc"
                    className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                  >
                    Executive Abstract / Description *
                  </label>
                  <textarea
                    id="proj-desc"
                    rows={4}
                    required
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    placeholder="Technical overview of architecture, problem solved, and stack..."
                    className="w-full bg-background border border-border rounded-[2px] p-space-3 text-ink font-body-sm text-body-sm focus:outline-none focus:border-pine resize-y"
                  />
                </div>

                {/* Tech Stack Tokens */}
                <div className="flex flex-col gap-1">
                  <label className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider">
                    Tech Stack (Press Enter to add tag)
                  </label>
                  <div className="p-space-2 bg-background border border-border rounded-[2px] flex flex-wrap gap-space-2 focus-within:border-pine min-h-[44px]">
                    {formTechStack.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-surface border border-border px-space-2 py-0.5 rounded-[2px] font-code-sm text-code-sm text-ink"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-ink-muted hover:text-error ml-1"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={newTagInput}
                      onChange={(e) => setNewTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="Add tag + Enter..."
                      className="bg-transparent font-code-sm text-code-sm text-ink focus:outline-none min-w-[120px] px-1"
                    />
                  </div>
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="proj-live"
                      className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                    >
                      Production Live URL
                    </label>
                    <input
                      id="proj-live"
                      type="url"
                      value={formLiveUrl}
                      onChange={(e) => setFormLiveUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full bg-background border border-border rounded-[2px] px-space-3 py-space-2 text-ink font-code-sm text-code-sm focus:outline-none focus:border-pine"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="proj-github"
                      className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                    >
                      GitHub Repository URL
                    </label>
                    <input
                      id="proj-github"
                      type="url"
                      value={formGithubUrl}
                      onChange={(e) => setFormGithubUrl(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full bg-background border border-border rounded-[2px] px-space-3 py-space-2 text-ink font-code-sm text-code-sm focus:outline-none focus:border-pine"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="proj-img"
                    className="font-code-sm text-code-sm text-ink-muted uppercase tracking-wider"
                  >
                    Image Asset URL
                  </label>
                  <input
                    id="proj-img"
                    type="url"
                    value={formImageUrl}
                    onChange={(e) => setFormImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-background border border-border rounded-[2px] px-space-3 py-space-2 text-ink font-code-sm text-code-sm focus:outline-none focus:border-pine"
                  />
                  {formImageUrl && (
                    <div className="mt-2 border border-border h-24 overflow-hidden rounded-[2px] bg-background">
                      <img
                        src={formImageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Featured & Status Checkboxes */}
                <div className="flex flex-col gap-2 pt-2 pb-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formFeatured}
                      onChange={(e) => setFormFeatured(e.target.checked)}
                      className="w-4 h-4 rounded-[0px] border-border text-pine accent-pine cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-medium text-ink">
                        Promote to Featured Project (Copper Badge)
                      </span>
                      <span className="font-code-sm text-[11px] text-ink-muted">
                        Highlights this project prominently on the homepage
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer select-none mt-2">
                    <input
                      type="checkbox"
                      checked={formStatus === 'published'}
                      onChange={(e) => setFormStatus(e.target.checked ? 'published' : 'draft')}
                      className="w-4 h-4 rounded-[0px] border-border text-pine accent-pine cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-medium text-ink">
                        Published State
                      </span>
                      <span className="font-code-sm text-[11px] text-ink-muted">
                        When checked, this project is immediately live on the public site
                      </span>
                    </div>
                  </label>
                </div>
              </form>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-space-4 border-t border-border flex items-center justify-between gap-space-4 mt-6">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="px-space-4 py-space-2 bg-transparent hover:bg-surface-container text-ink font-code-md text-code-md rounded-[2px] border border-border transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="project-form"
                disabled={isSaving}
                className="px-space-6 py-space-2 bg-pine text-[#F1F2EC] hover:bg-primary font-code-md text-code-md font-medium rounded-[2px] transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSaving ? 'Saving Record...' : editingProject ? 'Update Project' : 'Publish Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
