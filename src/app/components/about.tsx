"use client";
import { useEffect, useState } from "react";

// const CONTENT = [" > Begin Session... \n > Loading..."];

function Grass({
  duration = 0,
  amount = 3,
}: {
  duration?: number;
  amount?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, duration);
  }, []);

  return (
    <>
      {amount >= 1 && (
        <img
          src="/icons/1.svg"
          aria-hidden={!show}
          className={`w-32 h-16 aspect-[1/2] aria-hidden:opacity-0 opacity-100 transition-opacity duration-500`}
        />
      )}
      {amount >= 2 && (
        <img
          src="/icons/2.svg"
          aria-hidden={!show}
          className={`w-32 h-16 aspect-[1/2] aria-hidden:opacity-0 opacity-100 transition-opacity duration-500`}
        />
      )}
      {amount >= 3 && (
        <img
          src="/icons/3.svg"
          aria-hidden={!show}
          className={`w-32 h-16 aspect-[1/2] aria-hidden:opacity-0 opacity-100 transition-opacity duration-500`}
        />
      )}
    </>
  );
}

function About() {
  return (
    <section className="pixel-border-b h-auto mt-8">
      <div className="w-full h-full relative ">
        <div className="absolute top-0 left-0 w-full h-auto -translate-y-full flex justify-start pl-4 gap-6 items-center">
          <Grass />
        </div>
        <div className="pixel-border-1 w-full flex h-auto mx-auto p-0">
          <div className=" flex flex-col flex-nowrap w-full h-full p-4 py-6 gap-4">
            <div className="flex items-center">
              <h1>Theo Baker</h1>
            </div>
            <div className="pixel-border-b h-0 w-full" />

            <p className="text-lg lg:text-xl">
              Full stack developer with a passion for web technologies and
              design. I love creating interactive and engaging web applications
              that provide a great user experience. I enjoy working with modern
              frameworks and libraries, and I am always eager to learn new
              skills and improve my craft.
            </p>

            <div className="w-full h-full flex flex-row justify-start items-center gap-4">
              <a className="aspect-square pixel-border-box w-fit tint-border-red relative hover:bg-button-focus transition-colors duration-250">
                <span className="w-full h-full flex justify-center items-center container-content">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="scale-150"
                  >
                    {" "}
                    <path
                      d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                </span>
              </a>
              <a className="aspect-square pixel-border-box w-fit tint-border-red relative hover:bg-button-focus transition-colors duration-250">
                <span className="w-full h-full flex justify-center items-center container-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="scale-150"
                  >
                    {" "}
                    <path
                      fill="currentColor"
                      d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                    />{" "}
                  </svg>
                </span>
              </a>
              <a className="aspect-square pixel-border-box w-fit tint-border-red relative hover:bg-button-focus transition-colors duration-250 ">
                <span className="w-full h-full flex justify-center items-center container-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0.5 0 9 9"
                    shapeRendering="crispEdges"
                    width="24"
                    height="24"
                    className="scale-150"
                  >
                    <path
                      stroke="currentColor"
                      d="M2 1h1M2 3h1M4 3h3M2 4h1M4 4h1M7 4h1M2 5h1M4 5h1M7 5h1M2 6h1M4 6h1M7 6h1M2 7h1M4 7h1M7 7h1"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <
        id="section-content"
        className="grid grid-cols-2 max-sm:grid-cols-1 gap-4"
      >
        <span className="grow basis-2/3 w-full min-w-2/3 gap-4 flex flex-col">
          <TerminalIntro />
        </span>
        {/* <div className="basis-1/3 aspect-square grow">
          <div className="pixel-border-1 tint-border-dark relative aspect-square -left-full w-1/2 h-1/2  ">
            <span className="flex justify-center items-center container-content   bg-blue-500"></span>
          </div>
        </div> */}
    </section>
  );
}

export default About;
