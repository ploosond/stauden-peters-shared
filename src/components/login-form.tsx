"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

// import { signInWithEmail } from "@/lib/server/actions/user-actions";
import { loginFormSchema, TLoginFormSchema } from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Login } from "@/lib/appwrite/client/config";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: TLoginFormSchema) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await Login(data);
      // router.push("/resumes");
    } catch (error) {
      setIsSubmitting(false);
      console.error("Submission error", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during login"
      );
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-6 max-w-sm mx-auto p-2", className)}
      {...props}
    >
      <Card>
        <CardHeader className="mx-auto w-full gap-3">
          <Link href={"/"} className="flex items-center gap-2 mx-auto">
            <svg
              width="45"
              height="45"
              viewBox="0 0 240 250"
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-2"
            >
              <g
                transform="matrix(2.3819243216279657,0,0,2.3819243216279657,2,5)"
                fill="#f54a00"
              >
                <path d="m31.797 24.961-14.438-5.9375c-0.98047-0.40234-1.4453-1.5234-1.0469-2.5039 0.20312-0.49219 0.58984-0.85547 1.0469-1.0469l31.91-13.121c0.48828-0.19922 1.0078-0.18359 1.4609 0l31.91 13.121c0.98047 0.40234 1.4453 1.5234 1.0469 2.5039-0.20312 0.49219-0.58984 0.85547-1.0469 1.0469l-6.6211 2.7227v18.266c1.1133 0.32812 2.1094 0.92969 2.9062 1.7266l0.10938 0.11719c1.1758 1.2305 1.8945 2.8945 1.8945 4.7148 0 1.8867-0.76953 3.5977-2.0039 4.832-1.2383 1.2383-2.9453 2.0039-4.832 2.0039s-3.5977-0.76562-4.8359-2.0039c-1.2383-1.2383-2.0039-2.9453-2.0039-4.832 0-1.8789 0.76953-3.5898 2.0078-4.8281 0.79688-0.80078 1.793-1.4023 2.9062-1.7305v-16.684l-3.9688 1.6328v5.6523c0 5.0078-2.0469 9.5586-5.3477 12.855-3.2969 3.2969-7.8516 5.3477-12.855 5.3477-5.0078 0-9.5586-2.0469-12.859-5.3477-3.2969-3.2969-5.3477-7.8477-5.3477-12.855v-5.6523zm18.949 50.07v18.91h28.426v-15.746c0-5.8008-2.3555-11.078-6.1523-14.922l-0.089843-0.082032c-3.6367-3.6367-8.582-5.9727-14.043-6.2227zm-3.8516 18.91v-18.918l-8.0391-17.832c-4.5586 0.70312-8.6562 2.8672-11.785 5.9961-3.8516 3.8477-6.2422 9.1641-6.2422 15.008v15.746h26.07zm-4.8203-40.848h15.848c6.9023 0 13.18 2.8242 17.727 7.3711l0.10156 0.10938c4.4883 4.543 7.2734 10.773 7.2734 17.621v17.672c0 1.0625-0.86328 1.9258-1.9258 1.9258h-62.195c-1.0625 0-1.9258-0.86328-1.9258-1.9258v-17.672c0-6.8984 2.8281-13.172 7.375-17.723 4.5469-4.5547 10.824-7.3789 17.727-7.3789zm22.277-31.445h-28.699v8.9609c0 3.9453 1.6133 7.5312 4.2148 10.133 2.6016 2.6016 6.1875 4.2148 10.133 4.2148s7.5352-1.6172 10.137-4.2148c2.6016-2.6016 4.2148-6.1875 4.2148-10.133z"></path>
              </g>
            </svg>
            <div className="">
              <svg
                width="100"
                height="20"
                viewBox="0 0 250 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="matrix(0.9349066646069936,0,0,0.9349066646069936,2,2)"
                  fill="#f54a00"
                >
                  <path d="M20.857 17.714 l-10.571 0 l0 16 l10.857 0 l0 -4.8571 l-6.5714 0 l0 -6.2857 l14 0 l0 13.143 l-4.2857 4.2857 l-17.143 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l17.143 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z M58.57157142857143 17.714 l-16.857 0 l0 4.8571 l14.571 0 l0 6.2857 l-14.571 0 l0 4.8571 l16.857 0 l0 6.2857 l-20 0 l-4.2857 -4.2857 l0 -24.286 l24.286 0 l0 6.2857 z M89.99957142857143 15.713999999999999 l0 10 l-4.2857 4.2857 l4.2857 6.5714 l0 3.4286 l-6.8571 0 l-5.9429 -9.7143 l-5.4857 0 l0 9.7143 l-7.4286 0 l0 -28.571 l21.429 0 z M82.57157142857143 24 l0 -6.2857 l-10.857 0 l0 6.2857 l10.857 0 z M116.85714285714286 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -16 l-5.0286 9.7143 l-3.7143 0 l-4.9714 -9.7143 l0 16 l-7.4286 0 l0 -28.571 l7.4286 0 l6.8571 12.971 z M129.99995714285714 40 l0 -24.286 l4.2857 -4.2857 l16.571 0 l4.2857 4.2857 l0 24.286 l-7.4286 0 l0 -8 l-10.286 0 l0 8 l-7.4286 0 z M137.42885714285714 25.714 l10.286 0 l0 -8 l-10.286 0 l0 8 z M178.571 11.428999999999998 l7.4286 0 l0 28.571 l-6.5714 0 l-11.143 -16 l0 16 l-7.4286 0 l0 -28.571 l6.5714 0 l11.143 15.886 l0 -15.886 z M222.57185714285714 17.714 l-9.1429 0 l0 16 l9.1429 0 l2.2857 -2.2857 l5.4286 0 l0 4.2857 l-4.2857 4.2857 l-15.714 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l15.714 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z M254.57185714285714 11.428999999999998 l6.8571 0 l0 3.4286 l-9.5429 25.143 l-7.7143 0 l-9.6 -25.143 l0 -3.4286 l6.8571 0 l6.5714 18.571 z"></path>
                </g>
              </svg>

              <svg
                width="100"
                height="28"
                viewBox="0 0 250 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="matrix(1.596403353509405,0,0,1.596403353509405,2,-10)"
                  fill="#f54a00"
                >
                  <path d="M24 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -16 l-5.0286 9.7143 l-3.7143 0 l-4.9714 -9.7143 l0 16 l-7.4286 0 l0 -28.571 l7.4286 0 l6.8571 12.971 z M37.14281428571429 40 l0 -24.286 l4.2857 -4.2857 l16.571 0 l4.2857 4.2857 l0 24.286 l-7.4286 0 l0 -8 l-10.286 0 l0 8 l-7.4286 0 z M44.571714285714286 25.714 l10.286 0 l0 -8 l-10.286 0 l0 8 z M93.71385714285714 11.428999999999998 l0 3.4286 l-6.6857 10.857 l6.6857 10.857 l0 3.4286 l-6.8571 0 l-6.5143 -11.143 l-4.9143 0 l0 11.143 l-7.4286 0 l0 -28.571 l7.4286 0 l0 11.143 l4.9143 0 l6.5143 -11.143 l6.8571 0 z M122.85728571428571 17.714 l-16.857 0 l0 4.8571 l14.571 0 l0 6.2857 l-14.571 0 l0 4.8571 l16.857 0 l0 6.2857 l-20 0 l-4.2857 -4.2857 l0 -24.286 l24.286 0 l0 6.2857 z M154.28528571428572 15.713999999999999 l0 10 l-4.2857 4.2857 l4.2857 6.5714 l0 3.4286 l-6.8571 0 l-5.9429 -9.7143 l-5.4857 0 l0 9.7143 l-7.4286 0 l0 -28.571 l21.429 0 z M146.8572857142857 24 l0 -6.2857 l-10.857 0 l0 6.2857 l10.857 0 z"></path>
                </g>
              </svg>
            </div>
          </Link>
          <CardTitle className="text-center text-orange-900">
            Welcome back!
          </CardTitle>
          <hr />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-orange-900">
                  Email
                </Label>
                <Input
                  type="email"
                  {...register("email")}
                  disabled={isSubmitting}
                  placeholder="m@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-orange-700">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-orange-900">
                    Password
                  </Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-orange-900"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  type="password"
                  {...register("password")}
                  disabled={isSubmitting}
                  placeholder="********"
                />
                {errors.password && (
                  <p className="text-sm text-orange-700">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </Button>
            </div>
            {error && (
              <>
                <Label className="text-red-500 mt-6 mb-3">Error</Label>
                <p className=" px-2 py-2 rounded-md  bg-red-600 text-white text-center text-sm">
                  {error}
                </p>
              </>
            )}
            <div className="mt-4 text-center text-sm text-orange-900">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
