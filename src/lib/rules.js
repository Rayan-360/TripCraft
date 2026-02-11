import * as z from 'zod';

export const SignUpFormSchema = z.object({
    email : z.string().min(1,{message : "Email is required"})
    .email({message : "Invalid email address"}).trim(),
            
    password : z.string().min(1,{message : "Password is required"})
                        .min(6,{message : "Password must be at least 6 characters long"})
                .trim(),
    confirmPassword : z.string().trim()
}).refine((data) => data.password === data.confirmPassword,{
    message : "Passwords do not match",
    path : ['confirmPassword']
})


export const LoginFormSchema = z.object({
    email : z.string().min(1,{message : "Email is required"})
    .email({message : "Invalid email address"}).trim(),
    password : z.string().min(1,{message : "Password is required"})
                        .min(6,{message : "Password must be at least 6 characters long"})
                .trim()
                ,
})