import React, { useEffect, useState } from "react";

function Header() {
  // Typewriter effect entries
  const entries = [
    "theo baker",
    "developer",
    "designer",
    "tinkerer",
    "web enthusiast",
  ];
  const [displayed, setDisplayed] = useState("");
  const [entryIdx, setEntryIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = entries[entryIdx];
    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 90);
    } else if (deleting && charIdx >= 0) {
      setDisplayed(current.slice(0, charIdx));
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setEntryIdx((entryIdx + 1) % entries.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, entryIdx, entries]);

  return (
    <div className="header-layout   text-white top-0 left-0 right-0 px-8 py-6 items-center flex justify-between pixel-border-b ">
      {/* Left section with typewriter effect */}
      <div className="max-sm:scale-150 w-full flex max-sm:justify-center">
        <h1 className="text-text-dark text-nowrap">
          {displayed}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
      <a
        className={
          "hover:bg-button-focus transition-colors duration-250 pixel-border-box w-fit relative flex flex-row flex-nowrap justify-center items-end gap-1  px-2 pl-1"
        }
        href="mailto:theobaker99@gmail.com"
      >
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

        <p className="h-min  w-full flex items-end justify-end text-2xl leading-none mb-1">
          {"Contact"}
        </p>
      </a>
    </div>
  );
}
export default Header;
