import likeList from "../../assets/images/likeList.png";
import commentsImage from "../../assets/images/comments.png";
import { useGetCurrentTime } from "../../hooks/useGetCurrentTime";
import { CommentsList } from "./CommentsList";
import { useContext, useState } from "react";
import { LikesList } from "./LikesList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToggleLike } from "./ToggleLike";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

export const Post = ({ post }) => {
  const datePostTimestamp = new Date(post.dateCreation).getTime();

  const currentTime = useGetCurrentTime(datePostTimestamp);
  const [showComments, setShowComments] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const { user, token } = useContext(AuthContext);
  console.log("-.-.", post);
  return (
    <article className="post">
      <header>
        <hr />
        <div>
          <div>
            <img
              src={
                post.userAvatar
                  ? `/${process.env.REACT_APP_AVATAR_PATH}/${post.userAvatar}`
                  : defaultAvatar
              }
              alt="avatar"
              height="25px"
              width="25px"
              style={{ borderRadius: "50%" }}
            />

            <span>
              <Link to={`/user/${post.userName}`}>{post.userName}</Link>
            </span>
          </div>
          <p>{currentTime}</p>
        </div>

        <h3>
          Place: <span>{post.place}</span>
        </h3>
      </header>

      <main>
        <ul className="slider">
          {post.image.map((img) => {
            const imgUrl = img.path.startsWith("http")
              ? img.path
              : `/${process.env.REACT_APP_POST_PATH}/${img.path}`;

            return (
              <li key={img.id}>
                <img src={imgUrl} alt="post" className="postImages" />
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="post_footer">
        <div className="post_footer_menu">
          {user ? <ToggleLike post={post} user={user} token={token} /> : <></>}

          <menu>
            <li
              onClick={() => {
                setShowComments(false);
                setShowLikes(!showLikes);
              }}
            >
              <span>{post.likes[0].id ? post.likes.length : "0"}</span>
              <img src={likeList} alt="likes list" height="20px" />
            </li>

            <li
              onClick={() => {
                setShowLikes(false);
                setShowComments(!showComments);
              }}
            >
              <img src={commentsImage} alt="toggle likes" height="20px" />
            </li>
          </menu>
        </div>
        <div>
          <h3>
            Title:
            <span>
              <Link to={`/post/${post.postId}`}>{post.title} </Link>
            </span>
          </h3>
        </div>

        {showComments ? <CommentsList post={post} /> : <></>}
        {showLikes ? <LikesList post={post} /> : <></>}
      </footer>
    </article>
  );
};
