"use client";
import "@uploadthing/react/styles.css";

import React, { useRef, useState } from "react";

import { cn } from "@/utils/cn";
import { useUploadThing } from "@/utils/useUploadThings";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import Alret from "./Alret";
import CardPrview from "./Cardprview";

type initData = {
  img: null | string;
  file: null | File;
  loader: boolean;
  status: "done" | "pending";
  validationState: boolean;
  imgValidationState: boolean;
  photoName: null | string;
};

const initData: initData = {
  img: null,
  file: null,
  loader: false,
  status: "pending",
  validationState: true,
  imgValidationState: true,
  photoName: null,
};

export default function CreateImage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [initState, setState] = useState(initData);
  const photoNameInput = useRef<any>(null);
  const { startUpload } = useUploadThing("mediaPost", {
    onUploadBegin: (e) => {},
    onClientUploadComplete(res) {
      setState(initData);
      setTimeout(() => {
        setState((prev: any) => ({ ...prev, status: "pennding" }));
      }, 4000);
    },
    onUploadError(e: any) {
      setState(initData);
      alert(e);
      throw new Error(e);
    },
  });
  const selectFile = ({ target }: { target: any }) => {
    const file = target.files?.[0];
    if (!file) return;

    const img = URL.createObjectURL(file);
    setState((prev: any) => ({ ...prev, img, file }));
  };

  const uploadImage = () => {
    if (!initState.file) {
      setState((prev: any) => ({ ...prev, imgValidationState: false }));
      return;
    } else if (!initState.photoName) {
      setState((prev: any) => ({ ...prev, setValidationState: false }));

      if (photoNameInput.current) {
        photoNameInput?.current.focus();
      }
      return;
    }
    setState((prev: any) => ({
      ...prev,
      setValidationState: true,
      loader: true,
    }));
    startUpload([initState.file]);
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="fixed bottom-5 right-5 font-[600] bg-slate-900 text-white"
      >
        ADD Photo
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Photo
              </ModalHeader>
              <ModalBody>
                {initState.img && initState.loader && (
                  <CardPrview src={initState.img} status={true} />
                )}
                {status == "done" && (
                  <Alret message="Photo Uploaded" slug={"successfully"} />
                )}
                <label
                  htmlFor="photoInput"
                  className={cn(
                    "bg-slate-400/5 rounded-md flex  max-h-[300px] justify-center overflow-auto items-center min-h-[100px] w-full h-[100%] border-dashed border-[1px] border-danger-900",
                    !initState.imgValidationState &&
                      "border-danger-400 bg-danger-500/10 text-danger-900",
                    initState.img && "justify-start items-start"
                  )}
                >
                  {!initState.img && "Select Photo"}
                  {initState.img && (
                    <img
                      src={initState.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </label>
                <input
                  type="file"
                  id="photoInput"
                  onChange={selectFile}
                  accept="image/*"
                  style={{
                    display: "none",
                    visibility: "hidden",
                    overflow: "hidden",
                  }}
                />

                <Input
                  type="text"
                  label="Photo name"
                  variant="flat"
                  value={initState.photoName ? initState.photoName : ""}
                  onChange={(e: any) => {
                    setState((prev: any) => ({
                      ...prev,
                      photoName: e.target.value,
                      validationState: true,
                    }));
                  }}
                  ref={photoNameInput}
                  color={!initState.validationState ? "danger" : "default"}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancle
                </Button>
                <Button
                  isLoading={initState.loader}
                  onClick={uploadImage}
                  color="primary"
                >
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
