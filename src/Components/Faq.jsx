import Accordian from "./Accordian";


const Faq = () => {
    return (
        <div className="w-[1160px] h-[566px] border">
            <button className="btn rounded-3xl my-2 bg-[#f2f2f5] btn-outline border-[#343268]">FAQ</button>
            <h2 className='text-5xl font-bold my-6'>
            Frequntly Asked Question</h2>
            <Accordian></Accordian>
        </div>
    );
};

export default Faq;