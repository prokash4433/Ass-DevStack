import { Suspense } from "react";
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Cards from "./Components/ProgrammingCards/Cards";
import type { Icards } from "./types/cardsTypes";

const cardsFetch = async (): Promise<Icards[]> => {
  const res = await fetch('/data.json')
  const data =await res.json();
  return data;
 }
 

function App() {
  const cardsPromise = cardsFetch();
  

  return (
    <>
        <Navbar />
        <Banner />
        <Suspense fallback={<h2>Loading...</h2>} >
        <Cards cardsPromise={cardsPromise} />

        </Suspense>
        
    </>
  )
}

export default App
