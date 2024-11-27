import {createInsertSchema, createSelectSchema} from "drizzle-zod"
import {SquadShooters} from "@/db/schema"

export const insertSquadShootersSchema = createInsertSchema(SquadShooters)

export const selectSquadShootersSchema = createSelectSchema(SquadShooters)

export type insertSquadShootersSchemaType = typeof insertSquadShootersSchema._type
export type selectSquadShootersSchema= typeof selectSquadShootersSchema._type