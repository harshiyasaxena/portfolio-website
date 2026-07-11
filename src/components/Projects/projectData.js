import { MarkerType } from "@xyflow/react";

export const projectData = [
  {
    id: "workforge",
    name: "WorkForge",
    role: "Full Stack Developer",
    files: [
      { id: "readme", name: "README.md", type: "markdown" },
      { id: "features", name: "Features.flow", type: "flow" },
      { id: "tech", name: "tech-stack.json", type: "json" },
      { id: "gallery", name: "Gallery", type: "gallery" },
    ],
    github: "https://github.com/YOUR_USERNAME/workforge",
    readme: `# WorkForge\n\nEnterprise Workforce Management System\n\nA full-stack platform built using React.js and Spring Boot.\n\n## Highlights\n- Employee & Manager dashboards\n- JWT Authentication`,
    features: ["Role Based Access Control", "JWT Authentication"],
tech: {
      "Core Language": "Java 21",
      "Backend Ecosystem": "Spring Boot 3 + Spring Data JPA (Hibernate)",
      "Security Protocols": "Spring Security + JWT (Secure Token-Based Auth)",
      "Frontend UI Matrix": "React.js + Vite",
      "Interface Routing": "React Router DOM",
      "Fluid Design Engine": "Tailwind CSS + Framer Motion Animations",
      "Data Visualization": "React Flow Library + Recharts Charts Engine",
      "API Communications": "Axios + Postman Testing Environment",
      "Relational Database": "MySQL Architecture via Railway Engine Hosting",
      "Cloud Deployment": "Vercel (Frontend Live) + Render Framework (Backend API Hub)",
      "Version Framework": "Git & GitHub Infrastructure Core"
    }, 
    
    // WORKFORGE HORIZONTAL MAP
    
    // WORKFORGE VERTICAL MAP
    flowData: {
      nodes: [
        { id: "wf", type: "feature", position: { x: 250, y: 20 }, data: { title: "WorkForge Core", subtitle: "Mainframe Gateway", icon: "💼" } },
        { id: "rbac", type: "feature", position: { x: 250, y: 140 }, data: { title: "Role Based Access", subtitle: "JWT Guard Gate", icon: "🔐" } },
        { id: "mgr", type: "feature", position: { x: 50, y: 260 }, data: { title: "Manager Control", subtitle: "Admin Dashboard", icon: "👨‍💼" } },
        { id: "emp", type: "feature", position: { x: 450, y: 260 }, data: { title: "Employee Hub", subtitle: "Self Service Portal", icon: "👩‍💻" } },
        { id: "tasks", type: "feature", position: { x: 50, y: 380 }, data: { title: "Task Engine", subtitle: "Assign & Track", icon: "✅" } },
        { id: "attn", type: "feature", position: { x: 450, y: 380 }, data: { title: "Attendance Logs", subtitle: "Clock in Ledger", icon: "🕒" } },
      ],
      edges: [
        { id: "e1", source: "wf", target: "rbac", type: "custom" },
        { id: "e2", source: "rbac", target: "mgr", type: "custom" },
        { id: "e3", source: "rbac", target: "emp", type: "custom" },
        { id: "e4", source: "mgr", target: "tasks", type: "custom" },
        { id: "e5", source: "emp", target: "attn", type: "custom" },
      ]
    },

    // Inside your workforge object layout block:
    screenshots: [
      "/images/pic1_workforge.png",
      "/images/pic1_workforge.png"
    ],
  },
  {
    id: "analytics",
    name: "Data Analytics",
    role: "Data Analyst",
    files: [
      { id: "readme", name: "README.md", type: "markdown" },
      { id: "features", name: "Features.flow", type: "flow" },
      { id: "tech", name: "tech-stack.json", type: "json" },
      { id: "gallery", name: "Gallery", type: "gallery" },
    ],
    github: "",
    readme: `# Data Analytics Portfolio\n\nBusiness Intelligence dashboard built using SQL and Power BI.`,
    features: ["SQL ETL", "Power BI Dashboard"],
    tech: { SQL: "MySQL", Dashboard: "Power BI", ETL: "SQL Pipelines" },
     screenshots: [
      "/images/pic1_data.png",
      "/images/pic2_data.png"
    ],
    
    // DATA ANALYTICS HORIZONTAL DATA PIPELINE MAP
    // DATA ANALYTICS VERTICAL MAP
    flowData: {
      nodes: [
        { id: "db", type: "feature", position: { x: 250, y: 20 }, data: { title: "Production DB", subtitle: "MySQL Source Store", icon: "🛢️" } },
        { id: "etl", type: "feature", position: { x: 250, y: 140 }, data: { title: "SQL ETL Engine", subtitle: "Clean & Transform", icon: "⚡" } },
        { id: "dw", type: "feature", position: { x: 250, y: 260 }, data: { title: "Data Warehouse", subtitle: "Optimized Datasets", icon: "🏛️" } },
        { id: "pbi", type: "feature", position: { x: 250, y: 380 }, data: { title: "Power BI Server", subtitle: "Semantic Modeling", icon: "📊" } },
        { id: "kpi", type: "feature", position: { x: 50, y: 500 }, data: { title: "Revenue Metrics", subtitle: "Financial Trackers", icon: "📈" } },
        { id: "cust", type: "feature", position: { x: 450, y: 500 }, data: { title: "User Segments", subtitle: "Behavior Logs", icon: "👥" } },
      ],
      edges: [
        { id: "da1", source: "db", target: "etl", type: "custom" },
        { id: "da2", source: "etl", target: "dw", type: "custom" },
        { id: "da3", source: "dw", target: "pbi", type: "custom" },
        { id: "da4", source: "pbi", target: "kpi", type: "custom" },
        { id: "da5", source: "pbi", target: "cust", type: "custom" },
      ]
    }
  },
  {
    id: "attendance",
    name: "Attendance System",
    role: "Python Developer",
    files: [
      { id: "readme", name: "README.md", type: "markdown" },
      { id: "features", name: "Features.flow", type: "flow" },
      { id: "tech", name: "tech-stack.json", type: "json" },
      { id: "gallery", name: "Gallery", type: "gallery" },
    ],
    github: "https://github.com/YOUR_USERNAME/attendance",
    readme: `# Attendance Management System\n\nFace Recognition Attendance using Python and OpenCV.`,
    features: ["Face Recognition", "OpenCV Matrix Logging"],
    tech: { Language: "Python", Vision: "OpenCV", GUI: "Tkinter Interface" },
     screenshots: [
      "/images/pic1_face.png",
      "/images/pic2_face.png"
    ],
    
    // COMPUTER VISION HORIZONTAL PIPELINE MAP
    // ATTENDANCE SYSTEM VERTICAL MAP
    flowData: {
      nodes: [
        { id: "cam", type: "feature", position: { x: 250, y: 20 }, data: { title: "Camera Capture", subtitle: "OpenCV Video Feed", icon: "📷" } },
        { id: "detect", type: "feature", position: { x: 250, y: 140 }, data: { title: "Face Extraction", subtitle: "Haar / ResNet Filter", icon: "🤖" } },
        { id: "embed", type: "feature", position: { x: 250, y: 260 }, data: { title: "Vector Extraction", subtitle: "Embedding Matrix", icon: "🧮" } },
        { id: "db_match", type: "feature", position: { x: 50, y: 380 }, data: { title: "SQL Profiler", subtitle: "Identity Matcher", icon: "💾" } },
        { id: "bot", type: "feature", position: { x: 450, y: 380 }, data: { title: "Chatbot Logs", subtitle: "Query Log Triggers", icon: "💬" } },
      ],
      edges: [
        { id: "cv1", source: "cam", target: "detect", type: "custom" },
        { id: "cv2", source: "detect", target: "embed", type: "custom" },
        { id: "cv3", source: "embed", target: "db_match", type: "custom" },
        { id: "cv4", source: "embed", target: "bot", type: "custom" },
      ]
    }
  }
];