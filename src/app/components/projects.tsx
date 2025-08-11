import React from "react";
import { motion } from "framer-motion";

function ProjectItem({
  image,
  imageClassName,
  title,
  downloads,
  subText,
  description,
  children,
}: {
  image?: string | React.ReactNode;
  imageClassName?: string;
  title: string;
  downloads?: React.ReactNode;
  subText?: string[];
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        className={`grid grid-cols-[25%_75%] grid-rows-1 gap-y-4 gap-x-2 max-w-full min-w-full h-full w-full h-full pixel-border-box p-4 py-6 
      `}
        title={title}
      >
        <div className="row-span-2 row-end-1 w-full flex justify-center items-center">
          <div className="pixel-border-2 tint-border-dark relative aspect-square row-span-2 row-end-1 w-full flex justify-center items-center">
            <span className="flex justify-center items-center container-content">
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={title}
                  className={
                    "object-cover w-full aspect-square " +
                    (imageClassName ? ` ${imageClassName}` : "")
                  }
                />
              ) : null}
              {typeof image === "object" ? image : null}
            </span>
          </div>
        </div>
        <span className="flex flex-col justify-between items-start flex-nowrap gap-4 h-min pt-4 pl-4">
          <h1>{title}</h1>
          {downloads && (
            <span className="flex flex-row items-center gap-2 h-min">
              <svg
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                className="scale-150 text-text"
              >
                {" "}
                <path
                  d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2h2zm8 2v-4h-2v4H5v-4H3v6h18v-2zm-8-6v2h2v-2h2v-2h-2v2h-2z"
                  fill="currentColor"
                />{" "}
              </svg>
              <p className="translate-y-1 text-lg lg:text-xl">{downloads}</p>
            </span>
          )}
        </span>
        <div className="pl-4 text-lg lg:text-xl text-gray-500 col-start-2 flex items-start h-full">
          {subText && (
            <span>
              {subText.map((text, index) => (
                <span key={index}>
                  {text}
                  {index < subText.length - 1 ? <br /> : ""}
                </span>
              ))}
            </span>
          )}
        </div>

        <div className="pixel-border-b w-full col-span-2 pt-2" />
        <p className="text-lg lg:text-xl col-span-2 leading-tight">
          {description}
        </p>
        <div className="flex flex-row flex-nowrap justify-start items-center gap-4">
          {children}
        </div>
      </motion.div>
    </>
  );
}
function Link({
  link,
  svg,
  text,
  disabled,
}: {
  link: string;
  svg: React.ReactNode;
  text: string;
  disabled?: boolean;
}) {
  return (
    <a
      className={
        `hover:bg-button-focus transition-colors duration-250 pixel-border-box w-fit relative flex flex-row flex-nowrap justify-center items-end gap-1 px-2 pl-1
      
      hover:text-white 
      ` + (disabled ? " pointer-events-none opacity-25" : "")
      }
      href={link}
    >
      <span className="w-full h-full flex justify-center items-center container-content">
        {svg}
      </span>

      <p className="h-min w-full flex items-end justify-end text-lg lg:text-xl leading-none mb-1">
        {text}
      </p>
    </a>
  );
}

