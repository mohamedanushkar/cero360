import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Albums = () => {
  const data = useLoaderData();

  return (
    <div className="container max-w-[900px] px-4">
      <h2 class="text-stone-800 mb-4 my-3">Albums</h2>
      <ul>
        {data.map((dt, i) => (
          <li key={i} className="my-2 hover:underline">
            <Link to={`/${dt.id}`}>Album{i + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
