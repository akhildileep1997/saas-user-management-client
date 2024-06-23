import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../connection/baseUrl'
import { useDispatch } from 'react-redux'
import { setAuthUser, setToken } from '../Redux/userSlice'
import toast from "react-hot-toast";

const Login = () => {
  //for store
  const dispatch = useDispatch()
  //for navigation
  const navigate = useNavigate()

  //state for taking the values
  const [inputs,setInputs] = useState({})

  //getting value from each input
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  //sending api call for login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!inputs.email || !inputs.password) {
        toast.error('enter mail and password');
        return
      }
      const response = await axios.post(`${baseUrl}/user/log-in`, {
        email: inputs.email,
        password:inputs.password
      })
      if (response) {
        dispatch(setAuthUser(response.data.user))
        dispatch(setToken(response.data.token))
        toast.success(response.data.message)
        navigate('/profile')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setInputs({
      email: "",
      password:""   
    })
  }
  return (
    <div className='flex justify-center items-center'>
      <div className="min-w-96 mx-auto">
        <div className=" p-6 w-full bg-gray-100 rounded-xl border border-gray-700 shadow-xl">
          <h1 className="text-3xl font-bold text-center text-sky-500">Login</h1>
          <div className="divider"></div>
          <form onSubmit={handleLoginSubmit}>
            <div className="2 w-96 ">
              <div className="mt-4">
                <label className="label p-2 ">
                  <span className="text-base label-text text-sky-500">
                    email
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  className="w-full input input-bordered h-10"
                  type="email"
                  name="email"
                  value={inputs.email}
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="mt-2">
                <label className="label p-2 ">
                  <span className="text-base label-text text-sky-500">
                    Password
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  className="w-full input input-bordered h-10"
                  type="password"
                  name="password"
                  placeholder="enter password"
                  value={inputs.password}
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-sky-500 ">
                  New here ?
                  <Link
                    to={"/register"}
                    className="font-bold text-gray-500 ms-3 "
                  >
                    register here
                  </Link>
                </span>
              </div>
              <div className="mt-3 flex justify-center">
                <button
                  type="submit"
                  className="btn btn-block  h-15 bg-sky-600 text-white hover:text-white bg-sky-400"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login