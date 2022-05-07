import Image from "next/image";

import Style from "./post-header.module.css";

export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={Style.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={300} height={300} />
    </header>
  );
}
