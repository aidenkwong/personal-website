export const info = {
  baseUrl: "https://aidenkwong.vercel.app",
  name: "Aiden Kwong",
  jobDescription: "Fullstack Developer",
  about: `I'm a software engineer based in Toronto, Canada.
  I'm passionate about building software that leverages the latest technologies to solve real-world problems.
  My expertise lies in building web applications using React and Node.js and my language of choice is TypeScript.
  I'm a lifelong learner and I'm always looking for opportunities to improve my skills and learn new technologies.
  `,

  experience: [
    {
      name: "Aigniter Holdings",
      location: "Hong Kong",
      startDate: "May 2022",
      endDate: "Dec 2022",
      description: [
        "- Worked with 3 and 5 software engineers in two teams for SDLC of e-commerce and logistics products, and communicated with the product manager and operation team for their needs via Atlassian products (Jira and Confluence), serving thousands of users and companies",
        "- Created a mobile app with Flutter, dashboard web pages with Vue, and servers with Node.js for both products, with GitLab as our DevOps tool and AWS as our deployment platform to maintain robust and secured hosting and deployment for service reliability",
        "- Implemented REST and API Gateway services integrated with Swagger and authentication using an SOA server-side framework called Nestjs, notifications with Firebase Cloud Messaging, and a full-text search function with ElasticSearch which decreased navigation time by about 30 seconds",
        "- In addition to building features and maintenance, also built CI/CD pipelines, Docker, and deploy through ECS for teams to facilitate development workflow and consistency by reducing repetitive tasks which consume a couple of minutes each time",
      ],
    },
    {
      name: "Data Visualization Developer (internship)",
      location: "Hong Kong",
      startDate: "Jan 2022",
      endDate: "Mar 2022",
      description: [
        "- Created scrollytelling websites showcasing interactive data visualization charts and UI for the general public, with the leverage of d3.js, and other related frameworks and libraries which attracted thousands to follow us on social media",
      ],
    },
  ],

  education: [
    {
      name: "The Chinese University of Hong Kong",
      location: "Hong Kong",
      startDate: "2017",
      endDate: "2022",
      description: [
        "Bachelor of Engineering (Hons) in Mechanical and Automation Engineering",
      ],
    },
  ],

  socialMedia: {
    // facebook: "https://www.facebook.com/profile.php?id=100022899849583",
    // twitter: "https://twitter.com/Uzzii_21",
    github: "https://github.com/AidenKwong",
    email: "aidenkwong5@gmail.com",
    linkedin: "https://www.linkedin.com/in/aidenkwong/",
  },

  projects: [
    {
      title: "Dezktop",
      isFeatured: true,
      thumbnail: "/assets/images/dezktop.png",
      githubUrl: "https://github.com/aidenkwong/Dezktop",
      liveUrl: "https://dezktop.vercel.app/",
    },
  ],
};
