import { useEffect } from 'react';
import banner from '../../src/assets/Media/Rectangle 5.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        Aos.init(); 
      }, []); 
    return (
        <div data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">

<div className="relative h-[470px] w-[1150px] mx-auto my-[27px]">
            <img className='rounded-3xl w-full h-full object-cover' src={banner} alt="" />
            <div className='absolute mx-auto inset-0 bg-sky-300 opacity-20 rounded-3xl'>


</div>
        </div>

        </div>
    );
};

export default Banner;