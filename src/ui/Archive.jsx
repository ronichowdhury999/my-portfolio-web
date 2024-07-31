import { useRef, useState } from "react";
import { projectArry } from "../Constants";
import Container from "./Container"
import ArchiveCard from "./ArchiveCard";
import { motion, AnimatePresence } from 'framer-motion';

const Archive = () => {
    const [showMore, setShowMore] = useState(false)
    const displayedArry = showMore ? projectArry : projectArry.slice(0, 6)

    const projectContainerRef = useRef(null)

    const handelShow=()=>{
        if(showMore){
            setShowMore(false);
            projectContainerRef.current.scrollIntoView({behavior:'smooth'})
        } else{
            setShowMore(true);
        }
    }

    return (
        <Container className="py-24  max-w-5xl mx-auto">
            <div className="flex flex-col gap-1 items-center">
                <h2 className="text-3xl font-semibold">Other Noteworthy project</h2>
                <p className="text-sm text-designColor tracking-wide ">view the acvhive</p>
            </div>
            <div ref={projectContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10 ">
                <AnimatePresence>
                    {displayedArry?.map((project, index) => (
                        <motion.div 
                        key={index}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{delay:index * 0.1}}
                        >
                            <ArchiveCard project={project}></ArchiveCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="mt-10 flex items-center justify-center">
                <button onClick={handelShow} className="w-36 h-1/2 rounded-md text-designColor text-sm border border-designColor hover:bg-hoverColor duration-300">{showMore ? 'Show less':'Show more'}</button>
            </div>
        </Container>
    )
}

export default Archive