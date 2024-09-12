"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { ErrorMessage } from "./404-error/ErrorMessage";

// Set private routes
const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const userUid = useUser();
  const router = useRouter();
  const [hasCheckedUser, setHasCheckedUser] = useState(false);
  console.log(userUid)

  useEffect(() => {
    if (userUid === null) return; 

    if (!userUid) {
      router.back();
    } else {
      setHasCheckedUser(true); 
    }
  }, [userUid, router]);

  if (!hasCheckedUser) {
    return <ErrorMessage />
  }

  return <>{children}</>;
};

export default ProtectedLayout;
