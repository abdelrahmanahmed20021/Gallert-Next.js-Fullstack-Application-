import React from "react";

import { Card, CardFooter, Image } from "@nextui-org/react";

export default function ImageCard({
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
      className="border-none hover:scale-75 bg-gray-900  transition-[all .3s ease] cursor-pointer"
    >
      <Image
        alt={name}
        className="object-cover w-[300px] h-[300px]"
        src={src}
      />
      <CardFooter className="justify-center  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{author}</p>
      </CardFooter>
    </Card>
  );
}
