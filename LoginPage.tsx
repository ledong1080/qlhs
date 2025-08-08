import React, { useState } from "react";
import { login } from "../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await login(email, password);
      alert("Đăng nhập thành công!");
      console.log("User:", userCredential.user);
    } catch (error: any) {
      alert("Lỗi đăng nhập: " + error.message);
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mật khẩu" />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default LoginPage;
