import { Logout } from "@/actions/auth";
import { createSupabaseServerClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function dashboard() {
    const supabase = await createSupabaseServerClient();
    const{ data : { user } } = await supabase.auth.getUser();
    // console.log(user);
     
    if(!user){
        redirect('/login');
    }
    return(
        <div>
            Dashboard Page
            <p>Welcome , {user.email}</p>
            <button onClick={Logout}>Logout</button>
        </div>
    )

}