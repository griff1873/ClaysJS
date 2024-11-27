import {createInsertSchema, createSelectSchema} from "drizzle-zod"
import {Profiles} from "@/db/schema"

export const insertProfileSchema = createInsertSchema(Profiles, {
    FirstName: (schema) => schema.FirstName.min(1, "First Name is required"),
    LastName: (schema) => schema.LastName.min(1, "Last Name is required"),
    PhoneNumber: (schema) => schema.PhoneNumber.length(10, "10 digit Phone Number is required")
})

export const selectProfileSchema = createSelectSchema(Profiles)

export type insertProfileSchemaType = typeof insertProfileSchema._type
export type selectProfileSchemaType = typeof selectProfileSchema._type