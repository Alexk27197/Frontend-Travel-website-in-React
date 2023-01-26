import "./signupFormStyles.css";

function SignupForm() {
  return (
    <div className="signup-container">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Signup</button>
      </form>
    </div>
  );
}
