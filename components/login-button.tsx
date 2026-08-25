"use client";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  return (
    <GoogleLogin
      shape="circle"
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          const googleAuthValues = jwtDecode(credentialResponse.credential);
          console.log(googleAuthValues);
          router.push("/dashboard");
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
