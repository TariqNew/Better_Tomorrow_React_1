import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-section">
        <Navbar />
        <div className="center-part flex flex-col items-center justify-center relative top-50">
          <div className="large-txt text-5xl font-semibold text-white mb-4">Welcome to Better Tomorrow</div>
          <div className="medium-txt text-2xl font-light text-white">Powering tomorrow, today</div>
          <Button name='Explore our programs'/>
        </div>
        
      </div>
    </>
  );
};

export default Home;
