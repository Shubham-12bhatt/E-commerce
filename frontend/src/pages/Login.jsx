const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 sm:p-10 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign Up</h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                text-gray-900 text-base outline-none transition-all
                placeholder:text-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                text-gray-900 text-base outline-none transition-all
                placeholder:text-gray-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                text-gray-900 text-base outline-none transition-all
                placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg
            font-semibold text-base transition-all duration-300
            hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30
            focus:outline-none focus:ring-2 cursor-pointer focus:ring-red-500 focus:ring-offset-2"
          >
            Sign up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Log in
            </a>
          </p>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 
              text-red-500 focus:ring-red-500/20"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By signing up, you agree to our {" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
