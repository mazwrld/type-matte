import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Type Matte</title>
      </Head>
      <main className={"min-h-screen"}>
        <div className="container mx-auto flex items-center justify-center p-6"></div>
      </main>
    </>
  );
};

export default Home;
