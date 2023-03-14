import { type NextPage } from "next";
import Head from "next/head";
import { Logo } from "~/ui-kit/logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Type Matte</title>
      </Head>
      <main className={"min-h-screen bg-slate-800"}>
        <div className="container mx-auto flex items-center justify-between p-6">
          <Logo />
        </div>
      </main>
    </>
  );
};

export default Home;
