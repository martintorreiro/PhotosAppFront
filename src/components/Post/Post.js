import likeList from "../../assets/images/likeList.png";
import likeTrue from "../../assets/images/likeTrue.png";
import likeFalse from "../../assets/images/likeFalse.png";
import commentsImage from "../../assets/images/comments.png";
import { useGetCurrentTime } from "../../hooks/useGetCurrentTime";
import { CommentsList } from "./CommentsList";
import { useState } from "react";
import { LikesList } from "./LikesList";

export const Post = ({ post }) => {
  const datePostTimestamp = new Date(post.dateCreation).getTime();

  const currentTime = useGetCurrentTime(datePostTimestamp);
  const [showComments, setShowComments] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  return (
    <article className="post">
      <header>
        <h3>{post.place}</h3>
        <span>{currentTime}</span>
      </header>

      <main>
        {post.image.map((img) => {
          return <img src={img.path} alt="post" key={img.id} />;
        })}
      </main>

      <footer>
        <div>
          <p>{post.title}</p>
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
