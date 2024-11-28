export interface Project {
    path: string
    image: string
    additionalImages?: string[]
    title: string
    mainColor: string
    stack: string[]
    live: string
    github: string
    dashboard?: string
    description: string
}

export const Projects: Project[] = [
    {
        path: 'pizza',
        image: '/projects/pizza.png',
        additionalImages: ['/projects/pizza2.png', '/projects/pizza3.png', '/projects/pizza4.png'],
        title: 'Pizza\n& Pasta',
        mainColor: '#A1343B',
        stack: ['Next.js', 'Pusher', 'Prisma', 'Zod', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'PostgreSQL', 'TypeScript'],
        live: 'https://pasta-olive.vercel.app/',
        dashboard: 'https://pasta-olive.vercel.app/login',
        github: 'https://github.com/karoljanowski/pasta',
        description: 'A personal project built to learn the fundamentals of Next.js. The app enables users to order food from restaurants, manage their orders, and allows restaurant owners to update menus. It offers an end-to-end solution for food ordering and management.'
    },
    {
        path: 'apartments',
        image: '/projects/apartments.png',
        additionalImages: ['/projects/apartments2.png', '/projects/apartments3.png', '/projects/apartments4.png'],
        title: 'React\nApartments',
        mainColor: '#979173',
        stack: ['React', 'TailwindCSS', 'JavaScript', 'Framer Motion', 'React Router', 'Supabase'],
        live: 'https://apartments-phi.vercel.app/',
        github: 'https://github.com/karoljanowski/apartments',
        dashboard: 'https://apartments-phi.vercel.app/admin',
        description: 'A website that features apartment listings presented in a clear and user-friendly landing page format. It allows users to book reservations and includes a dashboard for property owners to manage their bookings.'
    },
    {
        path: 'portfolio',
        image: '/projects/portfolio.png',
        title: 'Portfolio\nWebsite',
        mainColor: '#5894A0',
        stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'three.js', 'React Three Fiber', 'React Three Drei', 'React Three Rapier', 'Prisma', 'PostgreSQL'],
        live: 'https://karoljanowski.vercel.app/',
        github: 'https://github.com/karoljanowski/portfolio',
        description: 'Portfolio Website is a personal portfolio website. It is a fully responsive website built with Next.js, TailwindCSS, Three.js, React-Three-Fiber, React-Three-Drei, and React-Three-Rapier. It features a 3D portfolio, a 3D portfolio maker, and a 3D portfolio order system.'
    },
] 