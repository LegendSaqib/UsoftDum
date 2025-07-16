import { FaPhone } from "react-icons/fa";
import backComp from "../assets/HomeBg.jpeg";

function Elements() {
  return (
    <div
      style={{
        backgroundImage: `url(${backComp})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh', // Full screen height
        width: '100%',   // Full width
      }}
    >
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl">Elements</h1>
      </div>
    </div>
  );
};

export default Elements;
