import img1 from '../../src/assets/Media/Rectangle 27-2.png'
import img2 from '../../src/assets/Media/Rectangle 27-1.png'
import img3 from '../../src/assets/Media/Rectangle 27.png'

const Service = () => {
    return (
        <div className="w-[1156px] h-[898px] bg-white my-32 ">
        <div className='gap-6 flex justify-evenly'>
        <div className='w-[470px] h-[355px]'>
            <button className="btn rounded-3xl my-2 bg-[#f2f2f5] btn-outline border-[#343268]">Service</button>
            <h2 className='text-5xl font-bold my-4'>Empowering Health, Enriching Lives</h2>
            <p className='w-[470px] h-[167px] text-base'>
            We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
</p>
<button className= 'mt-1 btn bg-[#FFC637]'>Learn More</button>

        </div>
        <div>
            <img className='relative py-6 h-[450px] w-[530px]' src={img1} alt="" />
            <div className='absolute opacity-70 -mt-48 ml-6 w-[350px] h-[150px] bg-[#343268] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Advanced Technology
               </p>
               <p className='text-gray-200'> 
               Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
            </div>
            </div>

        </div>
        </div>

{/* service section 2nd part */}
<div className='flex justify-center gap-4 mx-4'>
<div>
            <img className='relative py-6 h-[450px] w-[530px]' src={img2} alt="" />
            <div className='absolute opacity-70 -mt-48 ml-6 w-[350px] h-[150px] bg-[#343268] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Online Doctor Meet
               </p>
               <p className='text-gray-200'> 
               
Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
            </div>
            </div>

        </div>
        <div>
            <img className='relative py-6 h-[450px] w-[530px]' src={img3} alt="" />
            <div className='absolute opacity-70 -mt-48 ml-6 w-[350px] h-[150px] bg-[#343268] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Consultancy your health
               </p>
               <p className='text-gray-200'> 
               
               Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
            </div>
            </div>

        </div>
</div>




    </div>
    );
};

export default Service;