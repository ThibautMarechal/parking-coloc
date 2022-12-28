import type { NextPage } from "next";
import Head from "next/head";
import Snowfall from 'react-snowfall'
import { Fireworks } from '@fireworks-js/react'

function isWinter(date: Date){
  const month =  date.getMonth()
  return month === 11 || month <= 2
}

function isNewYear(date: Date) {
  const month =  date.getMonth()
  const day =  date.getDate()
  return month === 11 && day === 31 || month === 0 && day === 1
}

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
  const nextIndex = currentIndex + 1;
  return (
    <>
      <Head>
        <title>Parking coloc</title>
        <meta name="description" content="Parking calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isNewYear(today) &&
        (<Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />)
      }
      <div className="bg-blue-500 text-white border-white border-8 transition-all sm:border-[20px] rounded-3xl aspect-[2/3] m-auto inset-0 fixed max-h-[75vh] max-w-[75vw]">
        {isWinter(today) && <Snowfall />}
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
    </>
  );
};

export default Home;
