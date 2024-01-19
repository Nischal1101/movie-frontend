import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import context from "../context/Context";

const Signup = () => {
  const navigate = useNavigate();
  const a = useContext(context);
  
  const [tick, setTick] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/signup", form);
    setForm({
      name: "",
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="h-[90vh]">
      <form
        onSubmit={handleOnSubmit}
        className="h-full  flex flex-col justify-center items-center "
      >
        <div className=" mb-6">
          <label
            htmlFor="name"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="name"
            id="name"
            className=" w-[500px] shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            id="email"
            className=" w-[500px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter your password
          </label>
          <input
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder=" Enter your password"
            id="password"
            className=" w-[500px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value={tick}
              onChange={(e) => {
                setTick(e.target.checked);
              }}
              className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          disabled={tick ? false : true}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default Signup;
