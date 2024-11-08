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
      category: "Humor",
      date: "Oct 15",
      title: "Why Cats Are Secretly Ninjas",
      description:
        "With their stealthy moves, silent paws, and ability to vanish into thin air...",
      tags: ["Feline", "Stealth"],
      link: "https://google.com/",
    },
    {
      category: "Lifestyle",
      date: "Oct 12",
      title: "The Art of Procrastination",
      description:
        "Mastering the delicate balance between doing nothing and achieving everything...",
      tags: ["Time Management", "Relaxation"],
      link: "blog/making-of-bantr",
    },
    {
      category: "Beverages",
      date: "Oct 11",
      title: "Why Coffee is Just Bean Juice",
      description:
        "Exploring the magical transformation of beans into the elixir of life...",
      tags: ["Coffee", "Magic"],
      link: "https://google.com/",
    },
    {
      category: "Mystery",
      date: "Oct 11",
      title: "The Secret Life of Socks",
      description:
        "Unraveling the mystery of why socks always disappear in the laundry...",
      tags: ["Laundry", "Mystery"],
      link: "https://google.com/",
    },
    {
      category: "Games",
      date: "Oct 11",
      title: "Why Dogs Are Terrible at Poker",
      description:
        "A deep dive into the canine inability to maintain a poker face...",
      tags: ["Poker", "Dogs"],
      link: "https://google.com/",
    },
    {
      category: "Conspiracy",
      date: "Oct 11",
      title: "The Great Spaghetti Conspiracy",
      description:
        "Investigating the tangled web of pasta and its mysterious origins...",
      tags: ["Pasta", "Conspiracy"],
      link: "https://google.com/",
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
              <span className="bg-gradient-to-r from-[#37C351] to-[#3DC29A] bg-clip-text text-transparent">Blogs</span>{" "}
              <span className="text-neutral-400">—</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
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
