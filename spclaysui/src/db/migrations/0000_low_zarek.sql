CREATE TABLE IF NOT EXISTS "Presentations" (
	"PresentationID" serial PRIMARY KEY NOT NULL,
	"PresentationName" varchar(25) NOT NULL,
	"PresentationDescription" text,
	"Created" timestamp DEFAULT now() NOT NULL,
	"Updated" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Profiles" (
	"ProfileID" serial PRIMARY KEY NOT NULL,
	"UserID" varchar NOT NULL,
	"FirstName" varchar NOT NULL,
	"LastName" varchar NOT NULL,
	"PhoneNumber" varchar(10) NOT NULL,
	"Created" timestamp DEFAULT now() NOT NULL,
	"Updated" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "SquadShooters" (
	"SquadID" integer NOT NULL,
	"ProfileID" integer NOT NULL,
	"Position" integer NOT NULL,
	"Created" timestamp DEFAULT now() NOT NULL,
	"Updated" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Squads" (
	"SquadID" serial PRIMARY KEY NOT NULL,
	"Created" timestamp DEFAULT now() NOT NULL,
	"Updated" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "SquadShooters" ADD CONSTRAINT "SquadShooters_SquadID_Squads_SquadID_fk" FOREIGN KEY ("SquadID") REFERENCES "public"."Squads"("SquadID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "SquadShooters" ADD CONSTRAINT "SquadShooters_ProfileID_Profiles_ProfileID_fk" FOREIGN KEY ("ProfileID") REFERENCES "public"."Profiles"("ProfileID") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
