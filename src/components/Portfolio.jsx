import React from "react";
import portfolio from "../assets/portfolio/portfolio-app.png";
import blog from "../assets/portfolio/blog-app.png";
import todolist from "../assets/portfolio/todolist-app.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      demo: "https://dulcet-valkyrie-83eefb.netlify.app/",
      href: "https://github.com/priyansh0111/portfolio-react",
      style: "",
    },
    {
      id: 2,
      src: blog,
      demo: "",
      href: "https://github.com/priyansh0111/Blog-Application",
      style: "line-through",
    },
    {
      id: 3,
      src: todolist,
      demo: "",
      href: "https://github.com/priyansh0111/ToDoList",
      style: "line-through",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black via-black to-gray-800 w-full text-white py-12 h-full"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
       w-full h-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  
      px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, demo, href, style}) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex item-center justify-center">
                  <a className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${style}`} href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={href} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
