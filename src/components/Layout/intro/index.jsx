import Carousel from "../../UI/Carousel"
import './style.scss'
import arrowRight from "../../../assets/icons/arrowblack.svg"

const index = () => {
    return (
        <section>
            <div className="container">

                <Carousel />
                <div className="flex gap-x-[80px]">
                    <div className='right mt-9 w-full h-auto px-[80px] py-[43px]'>
                        <h3 className='text-[28px] font-medium'>
                            Nice little gifts
                        </h3>
                        <p className='text-[18px] mt-[10px] mb-6 leading-4'>
                            for loved ones
                        </p>
                        <button className=" font-medium flex items-center gap-3 text-black text-sm ">
                            View now <img src={arrowRight} alt="Arrow right icon" className="text-black" ></img>
                        </button>


                    </div>

                    <div className='left mt-9 w-full h-auto px-[80px] py-[43px]'>
                        <h3 className='text-[28px] font-medium'>
                        Plants
                        </h3>
                        <p className='text-[18px] mt-[10px] mb-6 leading-4'>
                        for home comfort
                        </p>
                        <button className=" font-medium flex items-center gap-3 text-black text-sm ">
                            View now <img src={arrowRight} alt="Arrow right icon" className="text-black" ></img>
                        </button>


                    </div>
                </div>

            </div>

        </section>
    );
};

export default index;
