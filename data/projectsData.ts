interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Peer Dev',
    description: `Peer Dev is a collaborative Q&A platform designed for developers to ask questions, share answers,
      and engage in technical discussions. Built with Next.js, React, Tailwind CSS, MongoDB, Mongoose, and Clerk for 
      authentication, Peer Dev delivers a modern, performant, and user-friendly experience for the developer community.`,
    imgSrc: '/static/images/projects/peer-dev/thumbnail-light.png',
    href: '/projects',
    tags: ['NextJS', 'React', 'MongoDB', 'Typescript', 'Mongoose', 'Tailwind', 'Clerk'],
  },
  {
    title: 'Online Education Platform',
    description: `A comprehensive Online Education platform, to streamline and enhance communication, learning, 
      and administration in educational institutions. Developed using .NET Core, React, SignalR, SQL Server, Entity Framework.`,
    imgSrc: '/static/images/projects/education/thumbnail.png',
    href: '/projects',
    tags: [
      '.NET',
      'React',
      'SQL Serer',
      'C#',
      'Javascript',
      'Material UI',
      'SignalR',
      'Entity Framework',
    ],
  },
  {
    title: 'Web based Tailor System',
    description: `Created an advanced online tailoring system designed to streamline and expedite manual tasks 
      for a clothing tailor brand/shop using ASP.NET Web Forms and HTML, CSS, JavaScript and jQuery.`,
    imgSrc: '/static/images/projects/tailor/thumbnail.png',
    href: '/projects',
    tags: ['.NET', 'Web Forms', 'JavaScript', 'jQuery'],
  },
  {
    title: 'Right Page Chrome Extension',
    description: `Rightpage is a powerful Chrome Extension designed to streamline your customer support by generating 
    automated responses from Zendesk tickets. It allows users to tailor their responses with a personalized touch by 
    setting default draft templates for the messages. Developed using React, Ant Design, Zustand`,
    imgSrc: '/static/images/projects/rightpage/thumbnail.png',
    href: '/projects',
    tags: ['React', 'Ant Design', 'Zustand', 'Browser Extension'],
  },
  {
    title: 'Foodie Restaurant Website',
    description: `Designed and Developed a Website for a restaurant named Foodie, using HTML, CSS, SCSS, Bootstrap, JavaScript and jQuery.`,
    imgSrc: '/static/images/projects/foodie/thumbnail.png',
    href: '/projects',
    tags: ['JavaScript', 'jQuery', 'CSS', 'SCSS'],
  },
]

export default projectsData
