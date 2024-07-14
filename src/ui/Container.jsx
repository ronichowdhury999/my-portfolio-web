import { twMerge } from "tailwind-merge"
const Container = ({ children, className }) => {
    const newClassName = twMerge("max-w-screen-xl mx-auto px-4 lg:px-0 h-screen")
    return (
        <div className={newClassName}>{children}</div>
    )
}

export default Container