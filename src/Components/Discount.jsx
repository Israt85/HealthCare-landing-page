import img from '../../src/assets/Media/Rectangle 32.png'
import logo from '../../src/assets/Media/logo light.png'

const Discount = () => {
    return (
        <div className="w-[1160px] h-[477px] my-32 relative">
    <img className='rounded-3xl w-full h-full object-cover' src={img} alt="" />
    <div className='absolute inset-0 bg-gradient-to-r from-[rgb(2,2,64)] to-[#5854b3] opacity-70 rounded-3xl'>


    </div>
<div className='absolute -mt-96 w-full ' >
    <div className='flex  justify-between'>
   <div className='h-[253px] w-[530px] mx-6'>
   <p className='text-4xl font-bold my-6 opacity-100 text-white'>Get Your <br />
First <span className='py-4 inline-block'> Appointment </span> <br />
at 50% Off!
</p>
<div className='flex items-center gap-2'>
<button className= 'mt-1 btn bg-[#FFC637]'>Appointment <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3137 8.00001C20.3137 7.44773 19.866 7.00001 19.3137 7.00001L10.3137 7.00001C9.76142 7.00001 9.31371 7.44773 9.31371 8.00001C9.31371 8.5523 9.76142 9.00001 10.3137 9.00001L18.3137 9.00001L18.3137 17C18.3137 17.5523 18.7614 18 19.3137 18C19.866 18 20.3137 17.5523 20.3137 17L20.3137 8.00001ZM8.70711 20.0208L20.0208 8.70712L18.6066 7.29291L7.29289 18.6066L8.70711 20.0208Z" fill="#020043"/>
</svg>
</span> </button>
<button className= 'mt-1 text-white btn btn-outline'>Learn More <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6272 7.99977C20.6272 7.44748 20.1795 6.99977 19.6272 6.99977L10.6272 6.99977C10.0749 6.99977 9.62718 7.44748 9.62719 7.99977C9.62719 8.55205 10.0749 8.99977 10.6272 8.99977L18.6272 8.99977L18.6272 16.9998C18.6272 17.5521 19.0749 17.9998 19.6272 17.9998C20.1795 17.9998 20.6272 17.5521 20.6272 16.9998L20.6272 7.99977ZM9.02058 20.0206L20.3343 8.70688L18.9201 7.29266L7.60637 18.6064L9.02058 20.0206Z" fill="#FFFFF5"/>
</svg>

</span> </button>
</div>
   </div>
   <div data-aos="fade-up">
   <div className='flex-shrink-0'>
            <img src={logo} alt="" className='mx-10 h-auto max-w-full'/>
        </div>
   </div>
    </div>
</div>
</div>

    );
};

export default Discount;