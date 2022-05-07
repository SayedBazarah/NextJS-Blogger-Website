import Link from "next/link";

//CSS
import Style from "./main-navigation.module.css";

function MainNav() {
  return (
    <header className={Style.header}>
      <Link href="/">
        <a className={Style.logo}>Baiomy</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
