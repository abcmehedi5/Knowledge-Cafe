import React, { useState } from "react";
import blogData from "../BlogData/BlogData";
import Bookmarked from "../Bookmarked/Bookmarked";
import "./Blog.css";
import BlogDetails from "./BlogDetails/BlogDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blog = () => {
  const blogs = blogData;
  const [blog, setBlog] = useState(blogs);
  const [singleBloge, setSingleBloge] = useState([]);
  const [readTime, setReadTime] = useState(0);
  // handle bookmark button
  const handleBookmark = (id) => {
    const BlogFind = blog.find((bl) => bl.id == id);
    const checkAlreadyBookmark = singleBloge.find((bl) => bl.id == id);
    if (BlogFind) {
      if (checkAlreadyBookmark) {
        // alert("sorry you have already added to bookmark");
        toast.warn('Sorry you have already added to the bookmark', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else {
        const newSingleBlog = [...singleBloge, BlogFind];
        setSingleBloge(newSingleBlog);
      }
    }
  };
  // handle mark as read
  const handleMarkRead = (id) => {
    const markReadFind = blog.find((bl) => bl.id == id);
    if (markReadFind) {
      const readTimes = markReadFind.readTime;
      setReadTime(readTime + readTimes);
    }
  };
  return (
    <div className="Blogs-container">
      {/* toast container */}
      <ToastContainer />
      <div>
        {blog.map((bl) => (
          <BlogDetails
            key={bl.id}
            blog={bl}
            handleBookmark={handleBookmark}
            handleMarkRead={handleMarkRead}
          ></BlogDetails>
        ))}
      </div>
      <div className="bookmark">
      <Bookmarked singleBloge={singleBloge} readTime={readTime}></Bookmarked>
      </div>
    </div>
  );
};

export default Blog;
