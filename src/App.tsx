import { Suspense } from "react";
import Navbar from "./Components/Navbar";
 
import Cards from "./Components/ProgrammingCards/Cards";
import type { Icards } from "./types/cardsTypes";
import { ToastContainer } from "react-toastify";
 
 
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
 
 
 

const cardsFetch = async (): Promise<Icards[]> => {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}data.json`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
      
    return []; 
  }
};


const cardsPromise = cardsFetch();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
       
      <ToastContainer />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;