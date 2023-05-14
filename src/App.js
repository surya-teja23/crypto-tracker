import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Coin from "./Coin";
import Missing from "./Missing";

function App() {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "url(./images/cryptobckg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <Routes>
        <Route path="/" element={ <Outlet /> }>
          <Route index element={ <Home /> } />
          <Route path=":id" element={ <Coin /> } />
        </Route>
        <Route path="*" element={ <Missing /> } />
      </Routes>
    </div>
  );
}

export default App;
