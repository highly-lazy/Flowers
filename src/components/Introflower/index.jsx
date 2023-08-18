import { Carousel } from 'antd';
import React from 'react';
import arrowRight from '../../assets/icons/arrow.svg'
import './style.scss'
const intro = () => {
    return (
      <section>
        <div className="container">
          <Carousel autoplay>
            <div className="carousel  mt-[150px]  w-full h-[482px] px-[80px] py-[43px]">
              <h3 className="mt-[120px] ">Title</h3>
              <p className=" mt-[10px] mb-2">Description</p>
              <button className="w-[138px] h-[50px] rounded-md bg-black mt-[60px] p-5 flex items-center gap-3 text-white text-sm   hover:bg-blue-500">
                Button
                <img src={arrowRight} alt="Arrow right icon" />
              </button>
            </div>

            <div className="carousel  mt-9   w-full h-[482px] px-[80px] py-[43px]">
              <h3 className="mt-[120px] ">Title</h3>
              <p className=" mt-[10px] mb-2">Description</p>
              <button className="w-[138px] h-[50px] rounded-md bg-black mt-[60px] p-5 flex items-center gap-3 text-white text-sm   hover:bg-blue-500">
                Button
                <img src={arrowRight} alt="Arrow right icon" />
              </button>
            </div>

            <div className="carousel  mt-9   w-full h-[482px] px-[80px] py-[43px]">
              <h3 className=" text-black mt-[120px] ">Title</h3>
              <p className=" mt-[10px] mb-2">Description</p>
              <button className="w-[138px] h-[50px] rounded-md bg-black mt-[60px] p-5 flex items-center gap-3 text-white text-sm   hover:bg-blue-500">
                Button
                <img src={arrowRight} alt="Arrow right icon" />
              </button>
            </div>
          </Carousel>
        </div>
      </section>
    );
};

export default intro;