import TopNavbar from "../components/TopNavbar.jsx";
import LoginTile from "../components/LoginTile.jsx";

function Login() {
  return (
    <div style={{ backgroundColor: "#212529", minHeight: "100vh" }}>
      <TopNavbar />
      <LoginTile />
    </div>
  );
}

export default Login;
