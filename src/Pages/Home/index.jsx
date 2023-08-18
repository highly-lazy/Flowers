import React from 'react';
import Introflower from "../../components/Introflower"

import data from "../../db"; 
import './style.scss'

const Flowers = () => {
  const firstFourItems = data.flowers.slice(0, 4);
  const remainingItems = data.flowers.slice(4);
  return (
    <div>
      <div className="container">
      
      </div>

      <Introflower />
      <div className="container">
            
            <h4 className="decoration-black text-2xl font-medium mt-10">New</h4>
            <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
                {firstFourItems.map(item => (
                    <div key={item.id} className="bg-white items-center text-center  mt-[50px] ">

                        <img src={item.img} alt={item.title} className="w-full mb-2" />
                        <h2 className="text-lg font-medium  mb-2">{item.title}</h2>
                        <p className="text-sm font-medium ">{item.text}</p>
                    </div>
                ))}
            </div>

            <h4 className="decoration-black text-2xl font-medium mt-[80px]">Title</h4>
              
            <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
                {remainingItems.map(item => (
                    <div key={item.id} className="bg-white items-center text-center  mt-[50px] ">

                        <img src={item.img} alt={item.title} className="w-full mb-2" />
                        <h2 className="text-lg font-medium  mb-2">{item.title}</h2>
                        <p className="text-sm font-medium ">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Flowers;