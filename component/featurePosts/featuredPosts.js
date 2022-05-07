import { Fragment } from "react";
import PostsGrid from "../posts/post-grid";

//CSS
import Style from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={Style.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
