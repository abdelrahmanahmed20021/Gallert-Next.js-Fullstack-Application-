import React, { useContext, useRef } from "react";

import Slider from "react-slick";

import { GState } from "@/app/page";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";

import ImagePreview from "./ImagePreview";

export default function ImageSlider({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useContext(GState);
  const sliderRef = useRef<null | Slider>(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Button
        className="bg-slate-900 min-w-[50px] p-0 z-10 max-h-[30px]  rounded-[30px] flex items-center justify-center"
        onPress={() => {
          onOpen();
          setTimeout(() => {
            sliderRef.current?.slickGoTo(index);
          }, 0);
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="sm:max-w-[500px] bg-gray-900 sm:rounded-md rounded-none max-w-[100%]   h-max p-10 overflow-hidden">
          {(onClose) => (
            <Slider {...settings} ref={sliderRef} autoplay={true}>
              {data.data.length > 0 &&
                data.data.map((data: any) => (
                  <ImagePreview
                    key={data.id}
                    src={data.src}
                    name={data.fileName}
                    author={data.name}
                  />
                ))}
            </Slider>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
