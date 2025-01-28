import { MdOutlineMailOutline } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <div className="bg-black pt-14 flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row m-4 md:m-10 gap-3">
          <div className="border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-2 md:w-[358px]">
            <h2 className="text-[#0796EF] font-oswald font-bold text-xs">
              CONNECT WITH US
            </h2>
            <div className="mt-2 flex gap-3">
              <GiRotaryPhone color="#e6e600" className="mt-0.5" />
              <p className="text-[#857878] text-sm">+91 9567843340</p>
            </div>
            <div className="mb-2 flex gap-3">
              <MdOutlineMailOutline color="#e6e600" className="mt-0.5" />
              <p className="text-[#857878] text-sm">info@deepnetsoft.com</p>
            </div>
          </div>

          <div className="border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-4 sm:w-[588px] min-w-96 md:w-[348px] w-full">
            <div className="flex flex-col items-center">
              <img
                style={{ marginTop: "-40px" }}
                src={logo}
                alt="Company Logo"
                width="50"
                height="40"
                className=" mb-4"
              />
              <h1 className="text-white font-sans font-medium text-xl md:text-2xl">
                <span className="text-[#0796EF]">DEEP</span> NET{" "}
                <span className="text-[#857878]">SOFT</span>
              </h1>
            </div>
            <div className="flex gap-3 mt-2">
              <LuFacebook className="text-sm" color="gray" />
              <FiTwitter className="text-sm" color="gray" />
              <AiOutlineYoutube className="text-sm" color="gray" />
              <FaInstagram className="text-sm" color="gray" />
            </div>
          </div>

          <div className="border border-gray-100 flex flex-col justify-center items-center rounded-xl px-8 md:px-12 py-2 md:w-[358px]">
            <h2 className="text-[#0796EF] font-bold text-xs font-oswald">
              FIND US
            </h2>
            <div className="mt-2 flex gap-3">
              <CiLocationOn color="#e6e600" className="mt-0.5" />
              <p className="text-[#857878] text-sm">
                First floor, Geo Infopark,
              </p>
            </div>
            <div className="mb-2 flex gap-3">
              <p className="text-[#857878] text-sm ml-8">
                Infopark EXPY, Kakkanad
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 flex flex-col md:flex-row justify-between items-center py-3 px-5 md:px-20 text-slate-400 text-xs md:text-sm">
        <p>© 2024 Deepnetsoft Solutions. All rights reserved</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
