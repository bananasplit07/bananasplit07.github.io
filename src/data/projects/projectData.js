export const projects = [
    {
        id: '01',
        title: 'Rayong Botanic Garden',
        description:
            'Digital companion platform for Rayong Botanic Garden. A full-stack web application designed to enhance the experience of garden visitors while providing an administrative dashboard for the garden\'s staff to manage content and track engagement.',
        longDescription: 
            'The Rayong Botanic Garden digital platform is a comprehensive solution aimed at modernizing the visitor experience. It features an interactive map, plant identification tools, and a seamless booking system. For the administrators, it provides a powerful dashboard with real-time analytics, content management system (CMS) for updating botanical information, and visitor flow tracking.',
        features: [
            'Interactive Botanical Map with GPS integration',
            'Plant QR Code Scanner for instant information',
            'Staff Dashboard for real-time visitor analytics',
            'Automated Content Management via AI (Dify integration)',
            'Multi-language support for international tourists'
        ],
        stack: ['TypeScript', 'Nuxt', 'Vue', 'Python', 'Flask', 'Gunicorn', 'Redis', 'PostgreSQL', 'Docker', 'AWS', 'Dify'],
        demo: 'https://www.rayongbotanic.app',
        repo: '',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'CS Course Registration Recommendation Chatbot',
        description:
            'Chatbot assistant for Computer Science Chiang Mai university students for course registration. Users can ask about course information, check eligibility to enroll in courses, and get course recommendation based on user passed courses and interested career paths.',
        longDescription:
            'This chatbot leverages Large Language Models to provide personalized academic advising to CS students. It analyzes a student\'s transcript and career goals to suggest the most relevant elective courses. It also simplifies the complex registration rules of the university into a conversational interface, making it easier for students to navigate their degree requirements.',
        features: [
            'Personalized course recommendations based on career path',
            'Prerequisite checking and eligibility validation',
            'Interactive degree requirement visualization',
            'Natural Language queries for course information',
            'Seamless integration with CMU SIS data'
        ],
        stack: ['React', 'Vite', 'Golang', 'Supabase', 'Dify'],
        demo: '',
        repo: '',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'S.Factory',
        description:
            'Mobile Application capable of logging and requesting machine maintenance. Manage machine parts stock and work order.',
        longDescription:
            'S.Factory is an industrial-grade maintenance management system. It allows factory floor workers to report machine issues instantly via mobile, which automatically triggers work orders for the maintenance team. It includes a comprehensive inventory management system for spare parts and tracks the maintenance history of every machine in the facility.',
        features: [
            'Real-time maintenance request logging',
            'Automatic Work Order generation and assignment',
            'Inventory tracking with low-stock notifications',
            'QR code integration for machine identification',
            'Offline support for factory floor environments'
        ],
        stack: ['Flutter', 'Dart', 'Firebase'],
        demo: '',
        repo: '',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
    }

]