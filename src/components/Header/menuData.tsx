import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Schools",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Primary Schools",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "High Schools",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Universities",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  {
    id: 4,
    title: "Contacts",
    newTab: false,
    path: "/support",
  },
  {
    id: 2.3,
    title: "FAQs",
    newTab: false,
    path: "/docs",
  },
 

  
];

export default menuData;
