//Importing Component
import Image from "next/image";
import PostHeader from "./post-header";

//Importing 3rd Library
import ReactMarkdown from "react-markdown";

//Importing Style files
import Style from "./post-content.module.css";

export default function PostContent(props) {
  const { post } = props;

  const components = {
    img: (image) => (
      <Image
        src={`/images/posts/${post.slug}/${image.src}`}
        width={600}
        height={300}
      />
    ),
  };

  if (!post) {
    return <div>Loading...</div>;
  }
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <div className={Style.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </div>
  );
}
