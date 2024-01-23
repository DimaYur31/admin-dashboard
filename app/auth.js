import NextAuth from 'next-auth';
import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';

const login = async (credentials) => {
	try {
		connectToDB();
		const user = await User.findOne({ username: credentials.username });
		console.log(user.isAdmin)
		console.log('1111111111111111111111111111')
		if (!user || !user.isAdmin) throw new Error("1111111111 Wrong credentials!");

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		// if (!isPasswordCorrect) throw new Error("22222222 Wrong credentials!");

		return user;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to login!");
	}
};
export const { signIn, signOut, auth } = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (err) {
					return null;
				}
			},
		}),
	],
	// ADD ADDITIONAL INFORMATION TO SESSION
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.username = user.username;
				token.img = user.img;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.username = token.username;
				session.user.img = token.img;
			}
			return session;
		},
	},
});