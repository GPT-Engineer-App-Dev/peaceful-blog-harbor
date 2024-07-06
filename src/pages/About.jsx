const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-4" />
        <p className="text-lg">
          Hello! I'm a passionate blogger who loves to write about various topics. Welcome to my personal blog where I share my thoughts, experiences, and knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;