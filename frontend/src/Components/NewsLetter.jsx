import { useState } from "react";
import { API_URL } from "../config";
const NewsLetter = () => {
  const handleSubscribe = async() => {
    const res = await fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    console.log(data);
  }
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  return (
    <section className="py-16 bg-gradient-to-b from-pink-300/40 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Exclusive Offers On Your Email
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and stay updated
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3.5 rounded-full sm:rounded-r-none
                border border-gray-400 focus:border-pink-500
                text-gray-900 text-lg outline-none bg-white
                focus:ring-2 focus:ring-pink-500/20 transition-all
                placeholder:text-gray-400"
            />
            <button
              className="px-8 py-3.5 bg-black text-white font-semibold rounded-full
                sm:rounded-l-none text-lg transition-all duration-300
                hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-500/30
                focus:outline-none focus:ring-2 hover:cursor-pointer focus:ring-gray-500 focus:ring-offset-2" onClick={() => {
                  setSubscribe(true);
                  handleSubscribe(email);
                }}
            >
              {subscribe ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          {/* Optional: Add privacy notice */}
          <p className="mt-4 text-sm text-gray-500">
            We care about your data. Read our{" "}
            <a href="#" className="text-red-500 hover:text-red-600 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
