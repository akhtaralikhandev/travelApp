// use to map all avalible post in forum (let say Hip Replacement Forum)
import React from "react";
import { Link } from "react-router-dom";

function Posts({ postsResult, loading }) {
  console.log(postsResult, "im in post component");
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="forum-list forum-topic-list">
      {postsResult.map((post) => (
        <li key={post.id}>
          <div className="media">
            <img className="rounded-lg" src={`${post.user.img}`} alt="" />
          </div>

          <div className="info-container">
            <div className="info">
              <h4 className="title">
                <Link
                  to={{
                    pathname: `/forum/${post.slug}/${post._id}`,
                    info: { id: post._id },
                  }}
                >
                  {post.title}
                  {console.log(post.title)}
                </Link>
              </h4>
              <ul className="info-start-end">
                <li>
                  post by <Link to="/post-detail">{post.user.username}</Link>
                </li>
                <li>
                  {post.userReply.length > 0 ? (
                    <Link to="/post-detail">
                      latest reply{" "}
                      {post.userReply[post.userReply.length - 1].name}
                    </Link>
                  ) : (
                    "no reply yet"
                  )}
                </li>
              </ul>
            </div>
            <div className="date-replies">
              <div className="time">{post.createdAt}</div>
              <div className="replies">
                <div className="total">{post.userReply.length}</div>
                <div className="text">REPLIES</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
