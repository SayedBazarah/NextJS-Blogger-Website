import PostsGrid from "./post-grid";

import Style from "./all-posts.module.css";
function AllPosts(props) {
  return (
    <div className={Style.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </div>
  );
}

export default AllPosts;
