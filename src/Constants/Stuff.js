// for any other constant information; change easier than to find in the code

import { Link } from "react-router-dom";
import { people1, people2, people3 } from "./Images";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    Link: "/",
  },
  {
    id: "about",
    title: "About",
    Link: "/about.jsx",
  },
  {
    id: "data",
    title: "Data",
    Link: "/data.jsx",
  },
  {
    id: "login",
    title: "Login",
    Link: "/login.jsx",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Signups",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Years of Event",
    value: "0",
  },
  {
    id: "stats-3",
    title: "Number of Matched",
    value: "70+",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Write testimonial here for future feedback",
    name: "Anonymous 1 // name",
    title: "which school and year they from",
    img: people1,
  },
  {
    id: "feedback-2",
    content: "Write testimonial here for future feedback",
    name: "Anonymous 2 // name",
    title: "which school and year they from",
    img: people2,
  },
  {
    id: "feedback-3",
    content: "Write testimonial here for future feedback",
    name: "Anonymous 3 // name",
    title: "which school and year they from",
    img: people3,
  },
];

export const footerLinks = [
  {
    title: "Supporting Club Links",
    links: [
      {
        name: "EEEClub",
        link: "https://www.instagram.com/eeeclubntu/",
      },
      {
        name: "SSSClub",
        link: "https://www.instagram.com/ntusssclub/",
      },
      {
        name: "dEEEvelopers",
        link: "https://www.instagram.com/deeevelopersntu/",
      },
      {
        name: "MLDA",
        link: "https://www.instagram.com/mlda_at_eee_ntu/",
      },
    ],
  },
];
