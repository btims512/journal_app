import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Log In to the Gratitude Journal App</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
