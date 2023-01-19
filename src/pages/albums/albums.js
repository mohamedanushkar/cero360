import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Albums = () => {
  const data = useLoaderData();

  return (
    <div className="container">
      <h2 class="text-stone-800 mb-4">Albums</h2>
      <ul>
        {data.map((dt) => (
          <li>
            <Link to={`/${dt.id}`}>{dt.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
