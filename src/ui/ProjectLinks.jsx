import { AiOutlineYoutube } from "react-icons/ai"
import { RxOpenInNewWindow } from "react-icons/rx"
import { TbBrandGithub} from "react-icons/tb"

const ProjectLinks = ({link}) => {
    return (
        <div className="text-2xl flex items-center gap-4">
            <a href="" target="blank" className="hover:text-designColor duration-200">
               <TbBrandGithub/>
            </a>
            <a href="" target="blank" className="hover:text-designColor duration-200">
               <AiOutlineYoutube/>
            </a>
            <a href={link} target="blank" className="hover:text-designColor duration-200">
               <RxOpenInNewWindow/>
            </a>
        </div>
    )
}

export default ProjectLinks