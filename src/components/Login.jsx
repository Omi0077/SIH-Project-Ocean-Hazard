import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // You can send formData to backend here
  };

  const handleGoogleSignIn = () => {
    // Replace with your Google OAuth logic
    alert("Google Sign-In clicked");
  };

  return (
    <div className="flex items-center justify-center bg-[#181818] py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-[#222] border border-[#333] rounded-2xl p-10 w-full max-w-sm shadow-2xl"
      >
        <h2 className="text-white text-3xl font-extrabold mb-8 text-center tracking-tight">
          Log in to HazardApp
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-400 mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#181818] border border-[#444] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1a9e7e] font-medium"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-gray-400 mb-2 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#181818] border border-[#444] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1a9e7e] font-medium"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1a9e7e] text-white py-3 px-4 rounded-lg font-bold hover:bg-[#13896a] transition mb-4"
        >
          Log In
        </button>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-[#222] py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <svg width="22" height="22" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C36.64 2.34 30.7 0 24 0 14.82 0 6.73 5.48 2.69 13.44l8.48 6.6C13.13 13.09 18.13 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.5c-.54 2.9-2.18 5.36-4.66 7.04l7.26 5.64C43.98 37.36 46.1 31.41 46.1 24.5z"/>
              <path fill="#FBBC05" d="M11.17 28.04c-1.04-3.09-1.04-6.41 0-9.5l-8.48-6.6C.86 15.41 0 19.59 0 24c0 4.41.86 8.59 2.69 12.06l8.48-6.6z"/>
              <path fill="#EA4335" d="M24 48c6.7 0 12.64-2.21 16.98-6.04l-7.26-5.64c-2.02 1.36-4.6 2.14-7.72 2.14-5.87 0-10.87-3.59-12.83-8.66l-8.48 6.6C6.73 42.52 14.82 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
  );
}