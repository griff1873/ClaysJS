import {createInsertSchema, createSelectSchema} from "drizzle-zod"
import {Squads} from "@/db/schema"

export const insertSquadSchema = createInsertSchema(Squads)

export const selectSquadSchema = createSelectSchema(Squads)

export type insertSquadSchemaType = typeof insertSquadSchema._type
export type selectSquadSchema= typeof selectSquadSchema._type