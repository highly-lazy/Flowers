import { Carousel } from 'antd';
import './style.scss'
import arrowRight from '../../../assets/icons/arrow.svg'

const carousel = () => {
    return (
      <Carousel autoplay>
        <div className="carousel mt-[100px]  w-full h-auto px-[80px] py-[43px]">
          <h3>40% OFF</h3>
          <p className=" mt-[10px] mb-6">
            Best deals this week. Fresh flowers, plants and gifts
          </p>
          <button className="p-4 rounded-lg bg-black flex items-center gap-3 text-white text-sm  hover:bg-blue-500">
            Shop now
            <img src={arrowRight} alt="Arrow right icon" />
          </button>
        </div>
        <div className="carousel mt-9 w-full h-auto px-[80px] py-[43px]">
          <h3>40% OFF</h3>
          <p className=" mt-[10px] mb-6">
            Best deals this week. Fresh flowers, plants and gifts
          </p>
          <button className="p-4 rounded-lg bg-black flex items-center gap-3 text-white text-sm  hover:bg-blue-500">
            Shop now
            <img src={arrowRight} alt="Arrow right icon" />
          </button>
        </div>
        <div className="carousel mt-9 w-full h-auto px-[80px] py-[43px]">
          <h3>40% OFF</h3>
          <p className=" mt-[10px] mb-6">
            Best deals this week. Fresh flowers, plants and gifts
          </p>
          <button className="p-4 rounded-lg bg-black flex items-center gap-3 text-white text-sm  hover:bg-blue-500">
            Shop now
            <img src={arrowRight} alt="Arrow right icon" />
          </button>
        </div>
        <div className="carousel mt-9 w-full h-auto px-[80px] py-[43px]">
          <h3>40% OFF</h3>
          <p className=" mt-[10px] mb-6">
            Best deals this week. Fresh flowers, plants and gifts
          </p>
          <button className="p-4 rounded-lg bg-black flex items-center gap-3 text-white text-sm  hover:bg-blue-500">
            Shop now
            <img src={arrowRight} alt="Arrow right icon" />
          </button>
        </div>
      </Carousel>
    );
};

export default carousel;
