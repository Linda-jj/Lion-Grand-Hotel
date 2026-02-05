import "./App.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./components/About/About";
import Activity from "./components/Activity/Activity";
import GusestsReview from "./components/GusteReview/GusetsReview";
import HotellList from "./components/HotelList/HotellList";
import HotelDetails from "./screens/HotelDetails";
import RoomsContextProvider from "./contex/RoomsContext";
import Book2 from "./components/Book/Book2/Book2";
import PaymentSuccess from "./components/paymentsucces/PaymentSuccess";
import Contact from "./components/contact/Contact"

export const backendUrl = "https://lion-grand-hotel-1.onrender.com";

export default function App() {
  return (
    <RoomsContextProvider>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
                <About/>
              <HotellList />
              <Activity />
              <GusestsReview />
              <Contact/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<HotellList />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/gusest" element={<GusestsReview />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/room/:id" element={<HotelDetails />} />
        <Route path="/book2" element={<Book2 />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>

      <Footer />
    </RoomsContextProvider>
  );
}
