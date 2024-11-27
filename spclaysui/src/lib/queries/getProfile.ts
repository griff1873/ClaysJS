
import { db } from "@/db"
import { Profiles } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getProfileByUser(userId: string) {
    const profile = await db.select()
        .from(Profiles)
        .where(eq(Profiles.UserID, userId))

    return profile[0]
}

export async function getProfile(profileId: number){
    const profile = await db.select()
        .from(Profiles)
        .where(eq(Profiles.ProfileID, profileId))

    return profile[0]
}