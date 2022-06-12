import likeList from "../../assets/images/likeList.png";
import commentsImage from "../../assets/images/comments.png";
import { useGetCurrentTime } from "../../hooks/useGetCurrentTime";
import { CommentsList } from "./CommentsList";
import { useContext, useState } from "react";
import { LikesList } from "./LikesList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToggleLike } from "./ToggleLike";

export const Post = ({ post }) => {
  const datePostTimestamp = new Date(post.dateCreation).getTime();

  const currentTime = useGetCurrentTime(datePostTimestamp);
  const [showComments, setShowComments] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <article className="post">
      <header>
        <h3>
          Title / Título: <span>{post.title}</span>
        </h3>

        <h3>
          Place / Lugar: <span>{post.place}</span>
        </h3>
        <h3>
          Posted by / Post por:{" "}
          <span>
            <Link to={`/user/${post.userName}`}>{post.userName}</Link>
          </span>
        </h3>
        <h3>
          On / El: <span>{currentTime}</span>
        </h3>
      </header>

      <main>
        {post.image.map((img) => {
          return <img src={img.path} alt="post" key={img.id} />;
        })}
      </main>

      <footer>
        <div>
          {user ? <ToggleLike /> : <></>}
          <h3>
            <Link to={`/post/${post.postId}`}>
              Access the post / Accede al post: <span>{post.title}</span>
            </Link>
          </h3>
          <menu>
            <li
              onClick={() => {
                setShowComments(false);
                setShowLikes(!showLikes);
              }}
            >
              <p>{post.likesCount}</p>
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
        {showComments ? <CommentsList post={post} /> : <></>}
        {showLikes ? <LikesList post={post} /> : <></>}
      </footer>
    </article>
  );
};
