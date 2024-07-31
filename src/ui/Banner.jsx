import Container from "./Container"
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const stringArryText = [
    'i build things for the web',
    'Passionate web developer',
    'love to learn new ideas']
  return (
    <Container id="home" className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3 className="text-lg tracking-wide text-designColor font-semibold"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >Hi,my name is</motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        Md Roni Chowdhury
        <span className="text-darkText font-semibold mt-2 lg:mt-4">
          <Typewriter
            options={{
              strings: stringArryText,
              autoStart: true,
              loop: true
            }}
          ></Typewriter>
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-[650px] text-darkText font-medium leading-7">
        i am a web developer with 4+ years or experience in React.i have a stronge foundetion in front-end & development and am skilled in creating user-friendly and responsive wev application usings React and its ecosystem.
        <br />
        <a
          href=""
          target="blank">
          <span className="text-designColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group">learn more

            <span className="absolute w-full h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform group-hover:translate-x-0 duration-500"></span>
          </span></a>
      </motion.p>
      <motion.a
        href="https://github.com/dashboard"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm border border-designColor rounded-md text-designColor tracking-wide hover:bg-hoverColor duration-300 flex  items-center justify-center font-semibold"
      >
     Check out my project
      </motion.a>

    </Container>
  )
}

export default Banner