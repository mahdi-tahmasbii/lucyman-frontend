import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/users/login",
        {
          phoneNumber,
          password,
          rememberMe: true,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Authentication succeeded, sign in using NextAuth
        await signIn("credentials", {
          phoneNumber,
          password,
          redirect: false,
        });

        // Clear the form fields
        // setPhoneNumber("");
        // setPassword("");
        // setError("");

        // Redirect to home page
        router.push("/HomePage");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Handle error
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 font-medium text-gray-700"
        >
          شماره تلفن
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full p-2 border border-gray-300 rounded"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 font-medium text-gray-700"
        >
          رمز ورود
        </label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white w-screen py-2 font-medium text-whitebg-blue-500 rounded text-center"
        >
          ورود
        </button>
      </div>
    </form>
  );
}
