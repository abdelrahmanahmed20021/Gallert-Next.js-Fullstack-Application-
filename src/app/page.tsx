"use client";
import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

import CreateImage from "@/components/CreateImage";
import ImageCard from "@/components/ImageCard";

const GState = createContext<any>({});

export default function Home() {
  const [data, setData] = useState({ data: [], loader: false });

  useEffect(() => {
    const getData = async () => {
      try {
        setData((prev: any) => ({ ...prev, loader: true }));
        const req = await axios.get("http://localhost:3000/api/getImages");
        const data = req.data;
        setData((prev: any) => ({ data, loader: false }));
      } catch (e: any) {
        throw new Error(e);
      }
    };

    getData();
  }, []);

  return (
    <GState.Provider value={{ setData }}>
      <CreateImage />
      {data.data.length > 0 && (
        <div className="flex gap-[30px] p-5 flex-wrap">
          {data.data.map((data: any) => (
            <ImageCard
              key={data.id}
              src={data.src}
              name={data.fileName}
              author={data.name}
            />
          ))}
        </div>
      )}
    </GState.Provider>
  );
}

export const useGState = () => {
  return useContext(GState);
};
