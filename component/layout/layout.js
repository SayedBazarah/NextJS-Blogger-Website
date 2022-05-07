import { Fragment } from "react";
import MainNav from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
