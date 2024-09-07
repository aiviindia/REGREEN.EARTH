import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
