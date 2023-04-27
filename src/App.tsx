import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutLayout from "./components/AboutLayout";
import AboutIntro from "./pages/about/AboutIntro";
import AboutTechstack from "./pages/about/AboutTechstack";
import AboutInterests from "./pages/about/AboutInterests";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<AboutLayout />}>
        <Route index element={<AboutIntro />} />
        <Route path="techstack" element={<AboutTechstack />} />
        <Route path="interests" element={<AboutInterests />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
