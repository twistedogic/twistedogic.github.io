import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
