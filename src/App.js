import  { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyContext from "./components/MyContext";
import { modeReducer } from "./components/MyReducer";

import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import { MyProjects } from "./pages/MyProjects";
import { ContactMe } from "./pages/ContactMe";

function App() {
  const savedMode = localStorage.getItem("isDarkMode") === "true";

  const [state, dispatch] = useReducer(modeReducer, {
    isDarkMode: savedMode ?? false,
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", state.isDarkMode);
  }, [state.isDarkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.isDarkMode);
  }, [state.isDarkMode]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App transition-colors duration-500">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/portfolio/"
              element={
                <>
                  <Header />
                  <About />
                  <Projects />
                  <Skills />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/projects" element={<MyProjects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
