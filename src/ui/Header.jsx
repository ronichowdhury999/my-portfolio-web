import { Link } from "react-scroll";

const Header = () => {
  const NavItems = [
    { title: "Home", link: 'home', value: "" },
    { title: "About", link: 'about', value: "01", delay: "01" },
    { title: "Experience", link: 'experience', value: "02", delay: "02" },
    { title: "Project", link: 'project', value: "03", delay: "03" },
    { title: "Contact", link: 'contact', value: "04", delay: "04" },
  ];
  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 lg:px-0">
      <div className="max-w-[1300px] mx-auto flex items-center h-full justify-between ">

        <img className="w-14 opacity-75 hover:opacity-100 duration-200 cursor-pointer" src="/src/assets/logo.png" alt="logo" />
        <div className="hidden md:inline-flex items-center gap-6
        ">
          <div className="flex text-[14px] gap-6">
            {
              NavItems?.map((item) => (
                <Link className="font-medium hover:text-designColor cursor-pointer duration-300">
                  <p>
                    <span className="text-designColor ml-1">
                      {item.value}
                      {item?.value && "."}
                    </span>
                    <span className="uppercase tracking-wide">{item?.title}</span>
                  </p>
                </Link>
              ))
            }
          </div>
          <a className=" text-designColor border border-designColor py-2 px-4 rounded-md font-medium tracking-wider uppercase hover:bg-hoverColor duration-200" href="https://web.facebook.com/i.mdroni" target="black">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Header