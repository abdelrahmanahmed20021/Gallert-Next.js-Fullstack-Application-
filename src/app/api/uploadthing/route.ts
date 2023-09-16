import { createNextRouteHandler } from 'uploadthing/next';

import { ourFileRouter } from '../uploadcore/route';

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});