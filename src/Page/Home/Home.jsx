import About from "../../Components/About";
import Banner from "../../Components/Banner";
import CareSection from "../../Components/CareSection";
import Navbar from "../../Components/Navbar";
import Service from "../../Components/Service";


const Home = () => {
    return (
        <div className="max-w-[1161px] mx-auto ">
          <Navbar></Navbar>
          <Banner></Banner>
          <CareSection></CareSection>
          <About></About>
          <Service></Service>
        </div>
    );
};

export default Home;