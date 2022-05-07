import PostItem from "./post-item";

//CSS
import Style from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props.posts;
  console.log(posts);
  return (
    <ul className={Style.grid}>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
