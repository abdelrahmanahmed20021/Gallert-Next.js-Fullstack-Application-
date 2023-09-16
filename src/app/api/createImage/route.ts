import {
  NextRequest,
  NextResponse,
} from 'next/server';

import prisma from '../../../../utils';

export const POST = async (req:NextRequest) => {
    const {src,name,fileName} = await req.json();
    
    const data = await prisma.image.create({
      data:{
        name,
        src,
        fileName
      }
    })


    return new NextResponse(JSON.stringify(data))
}