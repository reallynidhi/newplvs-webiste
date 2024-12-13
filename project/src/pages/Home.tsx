import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-6xl font-bold mb-16 mt-20">
          We build startups driving breakthroughs in computing
        </h1>
        
        <div className="mb-20">
          <div className="relative w-full bg-white rounded-lg p-4">
            <img 
              src="/download.svg"
              alt="Research & Development Pipeline"
              className="w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-4">Research & Development pipeline</p>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Core Belief</h2>
          <p className="text-xl mb-8">
            We believe exponential change is transforming civilization. It requires technology 
            companies to turn superpowers into products and distribute them widely to humanity.
          </p>
          <p className="text-xl mb-8">
            We partner with exceptional founders translating cutting edge R&D into groundbreaking startups.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Initiate</h3>
              <p>We explore and drive frontier R&D to identify and launch breakthrough startups that drive humanity forward.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Grow</h3>
              <p>We bring decades of strategic and operational experience in a hands-on partnership characterized by mutual trust and growth.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Scale</h3>
              <p>We co-engineer internet-scale network effects to allow for outsized value generation.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
