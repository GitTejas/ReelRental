import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 px-4 relative overflow-hidden">
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center animate-particle-float opacity-20 z-0"></div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6 animate-smooth-fade">
        Welcome to the Movie Rental App!
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center leading-relaxed">
        This application allows users to browse a collection of movies, rent their favorites, and leave ratings and reviews. 
        Explore our collection and share your thoughts on the movies you love!
      </p>
    </div>
  );
};

export default Home;
