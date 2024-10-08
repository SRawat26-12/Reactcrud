
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Insert from "./Insert";
import Display from "./Display";
import Layout from "./Layout";
import Home from "./Home";
import Search from "./Search";
import Update from "./Update";
import Edit from "./Edit";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route  path="search" element={<Search/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="myedit/:id" element={<Edit/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;