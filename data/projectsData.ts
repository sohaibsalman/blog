interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Online Education Platform ',
    description: `A comprehensive Online Education platform, to streamline and enhance communication, learning, 
      and administration in educational institutions. Developed using .NET Core, React, SignalR, SQL Server, Entity Framework.`,
    imgSrc: '/static/images/online-education-platform.png',
    href: '/projects',
  },
  {
    title: 'Web based Tailor System',
    description: `Created an advanced online tailoring system designed to streamline and expedite manual tasks 
      for a clothing tailor brand/shop using ASP.NET Web Forms and HTML, CSS, JavaScript and jQuery.`,
    imgSrc: '/static/images/tailor-system.png',
    href: '/projects',
  },
  {
    title: 'Right Page Chrome Extension',
    description: `Rightpage is a powerful Chrome Extension designed to streamline your customer support by generating 
    automated responses from Zendesk tickets. It allows users to tailor their responses with a personalized touch by 
    setting default draft templates for the messages. Developed using React, Ant Design, Zustand`,
    imgSrc: '/static/images/rightpage.png',
    href: '/projects',
  },
]

export default projectsData
