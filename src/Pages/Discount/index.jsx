import React, { useState } from "react";
import red_tulips from "../../assets/photo.png";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import plus2 from "../../assets/icons/plus2.svg";
import savat from "../../assets/icons/savat.svg";
import arrow_black from "../../assets/icons/arrow-black.svg";
import arrow_grey from "../../assets/icons/arrow-grey.svg";

import "./style.scss";
import data from "../../db";
import Card from "../../components/UI/Card";
const { newFlowers } = data;
import { Collapse } from "antd";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const text = ` 
    Happiness lies in the joy of achievement and the thrill of creative effort.

    Franklin D. Roosevelt 
`;
const items = [
  {
    key: "1",
    label: "Bouquet contents",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Details",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Delivery & Pay policy",
    children: <p>{text}</p>,
  },
];

const index = () => {
  const [counter, setCounter] = useState(0);
  const firstFourItems = data.flowers.slice(0, 4);

  return (
    <section className="link">
      <div className="container">
        <Breadcrumb
          className="crumb"
          items={[
            {
              title: <NavLink to="/">Home</NavLink>,
            },
            {
              title: <NavLink to="/Discounts">Discounts</NavLink>,
            },
          ]}
        />
        <div className="rose flex gap-[72px] mt-[134px]">
          <div className="rose mt-[50px] ">
            <img src={red_tulips} alt="" />

            <div className="flex gap-[40px] mt-[20px]">
              <div className="flex w-[142px] gap-[10px] items-center justify-center">
                <img src={icon1} alt="" />
                <p>Benefits description</p>
              </div>

              <div className="flex w-[142px] gap-[10px] items-center justify-center">
                <img src={icon2} alt="" />
                <p>Always fresh flowers</p>
              </div>

              <div className="flex w-[142px] gap-[10px] items-center justify-center">
                <img src={icon3} alt="" />
                <p>Take photo of bouquet</p>
              </div>
            </div>
          </div>

          <div className="red-right mt-[50px]">
            <h2 className=" mb-[20px]">Red Tulips</h2>

            <div className="flex items-center gap-[20px] mb-[15px]">
              <p>46 $</p>
              <p className="text-[#82828B]">60 $</p>
            </div>

            <div className="throughline mb-[40px]"></div>

            <p className="mb-[25px]">Count:</p>

            <div className="flex gap-7 mb-[42px] w-[30px]">
              <img
                onClick={() => setCounter((counter) => counter + 1)}
                className="cursor-pointer"
                src={plus}
                alt=""
              />
              <p className="w-[20px]">{counter}</p>
              <img
                onClick={() => setCounter((counter) => counter - 1)}
                className="cursor-pointer"
                src={minus}
                alt=""
              />
            </div>

            <p className="mb-[20px]">Color:</p>

            <div className="flex gap-[20px] mb-[54px]">
              <div className="grey w-[36px] h-[36px] bg-[#F0F0F5] rounded-full cursor-pointer focus:border-2 focus:border-blue-700"></div>

              <div className="grey w-[36px] h-[36px] bg-[#EE7764] rounded-full cursor-pointer focus:border-2 focus:border-blue-700"></div>

              <div className="grey w-[36px] h-[36px] bg-[#FFBC2C] rounded-full cursor-pointer focus:border-2 focus:border-blue-700"></div>
            </div>

            <div className="flex gap-5 mb-[40px]">
              <button className="bg-[#595CFF] w-[309px] py-[16px] text-white rounded-md hover:bg-green-500">
                Button
              </button>

              <img src={savat} alt="" />
            </div>
            <Collapse className="max-w-[515px]" accordion items={items} />
          </div>
        </div>

        <div className="pass mt-[160px]">
          <div className="flex justify-between mb-[40px]">
            <p className="flower">Similar flowers</p>

            <div className="flex">
              <img src={arrow_grey} alt="arrow" />
              <img src={arrow_black} alt="" />
            </div>
          </div>

          <div className="flex justify-between">
            {newFlowers?.map((item, index) => {
              return <Card state={item} key={index} />;
            })}
          </div>
        </div>

        <div className=" w-full flex flex-wrap gap-x-[65x] mb-[200px] justify-between">
          {firstFourItems.map((item) => (
            <div
              key={item.id}
              className="bg-white items-center text-center  mt-[50px] "
            >
              <img src={item.img} alt={item.title} className="w-full mb-2" />
              <h2 className=" mb-2">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
