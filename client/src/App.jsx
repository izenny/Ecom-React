// // import React, { useContext } from "react";
// // import { Route, Routes } from "react-router-dom";
// // import Login from "./Pages/Login";
// // import AuthCheck from "./Auth/AuthCheck";
// // import Home from "./Pages/Home";
// // import { UserContext } from "./Contexts/UserContexts";

// // const App = () => {
// //   const { token } = useContext(UserContext);
// //   console.log(token);

// //   return (
// //     <div className="h-screen w-full flex justify-center items-center">
// //       <Routes>
// //         <Route path="/" element={<AuthCheck token={token} />}>
// //           <Route path="login" element={<Login />} />
// //         </Route>
// //         <Route
// //           path="/home"
// //           element={
// //             <AuthCheck token={token}>
// //               <Home />
// //             </AuthCheck>
// //           }
// //         >
// //           <Route path="product" element={<Products/>}/>
// //         </Route>
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useContext, useEffect } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Login from "./Pages/Login";
// import AuthCheck from "./Auth/AuthCheck";
// import Home from "./Pages/Home";

// import { UserContext } from "./Contexts/UserContexts";
// import ProductView from "./Pages/ProductView";
// import Products from "./Pages/Products";

// const App = () => {
//   const { token } = useContext(UserContext);
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen w-full ">
//       <Routes>
//         <Route path="/" element={<AuthCheck token={token}></AuthCheck>}>
//           <Route path="/login" element={<Login />} />
//         </Route>

//         <Route
//           path="/user"
//           element={
//             <AuthCheck token={token}>
//               <Home />
//             </AuthCheck>
//           }
//         >
//           <Route path="home" element={<Products />} />
//           <Route path="product/:productId" element={<ProductView />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AuthCheck from "./Auth/AuthCheck";
import Home from "./Pages/Home";
import ProductView from "./Pages/ProductView";
import Products from "./Pages/Products";
import { UserContext } from "./Contexts/UserContexts";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" element={<AuthCheck token={token} />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/user"
          element={
            <AuthCheck token={token}>
              <Home />
            </AuthCheck>
          }
        >
          <Route path="home" element={<Products />} />
          <Route path="product/:productId" element={<ProductView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
