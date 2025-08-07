"use client";
// import { redirect } from "next/navigation";

// import { getLoggedInUser } from "@/lib/server/actions/user-actions";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  // const user = await getLoggedInUser();
  // if (user) redirect("/resumes");

  
  return (
    <div className="flex min-h-svh w-full items-center justify-center ">
      <div className="w-screen">
        <LoginForm />
      </div>
    </div>
  );
}
