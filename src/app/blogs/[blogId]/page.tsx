// pages/blogs/[slug].js

import Markdown from "react-markdown";

const BlogPostPage = () => {
  // Sample blog post data
  const post = {
    id: 1,
    title: "Sustainable Landscaping with Native Grasses",
    author: {
      name: "John Doe",
      role: "Lead Horticulturist",
      avatar: "/about-us.jpg",
      bio: "With over 15 years experience in sustainable landscaping...",
    },
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/about-us.jpg",
    category: "Landscaping Tips",
    tags: ["Native Plants", "Sustainability", "Gardening"],
    content:
      "## Heading 1 \n hello world \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! \n ## Heading 2 \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! \n ### Sub Heading 1 \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis neque omnis quisquam modi, quia obcaecati, dolore porro cum voluptates alias consequuntur optio perspiciatis totam, veritatis ut quidem molestiae? Numquam!",

    relatedPosts: [
      {
        id: 2,
        title: "Seasonal Care for Ornamental Grasses",
        category: "Plant Care",
        image: "/about-us.jpg",
      },
      {
        id: 3,
        title: "Drought-Resistant Plant Combinations",
        category: "Landscaping Tips",
        image: "/blog-3.jpg",
      },
    ],
  };

  return (
    <div className="container mt-10 lg:mt-14 py-12 md:py-16 lg:py-20">
      <div>
        {/* Post Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-blue-900 font-medium">{post.category}</span>
            <span className="text-blue-400">•</span>
            <span className="text-muted-foreground text-sm">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-priColor text-center mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 justify-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="rounded-full size-12"
            />
            <div>
              <p className="font-medium text-sm text-blue-900">
                {post.author.name}
              </p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative max-h-[600px] rounded-xl overflow-hidden mb-8 lg:mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="hover:scale-105 transition-transform object-cover w-full h-full object-center"
          />
        </div>

        {/* Main Content */}
        <div className="">
          {/* Article Content */}
          <div className="prose max-w-none text-muted-foreground leading-7">
            <Markdown
              components={{
                h1: (props) => (
                  <h1 className="text-3xl font-bold mb-4" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-2xl font-semibold mb-3" {...props} />
                ),
                h3: (props) => (
                  <h2 className="text-xl font-semibold mb-3" {...props} />
                ),
                p: (props) => <p className="mb-4 text-gray-700" {...props} />,
                ul: (props) => (
                  <ul className="list-disc pl-6 mb-4" {...props} />
                ),
                li: (props) => <li className="mb-2" {...props} />,
              }}
            >
              {post.content}
            </Markdown>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm max-w-xl">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="rounded-full size-15"
                />
                <div>
                  <h3 className="text-blue-900 font-semibold">
                    {post.author.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {post.author.role}
                  </p>
                  <p className="mt- text-muted-foreground text-sm leading-7">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            {/* <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Comments (3)</h2>
              <div className="space-y-6">
              
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/user-avatar.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">March 18, 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Great article! Really helpful tips for my new garden.
                  </p>
                </div>

               
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Leave a Comment
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <textarea
                      placeholder="Your comment..."
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg"
                    ></textarea>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </section> */}
          </div>

          {/* Sidebar */}
          {/* <div className="lg:col-span-1">
 
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="font-semibold mb-4 text-blue-900">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {["Introduction", "Benefits", "Strategies"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-sm text-blue-400 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div> */}
        </div>

        {/* Related Posts */}
        {/* <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.relatedPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`}>
                <a className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-blue-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default BlogPostPage;
