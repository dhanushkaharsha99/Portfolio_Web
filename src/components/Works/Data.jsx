import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

import './AppDesign'


export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Web Design",
    category: "web",
    url: "./AppDesign", 
  },
  {
    id: 2,
    image: Work2,
    title: "App Mobile",
    category: "app",
    url: "/works/AppMobile", 
  },
  {
    id: 3,
    image: Work3,
    title: "Designs",
    category: "design",
    url: "/works/Designs", 
  },

];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "app" },
  { name: "design" },
];
