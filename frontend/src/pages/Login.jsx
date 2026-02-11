import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [state, setState] = useState("Login"); // Changed to 'Login' as default
  useEffect(() => {
    if (location.state?.formType === 'login') {
      setState('Login')
    }
  }, [location]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const responseData = await res.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await res.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full">
        {/* Toggle Switch */}
        <div className="flex mb-1 bg-white mt-15 rounded-t-lg overflow-hidden shadow-sm"></div>

        {/* Form Container */}
        <div className="bg-white p-8 sm:p-10 rounded-b-lg rounded-tr-lg shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {state === "Login" ? "Welcome Back" : "Join Us Today"}
            </h1>
            <p className="text-gray-600">
              {state === "Login"
                ? "Login to your account to continue"
                : "Create a new account to get started"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Input Fields */}
            <div className="space-y-4">
              {state === "Sign Up" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                    text-gray-900 text-base outline-none transition-all
                    placeholder:text-gray-400 disabled:bg-gray-100"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={changeHandler}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                  text-gray-900 text-base outline-none transition-all
                  placeholder:text-gray-400 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                  text-gray-900 text-base outline-none transition-all
                  placeholder:text-gray-400 disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Terms & Conditions - Only for Sign Up */}
            {state === "Sign Up" && (
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  disabled={loading}
                  className="mt-1 h-4 w-4 rounded border-gray-300 
                  text-red-500 focus:ring-red-500/20 disabled:bg-gray-100"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={() => (state === "Login" ? login() : signup())}
              type="button"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-base 
              transition-all duration-300 focus:outline-none focus:ring-2 
              focus:ring-offset-2 cursor-pointer ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 focus:ring-red-500 hover:shadow-lg hover:shadow-red-500/30"
              } text-white`}
            >
              {loading
                ? "Processing..."
                : state === "Login"
                  ? "Login to Account"
                  : "Create Account"}
            </button>

            {/* Forgot Password - Only for Login */}
            {state === "Login" && (
              <div className="text-center">
                <a
                  href="#"
                  className="text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  Forgot your password?
                </a>
              </div>
            )}
          </form>

          {/* Toggle Prompt */}
          <div className="text-center pt-6 mt-6 border-t">
            <p className="text-gray-600">
              {state === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={() =>
                  setState(state === "Login" ? "Sign Up" : "Login")
                }
                disabled={loading}
                className="cursor-pointer text-red-500 hover:text-red-600 font-medium underline disabled:text-gray-400"
              >
                {state === "Login" ? "Sign Up" : "Login here"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
