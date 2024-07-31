import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { logo } from "../assets";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const NavItems = [
  { title: "Home", link: 'home', value: "" },
  { title: "About", link: 'about', value: "01", delay: "0.1" },
  { title: "Experience", link: 'experience', value: "02", delay: "0.2" },
  { title: "Project", link: 'project', value: "03", delay: "0.3" },
  { title: "Contact", link: 'contact', value: "04", delay: "0.4" },
];
const Header = () => {
  const [show, setShow] = useState(false)
  const ref = useRef();
  const handelClick=(e)=>{
         if(e.target.contains(ref.current)){
          setShow(false)
         }
  };

  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 lg:px-0 sticky top-0 z-50 bg-praimaryColor">
      <div className="max-w-[1300px] mx-auto flex items-center h-full justify-between ">

        <img className="w-14 opacity-75 hover:opacity-100 duration-200 cursor-pointer" src={logo} alt="logo" />
        <div className="hidden md:inline-flex items-center gap-6
        ">
          <div className="flex text-[14px] gap-6">
            {
              NavItems?.map((item) => (
                <Link
                  key={item?.title}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  to={item?.link}
                  className="font-medium hover:text-designColor cursor-pointer duration-300">
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: item?.delay }}
                  >
                    <span className="text-designColor ml-1">
                      {item.value}
                      {item?.value && "."}
                    </span>
                    <span className="uppercase tracking-wide">{item?.title}</span>
                  </motion.p>
                </Link>
              ))
            }
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=" text-designColor border border-designColor py-2 px-4 rounded-md font-medium tracking-wider uppercase hover:bg-hoverColor duration-200" href="https://web.facebook.com/i.mdroni"
            target="black">
            Resume
          </motion.a>
        </div>
        <div onClick={() => setShow(true)} className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden ">

          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 " />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300" />
        </div>
        {show && (
          <div ref={(node)=>(ref.current = node)} 
          onClick={handelClick}
          className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end z-50">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 duration-200" />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-5">
                  {NavItems?.map((item) => (
                    <Link
                      key={item?.title}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      to={item?.link}
                      className="font-medium text-darkText hover:text-designColor cursor-pointer duration-300">

                      <motion.li
                      onClick={()=>setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className="text-designColor">
                          {item?.value}{item?.value && '.'}{''}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>

                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <a href="https://web.facebook.com/i.mdroni" target="black">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className=" text-designColor border border-designColor py-2 px-4 rounded-md font-medium tracking-wider uppercase hover:bg-hoverColor duration-200"
                  >
                    Resume
                  </motion.button>
                </a>
                <SocialLinks className="flex flex-row items-center gap-5" />
                <motion.a 
                initial={{ opacity:0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2,ease:'easeIn' }}
                className="text-sm w-72 tracking-widest text-designColor text-center mt-4"
                href="mailto:mdronii961@gmail.com"
                >
                  <p className="text-darkText hover:text-designColor hover:underline underline-offset-4 duration-200">reactbd@proton.me</p>
                </motion.a>
              </div>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Header