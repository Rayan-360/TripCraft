"use server";
import { createSupabaseServerClient } from "@/lib/server";
import { redirect } from "next/navigation";
import * as z from 'zod';
import { SignUpFormSchema, LoginFormSchema } from "@/lib/rules";

export async function SignUpForm(state,formData){
    const supabase = await createSupabaseServerClient();
    const validatedFields = SignUpFormSchema.safeParse({
        email : formData.get('email'),
        password : formData.get('password'),
        confirmPassword : formData.get('cpass'),
    })

    if(!validatedFields.success){
        const flattenedErrors = z.flattenError(validatedFields.error);
        console.log(flattenedErrors);
        
        return{
            errors : flattenedErrors.fieldErrors,
            email : formData.get('email')
        }
    }
    const {email,password} = validatedFields.data;

    const {error,data} = await supabase.auth.signUp({
        email : email,
        password : password,
    })
    if(error){
        return { errors:  {email : [error.message]}};
    }
    if (data?.user?.identities?.length === 0) {
        return {
            errors: { email: ["This email is already registered. Please log in instead."] }
        }
    }
    redirect('/login');
}

export async function LoginForm(state,formData){
    const supabase = await createSupabaseServerClient();
    const validatedFields = LoginFormSchema.safeParse({
        email : formData.get('email'),
        password : formData.get('password'),
    })
    if(!validatedFields.success){
        const flattenedErrors = z.flattenError(validatedFields.error)
        return {
            errors : flattenedErrors.fieldErrors,
            email : formData.get('email')
        }
    }
    const {email,password} = validatedFields.data;
    const {error,data} = await supabase.auth.signInWithPassword({
        email : email,
        password : password,
    })
    if(error){
        return {errors : {email : [error.message]}}
    }
    redirect('/dashboard');
}

export async function Logout(){
    const supabase = await createSupabaseServerClient();
    const{error} =  await supabase.auth.signOut();
    if(error){
        console.log("Error logging out : ",error);
    }
    redirect('/login');
}