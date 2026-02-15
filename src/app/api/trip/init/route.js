import { getCollection } from "@/lib/db";
import { createSupabaseServerClient } from "@/lib/server";
import normalizeTripInput from "@/services/normalizeTripInput";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const body = await request.json();
        const normalizedData = normalizeTripInput(body);
        const tripCollection = await getCollection("trips");
        const supabase = await createSupabaseServerClient();
        const {data : {user}} = await supabase.auth.getUser();
        const tripData = {
            ...normalizedData,
            userId : user.id,
            createdAt : new Date(),
        }
        const result = await tripCollection.insertOne(tripData);
        // console.log(normalizedData);
        return NextResponse.json({ success: true, data: normalizedData,tripId : result.insertedId },{status: 201});
    }
    catch(error){
        console.error("Error processing trip data:", error);
        return NextResponse.json({ success: false, error: "Invalid input data" }, { status: 400 });
    }
}