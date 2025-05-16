"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ParallaxSection from "./parallax";

const projects = [
  
    {
      id: 13,
      title: "Anusha Shetty Designs: Elegant Fashion Design",
      description: "Crafted a stunning and elegant web design for Anusha Shetty Designs, showcasing her fashion collection with a seamless blend of modern aesthetics and user-friendly navigation.",
      image: "/image.png",
      logo: "/",
      tags: ["Fashion Design", "Web Design"],
      date: "Nov 2024 - Dec 2024",
      budget: "2,00,000 rs+",
      bgColor1: "from-[#D32F2F]",
      bgColor2: "to-[#FF1744]", // Red Gradient
      link: "https://anushashettydesigns.com"
    },
    {
    
      id: 12,
      title: "The Unique Story Branding and Web Design",
      description: "Developed a unique branding identity and website design for The Unique Story, focusing on creating a memorable digital presence that aligns with their vision of storytelling and creativity.",
      image: "/TUS.png",
      logo: "/",
      tags: ["Branding", "Web Design"],
      date: "Jan 2025 - Feb 2025",
      budget: "50,000 rs+",
      bgColor1: "from-[#F57C00]",
      bgColor2: "to-[#FF9800]", // Orange Gradient
      link: "https://theuniquestory.in"
    },
    {
    id: 1,
    title: "Modern UI/UX Design for ISRA Design",
    description:
      "Crafted an intuitive and visually appealing UI/UX for ISRA Design, focusing on usability and design aesthetics to enhance the overall experience.",
    image: "/ISRA.png",
    logo: "/",
    tags: ["UI/UX Design"],
    date: "Jun 2024 - Sept 2024",
    budget: "$25000+",
    bgColor1: "from-[#6A0572]",
    bgColor2: "to-[#AB47BC]", // Purple Gradient
    link: "https://isradesign.com/en/",
  },
  {
    id: 2,
    title: "Revamping Decorilla’s User Experience",
    description:
      "Led the UI/UX redesign for Decorilla, enhancing their platform with a seamless, modern design that improves engagement and usability.",
    image: "/decor.png",
    logo: "/",
    tags: ["UI/UX Design"],
    date: "Dec 2023 - Feb 2024",
    budget: "$12500+",
    bgColor1: "from-[#FF7E67]",
    bgColor2: "to-[#FF3D00]", // Orange-Red Gradient
    link: "https://www.decorilla.com/",
  },
  {
    id: 3,
    title: "Earth Interiors – A Fresh UI/UX Approach",
    description:
      "Designed a sleek and interactive UI/UX for Earth Interiors, focusing on a clean, nature-inspired interface for an enhanced customer journey.",
    image: "/earth.png",
    logo: "/",
    tags: ["UI/UX Design"],
    date: "Feb 2024 - May 2024",
    budget: "$12500+",
    bgColor1: "from-[#4CAF50]",
    bgColor2: "to-[#2E7D32]", // Green Gradient
    link: "https://earth-interiors-v2.webflow.io/",
  },
  {
    id: 4,
    title: "Gigi Interiors - Premium UI/UX Design",
    description:
      "Developed a sophisticated and elegant UI/UX design for Gigi Interiors, elevating their brand’s online presence with a luxurious interface.",
    image: "/gigi.png",
    logo: "/",
    tags: ["UI/UX Design"],
    date: "May 2024 - Aug 2024",
    budget: "$8000+",
    bgColor1: "from-[#D4AF37]",
    bgColor2: "to-[#FFD700]", // Gold Gradient
    link: "https://gigi-template.webflow.io/",
  },
    {
      id: 5,
      title: "Revitalising Blackwood's internal recruitment app with UX design",
      description:
        "Our Brief: Design from the ground up an intricate, user-centric web application. It must significantly improve the speed and ease of use for the team, while utilising decades of captured data.",
      image: "/blackwood1.webp",
      logo: "/bwlogo.png",
      tags: ["Web Application", "UI/UX Design", "Front-end Development"],
      date: "Oct 2023 - Dec 2023",
      budget: "$10000+",
      bgColor1: "from-[#8B5CF6]",
      bgColor2: "to-[#6D28D9]", // Purple Gradient
      link: "",
    },
    {
      id: 6,
      title: "Putting data-driven user experience at the heart of Visual Comfort’s retail app",
      description:
        "We teamed up with Visual Comfort to revitalise their retail application, making it scalable and easier-to-use while also transforming the in-store experience for customers.",
      image: "/visual1.png",
      logo: "/vlogo.png",
      tags: ["Web Application", "Retail Application", "UI/UX Design", "Front-end Development"],
      date: "Jan 2023 - Mar 2023",
      budget: "$10000+",
      bgColor1: "from-[#1C3250]",
      bgColor2: "to-[#000000]", // Dark Blue Gradient
      link: "",
    },
    {
      id: 7,
      title: "Transforming Tech Fabric’s site with Jamstack Development",
      description:
        "We worked alongside Tech Fabric’s designers to turn their vision into a high-performance (and easy-to-use) Jamstack website that stands the test of time.",
      image: "/techfabric1.webp",
      logo: "/tlogo.png",
      tags: ["Web Application", "Front-end Development"],
      date: "Mar 2023 - Oct 2023",
      budget: "$7500+",
      bgColor1: "from-[#E9493B]",
      bgColor2: "to-[#DC2626]", // Red Gradient
      link: "",
    },
    {
      id: 8,
      title: "Powering Pigeon Loans to 61% more signups and $2.5M in funding",
      description:
        "We helped Pigeon Loans refresh their website and app with a strong user experience focus. The results? More signups, greater investment, easier updates.",
      image: "/pigeonloans1.webp",
      logo: "/pllogo.png",
      tags: ["Marketing Site", "Web Application", "UI/UX Design", "Front-end Development"],
      date: "Oct 2024 - Jan 2025",
      budget: "$10000+",
      bgColor1: "from-[#F5BE6A]",
      bgColor2: "to-[#FBBF24]", // Yellow Gradient
      link: "https://www.usepigeon.io/",
    }
    
  
];
  

