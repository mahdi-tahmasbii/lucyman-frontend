import { useState } from "react";
import { useRouter } from "next/router";
const RegisterForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      phone,
      gender,
      password,
    };

    try {
      const res = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Registration successful
        // Redirect or show success message
        router.push("/auth/login");
      } else {
        const data = await res.json();
        // Registration failed
        // Show error message from the response
      }
    } catch (error) {
      // Registration failed
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          شماره تلفن{" "}
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">جنسیت</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
              required
            />
            مرد
          </label>
          <label className="inline-flex items-center ml-10">
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
              required
            />
            زن
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 font-medium text-gray-700"
        >
          رمز ورود
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="  py-2 font-medium text-white bg-blue-500 rounded text-center"
      >
        ثبت نام کنید.
      </button>
    </form>
  );
};

export default RegisterForm;
