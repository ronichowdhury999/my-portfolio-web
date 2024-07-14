import About from "./ui/About"
import Banner from "./ui/Banner"
import Contact from "./ui/Contact"
import Experience from "./ui/Experience"
import Header from "./ui/Header"
import Project from "./ui/Project"

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-praimaryColor text-lightText">
     <Header></Header>
     <Banner></Banner>
     <About></About>
     <Experience></Experience>
     <Project></Project>
     <Contact></Contact>
    </main>
  )
}
export default App
