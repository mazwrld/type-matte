import { type NextPage } from "next";
import Head from "next/head";
import { UserWidget } from "~/features/user/user-widget";
import { Logo } from "~/ui-kit/logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Type Matte</title>
      </Head>
      <main className={"min-h-screen"}>
        <div className="container mx-auto flex items-center justify-between p-6">
          <Logo />
          <UserWidget />
        </div>
      </main>
    </>
  );
};

export default Home;
