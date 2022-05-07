import AllPosts from "../../component/posts/all-posts";
import { getAllPosts } from "../../utliz/post-content-api";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
}

export default AllPostsPage;

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: {
        posts: posts,
      },
    },
  };
}
