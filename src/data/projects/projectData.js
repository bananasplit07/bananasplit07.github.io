import botanic1 from '@/assets/botanic/botanic-img-1.png'
import botanic2 from '@/assets/botanic/botanic-img-2.png'
import botanic3 from '@/assets/botanic/botanic-img-3.png'
import botanic4 from '@/assets/botanic/botanic-img-4.png'
import botanic5 from '@/assets/botanic/botanic-img-5.png'
import botanic6 from '@/assets/botanic/botanic-img-6.png'
import botanic7 from '@/assets/botanic/botanic-img-7.png'

export const projects = [
    {
        id: '01',
        title: 'Rayong Botanic Garden',
        description:
            'Developed a web application for Rayong Botanic Garden as a real-client project, serving as an interactive learning and touring media for visitors.',
        features: [
            'Developed a web application for Rayong Botanic Garden as a real-client project, serving as an interactive learning and touring media for visitors',
            'Designed application wireframes in Figma to define structure, user flow, and functionality prior to development',
            'Built an interactive map with category-based filtering, allowing visitors to locate and explore garden zones'
        ],
        stack: ['TypeScript', 'Nuxt', 'Vue', 'Python', 'Flask', 'Gunicorn', 'Redis', 'PostgreSQL', 'Docker', 'AWS', 'Dify'],
        demo: 'https://www.rayongbotanic.app',
        repo: '',
        images: [botanic1, botanic2, botanic3, botanic4, botanic5, botanic6, botanic7]
    },
    {
        id: '02',
        title: 'CS Course Registration Recommendation Chatbot',
        description:
            'Developed an AI-powered web chatbot, designed to assist Computer Science students at Chiang Mai University with course registration.',
        features: [
            'Developed an AI-powered web chatbot, designed to assist Computer Science students at Chiang Mai University with course registration',
            'Engineered an LLM workflow using Dify to handle natural language queries across three core features course information lookup, enrollment eligibility checking, and personalized course recommendations based on completed courses and target career paths',
            'Designed and managed a Supabase database storing courses, student academic records, and conversation history to support context-aware responses'
        ],
        stack: ['React', 'Vite', 'Golang', 'Supabase', 'Dify'],
        demo: '',
        repo: '',
        images: []
    },
    {
        id: '03',
        title: 'S.Factory',
        description:
            'Developed a cross-platform factory maintenance management system supporting iOS, Android, web, Windows, macOS, and Linux using Flutter and Dart.',
        features: [
            'Developed a cross-platform factory maintenance management system supporting iOS, Android, web, Windows, macOS, and Linux using Flutter and Dart',
            'Role-based access control for three user types (Admin, Mechanic, Staff) with dynamic navigation and feature visibility using secure local storage and Firebase Auth',
            'Implemented Firebase backend integration using GraphQL (Firebase Data Connect) for CRUD operations, Firebase Storage for image uploads, and Cloud Messaging for push notifications'
        ],
        stack: ['Flutter', 'Dart', 'Firebase', 'GraphQL'],
        demo: '',
        repo: '',
        images: []
    }
]