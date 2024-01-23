'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { Product, User } from './models';
import { connectToDB } from './utils';
import { signIn } from '@/app/auth';

export const addUser = async (formData: FormData) => {
	const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
	try {
		connectToDB();
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(String(password), salt);
		const newUser = new User({
			username, 
			email, 
			password: hashPassword, 
			phone, 
			address, 
			isAdmin, 
			isActive
		});
		await newUser.save();
	} catch (e) {
		console.log(e);
		throw new Error('Failed to create a user!');
	}
	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
}
export const updateUser = async (formData: FormData) => {
	const form = Object.fromEntries(formData);
	let keys = [];	
	for (let key in form){
		keys.push(key)
	}
	try {
		connectToDB();
		const newFormData:any = {};
		for (const key in form) {
			newFormData[key] = String(formData.get(key));
			if (key == 'id' || formData.get(key) == '' || formData.get(key) == undefined ) {
				delete newFormData[key];
			}
		}
		await User.findByIdAndUpdate(form.id, newFormData);
	} catch (e) {
		console.log(e);
		throw new Error('Failed to update a user!');
	}
	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
}
export const deleteUser = async (formData: FormData) => {
	const {id} = Object.fromEntries(formData);
	try {
		connectToDB();
		await User.findByIdAndDelete(id);
	} catch (e) {
		console.log(e);
		throw new Error('Failed to delete user!');
	}
	revalidatePath('/dashboard/users');
}
export const addProduct = async (formData: FormData) => {
	const {title, desc, price, stock} = Object.fromEntries(formData);
	try {
		connectToDB();
		const newUser = new Product({
			title, 
			desc, 
			price, 
			stock
		});
		await newUser.save();
	} catch (e) {
		console.log(e);
		throw new Error('Failed to create product!');
	}
	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
}
export const updateProduct = async (formData: FormData) => {
	const form = Object.fromEntries(formData);
	let keys = [];	
	for (let key in form){
		keys.push(key)
	}
	try {
		connectToDB();
		const newFormData:any = {};
		for (const key in form) {
			newFormData[key] = String(formData.get(key));
			if (key == 'id' || formData.get(key) == '' || formData.get(key) == undefined ) {
				delete newFormData[key];
			}
		}
		await Product.findByIdAndUpdate(form.id, newFormData);
	} catch (e) {
		console.log(e);
		throw new Error('Failed to update product!');
	}
	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
}
export const deleteProduct = async (formData: FormData) => {
	const {id} = Object.fromEntries(formData);
	try {
		connectToDB();
		await Product.findByIdAndDelete(id);
	} catch (e) {
		console.log(e);
		throw new Error('Failed to delete product!');
	}
	revalidatePath('/dashboard/products');
}
export const authenticate = async (formData: FormData) => {
	const {username, password} = Object.fromEntries(formData);
	try {
		await signIn('credentials', {username, password});
	} catch (error) {
		console.log(error);
		throw error;
	}
}