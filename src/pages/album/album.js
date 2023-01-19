import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Album = () => {
  const data = useLoaderData();
  const [url, setURL] = useState(null);
  const preview = (url) => setURL(url);

  return (
    <div className="container max-w-[900px] px-4">
      <div className="flex items-start justify-between  bg-white">
        <h2 class="text-stone-800 mb-4 my-3">Images</h2>
        <Link
          to={"/"}
          class=" text-stone-800 mb-4 my-3 cursor-pointer hover:underline"
        >
          Back
        </Link>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-start">
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full"
        >
          {data.map((dt, i) => (
            <motion.div key={i} layout>
              <img
                className="transition-all hover:scale-105 hover:z-10 w-full cursor-pointer "
                src={dt.thumbnailUrl}
                alt={dt.title}
                onClick={() => preview(dt.url)}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="inline-block md:ml-4 md:w-72 w-full h-56 md:h-auto md:aspect-square shrink-0 sticky md:top-4 top-0 bg-white  pb-4">
          <div className="w-52 md:w-full h-full">
            {url ? (
              <img className="inline-block" src={url} alt="Preview" />
            ) : (
              <p className="w-full h-full bg-gray-300 flex items-center justify-center">
                Please select an image
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
