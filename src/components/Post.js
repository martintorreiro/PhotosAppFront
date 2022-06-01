export const Post = ({ post }) => {
  return (
    <article>
      <header>
        <h3>{post.place}</h3>
        <span>{post.dateCreation}</span>
      </header>
      <main>
        {post.images.map((image) => {
          return <img src={image.path} alt="post" key={image.id} />;
        })}
      </main>
      <footer>
        <p>{post.title}</p>
      </footer>
    </article>
  );
};
