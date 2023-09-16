"use client";
import {
  createContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import CreateImage from '@/components/CreateImage';
import ImageCard from '@/components/ImageCard';
import { Spinner } from '@nextui-org/react';

type contextProps = {
  data: {
    data: [];
    loader: boolean;
  };
  setData: (data: any) => void;
};

export const GState = createContext<contextProps>({
  data: { data: [], loader: false },
  setData: () => null,
});

export default function Home() {
  const [data, setData] = useState<any>({ data: [], loader: false });

  useEffect(() => {
    const getData = async () => {
      try {
        setData((prev: any) => ({ ...prev, loader: true }));
        const req = await axios.get("https://gallery-eta-five.vercel.app/api/getImages");
        const data = req.data;
        setData((prev: any) => ({ data, loader: false }));
      } catch (e: any) {
        throw new Error(e);
      }
    };

    getData();
  }, []);

  return (
    <GState.Provider value={{ setData, data }}>
      <CreateImage />
      {data.data.length > 0 ? (
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            gap: "30px",
            padding: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {data.data.map((data: any, index: number) => (
            <ImageCard
              key={data.id}
              src={data.src}
              name={data.fileName}
              author={data.name}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Spinner />
        </div>
      )}
    </GState.Provider>
  );
}
