import logo from '../../src/assets/Media/logo light.png'

const Footer = () => {
    return (
        <div className='w-[1492px] h-[442px] mx-auto bg-[#020043] text-gray-200 px-6'>
            <img className='pt-20' src={logo} alt="" />
            <div className=' grid grid-cols-4 gap-4 pt-4 pb-32'>
            <div>
                
                <p>123 Main Street Anytown, USA <br /> Postal Code: 12345</p>

                <p>
                    Support: support@oyolloo.com <br />
                    (Available : 10:00am to 07:00pm)</p>
            </div>
            <div>
                <p>Home
                </p>
                <p>About Us</p>
                <p>
                    Success Page</p>
                <p>
                    Terms and condition</p>
            </div>
            <div>
                <p>Services</p>
                <p>Scheduling</p>
                <p>Contact Us</p>
                <p>Patient Portal</p>
            </div>
            <div>
<p>Follow Us</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;