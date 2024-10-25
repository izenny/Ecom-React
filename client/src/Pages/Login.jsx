import React, { useContext, useState } from "react";
import axios from "axios";
import shopping from "../Assets/file.png";
import shopping2 from "../Assets/file2.png";

import { UserContext } from "../Contexts/UserContexts";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      const { token } = response.data;
      login(username, token);
    } catch (error) {
      console.log(error);
      setError("Login failed, please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#0cf0ca] relative">
      <div
        className="hidden md:block absolute left-0 top-0 h-full w-1/2 bg-contain bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${shopping2})` }}
      ></div>

      <div
        className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-contain bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${shopping})` }}
      ></div>

      {/* Login form */}
      <div className="absolute z-10 flex flex-col justify-around items-center bg-white/10 p-5 rounded-2xl shadow-2xl  w-[22rem] h-[25rem] ">
        <h2 className="text-3xl text-white font-serif border-b mb-1">Welcome Back</h2>
        <div className="flex-col flex gap-3 w-full p-2">
          <input
            className="border bg-transparent p-2 text-center outline-none placeholder-slate-100 text-lg text-white font-serif rounded-2xl "
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border bg-transparent p-2 text-center outline-none placeholder-slate-100 text-lg text-white font-serif rounded-2xl "
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-sm text-slate-800 mt-2 hover:text-blue-500 cursor-pointer text-right">
            Forgot password?
          </span>
        </div>
        {error && (
          <span className="text-xs text-red-500 text-center">{error}</span>
        )}
        <button
          className="bg-[#F95454] text-white font-serif text-xl rounded-lg h-10 w-full"
          onClick={handleLogin}
        > 
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
