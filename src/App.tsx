import { Suspense } from "react";
import Navbar from "./Components/Navbar";
 
import Cards from "./Components/ProgrammingCards/Cards";
import type { Icards } from "./types/cardsTypes";
import { ToastContainer } from "react-toastify";
 
 
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
 
 
 const cardsPromise = async (): Promise<Icards[]>=>{
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}


 

function App() {
  return (
    <>
      <Navbar />
      <Banner />
       
      <ToastContainer />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards cardsPromise={cardsPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;