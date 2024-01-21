import { UserType } from '../types/types';
import {Product, User} from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q:string, page: string) => {
	const regex = new RegExp(q, 'i');
	const ITEM_PER_PAGE = 2// сделать возможность менять, такое же в pagination.txt;
	try {
		connectToDB();
		const count = (await User.find({username: {$regex: regex}})).length;
		const users =  await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (Number(page) - 1));
		return {count, users};
	} catch (e) {
		throw new Error('Failed to fetch users!');
	}
}
export const fetchOneUser = async (id: string) => {
	try {
		connectToDB();
		let user: UserType | null  = await User.findById(id);
		if(user){
			return {user};
		} else {
			throw new Error('Failed to fetch user!');
		}
	} catch (e) {
		throw new Error('Failed to fetch user!');
	}
}
export const fetchProducts = async (q:string, page: string) => {
	const regex = new RegExp(q, 'i');
	const ITEM_PER_PAGE = 2// сделать возможность менять, такое же в pagination.txt;
	try {
		connectToDB();
		const count = (await Product.find({title: {$regex: regex}})).length;
		const products =  await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (Number(page) - 1));
		return {count, products};
	} catch (e) {
		throw new Error('Failed to fetch products!');
	}
}
export const fetchOneProduct = async (id: string) => {
	try {
		connectToDB();
		const product = await Product.findById(id);
		return {product};
	} catch (e) {
		throw new Error('Failed to fetch product!');
	}
}