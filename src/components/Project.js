import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8 relative overflow-hidden group">
        <img className="rounded-2xl" src={item.image} alt="prj_img" />
        <div className="absolute inset-0 font-medium flex items-center justify-center bg-accent text-white text-center opacity-0 transform -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-2xl p-5 text-lg">
          {item.description}
        </div>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-accent transition-colors"
        >
          {item.name}
        </a>
      </h3>
    </div>
  );
};

export default Project;
