import MANAGMENT from "./assets/manag.jpg";
import APPARTY from "./assets/key.jpg";
import POST from "./assets/posts.jpg";

type Item = {
    name: string;
    image: string;
    description: string;
    technologies: string[];
    githubLink: string;
  };
  
  export const items: Item[] = [
    {
      name: "Posts Project",
      image: POST,
      description: "A project that deals with uploading posts to a social network, logging in, permissions, and more",
      technologies: ["Angular", "Node.js", "CSS","MongoDB",'Express'],
      githubLink: 'https://github.com/odedh92/Posts-Project'

    },
    {
      name: "Management App",
      image: MANAGMENT,
      description: "Full-stack project management system with GraphQL, Express, MongoDB, React, and Apollo.",
      technologies: ["React", "Node.js", "MongoDB",'Express','GraphQL','Apollo',],
      githubLink: 'https://github.com/odedh92/Managment-app'
    },
    {
      name: "Apparty App",
      image: APPARTY,
      description: "A mobile application that allows you to search for apartments for sale, sublet or rent. You can post and search, filter and chat with the ad owner",
      technologies: ["iOS", "Firebase", "Authentication",'URLSession','Location Coordinate','FireStore','Callback, Singelton'],
      githubLink: 'https://github.com/odedh92/AppartyApp'
    },
  ];
  

  