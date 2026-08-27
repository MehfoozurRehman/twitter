"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import { GOOGLE_AUTH_VALUES } from "@/types";
import { jwtDecode } from "jwt-decode";
import { loginSignup } from "@/actions/loginSignup";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const onSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const googleAuthValues = jwtDecode(
        credentialResponse.credential,
      ) as GOOGLE_AUTH_VALUES;

      await loginSignup(googleAuthValues);

      router.push("/dashboard");
    }
  };

  return <GoogleLogin shape="circle" onSuccess={onSuccess} />;
}
