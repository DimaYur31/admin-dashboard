import {User} from './models';
import { connectToDB } from './utils';
export const fetchUsers = async (q:string) => {
	const regex = new RegExp(q, 'i');
	try {
		connectToDB();
		const users = User.find({username: {$regex: regex}});
		return users;
	} catch (e) {
		throw new Error('Failed to fetch users!');
	}
}