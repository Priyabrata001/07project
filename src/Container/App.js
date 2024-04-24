
import { Header,Footer} from "../Components/Layout";
import { Home,MenuItemDetails} from "../Pages";
import { Routes,Route } from "react-router-dom";



function App() {
 
  return (
    <div >
     <Header/>
     <div className="pb-5">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
      </Routes>
     </div>
      
     <Footer/>
    </div>
  );
}

export default App;
