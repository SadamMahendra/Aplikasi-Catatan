import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./component/Navigation";
import HomePages from "./pages/HomePages";
import ArchivesPages from "./pages/ArchivesPages";
import NewPage from "./pages/NewPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { FiLogOut } from "react-icons/fi";
import ActionButton from "./component/ActionButton";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchWithData();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing === true) {
    return;
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container" data-theme={theme}>
          <header>
            <h1>
              <Link to="/">Aplikasi Catatan</Link>
            </h1>
            <ActionButton />
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    );
  }
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className="app-container" data-theme={theme}>
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Navigation />
          <ActionButton />
          <button className="button-logout" onClick={onLogout}>
            <FiLogOut />
            {authedUser.name}
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/archives" element={<ArchivesPages />} />
            <Route path="/notes/new" element={<NewPage />} />
            <Route path="/notes/:idUrl" element={<DetailPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
