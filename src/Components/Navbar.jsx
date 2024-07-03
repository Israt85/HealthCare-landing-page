import logo from '../../src/assets/Media/logo dark.png'

const Navbar = () => {
    return (
        <div className='h-[48px] w-[1160px] my-[30px] mx-6'>
           <div className='flex justify-between gap-6 items-center'>
           <img className='w-[125px] h-[30px]' src={logo} alt="" />

<div className=''>
    <a className='ml-4' href="/">Home</a>
    <a className='ml-4' href="/">Services</a>
    <a className='ml-4' href="/">Blog</a>
    <a className='ml-4' href="/">About Us</a>
</div>

<div className='mr-8'>
    <button className='btn btn-outline'>Appointment</button>
</div>
           </div>
            
        </div>
    );
};

export default Navbar;