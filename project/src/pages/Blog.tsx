import React from 'react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold mb-16 mt-12">BLOG</h1>
        
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t pt-8 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <div className="mb-4">
                <div className="font-bold">{post.author}</div>
                <div className="text-sm text-gray-600">{post.role}</div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;