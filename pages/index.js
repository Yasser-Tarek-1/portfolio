import Head from "next/head";

import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Head>
          <title>Yasser | Front-End Developer</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
