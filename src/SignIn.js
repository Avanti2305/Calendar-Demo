import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

import {
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update useEffect to check for valid admin session
  // Update the useEffect for auth check
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userStr = localStorage.getItem("user");
        const adminToken = localStorage.getItem("adminToken");
        const currentTime = Date.now();
        const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

        if (!userStr || !adminToken) {
          throw new Error("No valid session");
        }

        const userData = JSON.parse(userStr);
        if (userData.role !== "admin") {
          throw new Error("Not admin");
        }

        // Check if session is expired
        const tokenTimestamp = parseInt(adminToken);
        if (currentTime - tokenTimestamp > SESSION_TIMEOUT) {
          throw new Error("Session expired");
        }

        navigate("/Adminpage");
      } catch (error) {
        // console.error("Auth check error:", error);
        localStorage.clear();
      }
    };

    checkAuth();
  }, [navigate]);

  // Update handleSignIn to include better admin session handling
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const normalizedPhone = phone.trim();
      console.log("Attempting login with phone:", normalizedPhone);

      // Admin login attempt
      const adminsRef = collection(db, "admin");
      const adminQuery = query(
        adminsRef,
        where("phone", "==", normalizedPhone)
      );

      console.log("Querying admin collection...");
      const adminSnapshot = await getDocs(adminQuery);

      console.log("Admin query results:", adminSnapshot.size);

      if (!adminSnapshot.empty) {
        const adminDoc = adminSnapshot.docs[0];
        const adminData = adminDoc.data();

        console.log("Found admin account, verifying password...");

        // Update the admin authentication section in handleSignIn
        if (password === adminData.password) {
          console.log("Admin password verified");

          try {
            const auth = getAuth();
            // Create a custom admin token with admin privileges
            const adminSession = {
              id: adminDoc.id,
              name: adminData.name || "Admin",
              role: "admin",
              phone: adminData.phone,
              loginTime: Date.now(),
              isAdmin: true,
            };

            // Store admin data with proper authentication
            localStorage.setItem("user", JSON.stringify(adminSession));
            localStorage.setItem("adminToken", adminDoc.id);
            localStorage.setItem("adminAuth", "true");

            console.log("Admin login successful");
            navigate("/Adminpage");
            return;
          } catch (authError) {
            console.error("Admin auth error:", authError);
            alert("Authentication failed. Please try again.");
            localStorage.clear();
            return;
          }
        }

        console.log("Invalid admin password");
        alert("Invalid admin credentials");
        setLoading(false);
        return;
      }

      // Candidate login logic remains the same
      console.log("No admin found, checking candidate credentials...");

      const candidatesRef = collection(db, "candidates");
      const candidateQuery = query(
        candidatesRef,
        where("mobile", "==", normalizedPhone)
      );

      const candidateSnapshot = await getDocs(candidateQuery);

      if (!candidateSnapshot.empty) {
        const candidateDoc = candidateSnapshot.docs[0];
        const candidateData = candidateDoc.data();

        console.log("Candidate found, verifying credentials...");

        if (!candidateData.approvedByAdmin) {
          alert("Your account is pending admin approval");
          return;
        }

        if (password === candidateData.password) {
          // Store candidate session
          const candidateSession = {
            ...candidateData,
            id: candidateDoc.id,
            role: "candidate",
          };

          localStorage.setItem("candidates", JSON.stringify(candidateSession));
          navigate("/AddEvent");
          return;
        } else {
          alert("Invalid password");
          return;
        }
      }

      alert("No account found with this phone number");
    } catch (error) {
      console.error("Authentication error:", error);
      alert(`Authentication failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSignIn} className="d-flex flex-column align-items-center">
          <div className="mb-3 w-100">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={10}
            />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center w-100">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "150px" }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
          <div className="mt-3 text-center">
            <Link to="/CalendarComponent" className="text-decoration-none">
              Calendar Component
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
