'use client'
import { LoginForm } from "@/actions/auth"
import { useActionState } from "react"
import Link from "next/link"

const Login = () => {

  const[state,action,isLoading] = useActionState(LoginForm,undefined)

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-">
        <div className="p-10  rounded-2xl w-96 md:w-100 shadow-lg">
          <h1 className="font-semibold text-2xl text-center">Sign in with email</h1>
          <form action={action} className="flex flex-col items-center justify-center gap-2 mt-4">
            <div className="space-y-1 w-full">
            <input type="email" name="email" placeholder="enter your email" className="p-1.5 border border-gray-500 rounded-xl w-full"/>
            {state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
            )}
            </div>
             <div className="space-y-1 w-full">
               <input type="password" name="password" placeholder="enter your password" className="p-1.5 border border-gray-500 rounded-xl w-full"/>
            {state?.errors?.password && (
                <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
            )}
            </div>
            <button type="submit" disabled={isLoading} className="bg-[#292A33] px-5 py-1.5 rounded-xl w-full text-white text-center shadow-sm cursor-pointer">Sign in</button>
            <p>Dont have an account? <Link href="/register" className="text-blue-500">Sign up</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login