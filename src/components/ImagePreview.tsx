import React from "react";

import Image from "next/legacy/image";

import { Card } from "@nextui-org/react";

export default function ImagePreview({
  src,
  name,
  author,
}: {
  src: string;
  name: string;
  author: string;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none rounded-none  w-[100%] h-[400px]  bg-gray-900  transition-[all .3s ease] cursor-pointer"
    >
      <Image
        alt={name}
        className="object-cover w-[300px] h-[300px]"
        src={src}
        objectFit="cover"
        placeholder="blur"
        layout="fill"
        blurDataURL={src}
      />
      {/* <p className="text-tiny w-full flex items-end justify-end text-white/80">
          <span>{author}</span>
        </p> */}
    </Card>
  );
}
