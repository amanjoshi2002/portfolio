export type Experience = {
  id: string;
  title: string;
  company: string;
  duration: string;
  type: 'internship' | 'part-time' | 'competition';
  summary: string;
  detailedContent: string;
  certificates?: string[];
  photos?: string[];
};

export const experiences: Experience[] = [
  {
    id: '4',
    title: "Participant",
    company: "Persistent Systems Semicolon Hackathon",
    duration: "2024",
    type: "competition",
    summary: "Participated in a 24-hour hackathon, working with Flask and React.",
    detailedContent: `
      <h2>Rapid Development Challenge: Persistent Systems Semicolon Hackathon</h2>
      <p>As part of my internship at Persistent Systems, I participated in the Semicolon Hackathon, a 24-hour event that challenged us to create innovative solutions using Flask and React.</p>
      
      <h3>Experience Highlights:</h3>
      <ul>
        <li>Worked intensively for 24 hours to develop a solution using Flask and React.</li>
        <li>Applied skills in both backend (Flask) and frontend (React) development.</li>
        <li>Collaborated with team members to ideate, design, and implement our project.</li>
        <li>Gained valuable experience in rapid prototyping and problem-solving under time constraints.</li>
      </ul>

      <p>This hackathon experience enhanced my ability to work efficiently under pressure and deepened my understanding of Flask and React in practical applications. It was an excellent opportunity to apply the skills I've been developing during my internship in a high-intensity, collaborative environment.</p>
    `,
    certificates: ["/certificates/persistentcert.png"],
    photos: ["/photos/persistent1.jpeg"]
  },
  {
    
    id: '1',
    title: "Student Intern",
    company: "Persistent Systems Ltd.",
    duration: "Present",
    type: "internship",
    summary: "Developing modern web applications using Next.js, React, Tailwind CSS, and TypeScript in a professional environment.",
    detailedContent: `
      <h2>Advancing Web Development Skills in a Professional Setting</h2>
      <p>As a Student Intern at Persistent Systems Ltd., I'm immersed in modern web development, focusing on Next.js, React, Tailwind CSS, and TypeScript. This opportunity allows me to apply and enhance my skills in a real-world, professional environment.</p>
      
      <h3>Key Responsibilities and Achievements:</h3>
      <ul>
        <li>Developing web applications using Next.js and React, leveraging the power of server-side rendering and static site generation.</li>
        <li>Implementing responsive and visually appealing user interfaces with Tailwind CSS, ensuring a seamless experience across various devices.</li>
        <li>Utilizing TypeScript to write more robust and maintainable code, enhancing the overall quality of our projects.</li>
        <li>Created a responsive booking site using Next.js, React, and Tailwind CSS, showcasing the ability to build practical, user-friendly applications.</li>
        <li>Actively participating in code reviews and team discussions, contributing to the improvement of our development processes.</li>
      </ul>

      <h3>Skills Enhanced:</h3>
      <ul>
        <li>Deepened understanding of Next.js for building optimized React applications</li>
        <li>Improved proficiency in React, focusing on functional components and hooks</li>
        <li>Mastered Tailwind CSS for rapid, responsive UI development</li>
        <li>Strengthened TypeScript skills, improving code quality and developer experience</li>
        <li>Gained experience with version control using Git and collaborative development workflows</li>
      </ul>

      <h3>Project Highlight: Next.js Booking Application</h3>
      <p>A key achievement during this internship has been the development of a booking application using Next.js. This project allowed me to:</p>
      <ul>
        <li>Implement server-side rendering and static site generation for optimal performance</li>
        <li>Create a responsive design system using Tailwind CSS, ensuring consistency and adaptability</li>
        <li>Develop reusable React components, improving code maintainability</li>
        <li>Utilize TypeScript for type-safe development, reducing runtime errors</li>
        <li>Integrate with RESTful APIs to handle data management and booking logic</li>
      </ul>

      <h3>Professional Growth:</h3>
      <p>This internship at Persistent Systems Ltd. has been crucial for my professional development:</p>
      <ul>
        <li>Gained insight into industry best practices for modern web development</li>
        <li>Improved ability to work collaboratively in a team environment</li>
        <li>Enhanced problem-solving skills by tackling real-world challenges</li>
        <li>Developed a deeper understanding of the software development lifecycle in a professional setting</li>
      </ul>

      <p>As I continue my internship, I'm excited to further refine my skills in Next.js, React, Tailwind CSS, and TypeScript. This experience is providing me with a solid foundation in modern web development practices, preparing me for a successful career in the field.</p>
    `
  },
  {
    id: '2',
    title: "Intern",
    company: "Sofueled",
    duration: "2024",
    type: "internship",
    summary: "Focused on Node.js and React development, collaborating on web application projects.",
    detailedContent: `
      <h2>Key Responsibilities and Achievements:</h2>
      <ul>
        <li>Working on Node.js and React development.</li>
        <li>Collaborating on web application projects.</li>
        <li>Gaining experience in professional software development.</li>
        <li>Actively learning and contributing to team goals.</li>
      </ul>
      <p>During this internship, I had the opportunity to dive deep into Node.js and React development. This experience allowed me to work on various web application projects, enhancing my understanding of full-stack development.</p>
      <p>Collaboration was a key aspect of this internship. I worked closely with experienced developers, learning best practices in software development and improving my ability to work effectively in a team environment. This experience significantly contributed to my growth as a developer and prepared me for future challenges in the field.</p>
    `
  },
  {
    id: '3',
    title: "Part-time Website Developer",
    company: "Shri Laxmi Trading Company (SLTC)",
    duration: "2022",
    type: "part-time",
    summary: "Developed and maintained SLTC website using Django and Bootstrap, focusing on responsive design and user experience.",
    detailedContent: `
      <h2>Key Responsibilities and Achievements:</h2>
      <ul>
        <li>Developed and maintained SLTC website with Django and Bootstrap, ensuring business needs were met.</li>
        <li>Implemented responsive design for optimal viewing across devices.</li>
        <li>Conducted regular part-time updates and contributed to enhancing user experience.</li>
      </ul>
      <p>As a part-time website developer for SLTC, I was responsible for creating and maintaining their company website. This role allowed me to apply my skills in Django and Bootstrap to develop a functional and visually appealing website that effectively represented the company's brand and met their business requirements.</p>
      <p>A key focus of my work was implementing responsive design principles, ensuring that the website provided an optimal viewing experience across a wide range of devices. This attention to detail significantly improved the site's accessibility and user engagement.</p>
      <p>Throughout my tenure, I conducted regular updates to the website, continuously improving its functionality and user experience. This part-time role provided valuable experience in managing a live website for a real business, enhancing my skills in both front-end and back-end development.</p>
    `
  },
  {
    id: '5',
    title: "2nd Place Winner",
    company: "GEC 24 Hours Hackathon",
    duration: "2024",
    type: "competition",
    summary: "Developed an Android Fact Checking Application using Flutter and Flask, securing 2nd place.",
    detailedContent: `
      <h2>Innovation Under Pressure: GEC Hackathon Success</h2>
      <p>During the GEC Hackathon, our team, the "fab-four," clinched the 2nd place with our Android Fact Checking Application. This 24-hour challenge pushed our limits and showcased our ability to deliver impactful projects under pressure.</p>
      
      <h3>Project Highlights:</h3>
      <ul>
        <li>Utilized Flutter for the frontend, ensuring a smooth and responsive user interface.</li>
        <li>Implemented a Flask backend, providing robust server-side functionality.</li>
        <li>Integrated machine learning algorithms to enhance the fact-checking capabilities.</li>
        <li>Delivered an innovative solution that garnered acclaim for its effectiveness.</li>
      </ul>

      <p>This achievement underscores our dedication and expertise in harnessing technology for meaningful change, demonstrating our ability to work effectively as a team and produce high-quality results in a time-constrained environment.</p>
    `,
    photos: ["/photos/gec2.jpeg", "/photos/gec.jpeg"]
  },
  {
    id: '6',
    title: "2nd Place Winner",
    company: "AITD Goa Hackathon",
    duration: "2024",
    type: "competition",
    summary: "Developed two AI chatbots: DataDashBot for Ecommerce and MediMentor for Healthcare.",
    detailedContent: `
      <h2>Revolutionizing Industries with AI: AITD Goa Hackathon</h2>
      <p>Our team secured 2nd place in the AITD Goa Hackathon by developing two groundbreaking AI chatbots: DataDashBot for Ecommerce and MediMentor for Healthcare.</p>
      
      <h3>Project Details:</h3>
      <ul>
        <li>DataDashBot: An AI-powered chatbot designed to revolutionize customer engagement in ecommerce.</li>
        <li>MediMentor: An innovative chatbot aimed at enhancing healthcare delivery through AI assistance.</li>
        <li>Played a pivotal role in the design and implementation of both chatbots.</li>
        <li>Demonstrated technical prowess and resilience in developing complex AI solutions.</li>
      </ul>

      <p>This win underscores the limitless possibilities when dedication meets technical excellence, showcasing our ability to create innovative solutions that have real-world impact in multiple industries.</p>
    `,
    certificates: ["/certificates/aidcertificate.jpg"],
    photos: ["/photos/aitd1.jpeg", "/photos/aitd.jpeg"]
  },
  {
    id: '8',
    title: "Participant",
    company: "PCCE E-Cell Hackathon",
    duration: "2024",
    type: "competition",
    summary: "Developed Medilens, a Flutter app with Flask backend for medicine information retrieval.",
    detailedContent: `
      <h2>Innovating Healthcare: Medilens at PCCE E-Cell Hackathon</h2>
      <p>For the PCCE E-Cell Hackathon, I developed Medilens, a mobile application that bridges the gap between users and medicine information.</p>
      
      <h3>Project Features:</h3>
      <ul>
        <li>Frontend developed using Flutter, ensuring cross-platform compatibility.</li>
        <li>Backend powered by Flask, providing a robust and efficient server-side system.</li>
        <li>Enables users to photograph medicines and retrieve detailed information.</li>
        <li>Provides information on side effects and uses based on user queries.</li>
      </ul>

      <p>This project demonstrates my proficiency in mobile app development and backend integration, showcasing the ability to create practical solutions that can have a significant impact on everyday life.</p>
    `
  },
  {
    id: '7',
    title: "Participant",
    company: "NIT Goa 24 Hours Hackathon",
    duration: "2024",
    type: "competition",
    summary: "Created an AI agent that converts text stories into photo stories in video format.",
    detailedContent: `
      <h2>Bringing Stories to Life: NIT Goa Hackathon Innovation</h2>
      <p>At the NIT Goa 24 Hours Hackathon, I participated in creating an innovative AI agent that transforms text stories into visual narratives.</p>
      
      <h3>Project Highlights:</h3>
      <ul>
        <li>Developed an AI agent capable of interpreting text stories.</li>
        <li>Implemented functionality to generate relevant images based on the story content.</li>
        <li>Created a system to compile these images into a cohesive video format.</li>
        <li>Demonstrated the potential of AI in creative content generation.</li>
      </ul>

      <p>This project showcases my ability to work with cutting-edge AI technologies and apply them to create unique, engaging content. It highlights the intersection of natural language processing, image generation, and video compilation in a novel application.</p>
    `,
    certificates: ["/certificates/certif-nit.jpg"]
    
  },
 
];