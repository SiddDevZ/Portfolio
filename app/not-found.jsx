import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Siddharth Meena - Full-Stack Developer',
  description: 'The page you are looking for cannot be found. Return to Siddharth Meena\'s portfolio to explore projects and services offered by this full-stack developer.',
};

export default function NotFound() {
  return (
    <div className="bg-[#0c0c0c] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-prata text-white mb-4">404 - Page Not Found</h1>
        
        <p className="text-white/70 mb-6">
          The page you're looking for doesn't exist or has been moved. 
          Return to Siddharth Meena's portfolio homepage to explore projects and services.
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-6 py-3 border-2 border-[#00eeff] text-[#00eeff] bg-[#00eeff10] 
          rounded-xl hover:bg-[#00eeff20] transition-all ease-out hover:scale-[1.03] duration-300"
        >
          Back to Portfolio
        </Link>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>About Siddharth Meena</h2>
          <p>
            Siddharth Meena is a full-stack developer with expertise in React, Next.js, Node.js, and UI/UX design.
            Although this page couldn't be found, you can explore Siddharth's portfolio to see his work in web development,
            frontend design, and software engineering projects.
          </p>
          <p>
            Siddharth offers services including web development, UI/UX design, and full-stack development solutions.
            Contact Siddharth Meena for your next web project or development needs.
          </p>
        </div>
      </div>
    </div>
  );
} 