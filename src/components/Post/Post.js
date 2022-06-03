import likeList from "../../assets/images/likeList.png";
import likeTrue from "../../assets/images/likeTrue.png";
import likeFalse from "../../assets/images/likeFalse.png";
import comments from "../../assets/images/comments.png";
import { useGetCurrentTime } from "../../hooks/useGetCurrentTime";

export const Post = ({ post }) => {
  const datePostTimestamp = new Date(post.dateCreation).getTime();

  const currentTime = useGetCurrentTime(datePostTimestamp);
  console.log(currentTime);

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
        <p>{post.title}</p>

        <menu>
          <li>
            <p>{post.likesCount}</p>
            <img src={likeList} alt="likes list" height="20px" />
          </li>

          <li>
            <img src={comments} alt="toggle likes" height="20px" />
          </li>
        </menu>
      </footer>
    </article>
  );
};
