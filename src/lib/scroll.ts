export function scrollToSection(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

export function scrollToTop(): boolean {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return true;
}