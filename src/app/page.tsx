"use client";

import Header from "./components/header";

import About from "./components/about";
import Projects from "./components/projects";
import BottomBar from "./components/bottombar";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        id="page-content"
        className="page-layout"
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Header />
        <main className="main-layout flex flex-col gap-8 items-center justify-center">
          <About />
          <Projects />
          {/* <div className="container pixel-border-box w-48 aspect-square" /> */}
        </main>
        {/* <div className="left-layout pixel-border-r">
          <TableContents />
        </div>
        <div className="right-layout pixel-border-l" /> */}
      </motion.div>
      <BottomBar />
    </AnimatePresence>
  );
}
