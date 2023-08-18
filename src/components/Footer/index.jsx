import React from "react";
import { useState } from "react";
import "./style.scss";
import instagram from '../../assets/icons/instagram.svg'
import whatsup from '../../assets/icons/wassup.svg'
import facebook from '../../assets/icons/facebook.svg'


const index = () => {
    return (
      <footer className="bg-[#F9F9FB] mt-[100px]">
        <div className="container">
          <div className="h-[356px] pt-[58px]">
            <div className="top h-[228px] border-b border-b-[#AFB1BD] border-opacity-[0.199] flex">
              <div className="one mr-[231px]">
                <h1 className="text-decoration-line:underline hover:text-blue-500 cursor-pointer">
                  Title
                </h1>
                <p className="mt-[18px] mb-[17px] hover:scale-110 hover:text-blue-500 cursor-pointer">
                  +998991234567
                </p>
                <div className="flex gap-[20px] items-center justify-between max-w-[112px]">
                  <img src={instagram} className="hover:scale-125" />
                  <img src={whatsup} className="hover:scale-125" />
                  <img src={facebook} className="hover:scale-125" />
                </div>
              </div>
              <div className="two mr-[171px]">
                <ul className="flex flex-col gap-y-3">
                  <h1 className="text-decoration-line:underline hover:text-blue-500 cursor-pointer">
                    Help
                  </h1>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Delivery information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Payment information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Customer service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="three mr-[232px]">
                <ul className="flex flex-col gap-y-3">
                  <h1 className="text-decoration-line:underline hover:text-blue-500 cursor-pointer">
                    About us
                  </h1>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Our Stores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Flower care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Site map
                    </a>
                  </li>
                </ul>
              </div>
              <div className="four">
                <ul className="flex flex-col gap-y-3">
                  <h1 className="text-decoration-line:underline hover:text-blue-500 cursor-pointer">
                    Legal
                  </h1>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Cookie policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Item 4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:scale-110 hover:text-blue-500 cursor-pointer"
                    >
                      Item 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-[20px] hover:scale-110 cursor-pointer absolute hover:underline hover:text-blue-600 text-[#AFB1BD]">
              © Copyright, SERIUS{" "}
            </p>
          </div>
        </div>
      </footer>
    );
};

export default index;




