import profile from '../../src/assets/Media/gils profile.png'
import profile1 from '../../src/assets/Media/profile boy-1.jpg'
import profile2 from '../../src/assets/Media/profile boy.png'

const Testimonial = () => {
    return (
        <div className="w-[1161px] h-[416px]">
            <div>
                <button className="btn rounded-3xl my-2 bg-[#f2f2f5] btn-outline border-[#343268]">Testimonial</button>
                <h2 className='text-5xl font-bold my-6'>What they say about Us</h2>

                {/* testimonial card start */}
                <div className='grid grid-cols-3'>
                    <div className="w-[371px] h-[241px] bg-[#FFFFF5] p-4">
                        <h2 className='text-2xl my-2 font-bold '>Expertise and Compassion Combined</h2>
                        <p className='text-sm text-gray-900'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                        <div className='flex my-1 items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src={profile} alt="" />
                           <div>
                           <p>
                            Sarah D, IT Professional
                            </p>
                           </div>
                        </div>
                    </div>
                    <div className="w-[371px] h-[241px] bg-[#FFFFF5] p-4">
                        <h2 className='text-2xl my-2 font-bold '>Life-Saving Care, Life-Changing Experience</h2>
                        <p className='text-sm text-gray-900'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                        <div className='flex my-1 items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src={profile1} alt="" />
                           <div>
                           <p>
                           Michael R, Business Executive
                            </p>
                           </div>
                        </div>
                    </div>
                    <div className="w-[371px] h-[241px] bg-[#FFFFF5] p-4">
                        <h2 className='text-2xl my-2 font-bold '>A Partner in Health and
                        Wellness</h2>
                        <p className='text-sm text-gray-900'>As a busy professional, I appreciate the convenience and quality of care I receive at From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                        <div className='flex my-1 items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src={profile2} alt="" />
                           <div>
                           <p>
                           David S, Lawyer
                            </p>
                           </div>
                        </div>
                    </div>



                </div>



            </div>
        </div>
    );
};

export default Testimonial;