function About() {
    const currentDate = new Date().toLocaleDateString(); // Get current date
  
    return (
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-6">
            About Me
          </h1>
          <p className="text-xl mb-4">
            I am a passionate Flutter developer in 2024, currently working at WhiteSoft, where I develop mobile applications and contribute to innovative projects.
          </p>
          <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Current Role</h2>
          <p className="text-lg mb-4 text-white">
            I am currently working as a Flutter Developer at WhiteSoft, where I create high-quality mobile applications and collaborate with teams to build seamless solutions.
          </p>
          <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Internship Experience</h2>
          <p className="text-lg mb-4 text-white">
            Before joining WhiteSoft, I completed an internship as a Flutter Developer at Luminar Technolabs in Kochi. During this time, I gained valuable experience in mobile app development and learned to work in a fast-paced, collaborative environment.
          </p>
          <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Freelance Work</h2>
          <p className="text-lg mb-4 text-white">
            In addition to my full-time role, I also work as a freelance MERN stack developer, building dynamic web applications using MongoDB, Express.js, React, and Node.js for clients around the globe.
          </p>
          <h2 className="text-3xl font-semibold mb-2 text-yellow-300">Education</h2>
          <p className="text-lg mb-4 text-white">
            I hold a BCA (Bachelor of Computer Applications) degree from Calicut University, which provided me with a strong foundation in computer science and software development.
          </p>
          <div className="mt-6 text-lg text-white">
            <p className="font-semibold">Last Updated: <span className="text-yellow-400">{currentDate}</span></p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  