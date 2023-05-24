import { useSession, signOut } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();
  if (true) {
    return <div>{status}</div>;
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/auth/login" }); // Redirect to login page after successful logout
  };
  console.log(status);
  console.log(session);
  return (
    <div>
      {/* <h1>{session.user.email}</h1> */}
      {/* <h2>Welcome, {session.user.email}</h2>
      <p>Phone Number: {session.user.phoneNumber}</p>
      <p>Gender: {session.user.gender}</p> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
