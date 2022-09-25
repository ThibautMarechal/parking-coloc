import type { NextPage } from "next";
import Head from "next/head";

const InitalDate = new Date('2022-09-26').getTime();

function getWeeksDiff(startDate: number, endDate: number) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;

  return Math.round(Math.abs(endDate - startDate) / msInWeek);
}

const Home: NextPage = () => {
  const persons = ['Noémie', 'Thibaut', 'Kim', 'Alissia'];
  const today = Date.now()
  console.log()
  return (
    <>
      <Head>
        <title>Parking coloc</title>
        <meta name="description" content="Parking calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          {persons[getWeeksDiff(InitalDate, today) % persons.length]}
        </h1>
      </main>
    </>
  );
};

export default Home;
