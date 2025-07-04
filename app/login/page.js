"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("⚠️ Please fill in both fields.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (email === "text@text.com" && password === "password") {
        alert("✅ Login successful!");
      } else {
        setError("❌ Invalid email or password!");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f6d365, #fda085)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "420px",
          transition: "transform 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="https://img.icons8.com/color/96/000000/user-shield.png"
          alt="Logo"
          style={{
            display: "block",
            margin: "0 auto 20px",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
          }}
        />

        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333333",
            fontWeight: "600",
          }}
        >
          Welcome Back 👋
        </h2>

        {error && (
          <div
            style={{
              background: "#ffe0e0",
              padding: "10px",
              color: "#d8000c",
              borderRadius: "6px",
              marginBottom: "15px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <label style={{ fontWeight: "500", color: "#555" }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0 20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: "#f9f9f9",
              fontSize: "15px",
              boxShadow: "inset 2px 2px 5px #e0e0e0, inset -2px -2px 5px #ffffff",
              transition: "0.3s",
            }}
          />

          <label style={{ fontWeight: "500", color: "#555" }}>Password</label>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                background: "#f9f9f9",
                fontSize: "15px",
                boxShadow:
                  "inset 2px 2px 5px #e0e0e0, inset -2px -2px 5px #ffffff",
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#ff8c42",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a
              href="#"
              style={{
                color: "#ff8c42",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background:
                "linear-gradient(90deg, #ff8c42, #ff4e50)",
              color: "#fff",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #ff4e50, #ff8c42)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #ff8c42, #ff4e50)")
            }
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div
            style={{
              textAlign: "center",
              margin: "25px 0 15px",
              color: "#aaa",
              fontWeight: "500",
            }}
          >
            ─ OR ─
          </div>

          <button
            type="button"
            onClick={() => alert("Google Login")}
            style={{
              width: "100%",
              background: "#DB4437",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              marginBottom: "10px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Login with Google
          </button>

          <button
            type="button"
            onClick={() => alert("Facebook Login")}
            style={{
              width: "100%",
              background: "#4267B2",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Login with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
