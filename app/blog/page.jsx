import NavBar from "../Components/NavBar/NavBar";
import Particles from "../Components/Particles/Particles";
import Card from "../Components/Card/Card";
import "../Landing.css";

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

const Badge = ({ children, className, ...props }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-neutral-800 text-neutral-300 ${className}`}
    {...props}
  >
    {children}
  </span>
);

const PageName = () => {
  const posts = [
    {
      category: "Project",
      date: "Nov 8",
      title: "Bantr Project Breakdown: How I Built a Chat App from Scratch",
      description:
        "Ever since I started coding, I've been fascinated by how real-time communication works. This...",
      tags: ["Coding", "Full Stack", "Chat"],
      link: "blog/making-of-bantr",
    },
    {
      category: "Project",
      date: "Jul 27",
      title: "Designing Our Agency's Website",
      description:
        "Creating our agency website was essential for presenting our work, allowing clients easy access to explore our services and projects...",
      tags: ["Coding", "Frontend", "Design"],
      link: "blog/the-luvoweb-project",
    },
    {
      category: "Project",
      date: "May 12",
      title: "Zenos AI Project Breakdown: Building a Real-Time AI Chat",
      description:
        "I've always wanted to build something in full-stack development that could offer real utility....",
      tags: ["Coding", "Full Stack"],
      link: "blog/project-zenosai",
    },
  ];
  return (
    <>
      <div className="full-screen">
        <Particles />
      </div>
      <NavBar check={0}/>
      <div className="main flex flex-col pt-16 items-center px-7 animate-in">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12">
            <h1 className="mb-3 text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#FAD961] to-[#F76B1C] bg-clip-text text-transparent">Blogs</span>{" "}
              <span className="text-neutral-400">—</span>{" "}
              <span className="bg-gradient-to-r from-[#8E2DE2] to-[#FF2B56] bg-clip-text text-transparent">
                Development Insights
              </span>
            </h1>
            <p className="text-[#d1d1d1]">
                A showcase of my personal insights, project breakdowns, and development journey across tech.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="transition-colors hover:bg-neutral-900"
                link={post.link}
              >
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
                  <h2 className="text-xl font-bold text-white">{post.title}</h2>
                  <p className="mb-4 mt-2 text-sm text-neutral-400">
                    {post.description}
                  </p>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} className="hover:bg-neutral-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageName;
