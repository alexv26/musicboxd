import "./component_styles/LoginTile.css";

// Source: https://codepen.io/fghty/pen/PojKNEG

function LoginTile() {
  return (
    <div className="login-tile">
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        <div className="sign-up">
          <p>Don't have an account?</p>
          <a href="/">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginTile;
