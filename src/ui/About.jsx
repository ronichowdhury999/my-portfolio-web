import {profileImg2 } from "../assets"
import Container from "./Container"
import SectionTitle from "./SectionTitle"
import { FaCode } from "react-icons/fa";

const About = () => {
  const textArry = [
    { title: "JavaScript (ES6+)", link: "https://www.w3schools.com/js/js_es6.asp" },
    { title: "Next js", link: "https://nextjs.org/" },
    { title: "React js", link: "https://react.dev/learn" },
    { title: "Node js", link: "https://nodejs.org/en" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "Express js", link: "https://www.geeksforgeeks.org/express-js/" },
    { title: "MongoDB", link: "https://www.mongodb.com/" },
    { title: "TailwindCSS", link: "https://tailwindcss.com/" },
  ]
  return (
    <Container className="py-10 lg:py-32 flex flex-col gap-8" id="about">

      <SectionTitle title='About me' titleNo='01.' ></SectionTitle>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText  font-medium flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore cum rem sed maiores fugit odit debitis provident, nemo, laborum eligendi est reiciendis sunt ipsam facere? Sed neque alias quasi.;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel doloremque a, necessitatibus eum quis ipsam repellendus nemo illum repellat harum soluta laudantium provident fugiat veniam deleniti nobis tempore autem.</p>
          <p>Here are a few technologies i have been working with recently:</p>
          <div className="max-w-[450px] text-sm  grid grid-cols-2 gap-2 mt-6">
            {
              textArry.map((item) => (
                <a key={item?.title}
                  href={item?.link}
                  className="flex items-center gap-2 hover:text-white/80 duration-200 group"
                >
                  <FaCode className="text-designColor/80 duration-200"></FaCode> {item?.title}</a>
              ))
            }
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">

              <img
                className="rounded-lg lg:w-full h-full object-cover"
                src={profileImg2}
                alt="ProfileImg" />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-6 group-hover:-translate-y-6 duration-300">

          </div>
        </div>
      </div>
    </Container>
  )
}

export default About