import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
 
  IconHome,
  
  IconTerminal2,
 
  IconDeviceProjector,
  IconAddressBook,
  IconTextResize,
  IconBrandLeetcode,
  IconCode
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Resume",
      icon: (
        
        <IconTextResize className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://drive.google.com/file/d/1J4g6AfAcIa3J_4BEq7vZY23KPDWTcqgG/view?usp=sharing",
    },
   
    

    {
      title: "Projects",
      icon: (
       
        <IconDeviceProjector className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#projects",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/saumya-14",
    },
    {
      title: "Leetcode",
      icon: (
        
        
        <IconBrandLeetcode  className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://leetcode.com/u/saumya14/",
    },
    {
      title: "CodeForces",
      icon: (
        
        
        <IconCode  className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://codeforces.com/profile/Saumya14",
    },
    {
      title: "Contact",
      icon: (
        
       <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex  items-center justify-center h-full w-full">
      <FloatingDock
      
        items={links}
      />
    </div>
  );
}
