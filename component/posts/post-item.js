import Link from "next/link";
import Image from "next/image";
import { dateFormater } from "/utliz";

//CSS
import Style from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const postURL = `/posts/${slug}`;
  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = dateFormater(date);

  return (
    <li className={Style.post}>
      <Link href={postURL}>
        <a>
          <div className={Style.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={Style.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
