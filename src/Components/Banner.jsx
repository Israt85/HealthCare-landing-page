import banner from '../../src/assets/Media/Rectangle 5.png'

const Banner = () => {
    return (
        <div className="relative h-[470px] w-[1150px] mx-auto my-[27px]">
            <img className='rounded-3xl w-full h-full object-cover' src={banner} alt="" />
            <div className='absolute mx-auto inset-0 bg-sky-300 opacity-20 rounded-3xl'>


</div>
        </div>
    );
};

export default Banner;