import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./components/Order";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      // dark mode
      document.body.classList.add("bg-black", "text-white");
    } else {
      // light theme
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <header>
          <Navbar />
        </header>

        <main className="container mt-4">
          <Order />
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
