import type { OurFileRouter } from '@/app/api/uploadcore/route';
import { generateComponents } from '@uploadthing/react';

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();