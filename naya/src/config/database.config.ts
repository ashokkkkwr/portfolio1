//When TypeORM initializes AppDataSource, it may use reflect-metadata to:
//Scan entity files specified in entities to find classes decorated with @Entity.
import 'reflect-metadata'
import {DataSource} from 'typeorm'
import { DotenvConfig } from './env.config'
export const AppDataSource = new DataSource({
    type:'postgres',
    host:DotenvConfig.DATABASE_HOST,
    port:DotenvConfig.DATABASE_PORT,
    username:DotenvConfig.DATABASE_USERNAME,
    password:DotenvConfig.DATABASE_PASSWORD,
    database:DotenvConfig.DATABASE_NAME,
    logging:false,
// dropSchema : false, typeorm will not automatically drop the entrie database
//schema(all tables) when connecting to the database.
    dropSchema:false,
// when synchronize:true, typeorm automatically updates the database schema
//based on the enity metadata defined in Typescript code.
    synchronize:true,


    entities:[__dirname+'/../entities/**/*.entity{ts,.js}'],
    migrations:['src/migration/**/*.ts'],
    subscribers:[],
})
