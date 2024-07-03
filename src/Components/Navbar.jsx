import logo from '../../src/assets/Media/logo dark.png'

const Navbar = () => {
    return (
        <div className='h-[48px] w-[1160px] py-[30px] mx-6'>
           <div className='flex justify-between gap-6 items-center'>
           <img className='w-[125px] h-[30px]' src={logo} alt="" />

<div className='text-xl font-bold'>
    <a className='ml-4' href="/">Home</a>
    <a className='ml-4' href="/">Services</a>
    <a className='ml-4' href="/">Blog</a>
    <a className='ml-4' href="/">About Us</a>
</div>

<div className='mr-8'>
    <button className='btn btn-outline font-bold'>Appointment <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3137 8.00001C20.3137 7.44773 19.866 7.00001 19.3137 7.00001L10.3137 7.00001C9.76142 7.00001 9.31371 7.44773 9.31371 8.00001C9.31371 8.5523 9.76142 9.00001 10.3137 9.00001L18.3137 9.00001L18.3137 17C18.3137 17.5523 18.7614 18 19.3137 18C19.866 18 20.3137 17.5523 20.3137 17L20.3137 8.00001ZM8.70711 20.0208L20.0208 8.70712L18.6066 7.29291L7.29289 18.6066L8.70711 20.0208Z" fill="#020043"/>
</svg>
</span> </button>
</div>
           </div>
            
        </div>
    );
};

export default Navbar;