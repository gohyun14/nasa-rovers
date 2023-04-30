import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export type roverData = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: {
    name: string;
    full_name: string;
    id: number;
    rover_id: number;
  }[];
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Explore Mars Rovers</title>
        <meta name="description" content="Browse Mars Rovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6d0202] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Explore <span className="text-[hsl(0,100%,70%)]">Mars</span> Rovers
          </h1>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/browse"
          >
            <h3 className="text-2xl font-bold">Browse →</h3>
            <div className="text-lg">
              Browse NASA&apos;s Mars Rovers and see the pictures they&apos;ve
              taken!
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
