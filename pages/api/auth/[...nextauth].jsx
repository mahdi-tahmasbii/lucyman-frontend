import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const options = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        phone: { label: "Phone Number", type: "text" },
        gender: {
          label: "Gender",
          type: "radio",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch("http://localhost:3001/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          const data = await res.json();

          if (res.ok) {
            return data.user;
          } else {
            throw new Error(data.message || "Registration failed");
          }
        } catch (error) {
          throw new Error(error.message || "Registration failed");
        }
      },
    }),
  ],
  // Add any additional NextAuth configuration options here
};

export default (req, res) => NextAuth(req, res, options);
