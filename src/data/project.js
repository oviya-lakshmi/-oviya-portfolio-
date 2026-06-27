import roadsafe from "../assets/projects/roadsafe.jpeg";
import aitconnect from "../assets/projects/aitconnect.jpeg";
import voting from "../assets/projects/voting.jpeg";
import learning from "../assets/projects/learning.jpeg";
import email from "../assets/projects/email.jpeg";

const projects = [

{
title:"RoadSafe AI",

image:roadsafe,

description:"Machine learning powered accident risk prediction system using weather, traffic and road conditions.",

tech:[
"Python",
"Flask",
"Scikit-Learn",
"SQLite",
"OpenWeather API"
],

features:[
"Real-time risk prediction",
"Weather API integration",
"Interactive dashboard"
],

github:"https://github.com/oviya-lakshmi/Roadsafe-Ai-accident-risk-prediction",

live:"#"
},

{
title:"AIT Connect",

image:aitconnect,

description:"Campus communication platform connecting students, faculty and administration.",

tech:[
"React",
"Node.js",
"MongoDB",
"Express"
],

features:[
"Student Portal",
"Department Updates",
"Role Based Login"
],

github:"https://github.com/oviya-lakshmi/AIT-Connect",

live:"#"
},

{
title:"Zero Distraction Learning",

image:learning,

description:"AI powered classroom monitoring system that detects drowsiness and distraction.",

tech:[
"Python",
"OpenCV",
"Mediapipe",
"Flask"
],

features:[
"Face Tracking",
"Drowsiness Detection",
"Real-time Alerts"
],

github:"https://github.com/oviya-lakshmi/zero-distraction-learning-companion",

live:"#"
},

{
title:"Online Voting System",

image:voting,

description:"Secure online voting application with authentication and vote encryption.",

tech:[
"Java",
"MySQL",
"JSP"
],

features:[
"Authentication",
"Vote Security",
"Admin Dashboard"
],

github:"https://github.com/oviya-lakshmi/online-voting-system",

live:"#"
},

{
title:"Smart Email System",

image:email,

description:"Console based email management application using C and SQLite.",

tech:[
"C",
"SQLite",
"Data Structures"
],

features:[
"Inbox Management",
"Draft Support",
"Persistent Storage"
],

github:"https://github.com/oviya-lakshmi/Smart-Email-Management-System",

live:"#"
}

];

export default projects;