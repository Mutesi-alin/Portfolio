import { Afacad } from "next/font/google";
import Image from "next/image";

interface Project {
  name: string;
  img: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const afacad = Afacad({
  subsets: ["latin"],
});

const projects = [
  {
    proj: [
      {
        img: "/images/Drainage.png",
        name: "Smart Drainage System",
        link: "https://docs.google.com/presentation/d/1n7XqFRqHNGuecB2QA1Mbi1GDrLfeVfXGFIlnyQJjLe8/edit?usp=sharing",
      },
    ],
  },
  {
    proj: [
      {
        img: "/images/Group.PNG",
        name: "African Business Group",
        link: "https://ite-abg-webs.vercel.app/",
      },
    ],
  },
  {
    proj: [
      {
        img: "/images/Bashana.png",
        name: "Bashana Companies",
        link: "https://bashana-website-up2y.vercel.app/",
      },
    ],
  },
  {
    proj: [
      {
        img: "/images/translator.png",
        name: "Language Translator",
        link: "https://language-translator-website.vercel.app",
      },
    ],
    
  },

  {
    proj: [
      {
        img: "/images/akagera.png",
        name: "Akagera Live Lodge",
        link: "https://akageralivelodge-o56k.vercel.app/",
      },
    ],
    
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative aspect-w-4 aspect-h-3">
      <a href={project.link} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="block relative w-full h-[300px]"
      >
        <Image
          src={project.img}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
      <div className="flex justify-between items-center"></div>
    </div>
  </div>
);

const Project = () => {
  return (
    <div
      id="projects"
      className={`${afacad.className} py-24 max-w-6xl mx-auto p-4 font-sans`}
    >
      <h2 className="text-4xl  text-[#002E29] mb-6 text-center py-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((projectGroup, index) =>
          projectGroup.proj.map((project, projIndex) => (
            <ProjectCard key={`${index}-${projIndex}`} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Project;