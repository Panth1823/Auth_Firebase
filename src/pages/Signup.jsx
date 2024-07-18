import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Googleprovider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("User Created")
    );
  };

  const handleSignup = () => {
    createUser();
  };
  const signInwithGoogle = () => {
    signInWithPopup(auth, Googleprovider);
  };
  const signInwithGithub = () => {
    signInWithPopup(auth, Githubprovider);
  };
  return (
    <>
      <div className="flex items-center w-full justify-center">
        <Card className=" bg-dark text-white w-fit">
          <CardHeader>
            <CardTitle>
              <label>Email:</label>
              <Input
                type="email"
                required
                placeholder="test1234@gmail.com"
                className=" border-2 border-gray-200 text-center "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </CardTitle>
            <CardTitle>
              <label>Password:</label>
              <Input
                type="password"
                required
                placeholder="test1234"
                className=" border-2 border-gray-200"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </CardTitle>
          </CardHeader>

          <div className=" flex w-fit justify-between ">
            <CardFooter>
              <Button  onClick={handleSignup}>
                Signup with Email
              </Button>
            </CardFooter>
            <CardFooter>
              <Button  onClick={signInwithGoogle}>
                Signup with Google
              </Button>
            </CardFooter>
            <CardFooter>
              <Button onClick={signInwithGithub} >
                Signup with Github
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignupPage;
