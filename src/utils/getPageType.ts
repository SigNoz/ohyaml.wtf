export const getPageType = (pathname: string): string => {
  // Since this is a single-page app, we determine page type based on the virtual path
  if (!pathname || pathname === '/') return 'landing'
  
  if (pathname.startsWith('/question/')) return 'quiz'
  if (pathname === '/score') return 'results'
  
  return 'other'
}