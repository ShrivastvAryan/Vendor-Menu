'use client';
import { useAuth } from "@clerk/nextjs";

function TestToken() {
  const { getToken } = useAuth();

  const fetchToken = async () => {
    const token = await getToken();
    console.log("My Clerk Token:", token);
  };

  return <button onClick={fetchToken}>Get Clerk Token</button>;
}

export default TestToken;