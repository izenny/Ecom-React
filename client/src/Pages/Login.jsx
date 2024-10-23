import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../Contexts/UserContexts";
const Login = () => {
    const {login} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [resdata, setResdata] = useState();
  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    setError(null);

   
    try {
      const response = await axios.post(
        " https://fakestoreapi.com/auth/login",
        { username, password }
      );
      console.log('response',response.data);
      const {token} = response.data
      console.log(token);
      login(username,token)
    } catch (error) {
        console.log(error);
        setError('Login failed, please try again.');
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-yellow-200">
      <div className="flex flex-col justify-around items-center p-5 rounded-lg shadow bg-white w-[20rem] h-[28rem]">
        <h2 className="text-xl font-mono">Welcome Back</h2>
        <div className="flex-col flex gap-3 w-full p-2">
          <input
            className="border p-2 rounded-lg"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-xs hover:text-blue-500 cursor-pointer text-right">
            forgot password?
          </span>
        </div>
        {error && (
          <span className="text-xs text-red-500 text-center">{error}</span>
        )}
        <button
          className="bg-orange-400 rounded-lg h-10 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