export default function ProjectsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center font-[ISOCP3] font-bold">
      {/* Title Section */}
      <div className="text-center mt-[10vh] relative justify-center h-auto px-4 md:px-0">
        <h1 className="text-4xl md:text-7xl font-bold mx-auto capitalize text-black">
          Some of our <span className="text-[#D66937]">Favourite Projects</span>
        </h1>
        <p className="mt-4 text-base md:text-2xl text-black max-w-[90vw] md:max-w-[60vw] mx-auto">
          We build custom experiences based on our proven best practices. No matter what you’re after, we’ll deliver the best results for your enterprise.
        </p>
        <Link
          href="https://cal.com/janamejaya-agency"
          className="mt-6 inline-block px-6 py-3 border-4 border-black rounded-full text-white bg-black hover:bg-white hover:text-black transition text-sm md:text-base"
        >
          Let’s Work Together →
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="mt-[20vh] space-y-12 md:space-y-16 mx-auto max-w-[90vw] px-4">
        {projects.map((project, index) => (
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side (Image) */}
          <div className="w-full md:w-2/3">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gradient-to-b mt-[3vh] ${project.bgColor1} ${project.bgColor2} pt-[5vh] flex justify-center rounded-tr-[3vh]`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }} // Apply hover scale to image wrapper
                className="max-w-full h-auto "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={750}
                  height={600}
                  className="rounded shadow-lg max-w-full h-auto transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            </motion.div>
          </div>
        


            {/* Right Side (Details) */}
            <div className="w-full md:w-1/3 p-6 flex flex-col justify-center items-start text-left">
            {project.logo && project.logo !== "/" && (
                <Image src={project.logo} alt="Logo" width={120} height={50} className="mb-4" />
              )}              <h3 className="text-lg md:text-[3vh] font-bold text-black">{project.title}</h3>
              <p className="text-gray-800 text-sm md:text-base mt-2">{project.description}</p>

              {/* Tags & Details */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-gray-800 px-3 py-1 rounded-lg border border-black text-xs md:text-sm">{project.date}</span>
                <span className="text-gray-800 px-3 py-1 rounded-lg border border-black text-xs md:text-sm">{project.budget}</span>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white text-black px-3 py-1 rounded-lg border border-black text-xs md:text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit Project Button */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 border-2 border-black rounded-lg text-white bg-black hover:bg-white hover:text-black transition text-xs md:text-sm"
                >
                  View Project →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <ParallaxSection />
    </section>
  );
}
