import {db} from "./index"
import {migrate} from "drizzle-orm/neon-http/migrator"

const main= async () =>{
    try{
        await migrate(db, {
            migrationsFolder: 'src/db/migrations'
        })
        console.log("Migration Complete")
    }catch(err){
        console.error('Migrationfailed: ', err)    
        process.exit(1) 
    }
}

main()