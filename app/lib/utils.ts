import mongoose, { ConnectionStates } from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

export const connectToDB = async () =>{
	const connection = {} as {isConnected:ConnectionStates};
	try {
		if(connection.isConnected){
			return;
		}
		if(process.env.MONGO){
			const db = await mongoose.connect(process.env.MONGO);
			connection.isConnected = db.connections[0].readyState;
		}
	} catch (error) {
		throw new Error((error as Error).message);
	}
}