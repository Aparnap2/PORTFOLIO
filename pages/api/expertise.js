const expertise = [
    
{ id: 0, title: 'Full Stack Expertise', desc: 'Build scalable web apps with my expertise in JavaScript, ReactJS, NextJS, NodeJS, and MongoDB.', },

{ id: 1, title: 'Cloud-Native Solutions', desc: "Unlock serverless computing, edge computing, and AI-driven innovations for your SaaS business.", },

{ id: 2, title: 'Mobile-First Design', desc: 'Transform your ideas into stunning UI/UX designs and scalable mobile apps with my skills in  React Native, and Firebase or AppWrite.', },

{ id: 3, title: 'Version Control Mastery', desc: "Ensure seamless code management and collaboration with my Git and GitHub expertise.", },

{ id: 4, title: 'Future-Proof Innovations', desc: "Stay ahead of the curve with my knowledge of Web3.js, Solidity, and cutting-edge technologies like RAG { Retrieval Augmented Generation } for your SaaS startup.", }

]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
