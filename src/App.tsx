import React from 'react';
import { Route, Routes} from "react-router-dom";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Home from "./pages/Home/Home";
import Header from './shared/header/Header'
function App() {
  return (
    <div className="container">
        <Header/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/month-statistics' element={<MonthStatistics/>}/>
     </Routes>
    </div>
  );
}

export default App;
