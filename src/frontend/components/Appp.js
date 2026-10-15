import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Navbar";
import Courses from "./Courses";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Testimonial from "./Testimonial"
import FAQ from "./FAQs";
import Team from "./Team";
import PrivacyPolicy from "./PP";
import TermsConditions from "./T&C";
import CourseDetails from "./CourseDetails";


function Appp() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Home />} /></Route>
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Courses"} element={<Courses />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Testimonial"} element={<Testimonial />} />
          <Route path={"/Team"} element={<Team />} />
          <Route path={"/FAQ"} element={<FAQ />} />
          <Route path={"/PP"} element={<PrivacyPolicy />} />
          <Route path={"/T&C"} element={<TermsConditions />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Appp;