function Projects() {
  return (
    <section className="pixel-border-b h-auto">
      <div className="pixel-border-1 w-full flex h-min mx-auto p-0 relative">
        <div className="absolute top-0 left-0 w-full h-auto -translate-y-full flex justify-start pl-4 gap-6 items-center">
          <img
            data-pixelart
            src="/icons/pc.png"
            className={`w-32 h-16 aspect-[1/2] aria-hidden:opacity-0 opacity-100 transition-opacity duration-500`}
          />
        </div>
        <div className="w-full p-4 py-6 gap-4 flex justify-center items-center h-full">
          <h1>Projects</h1>
        </div>
      </div>

      <ProjectItem
        title={"Tardis Refined"}
        downloads={"347K+"}
        subText={["Role: Asset Designer", "Project Type: Minecraft Mod"]}
        description="A refined version of the Tardis, a time machine from the British TV show Doctor Who. This project showcases my skills in 3D modeling and design."
        image="/images/tardis-refined-logo-512.webp"
      >
        {/* <div className="flex flex-row flex-nowrap justify-start items-center gap-4"> */}
        <Link
          link="https://www.curseforge.com/minecraft/mc-mods/tardis-refined"
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                fill="currentColor"
              />
            </svg>
          }
          text="CurseForge"
        />

        <Link
          link="https://www.curseforge.com/minecraft/mc-mods/tardis-refined"
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
          }
          text="Source"
        />
        {/* </div> */}
      </ProjectItem>
      <ProjectItem
        title="PixelMorph"
        description="A Machine Learning tool for generating pixel art. Allowing the texturing of an unknown image, based on a reference UV map. PixelMorph uses a custom-trained model to generate pixel art textures from images, making it easier to create and apply textures to animations in pixel art style."
        image={
          <span className="group pointer-events-auto z-10">
            <img
              src={"/images/pixelmorph-logo-512.webp"}
              alt={"pixelmorph logo"}
              className={
                "object-cover w-full aspect-square group group-hover:hidden transition-all duration-250 "
              }
            />
            <img
              src={"/images/pixelmorph-logo-animated-512.webp"}
              alt={"pixelmorph logo"}
              className={
                "object-cover w-full aspect-square hidden group group-hover:block "
              }
            />
          </span>
        }
      >
        <Link
          link=""
          disabled
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                fill="currentColor"
              />
            </svg>
          }
          text="Site"
        />

        <Link
          link="https://github.com/Magicmaan/pixelmorph"
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
          }
          text="Source"
        />
      </ProjectItem>
      <ProjectItem
        title="MCubed"
        description="A cube-based modeling program designed for creating 3D models with ease and precision. MCubed allows users to build, edit, and export Minecraft-style models efficiently."
        image={
          <span className="group pointer-events-auto z-10">
            <img
              src={"/images/mcubed-logo-512.webp"}
              alt={"mcubed logo"}
              className={
                "object-cover w-full aspect-square group group-hover:hidden transition-all duration-250 "
              }
            />
            <img
              src={"/images/mcubed-logo-animated-512.webp"}
              alt={"mcubed logo"}
              className={
                "object-cover w-full aspect-square hidden group group-hover:block "
              }
            />
          </span>
        }
      >
        <Link
          link=""
          disabled
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                fill="currentColor"
              />
            </svg>
          }
          text="Site"
        />

        <Link
          link="https://github.com/Magicmaan/MCubed"
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
          }
          text="Source"
        />
      </ProjectItem>
      <ProjectItem
        title="16-bit Anatomy"
        description="An interactive retro-style anatomy viewer that allows users to explore human anatomy in a pixel art style. This project combines my interests in both programming and art, creating an educational tool with a unique aesthetic."
        image={
          <span className="relative w-full h-full -translate-y-1/5 pointer-events-auto">
            <img
              src={"/images/anatomy-logo-3.webp"}
              alt={"anatomy logo"}
              className={
                "object-cover top-0 left-0 absolute w-full translate-x-1/8 -translate-y-1/16 scale-50 peer/1"
              }
            />
            <img
              src={"/images/anatomy-logo-2.webp"}
              alt={"anatomy logo"}
              className={
                "object-cover top-0 left-0 absolute w-full scale-50 transition-opacity peer/1 peer/2 peer-hover/1:opacity-25 hover:opacity-100 duration-250 z-10  "
              }
            />
            <img
              src={"/images/anatomy-logo-1.webp"}
              alt={"anatomy logo"}
              className={
                "object-cover top-0 left-0 absolute w-full -translate-x-1/8 translate-y-1/16 scale-50 peer-hover/2:opacity-25 peer-hover/1:opacity-25 transition-opacity duration-250 z-20  "
              }
            />
          </span>
        }
        // image="/images/anatomy-logo-512.webp"
        imageClassName="scale-125 "
      >
        <Link
          link=""
          disabled
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                fill="currentColor"
              />
            </svg>
          }
          text="Site"
        />

        <Link
          link="https://github.com/Magicmaan/anatomy_viewer`"
          svg={
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              className="scale-150 text-text"
            >
              <path
                d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
                fill="currentColor"
              />
            </svg>
          }
          text="Source"
        />
      </ProjectItem>
      <ProjectItem
        title="Shabang"
        description=""
        image="/images/shabang-logo-512.webp"
        imageClassName="scale-150"
      />
      <ProjectItem
        title="PTOL"
        description=""
        image="https://example.com/pixel-icons.jpg"
      />
    </section>
  );
}

export default Projects;
