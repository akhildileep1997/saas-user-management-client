import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../connection/baseUrl";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !inputs.name ||
        !inputs.email ||
        !inputs.mob ||
        !inputs.address ||
        !inputs.companyName ||
        !inputs.position ||
        !inputs.password ||
        !inputs.confirmPassword
      ) {
        toast.error("All fields are required");
        return;
      }
      if (inputs.password.length < 7) {
        toast.error("Password should be at least 7 characters long");
        return;
      }
      if (inputs.password !== inputs.confirmPassword) {
        toast.error("Password and Confirm Password should match");
        return;
      }
      if (inputs.mob.length !== 10) {
        toast.error("Mobile number should be valid and contain 10 digits");
        return;
      }
      const response = await axios.post(`${baseUrl}/user/register`, {
        name: inputs.name,
        email: inputs.email,
        mob: inputs.mob,
        address: inputs.address,
        companyName: inputs.companyName,
        position: inputs.position,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
      });
      if (response) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
      setInputs({
        name: "",
        email: "",
        mob: "",
        address: "",
        companyName: "",
        position: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="h-full shadow-2xl p-6 w-full bg-gray-100 rounded-xl border border-gray-600">
        <h1 className="text-3xl font-bold text-center text-sky-500">Sign-Up</h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="flex justify-center gap-3">
          <div className="first w-96">
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">Name</span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="text"
                name="name"
                value={inputs.name}
                placeholder="John Doe"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">Email</span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="email"
                name="email"
                value={inputs.email}
                placeholder="john@gmail.com"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">Phone</span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="text"
                name="mob"
                value={inputs.mob}
                placeholder="9845698175"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">
                  Address
                </span>
              </label>
              <textarea
                onChange={handleChange}
                className="w-full textarea textarea-bordered h-36"
                name="address"
                value={inputs.address}
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="second w-96">
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">
                  Company
                </span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="text"
                name="companyName"
                value={inputs.companyName}
                placeholder="ABC Company"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">
                  Position
                </span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="text"
                name="position"
                value={inputs.position}
                placeholder="Manager"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">
                  Password
                </span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="password"
                name="password"
                value={inputs.password}
                placeholder="Enter password"
              />
            </div>
            <div className="mt-2">
              <label className="label p-2">
                <span className="text-base label-text text-sky-500">
                  Confirm Password
                </span>
              </label>
              <input
                onChange={handleChange}
                className="w-full input input-bordered h-10"
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                placeholder="Confirm password"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-sky-500">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-gray-500">
                  Login here
                </Link>
              </span>
            </div>
            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="btn btn-block h-15 bg-sky-600 text-white hover:text-white bg-sky-400"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register