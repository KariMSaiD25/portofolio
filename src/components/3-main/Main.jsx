import { useState } from "react";
import { projects } from "./mainProjects";
import{ motion, AnimatePresence } from "framer-motion";


export default function Main() {
  const [currentActive, setCurerentActive] = useState("all");
  const [currentArr, setArr] = useState(projects);

  const handleClick = (buttonCategory) => {
    setCurerentActive(buttonCategory);
    const newArr = projects.filter((item) => {
      const myItem = item.category.find((item) => {
        return item == buttonCategory;
      });
      return myItem== buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex items-start gap-10 max-[930px]:flex-col max-[930px]:items-center">
      <section className="flex flex-col gap-3">
        <button
          onClick={() => {
            setCurerentActive("all");
            setArr(projects);
          }}
          className={`bg-[rgb(36,37,46)] py-3 w-44 text-center capitalize opacity-50 rounded-md text-base transition-all duration-300 hover:opacity-100 hover:text-[1.06rem] ${currentActive == "all" ? "!border !border-accent-blue !opacity-100 !font-bold dark:!border-black" : ""}`}
        >
          all projests
        </button>
        <button
          onClick={() => {
            
            handleClick("css");
          }}
          className={`bg-[rgb(36,37,46)] py-3 w-44 text-center capitalize opacity-50 rounded-md text-base transition-all duration-300 hover:opacity-100 hover:text-[1.06rem] ${currentActive == "css" ? "!border !border-accent-blue !opacity-100 !font-bold dark:!border-black" : ""}`}
        >
          html & css
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={`bg-[rgb(36,37,46)] py-3 w-44 text-center capitalize opacity-50 rounded-md text-base transition-all duration-300 hover:opacity-100 hover:text-[1.06rem] ${currentActive == "js" ? "!border !border-accent-blue !opacity-100 !font-bold dark:!border-black" : ""}`}
        >
          javscript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={`bg-[rgb(36,37,46)] py-3 w-44 text-center capitalize opacity-50 rounded-md text-base transition-all duration-300 hover:opacity-100 hover:text-[1.06rem] ${currentActive == "react" ? "!border !border-accent-blue !opacity-100 !font-bold dark:!border-black" : ""}`}
        >
          react & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={`bg-[rgb(36,37,46)] py-3 w-44 text-center capitalize opacity-50 rounded-md text-base transition-all duration-300 hover:opacity-100 hover:text-[1.06rem] ${currentActive == "node" ? "!border !border-accent-blue !opacity-100 !font-bold dark:!border-black" : ""}`}
        >
          Node & express
        </button>
      </section>

      <section className="flex flex-wrap mx-auto gap-x-4 gap-y-8 justify-center max-[930px]:flex-row max-[930px]:flex-wrap max-[930px]:justify-center">
      <AnimatePresence>

    
        {currentArr.map((item) => {
          return (
            <motion.article key={item.imgPath} className="flex"
            layout
            initial={{transform:'scale(0)'}}
            animate={{transform:'scale(1 )'}}
            transition={{damping: 10  , type:'spring' , stiffness:50}}
            >
              <div className="shadow-[1px_1px_1px_rgba(0,0,0,0.16)] border border-accent-blue/30 rounded-md transition-all duration-300 bg-gradient-to-b from-white/5 to-white/5 hover:border-accent-blue hover:rotate-1 hover:scale-[1.01] hover:cursor-pointer dark:border-0 dark:hover:bg-[rgba(246,246,246,1)]">
                <img src={item.imgPath} width={266} alt="" className="rounded-md" />
                <div style={{ width: "266px" }} className="p-4 px-2">
                  <h1 className="text-zinc-100 dark:text-zinc-800 capitalize">{item.title}</h1>
                  <p className="leading-5 text-gray-400 dark:text-gray-600 mt-3 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, dolorum repudiandae sit eos expedita
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="icon-link text-gray-400 dark:text-gray-600 text-xl mr-3 transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:text-2xl hover:cursor-pointer"></div>
                      <div className="icon-github-square text-gray-400 dark:text-gray-600 text-xl mr-3 transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:text-2xl hover:cursor-pointer"></div>
                    </div>
                    <a className="flex items-center text-accent-blue dark:text-accent-blue-light transition-all duration-300 mr-2 hover:text-[1.01rem]" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
          </AnimatePresence>
      </section>
    </main>
  );
}
