"use server"
import { db } from "@/db"
import { Presentations } from "@/db/schema"
import { eq } from "drizzle-orm"


export async function getPresentation(presentationId: number){
    const presentation = await db.select()
        .from(Presentations)
        .where(eq(Presentations.PresentationID, presentationId))

    return presentation[0]
}

export async function getPresentations(){
    const presentations = await db.select()
        .from(Presentations)
    return presentations
}