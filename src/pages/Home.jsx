//asset imange import
import { motion } from 'framer-motion';

function Home() {
    const handleDownloadCV = () => {
      const link = document.createElement("a");
      link.href = "/assets/mycv.pdf"; // Replace with the actual path to your CV file
      link.download = "Muhammed_Safvan_CV.pdf";
      link.click();
    };
  
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="text-center md:text-left md:w-1/2 flex flex-col items-center justify-center">
          <motion.h1
      className="text-6xl font-bold mb-4"
      initial={{ opacity: 0, scale: 0.5 }} // Initial state: invisible and scaled down
      animate={{ opacity: 1, scale: 1 }}   // Final state: visible and normal size
      transition={{ duration: 0.8 }}        // Transition over 0.8 seconds
    >
      Muhammed Safvan
    </motion.h1>
            <motion.p
      className="text-2xl mb-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={{ opacity: 1, y: 0 }}   // Final state
      transition={{ duration: 0.6 }}    // Transition settings
    >
      I&apos;m a Flutter Developer specializing in building user-friendly and efficient web and mobile applications.
    </motion.p>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
  
          {/* Right Side Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/assets/My profile.jpg" // Replace with the actual path to your photo
              alt="Muhammed Safvan"
              className="rounded-full w-80 h-80 border-4 border-white shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-6"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;
  
