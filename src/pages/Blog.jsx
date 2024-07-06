const Blog = () => {
  const posts = [
    { title: "First Blog Post", excerpt: "This is the excerpt for the first blog post." },
    { title: "Second Blog Post", excerpt: "This is the excerpt for the second blog post." },
    { title: "Third Blog Post", excerpt: "This is the excerpt for the third blog post." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-lg">{post.excerpt}</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;