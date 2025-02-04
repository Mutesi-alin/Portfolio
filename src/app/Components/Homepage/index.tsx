import { Afacad } from "next/font/google";
import Image from "next/image";

const afacad = Afacad({
  subsets: ["latin"],
});

const Homepage = () => {
  return (
    <div className={afacad.className}>
      <div className="min-h-screen bg-[#0A3141] flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F2E5DA] p-10 rounded-lg shadow-lg">
            
            <div className="lg:w-1/2 ">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 lg:py-8">
                Hello, <span className="text-[#C17F59]">I&apos;M</span>
              </p>
              <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl pb-4 sm:pb-6 lg:pb-8 text-[#0A3141]">
                Mutesi Aline
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl pb-4 sm:pb-6 lg:pb-8">
                <span className="text-3xl sm:text-4xl lg:text-5xl text-[#C17F59]">
                  Software Developer
                </span>
              </p>
              <p className="text-gray-600 text-lg">
                Poaching remains a critical transnational crisis, profoundly impacting Rwanda&apos;s wildlife populations and biodiversity-rich regions. Aline, driven by her background in software engineering and passion for wildlife conservation, seeks to innovate solutions. Her goal includes developing predictive analytics models and mobile applications to effectively identify poaching hotspots by analyzing patterns of illegal activities. Her efforts aim to combat poaching and safeguard the Big Five animals that have long fascinated her.
              </p>

              <div className="flex space-x-5 pt-6">
                <a 
                  href="https://www.linkedin.com/in/mutesi-aline-0517902b4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A3141] p-3 rounded-full hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={28} height={28} />
                </a>
                <a 
                  href="https://x.com/aline_mutesii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A3141] p-3 rounded-full hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/Twitter.svg" alt="Twitter" width={28} height={28} />
                </a>
                <a 
                  href="https://github.com/Mutesi-alin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0A3141] p-3 rounded-full hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/github.svg" alt="Github" width={28} height={28} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/3">
              <div className="bg-[#002E29] rounded-xl p-2 shadow-lg">
                <Image
                  src="/images/mutesprofile-.jpg"
                  alt="Mutesi Aline"
                  width={400}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="w-full py-16 bg-[#F2E5DA] flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 px-6">
            
            <div className="lg:w-1/3 relative">
              <div className="relative z-10">
                <Image 
                  src="/images/mutesprofile-.jpg" 
                  alt="Mutesi Aline" 
                  width={300} 
                  height={400} 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute top-4 -left-4 w-full h-full border-4 border-[#B1785C] rounded-lg -z-10"></div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold text-[#002E29]">About Me</h2>
              <p className="text-[#3D3D3D] text-lg leading-relaxed">
                Inspired by the power of technology to transform lives and protect our planet, I embarked on a journey as a software developer to turn innovative ideas into reality. This passion drives me to create robust, scalable solutions that meet technical requirements and make a tangible difference in the world. As a confident and resourceful problem solver, I thrive on challenges that push the boundaries of what&apos;s possible with code.
              </p>

              <div className="flex space-x-4">
                <button className="bg-[#B1785C] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#945f47] transition-transform transform hover:scale-105">
                  Hire Me
                </button>

                <a
                  href="/images/Mutesi_Aline_CV.pdf" 
                  download="Mutesi_Aline_CV.pdf"
                  className="inline-block"
                >
                  <button className="border-2 border-[#B1785C] text-[#B1785C] px-6 py-3 rounded-full shadow-md hover:bg-[#B1785C] hover:text-white transition-transform transform hover:scale-105">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
