export const portfolioData = {
  name: "Deep Hiren Kotecha",
  title: "Full Stack Software Engineer",
  subtitle: "Graduate MS.CSE Student @ Penn State",
  tagline:
    "Building scalable systems at the intersection of engineering and research.",
  email: "deep.kotecha2024@gmail.com",
  psuEmail: "djk6507@psu.edu",
  phone: "+1 (814) 699-5810",
  linkedin: "https://www.linkedin.com/in/deep-kotecha-59206921b",
  github: "https://github.com/deepk2001",
  location: "University Park, Pennsylvania",

  about: `Graduate Student in Computer Science at Penn State with 2 years of full-time experience as a Full Stack Software Engineer. 
  Skilled in modern web and mobile development with a strong foundation in JavaScript frameworks. 
  Passionate about applying full stack expertise to academic projects and research, while continuously exploring new technologies to create innovative and impactful solutions.`,

  experience: [
    {
      role: "Software Development Engineer I & II",
      company: "Bajaj Finserv Health Limited",
      period: "July 2023 – July 2025",
      type: "Full-time",
      highlights: [
        "Implemented Micro-frontend architectures to improve disaster recovery and scalability.",
        "Expanded Health-pay product using UPI infrastructure with a QR scanner journey for cashless insurance at any compliant healthcare provider.",
        "Co-Developed an organisation-wide Payment Gateway Interface achieving a 99% transaction success rate.",
        "Co-Developed an Internal-use-only UI components Library.",
        "Led development of an AI-powered Health Risk Assessment System visualising at-risk organs on a 3D human model with 70% accuracy.",
      ],
    },
    {
      role: "Associate Software Engineering Intern",
      company: "Bajaj Finserv Health Limited",
      period: "Oct 2022 – Jun 2023",
      type: "Internship",
      highlights: [
        "Contributed to the development of Health-pay, a unique insurance product enabling cashless OPD claims without out-of-pocket payments.",
      ],
    },
    {
      role: "Product Development Intern",
      company: "Code to Enhance Learning Trust (Non-Profit)",
      period: "Sep 2021 – Dec 2021",
      type: "Internship",
      highlights: [
        "Co-assisted concept development for a portal aimed at training under-privileged children in coding.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science in Computer Science and Engineering (MS. CSE)",
      institution: "Pennsylvania State University",
      location: "University Park, PA",
      period: "Present",
      status: "ongoing",
    },
    {
      degree:
        "Bachelor of Technology in Computer Science and Engineering (CSE)",
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu, India",
      period: "Jun 2023",
      status: "completed",
    },
  ],

  projects: [
    {
      title: "Distributed Map-Reduce Framework",
      description:
        "Multi-threaded Map-Reduce framework using gRPC on AWS EC2 machines. Implements distributed computing patterns with fault tolerance.",
      tags: [
        "C++",
        "gRPC",
        "AWS EC2",
        "Distributed Systems",
        "Multi-threading",
      ],
      link: "https://github.com/CSE511-Fall25/programming-assignment-1-a-mapreduce-framework-yd/blob/main/CSE%20511%20Project%201%20Report%20Final.pdf",
    },
    {
      title: "ABD Protocol Implementation",
      description:
        "Implementation of the ABD (Attiya, Bar-Noy, Dolev) distributed register protocol in Node.js with a multithreaded client simulator in C.",
      tags: [
        "Node.js",
        "C",
        "Distributed Systems",
        "Multi-threading",
        "Consensus",
      ],
      link: "https://github.com/deepk2001/yd-cse511-programming-assignment-2",
    },
    {
      title: "AI Health Risk Assessment System",
      description:
        "Led development of an AI system that analyses lab reports and lifestyle data, visualising at-risk organs on a 3D human model for early health issue identification.",
      tags: ["AI/ML", "Three.js", "React", "Health Tech", "3D Visualization"],
      link: null,
    },
    {
      title: "LightUI — ES Module Component Library",
      description:
        "Lightweight ES module-based UI components library with customisable theming. Built for performance and developer experience.",
      tags: ["TypeScript", "ES Modules", "Component Library", "Design System"],
      link: null,
      comingSoon: true,
    },
  ],

  research: [
    {
      title:
        "Privacy-Preserving Liver Disease Prediction with Homomorphic Encryption",
      authors: "Malekar, T., Parekh, S., Kotecha, D., Babu, Y.",
      venue: "Security, Privacy and Data Analytics. ISPDA 2024",
      publisher:
        "Springer, Singapore. Lecture Notes in Electrical Engineering, vol 1444.",
      year: "2026",
      doi: "https://doi.org/10.1007/978-981-96-8283-6_25",
    },
    {
      title:
        "Dissecting Micro-frontends: A Deep Dive into Architectural Components",
      authors: "Kotecha, D. et al.",
      venue:
        "National Conference on Advanced Computer Science and Information Technology (NCACSI-24)",
      publisher: "Coimbatore, India",
      year: "2024",
      doi: "https://kuey.net/index.php/kuey/article/view/8299",
    },
  ],

  skills: {
    Frontend: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Three.js",
      "HTML",
      "CSS",
    ],
    Backend: ["Node.js", "NestJS", "Express.js", "REST API", "Kafka"],
    "Cloud & DevOps": [
      "AWS EC2",
      "Azure Web Services",
      "Kubernetes",
      "Helm",
      "Git",
    ],
    Databases: ["MySQL", "MongoDB"],
    Languages: ["Python", "C/C++"],
    Mobile: ["Android", "iOS", "React Native"],
  },
};
