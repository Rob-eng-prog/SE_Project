import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Plattsconnect</title>
    </Head>
    <Navbar />
    <div className="container mx-auto">{children}</div>
  </>
);

export default Layout;
