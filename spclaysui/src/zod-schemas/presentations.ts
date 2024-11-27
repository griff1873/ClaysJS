import {createInsertSchema, createSelectSchema} from "drizzle-zod"
import {Presentations} from "@/db/schema"

export const insertPresentationSchema = createInsertSchema(Presentations)

export const selectPresentationSchema = createSelectSchema(Presentations)

export type insertPresentationSchemaType = typeof insertPresentationSchema._type
export type selectPresentationSchema= typeof selectPresentationSchema._type