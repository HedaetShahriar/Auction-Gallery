import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Banner from './components/Banner/Banner.jsx'
import ActiveAuctions from './components/AuctionItems/ActiveAuctions.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const addFavorite = (title) =>{
    toast.success(title + " added to favorites", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const removeFavorite = (title) =>{
    toast.warn(title + " removed from favorites", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <div className="bg-[#EBF0F5] min-h-screen">
        <Navbar></Navbar>
        <ToastContainer />
        <Banner></Banner>
        <ActiveAuctions addFavorite={addFavorite} removeFavorite={removeFavorite}></ActiveAuctions>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
