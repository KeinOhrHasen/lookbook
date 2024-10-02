export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/settings', '/albums', '/grids', '/grids/new', '/upload', '/chat', '/sessions'],
};
