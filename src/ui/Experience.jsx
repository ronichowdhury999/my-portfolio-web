import { useState } from "react"
import Container from "./Container"
import SectionTitle from "./SectionTitle"
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handelReact = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);

  };
  const handelGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);

  };
  const handelApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);

  };
  const handelSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);

  };
  const handelAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);

  };
  return (
    <Container className="max-w-3xl mx-auto py-10 lg:py-24 gap-16 " id="experience">
      <SectionTitle title="Whare I have worked" titleNo="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* { buttion setub } */}
        <ul className="md:w-32 flex flex-col">
          <li onClick={handelReact} className={`${workReactbd
            ? "border-l-designColor text-designColor "
            : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>ReactBD</li>
          <li onClick={handelGoogle} className={`${workGoogle
            ? "border-l-designColor text-designColor "
            : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Google</li>
          <li onClick={handelApple} className={`${workApple
            ? "border-l-designColor text-designColor "
            : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Apple</li>
          <li onClick={handelSplash} className={`${workSplash
            ? "border-l-designColor text-designColor "
            : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Splash</li>
          <li onClick={handelAmazon} className={`${workAmazon
            ? "border-l-designColor text-designColor "
            : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Amazon</li>
        </ul>
        {/* {Content} */}
        {workReactbd && <WorkCard jobTitle="Engineer"
          jobTag="@ReactBD"
          date="Jan 2023 - present"
          detailsOne="Write modern ,performant,maintainable code for a diverse array of client and internal projects"
          detailsTwo="Work with a variety of different languages, platfroms,frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify"
          detailsThree="Communicate with multi-disciplinary teams of engineers,"
        ></WorkCard>}
        {workGoogle && <WorkCard jobTitle="Web Developer "
          jobTag="@Google"
          date="Jan 2023 - present"
          detailsOne="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo."
          detailsTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum."
          detailsThree="Communicate with multi-disciplinary teams of engineers,"
        ></WorkCard>}
        {workApple && <WorkCard jobTitle="Mern Stack Developer"
          jobTag="@Apple"
          date="Jan 2021 - Dec 2021"
          detailsOne="Write modern ,performant,maintainable code for a diverse array of client and internal projects"
          detailsTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos,"
          detailsThree="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum."
        ></WorkCard>}
        {workSplash && <WorkCard jobTitle="Mern Stack Developer"
          jobTag="@Splash"
          date="Jan 2021 - Dec 2021"
          detailsOne="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum."
          detailsTwo="Work with a variety of different languages, platfroms,frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify"
          detailsThree="Communicate with multi-disciplinary teams of engineers,"
        ></WorkCard>}
        {workAmazon && <WorkCard jobTitle="Web Design"
          jobTag="@Amazon"
          date="Jan 2020 - Dec 2020"
          detailsOne="Write modern ,performant,maintainable code for a diverse array of client and internal projects"
          detailsTwo="Work with a variety of different languages, platfroms,frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify"
          detailsThree="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit pariatur soluta minus ex voluptatibus quos, eum odio veniam commodi voluptate explicabo, ut sunt modi quam ipsum tempora incidunt cum.,"
        ></WorkCard>}
      </div>
    </Container>
  )
}

export default Experience