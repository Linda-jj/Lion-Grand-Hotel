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

export const backendUrl = "http://localhost:7000";

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
              <HotellList />
              <About />
              <Activity />
              <GusestsReview />
              
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<HotellList />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/gusest" element={<GusestsReview />} />
        <Route path="/room/:id" element={<HotelDetails />} />
         <Route path="/book2" element={<Book2 />} />
         <Route path="/payment-success" element={<PaymentSuccess/>} />
      </Routes>

      <Footer />
    </RoomsContextProvider>
  );
}
