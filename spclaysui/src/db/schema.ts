import { pgTable, serial, varchar, boolean, timestamp, integer, text } from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm"


export const Profiles = pgTable("Profiles", {
    ProfileID: serial("ProfileID").primaryKey(),
    UserID: varchar("UserID").notNull(),
    FirstName: varchar("FirstName").notNull(),
    LastName: varchar("LastName").notNull(),
    PhoneNumber: varchar("PhoneNumber", {length: 10}).notNull(),
    Created: timestamp("Created").notNull().defaultNow(),
    Updated: timestamp("Updated").notNull().defaultNow().$onUpdate(()=> new Date())
})

export const Presentations = pgTable("Presentations", {
    PresentationID: serial("PresentationID").primaryKey(),
    PresentationName: varchar("PresentationName", {length: 25}).notNull(),
    PresentationDescription: text("PresentationDescription"),
    Created: timestamp("Created").notNull().defaultNow(),
    Updated: timestamp("Updated").notNull().defaultNow().$onUpdate(()=> new Date())
})

export const Squads = pgTable("Squads", {
    SquadID: serial("SquadID").primaryKey(),
    Created: timestamp("Created").notNull().defaultNow(),
    Updated: timestamp("Updated").notNull().defaultNow().$onUpdate(()=> new Date())
})
export const SquadShooters = pgTable("SquadShooters", {
    SquadShooterID: serial("SquadID").primaryKey(),
    SquadID: integer("SquadID").notNull().references(()=> Squads.SquadID),
    ProfileID: integer("ProfileID").notNull().references(()=>Profiles.ProfileID),
    Position: integer("Position").notNull(),
    Created: timestamp("Created").notNull().defaultNow(),
    Updated: timestamp("Updated").notNull().defaultNow().$onUpdate(()=> new Date())
})
//create relations
export const SquadsRelations = relations(Squads,
    ({ many }) => ({
        SquadShooters: many(SquadShooters),
    })
)

export const SquadShootersRelations = relations(SquadShooters,
    ({ one }) => ({
        Squads: one(Squads, {
            fields: [SquadShooters.SquadID],
            references: [Squads.SquadID],
        })
    })
)