import { useState } from "react";




const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value})
  }





  const login = async () => {
     const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    })
    const responseData = await res.json();
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
     else {
      alert(responseData.errors)
   }
  }
  

 const signup = async () => {
      const res = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    })
    const responseData = await res.json();
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
   }
    else {
      alert(responseData.errors)
   }
}



  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 sm:p-10 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{state}</h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            {state === "Sign Up" ?   <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                name="username"
                value={formData.username}
                onChange={changeHandler}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                text-gray-900 text-base outline-none transition-all
                placeholder:text-gray-400"
              />
            </div> : ""}
          
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                value={formData.email}
                onChange={changeHandler}
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
                name="password"
                value={formData.password}
                onChange={changeHandler}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                text-gray-900 text-base outline-none transition-all
                placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button onClick={() => {
            state === 'Login' ? login() : signup();
          }}
            type="button"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg
            font-semibold text-base transition-all duration-300
            hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30
            focus:outline-none focus:ring-2 cursor-pointer focus:ring-red-500 focus:ring-offset-2"
          > {state=== 'Sign Up'?"Sign up" : "Login"}
            
          </button>

          {/* Login Link */}
          {state === "Login" ?
            <p className="text-center text-gray-600">
            Create an account?{" "}
            <a onClick={() => setState('Sign Up')}
              href="#"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Sign up
            </a>
            </p>
            :
            
            <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a onClick={() => setState('Login')}
              href="#"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Log in
            </a>
         
          </p> 
        }
        

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
