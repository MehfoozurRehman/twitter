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
        console.log(credentialResponse);

        const gogoleAuthValues = jwtDecode(credentialResponse.credential!);

        console.log(gogoleAuthValues);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
