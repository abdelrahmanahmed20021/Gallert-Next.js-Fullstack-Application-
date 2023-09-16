import type { OurFileRouter } from '@/app/api/uploadcore/route';
import { generateReactHelpers } from '@uploadthing/react/hooks';

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();