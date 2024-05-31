import React, { createContext, useState, useEffect } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // For debugging purposes, let's log the role
    console.log("Role:", role);
  }, [role]);

  // Simulate fetching role from an API or localStorage
  useEffect(() => {
    // Set a default role for testing
    const fetchRole = () => {
      // Example: Fetch role from localStorage or an API
      const storedRole = localStorage.getItem("userRole") || "student"; // Change as necessary
      setRole(storedRole);
    };

    fetchRole();
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
