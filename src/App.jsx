import SignupPage from "./pages/Signup.jsx";
import { app } from "./firebase.js";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const auth = getAuth(app);
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User is signed out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage />
      </div>
    );
  }

  return (
    <>
      <Card className="align-middle mx-auto ">
        <h1>Hello, {user.email}</h1>
        <Button onClick={() => signOut(auth)}>Logout</Button>
      </Card>
    </>
  );
};

export default App;
