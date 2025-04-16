import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleReadingTime}) => {
  // const {blog} = props;
  // console.log(blog);
  return (
    <div className="ml-7">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body ml-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <img className="w-16" src={blog.author_img} alt="" />
            <h1 className="font-bold">{blog.author}</h1>
            </div>
            <div>
            <FaBookmark onClick={() => handleBookMark(blog)} size={20}/>
            </div>
          </div>

          <h2 className="card-title text-left">{blog.title}</h2>
          <p className="text-left">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((hash) => (
              <p key={hash}>{hash}</p>
            ))}
          </div>
          
          <div className="card-actions justify-between items-center">
            <h1 className="text-sm font-bold">{blog.reading_time} min reading</h1>
            <button className="btn btn-primary" onClick={() => handleReadingTime(blog.reading_time, blog.id)}>Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
