//Importing Custom Component
import Hero from "../component/hero/hero";
import FeaturedPosts from "../component/featurePosts/FeaturedPosts";

import { Fragment } from "react";
import { getAllPosts } from "../utliz/post-content-api";

function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export default HomePage;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: {
        posts: posts,
      },
    },
  };
}
