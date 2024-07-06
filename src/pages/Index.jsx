const Index = () => {
  const recentPosts = [
    { title: "First Blog Post", excerpt: "This is the excerpt for the first blog post." },
    { title: "Second Blog Post", excerpt: "This is the excerpt for the second blog post." },
    { title: "Third Blog Post", excerpt: "This is the excerpt for the third blog post." },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="hero mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">This is a place where I share my thoughts, experiences, and knowledge. Enjoy your stay!</p>
      </section>
      <section className="recent-posts">
        <h2 className="text-3xl font-bold mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="text-lg">{post.excerpt}</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;