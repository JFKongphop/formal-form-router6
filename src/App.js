// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import './App.css';

// // normal page
// import About from "./pages/About";
// import Error from "./pages/Error";
// import Home from "./pages/Home";
// import Service from "./pages/Service";

// // login page
// import Login from "./pages/Login";
// import Dashboard from "./pages/DashBoard";
// import ProtectedRoute from "./pages/ProtectedRoute";


// // product show
// import Products from "./pages/Products";
// import SharedLayout from "./pages/SharedLayout";
// import SharedProductLayout from './pages/SharedProductLayout';
// import SingleProduct from "./pages/SingleProduct";


 
// function App() {
//   const [ user, setUser ] = useState(null);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SharedLayout/>}>

//           {/* when click to to the navbat that go to this page
//           and go to the path in the route and show of the content */}
//           <Route index element={<Home/>}/>
//           <Route path="About" element={<About/>}/>
//           <Route path="Service" element={<Service/>}/>
          
//           {/* if want to use single product*/}
//           {/* set this to go to product  */}
//           <Route path="Products" element={<SharedProductLayout/>}>
//             <Route index element={<Products/>}/>

//             when click more info that go to this page
//             <Route path=":productId" element={<SingleProduct/>}/>  
//           </Route>
//           <Route element={<Products/>}/>

//           {/* login page and send user to props go to show name at dashboard */}
//           {/* send setUser function to set of the name and email */}
//           <Route path="Login" element={<Login setUser={setUser}/>}/>

          

//           {/* if want to show name in after login  */}
//           {/* send name to dashboard after login */}
//           {/* passing to ProtectedRoute to dashbaord */}
//           <Route 
//             path='dashboard'
//             element={
//               <ProtectedRoute user={user}>
//                 <Dashboard user={user}/>
//               </ProtectedRoute>}
//           />

//           <Route path="*" element={<Error/>}/>
//         </Route>
        
//         {/* when user is true show this page */}
//         <Route path="dashboard" element={<div>dashboard</div>}>
//           <Route path="stats" element={<div>stats</div>} />
//         </Route>
      
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';

// normal page
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Error from "./pages/Error";

// peoduct page
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import SharedProductLayout from './pages/SharedProductLayout';

// login page
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";



function App() {
  const [ user, setUser ] = useState(null)
  return (
    <Router>

      <Routes >

        <Route path='/' element={<SharedLayout />}>
          {/* use index for the main page */}
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>}/>
          <Route path="service" element={<Service/>}/>

          <Route path="products" element={<SharedProductLayout/>}>
            <Route index element={<Products/>}/>

            {/* set this to go to each product */}
            <Route path=":productId" element={<SingleProduct/>} />
          </Route>

          {/* if want to login only use this */}
          <Route path='login' element={<Login setUser={setUser}></Login>}/>

          {/* if want to send name to prop after login use this */}
          <Route 
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <DashBoard user={user}/>
              </ProtectedRoute>}
          />

          <Route path="*" element={<Error/>}/>
        </Route>

        {/* if want to show name to prop after login use this */}
        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
