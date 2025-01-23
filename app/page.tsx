"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FloatingDockDemo } from "@/components/Navbat";
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/Timeline";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
       <div className="z-10">
         <Hero />
        <Grid />
        <Approach />
        <TimelineDemo/>
        <RecentProjects />
       
        <Footer />
       </div>
        <div className="z-100">
        <FloatingDockDemo/>

        </div>
      </div>
    </main>
  );
};

export default Home;
