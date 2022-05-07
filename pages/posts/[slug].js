import SinglePost from "../../component/posts/post-details/post-content";
import { getPostsTitles, getSinglePost } from "../../utliz/post-content-api";

function SinglePostPage(props) {
  const { post } = props;
  return <SinglePost post={post} />;
}

export default SinglePostPage;

export async function getStaticProps(context) {
  let post = await getSinglePost(context.params.slug);
  getPostsTitles();
  return {
    props: { post: post },
  };
}

export async function getStaticPaths() {
  const postsFilenames = getPostsTitles();
  const slug = postsFilenames.map((post) => post.replace(/\.md$/, ""));
  return {
    paths: slug.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
