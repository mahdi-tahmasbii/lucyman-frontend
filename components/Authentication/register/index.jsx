import { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    let isValid = true;

    if (!email) {
      setEmailError("ایمیل را وارد کنید.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneNumber) {
      setPhoneError("شماره تلفن را وارد کنید.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!gender) {
      setGenderError("جنسیت را انتخاب کنید.");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (!password) {
      setPasswordError("رمز ورود را وارد کنید.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) {
      return;
    }

    const formData = {
      email,
      phoneNumber,
      gender,
      password,
    };
    console.log(formData);
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
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      // Registration failed
      // Show error message
      toast.error(error.message || "Registration failed");
    }
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            ایمیل
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 font-medium text-gray-700"
          >
            شماره تلفن{" "}
          </label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
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
              />
              زن
            </label>
          </div>
          {genderError && (
            <p className="text-red-500 text-sm mt-1">{genderError}</p>
          )}
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
            className="w-full p-2  border border-gray-300 borderborder-gray-300 rounded"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white w-screen py-2 font-medium text-whitebg-blue-500 rounded text-center"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
