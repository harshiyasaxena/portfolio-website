import { motion } from "framer-motion";

const logoMap = {
  react: "/logos/react.webp",
  springboot: "/logos/springboot.webp",

  java: "/logos/java.png",
  python: "/logos/python.png",
  javascript: "/logos/javascript.png",
  cplusplus: "/logos/cplusplus.png",
  c: "/logos/c.png",
  html: "/logos/html (2).png",
  css: "/logos/css.png",

  nodejs: "/logos/nodejs.webp",
  express: "/logos/express.webp",
  bootstrap: "/logos/bootstrap.webp",

  mysql: "/logos/mysql.png",
  mongodb: "/logos/mongodb.png",

  sql: "/logos/sql.png",
  powerbi: "/logos/powerbi.png",
  excel: "/logos/excel.png",
  etl: "/logos/etl.png",
  analysis: "/logos/analysis.png",

  git: "/logos/git.png",
  github: "/logos/github.png",
  jira: "/logos/jira.png",
  selenium: "/logos/selenium.png",
  vba: "/logos/vba.png",

  dsa: "/logos/dsa.png",
  oop: "/logos/oop.png",
  dbms: "/logos/dbms.png",
  systemdesign: "/logos/systemdesign.png",
};

const displayName = {
  react: "React",
  springboot: "Spring Boot",
  java: "Java",
  python: "Python",
  javascript: "JavaScript",
  cplusplus: "C++",
  c: "C",
  html: "HTML",
  css: "CSS",
  nodejs: "Node.js",
  express: "Express",
  bootstrap: "Bootstrap",
  mysql: "MySQL",
  mongodb: "MongoDB",
  sql: "SQL",
  powerbi: "Power BI",
  excel: "Excel",
  etl: "ETL",
  analysis: "Data Analysis",
  git: "Git",
  github: "GitHub",
  jira: "Jira",
  selenium: "Selenium",
  vba: "VBA",
  dsa: "DSA",
  oop: "OOP",
  dbms: "DBMS",
  systemdesign: "System Design",
};

const Planet = ({ skill, color, size }) => {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      whileHover={{
        scale: 1.12,
        y: -12,
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 18,
        },
      }}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      {/* Glow */}

      <div
        className="absolute w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: color,
        }}
      />

     

      {/* Logo */}

      <div className="relative z-10 flex items-center justify-center">
        <img
          src={logoMap[skill]}
          alt={displayName[skill]}
          draggable={false}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          className="object-contain select-none pointer-events-none drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]"
        />
      </div>

      {/* Skill Name */}

      <p className="mt-4 text-[13px] font-medium tracking-wide text-slate-300 text-center">
        {displayName[skill]}
      </p>
    </motion.div>
  );
};

export default Planet;