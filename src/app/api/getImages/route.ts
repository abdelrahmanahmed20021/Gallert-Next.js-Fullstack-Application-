import prisma from '../../../../utils';

export const GET = async () => {
    const req = await prisma.image.findMany({});

   return new Response(JSON.stringify(req));
}