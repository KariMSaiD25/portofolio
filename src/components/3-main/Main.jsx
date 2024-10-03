import { useState } from "react";
import "./main.css";
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
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurerentActive("all");
            setArr(projects);
          }}
          className={currentActive == "all" ? "active" : null}
        >
          all projests
        </button>
        <button
          onClick={() => {
            
            handleClick("css");
          }}
          className={currentActive == "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive == "js" ? "active" : null}
        >
          javscript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive == "react" ? "active" : null}
        >
          react & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive == "node" ? "active" : null}
        >
          Node & express
        </button>
      </section>

      <section className="right-section flex">
      <AnimatePresence>

    
        {currentArr.map((item) => {
          return (
            <motion.article key={item.imgPath} className=" flex"
            layout
            initial={{transform:'scale(0)'}}
            animate={{transform:'scale(1 )'}}
            transition={{damping: 10  , type:'spring' , stiffness:50}}
            >
              <div className="card">
                <img src={item.imgPath} width={266} alt="" />
                <div style={{ width: "266px" }} className="box ">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, dolorum repudiandae sit eos expedita
                  </p>
                  <div className="card-links flex">
                    <div className="flex ">
                      <div className="icon-link"></div>
                      <div className="icon-github-square"></div>
                    </div>
                    <a className="link flex" href="">
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
