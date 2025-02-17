import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Carshop from "./components/Carshop/Carshop";
import Counter from "./components/counter/Counter";
import UserPage from "./components/userPage/UserPage";
import ProducktDescription from "./components/productDescription/ProducktDescription";
import FetchChuckNorris from "./components/fetchChuckNorris/FetchChuckNorris";
import IpLocation from "./components/IpLocation/IpLocation";
import Coctail from "./components/Coctail/Coctail";
import Playground from "./components/Playground/Playground";
import ProductPage from "./components/ProductPage/ProductPage";
import DataFetcher from "./components/dataFetcher/DataFetcher";


function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Carshop" element={<Carshop />} />
          <Route path="ProducktDescription" element={<ProducktDescription />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="FetchChuckNorris" element={<FetchChuckNorris />} />
          <Route path="IpLocation" element={<IpLocation />} />
          <Route path="Coctail" element={<Coctail />} />
          <Route path="Playground" element={<Playground />} />
          <Route path="/ProducktDescription/:productId" element={<ProductPage />} />
          <Route path="/DataFetcher" element={<DataFetcher />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
