import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import MovieDetail from "./pages/MovieDetail";
import Main from "./pages/Main";
import MovieList from "./pages/MovieList";
import GlobalStyle from "./components/GlobalStyle";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
