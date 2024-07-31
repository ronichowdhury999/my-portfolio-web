import { amazon, cyberBlog, noorShop } from "../assets";
import Container from "./Container"
import ProjectLinks from "./ProjectLinks";
import SectionTitle from "./SectionTitle";
const Project = () => {
  return (
    <Container className="py-24"
      id="project">
      <SectionTitle title={"Some Things I have build"} titleNo={"03"} ></SectionTitle>
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* { project 1 } */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* img */}
          <a href="https://nextamazon.reactbd.com/" target="blank" className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden" >
            <img className="w-full h-full object-cover" src={amazon} alt="amazonImg" />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10 ">
            <div>
              <p className="text-designColor text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">Amazon clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with {""} <span className="text-designColor">0-auth </span>and then make the purchage using <span className="text-designColor">stripe</span></p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLinks link="https://nextamazon.reactbd.com/"></ProjectLinks>
          </div>
        </div>
        {/* { project 2 } */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 ">
          {/* img */}
          <a href="https://nextamazon.reactbd.com/" target="blank" className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden" >
            <img className="w-full h-full object-cover" src={cyberBlog} alt="amazonImg" />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10 ">
            <div>
              <p className="text-designColor text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">Cyber Security Blog</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16">A full functional Cyber Security Blog where you can wiew the latest post and {""} <span className="text-designColor">Comments on</span>it by passing your ideas besides you can try to ass your own {""}<span className="text-designColor">post</span> on it by logging on the portal.</p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLinks link="https://nextamazon.reactbd.com/"></ProjectLinks>
          </div>
        </div>
        {/* { project 3 } */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* img */}
          <a href="https://nextamazon.reactbd.com/" target="blank" className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden" >
            <img className="w-full h-full object-cover" src={noorShop} alt="noorShop" />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          {/* description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10 ">
            <div>
              <p className="text-designColor text-sm tracking-wide">Featured Project</p>
              <h3 className="text-2xl font-bold">Amazon clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with {""} <span className="text-designColor">0-auth </span>and then make the purchage using <span className="text-designColor">stripe</span></p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLinks link="https://nextamazon.reactbd.com/"></ProjectLinks>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Project