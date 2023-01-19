import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Album = () => {
  const data = useLoaderData();
  const [url, setURL] = useState(null);
  const preview = (url) => setURL(url);

  return (
    <div className="container">
      <div className="flex items-start justify-between">
        <h2 class="text-stone-800 mb-4 m-2">Images</h2>
        <Link to={"/"} class="text-stone-800 mb-4 m-2 cursor-pointer">
          Back
        </Link>
      </div>

      <div className="flex items-start">
        <motion.div layout>
          {data.map((dt) => (
            <motion.img
              className="inline-block m-2 w-32 h-32  cursor-pointer"
              layout
              src={dt.thumbnailUrl}
              alt={dt.title}
              onClick={() => preview(dt.url)}
            />
          ))}
        </motion.div>
        <div className="inline-block m-2 w-72 h-72 shrink-0 sticky top-4">
          {url ? (
            <img
              className="inline-block w-full h-full "
              src={url}
              alt="Preview"
            />
          ) : (
            <p className="inline-block w-full h-full">
              Please selects an image
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Album;
