import { MarkerType } from "@xyflow/react";

export const nodes = [
    {
        id: "workforge",
        type: "feature",
        position: { x: 450, y: 20 },
        data: {
            title: "WorkForge",
            subtitle: "Enterprise Workforce Platform",
            icon: "💼",
        },
    },

    {
        id: "rbac",
        type: "feature",
        position: { x: 450, y: 180 },
        data: {
            title: "Role Based Access",
            subtitle: "JWT Authentication",
            icon: "🔐",
        },
    },

    {
        id: "dashboard",
        type: "feature",
        position: { x: 450, y: 360 },
        data: {
            title: "Dashboard",
            subtitle: "Application Home",
            icon: "📊",
        },
    },

    {
        id: "manager",
        type: "feature",
        position: { x: 120, y: 620 },
        data: {
            title: "Manager",
            subtitle: "Management Portal",
            icon: "👨‍💼",
        },
    },

    {
        id: "employee",
        type: "feature",
        position: { x: 780, y: 620 },
        data: {
            title: "Employee",
            subtitle: "Employee Portal",
            icon: "👩‍💻",
        },
    },

    {
        id: "taskassign",
        type: "feature",
        position: { x: -80, y: 900 },
        data: {
            title: "Assign Tasks",
            subtitle: "Create & Track",
            icon: "✅",
        },
    },

    {
        id: "attendance",
        type: "feature",
        position: { x: 120, y: 900 },
        data: {
            title: "Attendance",
            subtitle: "Monitor Records",
            icon: "📅",
        },
    },

    {
        id: "analytics",
        type: "feature",
        position: { x: 320, y: 900 },
        data: {
            title: "Analytics",
            subtitle: "KPIs & Reports",
            icon: "📈",
        },
    },

    {
        id: "viewtasks",
        type: "feature",
        position: { x: 580, y: 900 },
        data: {
            title: "View Tasks",
            subtitle: "Assigned Work",
            icon: "📋",
        },
    },

    {
        id: "markattendance",
        type: "feature",
        position: { x: 780, y: 900 },
        data: {
            title: "Mark Attendance",
            subtitle: "Daily Check-in",
            icon: "🕒",
        },
    },

    {
        id: "profile",
        type: "feature",
        position: { x: 980, y: 900 },
        data: {
            title: "Profile",
            subtitle: "Personal Settings",
            icon: "👤",
        },
    },
];
export const edges = [
    {
        id: "1",
        source: "workforge",
        target: "rbac",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "2",
        source: "rbac",
        target: "dashboard",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "3",
        source: "dashboard",
        target: "manager",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "4",
        source: "dashboard",
        target: "employee",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "5",
        source: "manager",
        target: "taskassign",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "6",
        source: "manager",
        target: "attendance",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "7",
        source: "manager",
        target: "analytics",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "8",
        source: "employee",
        target: "viewtasks",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "9",
        source: "employee",
        target: "markattendance",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },

    {
        id: "10",
        source: "employee",
        target: "profile",
        type: "custom",
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 24,
            height: 24,
            color: "#915EFF",
        },
    },
]