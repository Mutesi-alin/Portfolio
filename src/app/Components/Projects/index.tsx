import { Afacad } from "next/font/google";

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
        img: "/images/Themis AI.png",
        name: "Themis AI",
        link: "https://themis-dashboard-one.vercel.app/",
      },
    ],
  },

  {
    proj: [
      {
        img: "/images/Kipepeo_Fashion.png",
        name: "Kipepeo Fashion House",
        link: "https://www.figma.com/proto/dHobEDOXPRz7jmhbN3A3O1/Kipepeo-Fashion-House-Website?node-id=1-2&node-type=frame&t=YkbjOTz3dmHtst3R-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      },
    ],
  },

  {
    proj: [
      {
        img: "/images/timezone.png",
        name: "Word Timezone",
        link: "https://world-timezone.vercel.app/",
      },
    ],
  },

  {
    proj: [
      {
        img: "/images/Kaya_Kanri.png",
        name: "Kaya Kanri",
        link: "https://www.figma.com/proto/XnnrzKG8qSCGyUtnGk6zDC/Kaya?node-id=1-2&node-type=frame&t=A7iQwpaL7HxPr0D0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      },
    ],
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="aspect-w-4 aspect-h-3">
      <a href={project.link} className="text-blue-600 hover:underline">
        <img
          src={project.img}
          alt={project.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
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
      className={` ${afacad.className} py-24 max-w-6xl mx-auto p-4 font-sans`}
    >
      <h2 className="text-4xl font-bold mb-6 text-center py-4">Projects</h2>
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
