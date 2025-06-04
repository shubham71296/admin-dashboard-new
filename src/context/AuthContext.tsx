import React, { createContext, useContext, useState } from "react";

interface User {
  role: string;
  name?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<UserContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useUser must be used within UserProvider");
    return context;
}