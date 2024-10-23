// import React, { useContext } from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login";
// import AuthCheck from "./Auth/AuthCheck";
// import Home from "./Pages/Home";
// import { UserContext } from "./Contexts/UserContexts";

// const App = () => {
//   const { token } = useContext(UserContext);
//   console.log(token);

//   return (
//     <div className="h-screen w-full flex justify-center items-center">
//       <Routes>
//         <Route path="/" element={<AuthCheck token={token} />}>
//           <Route path="login" element={<Login />} />
//         </Route>
//         <Route
//           path="/home"
//           element={
//             <AuthCheck token={token}>
//               <Home />
//             </AuthCheck>
//           }
//         >
//           <Route path="product" element={<Products/>}/>
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import AuthCheck from "./Auth/AuthCheck";
import Home from "./Pages/Home";
import Products from "./Pages/Products"; // Ensure you have this component
import { UserContext } from "./Contexts/UserContexts";

const App = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to home if token exists on first load
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        >
          <Route path="product" element={<Products />} />
        </Route>

       
      </Routes>
    </div>
  );
};

export default App;
