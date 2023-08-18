import React from "react";
import data from "../../../db"; 
import './style.scss'
function CardComponent() {
    const firstFourItems = data.flowers.slice(0, 4);
    const remainingItems = data.flowers.slice(4);
    return (
      <section className="section1">
        <div className="container">
          <h2 className="decoration-blue  mt-10 cursor-pointer hover:text-blue-500 hover:underline">
            New
          </h2>
          <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
            {firstFourItems.map((item) => (
              <div
                key={item.id}
                className="bg-white items-center text-center  mt-[50px] "
              >
                <img src={item.img} alt={item.title} className="w-full mb-4" />
                <p className=" title mb-2">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="decoration-blue  mt-10 cursor-pointer hover:text-blue-500 hover:underline mt-[80px]">
            Relevant
          </h2>

          <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
            {remainingItems.map((item) => (
              <div
                key={item.id}
                className="bg-white items-center text-center  mt-[50px] "
              >
                <img src={item.img} alt={item.title} className="w-full mb-4" />
                <p className=" title mb-2">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default CardComponent

