import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login, Logout } from "../../app/features/Auth/Auth";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state check karne ke liye
  const user = useSelector((state) => state.auth.user);
  console.log("Redux User Data:", user);

  // Local state for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Input change handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Redux dispatch
    dispatch(Login(formData));

    // Navigate to dashboard ya home
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100 my-20">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="********"
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
