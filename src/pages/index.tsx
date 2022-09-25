import type { NextPage } from "next";
import Head from "next/head";

const InitalDate = new Date('2022-08-29');

function getMondayOfCurrentWeek(date: Date) {
  const dayOfMonth = date.getDate();
  const dayOfWeek = (date.getDay() + 6) % 7
  const dayOfMonthOfMondayThisWeek = dayOfMonth - dayOfWeek ;
  return new Date(new Date(date).setDate(dayOfMonthOfMondayThisWeek));
}

function getWeeksDiff(startDate:Date, endDate: Date) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.round(Math.abs(endDate.getTime() - startDate.getTime()) / msInWeek);
}

const Home: NextPage = () => {
  const persons = ['Noémie', 'Thibaut', 'Kim', 'Alissia'];
  const today = new Date(Date.now());
  const currentIndex = getWeeksDiff(getMondayOfCurrentWeek(InitalDate), getMondayOfCurrentWeek(today));
  const nextIndex = currentIndex + 1
  return (
    <>
      <Head>
        <title>Parking coloc</title>
        <meta name="description" content="Parking calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-200 w-screen h-screen p-10">
        <div className="bg-blue-500 text-white border-white border-8 sm:border-[14px] md:border-[20px] rounded-xl aspect-[2/3] max-w-full max-h-full m-auto">
          <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <text
            x={100}
            y={150}
            fontSize={250}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fill: 'white',
              fontWeight: 'bolder',
            }}>
              P
            </text>
            <text
              x={100}
              y={275}
              fontSize={35}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fill: 'white',
                fontWeight: 'bolder',
              }}>
              {persons[currentIndex % persons.length]}
            </text>
            <text
              x={100}
              y={295}
              fontSize={5}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fill: 'white',
                fontWeight: 'bolder',
              }}>
              (après: {persons[nextIndex % persons.length]})
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
