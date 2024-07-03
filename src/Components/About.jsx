import img from '../../src/assets/Media/Rectangle 24.png'

const About = () => {
    return (
        <div className="w-[1160px] h-[456px] mt-20 gap-6 flex justify-evenly">
            <div className='w-[470px] h-[355px]'>
                <button className="btn rounded-3xl my-4 bg-white btn-outline">Who We Are</button>
                <h2 className='text-5xl font-bold my-4'>We Help To Get Solutions</h2>
                <p className='w-[470px] h-[167px] text-base'>
We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
</p>
<button className= 'mt-4 btn bg-[#FFC637]'>Learn More</button>

            </div>
            <div>
                <img className='relative h-[415px] w-[550px]' src={img} alt="" />
                <div className='absolute -mt-40 -ml-14 w-[330px] h-[190px] bg-[#343268] rounded-3xl'>
                <div className='text-white mx-6 my-8'>
                    <p className='text-xl my-2'>Our mission is simple
                   </p>
                   <p className='text-gray-200'> To provide high-quality healthcare services that are accessible, personalized, and <br /> patient-centered.</p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default About;