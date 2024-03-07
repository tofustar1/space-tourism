import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

const App = () => {

  const location = useLocation();
  const pathname = location.pathname.slice(1) || 'home';

  return (
      <>
       <div className={`bg-wrapper ${pathname}`}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Routes>
       </div>
      </>
  );
}

export default App;
