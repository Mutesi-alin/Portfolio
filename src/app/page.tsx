// import Image from "next/image";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import SkillSet from "./Components/Skills";
import Project from "./Components/Projects";
import Contacts from "./Components/Footer";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Homepage/>
     <SkillSet/>
     <Project/>
     <Contacts/>
    </div>
  );
}
