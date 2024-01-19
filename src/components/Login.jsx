import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import context from "../context/Context";
const Login = () => {
  const navigate = useNavigate();
  const a = useContext(context);
  // if (!a.isToken) {
  //   navigate(-1);
  // }
  const [data, setData] = useState({ email: "", password: "" });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      return window.alert("fields can't be empty");
    }
    const response = await axios.post("http://localhost:3000/api/login", data);
    localStorage.setItem("token", response.data.token);
    a.setIstoken(true);
    setData({ email: "", password: "" });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mt-28">
          <label
            htmlFor="username-success"
            className="flex justify-center mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Your email
          </label>
          <input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
            id="username-success"
            className="flex justify-center mx-auto bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  w-1/3 p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="password"
            className="flex justify-center mx-auto mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            id="password"
            className=" flex mx-auto bg-green-50  border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  w-1/3 p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Enter your password"
          />
        </div>
        <div className="p-2 w-full">
          <button
            type="submit"
            // onClick={addMovie}
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup">
            <span className="text-2xl text-red-400">Sign up</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
