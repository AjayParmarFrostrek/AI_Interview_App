"use client";

import React, { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "./context/UserDetailContext";

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const createUserMutation = useMutation(api.users.CreateNewUser);

  const [userDetail, setUserDetail] = useState<any>(null);

  const createNewUser = async () => {
    if (!user) return;

    const result = await createUserMutation({
      email: user.primaryEmailAddress?.emailAddress,
      imageUrl: user.imageUrl,
      name: user.fullName ?? "",
    });

    setUserDetail(result);
  };

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;
