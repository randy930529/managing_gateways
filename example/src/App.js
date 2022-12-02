import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GatewayDetails from "./pages/GatewayDetails";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/** Error Display */}
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<GatewayDetails />} />

          {/** Connect API */}
          {/* <Route exact path="/activate/:uid/:token" element={<Activate />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
