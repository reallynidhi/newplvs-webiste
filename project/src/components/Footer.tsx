import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-8 border-t">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">PL/VS</div>
        <div className="text-sm text-gray-500">
          © PROTOCOL LABS VENTURE STUDIO 2024
        </div>
        <div>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            IMPORTANT DISCLOSURES
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;