import React from "react";

import Image from "next/legacy/image";
import { AiFillEye } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

import { Button, Card, CardFooter } from "@nextui-org/react";

import ImageSlider from "./ImageSlider";

export default function ImageCard({
  src,
  name,
  author,
  index,
}: {
  src: string;
  name: string;
  author: string;
  index: number;
}) {
  const icons = [
    {
      label: "preview",

      icon: <AiFillEye color="lightblue" />,
    },
    {
      label: "edit",

      icon: <FcEditImage />,
    },
    {
      label: "delete",

      icon: <MdDelete color="red" />,
    },
  ];

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none  w-[200px] h-[200px]  bg-gray-900  transition-[all .3s ease] cursor-pointer"
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
      <CardFooter className="justify-center flex-col gap-[7px] items-start  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className=" flex gap-[10px] items-center">
          {icons.map((icon: any) =>
            icon.label == "preview" ? (
              <ImageSlider key={icon.label} index={index}>
                {icon.icon}
              </ImageSlider>
            ) : (
              <Button
                key={icon.label}
                className="bg-slate-900 min-w-[50px] p-0 z-10 max-h-[30px]  rounded-[30px] flex items-center justify-center"
              >
                {icon.icon}
              </Button>
            )
          )}
        </div>
        <p className="text-tiny w-full flex items-end justify-end text-white/80">
          <span>{author}</span>
        </p>
      </CardFooter>
    </Card>
  );
}
