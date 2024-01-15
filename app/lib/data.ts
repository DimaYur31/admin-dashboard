import {User} from './models';
import { connectToDB } from './utils';
export const fetchUsers = async () => {
	try {
		connectToDB();
		const users = User.find();
		return users;
	} catch (e) {
		console.log(e);
		throw new Error('Failed to fetch users!');
	}
}