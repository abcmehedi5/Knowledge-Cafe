import React from "react";
import BookmarkDetails from "./BookmarkDetails/BookmarkDetails";
import "./Bookmarked.css";
const Bookmarked = (props) => {
  return (
    <div className="bookmark-section">
        <h3 className="spentTime">Spent time on read : {props.readTime} min</h3>
      <div className="bookmark-container">
        <h3>Bookmarked Blogs : {props.singleBloge.length}</h3>
        <div className="bookmark-blog">
          {props.singleBloge.map((blog) => (
            <BookmarkDetails blog={blog} key={blog.id}></BookmarkDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
