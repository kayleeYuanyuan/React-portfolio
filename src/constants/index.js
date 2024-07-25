import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a results-oriented web developer with a focus on performance optimisation, having experience in both web development and software testing. Extensive knowledge and experience in Python and JavaScript. Proficient in JavaScript (React), RESTful API and MongoDB. Demonstrated expertise in working within an agile development environment and delivering projects on time.`;

export const ABOUT_TEXT = `I am an enthusiastic web developer with a strong foundation in building dynamic and user-centric web applications. My journey in web development started during my internship, where I gained hands-on experience with technologies like HTML, CSS, JavaScript, and various frameworks. Driven by a passion for learning, I have immersed myself in new tools and techniques, striving to enhance my skills and deliver effective solutions. I thrive in collaborative settings and am eager to tackle challenges that push my boundaries. Outside of my professional work, I enjoy exploring emerging technologies and contributing to community projects, always seeking to grow both personally and professionally.`;

export const EXPERIENCES = [
  {
    year: "2024.02 - 2024.06",
    role: "Web System Developer Intern",
    company: "Darkspede",
    description: `Added web features to VR building projects, including an issue tracker system and a Q&A system for building data. Used C# to implement an application that calls the OpenAI API to upload JSON or CSV files and ask questions about the contents. Developed an issue tracker system using HTML, CSS, JavaScript, and C#, enabling users to post, modify, and search issues stored in MongoDB, with keyword, priority, and category filters, and time-based sorting.`,
    technologies: ["Javascript", "HTML", "CSS", "mongoDB", "C#", "RESTful API"],
  },
  {
    year: "2024.01 - 2024.06",
    role: "Quality Assurance Intern",
    company: "Anystay",
    description: `Responsible for performing quality assurance on the B&B website, including writing test cases, executing manual tests, writing bug reports, etc.`,
    technologies: ["Jira", "AWS", "Dynamodb"],
  },
  {
    year: "2022.07 - 2022.09",
    role: "Software Testing Intern",
    company: "Qingyan Lingzhi",
    description: `Tested the questionnaire system on both web and app platforms, performing functional, compatibility, and regression testing on PC and Android. Wrote and executed test cases according to requirement documents.`,
    technologies: ["test cases", "functional testing", "regression testing"],
  },
  {
    year: "2021.11 - 2022.03",
    role: "Test Intern",
    company: "Keya Medical Company",
    description: `Tested medical imaging software, focusing on a head and neck imaging app. Responsibilities included writing and executing test cases, and performing regression testing to ensure software reliability and accuracy.`,
    technologies: ["manual testing", "test cases"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Distributed shared whiteboard",
    image: project1,
    description:
      "Multiple people share the whiteboard. Multiple users can draw on the whiteboard at the same time. Users are divided into managers and users. Managers can create and save the whiteboard. They can also remove the connection of the specified user and make it impossible to continue to draw.",
    technologies: ["Java", "Socket Programming", "WindowBuilder"],
  },
  {
    title: "Online learning platform",
    image: project2,
    description:
      "A learning exchange website, where students can post questions, teachers can answer questions for students, or book some tutors on the website for face-to-face tutoring for students.",
    technologies: ["PHP", "CodeIgnitor3", "Nginx", "AJAX", "Bootstrap"],
  },
  {
    title: "Key Dungeon Adventure Game",
    image: project4,
    description:
      "In the game map, within the specified number of steps, go to eat the key, and then go to the exit, you will succeed, otherwise you will fail.",
    technologies: ["Python", "tkinter"],
  },
];

export const CONTACT = {
  address: "37 Clay drive, Doncaster Vic 3108 ",
  phoneNo: "+61 4782 238 28 ",
  email: "yuanyuanma817@gmail.com",
};
