import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Mahasiswa from "./pages/Mahasiswa";
import Nav from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./Config/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
