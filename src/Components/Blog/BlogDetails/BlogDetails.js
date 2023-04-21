import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const BlogDetails = (props) => {
  const { title, author, date, id, image, readTime, profile } = props.blog;
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img className="blog-cover" src={image} alt="" />
          <div className="profile-container">
            <div className="profile">
              <img src={profile} alt="" />
              <div>
                <h3>{author}</h3>
                <p style={{color:'gray'}}>{date}</p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <p style={{color:'gray'}}>{readTime} min read</p>
              <p
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => props.handleBookmark(id)}
              >
                <FontAwesomeIcon fontSize={"20px"} icon={faBookmark} />
              </p>
            </div>
          </div>
          <h2>{title}</h2>

          <p onClick={() => props.handleMarkRead(id)} className="markRead">
            Mark as read
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
