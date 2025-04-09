import React from "react";
import Link from "next/link";

const Badge = ({ children, className, ...props }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-neutral-800 text-neutral-300 transition-colors duration-200 hover:bg-neutral-700 ${className}`}
    {...props}
  >
    {children}
  </span>
);

const Card = ({ children, className, link, ...props }) => (
  <Link 
    href={link} 
    className={`rounded-lg border cursor-pointer border-neutral-800 bg-neutral-900/50 transition-all duration-300 hover:bg-neutral-800/70 hover:border-neutral-700 hover:shadow-md hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </Link>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const BlogsPage = () => {
  // Sample blog posts data
  const posts = [
    {
      category: "Project",
      date: "Nov 8",
      title: "Bantr Project Breakdown: How I Built a Chat App from Scratch",
      description:
        "Ever since I started coding, I've been fascinated by how real-time communication works. This...",
      tags: ["Coding", "Full Stack", "Chat"],
      link: "/blogs/making-of-bantr",
    },
    {
      category: "Project",
      date: "Jul 27",
      title: "Designing Our Agency's Website",
      description:
        "Creating our agency website was essential for presenting our work, allowing clients easy access to explore our services and projects...",
      tags: ["Coding", "Frontend", "Design"],
      link: "/blogs/the-luvoweb-project",
    },
    {
      category: "Project",
      date: "May 12",
      title: "Zenos AI Project Breakdown: Building a Real-Time AI Chat",
      description:
        "I've always wanted to build something in full-stack development that could offer real utility....",
      tags: ["Coding", "Full Stack"],
      link: "/blogs/project-zenosai",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="px-6 pt-7 md:px-12 md:pt-8 lg:px-24 lg:pt-8 max-w-[100rem] pb-16 mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="text-[#ededed] text-xl font-serif tracking-wider hover:text-white transition-colors">
            <Link href="/">SIDDHARTH MEENA</Link>
          </div>
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center mr-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-green-400 text-xs uppercase">
                Available for work
              </span>
            </div>
            <Link
              href="/"
              className="px-4 py-2 text-white border border-white/20 rounded-full text-sm hover:bg-white/10 transition-all"
            >
              HOME
            </Link>
          </nav>
        </header>

        <main className='sm:px-7 sm:mt-[10vh] mt-[4vh]'>
          <div className="mb-12">
            <h1 className="mb-3 md:text-3xl sm:text-2xl text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#FAD961] to-[#F76B1C] bg-clip-text text-transparent">Blogs</span>{" "}
              <span className="text-neutral-400">—</span>{" "}
              <span className="bg-gradient-to-r from-[#8E2DE2] to-[#FF2B56] bg-clip-text text-transparent">
                Development Insights
              </span>
            </h1>
            <p className="text-[#d1d1d1] text-sm sm:text-base">
              A showcase of my personal insights, project breakdowns, and development journey across tech.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} link={post.link}>
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {post.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className="text-xl font-bold text-white transition-colors group-hover:text-white/90">{post.title}</h2>
                  <p className="mb-4 mt-2 text-sm text-neutral-400">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogsPage;
