import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Album = () => {
  const data = useLoaderData();
  const [url, setURL] = useState(null);
  const preview = (url) => setURL(url);

  return (
    <div className="container max-w-[900px]">
      <div className="flex items-start justify-between">
        <h2 class="text-stone-800 mb-4 my-3">Images</h2>
        <Link to={"/"} class="text-stone-800 mb-4 my-3 cursor-pointer">
          Back
        </Link>
      </div>

      <div className="flex items-start">
        <motion.div layout className="grid grid-cols-4 gap-4">
          {data.map((dt) => (
            <motion.div layout>
              <img
                className="transition-all hover:scale-105 hover:z-10 w-32 cursor-pointer "
                src={dt.thumbnailUrl}
                alt={dt.title}
                onClick={() => preview(dt.url)}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="inline-block ml-auto w-72 h-72 shrink-0 sticky top-4">
          {url ? (
            <img
              className="inline-block w-full h-full "
              src={url}
              alt="Preview"
            />
          ) : (
            <p className="w-full h-full bg-gray-300 flex items-center justify-center">
              Please selects an image
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Album;
