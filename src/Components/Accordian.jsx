import React from 'react';

const Accordian = () => {
    return (
        <div className='bg-[#FFFFF5]'>
            <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold"> What are your office hours?</div>
        <div className="collapse-content bg-base-200 py-2">
          <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold">How can I schedule an appointment?</div>
        <div className="collapse-content bg-base-200">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold">Do you accept insurance?</div>
        <div className="collapse-content bg-base-200">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold">What should I bring to my appointment?</div>
        <div className="collapse-content bg-base-200">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-semibold">Do you offer telemedicine appointments?</div>
        <div className="collapse-content bg-base-200">
          <p>hello</p>
        </div>
      </div>
        </div>
    );
};

export default Accordian;