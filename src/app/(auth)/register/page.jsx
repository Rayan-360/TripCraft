'use client';
import { SignUpForm } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Register() {

    const[state,action,isLoading] = useActionState(SignUpForm,undefined);
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="p-10 shadow-lg rounded-2xl w-96 md:w-100">
                    <h1 className="font-semibold text-2xl text-center">Sign up with email</h1>
                    <form action={action} className="flex flex-col items-center justify-center gap-2 mt-4">
                        <div className="space-y-1 w-full">
                            <input type="email" name="email" placeholder="enter your email"  className="p-1.5 border border-gray-500 rounded-xl w-full"/>
                            {state?.errors?.email && (
                                <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
                            )}
                        </div>
                        <div className="space-y-1 w-full">
                            <input type="password" name="password" placeholder="enter your password"  className="p-1.5 border border-gray-500 rounded-xl w-full"/>
                            {state?.errors?.password && (
                                <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
                            )}
                        </div>
                        <div className="space-y-1 w-full">
                            <input type="password" name="cpass" placeholder="confirm password"  className="p-1.5 border border-gray-500 rounded-xl w-full"/>
                            {state?.errors?.confirmPassword && (
                                <p className="text-red-500 text-sm">{state.errors.confirmPassword[0]}</p>
                            )}
                        </div>
                        <button type="submit" disabled={isLoading} className="bg-[#292A33] text-md px-5 py-1.5 rounded-xl w-full text-white text-center shadow-sm cursor-pointer">Sign Up</button>
                        <p>Already have an account? <Link href="/login" className="text-blue-500">Sign in</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}   