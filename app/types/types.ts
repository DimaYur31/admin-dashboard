// export type PropsComponentType ={
// 	<T>(props:React.PropsWithChildren<T>):React.ReactElement;
// }
export type SearchParams = {
	searchParams:{
		q:string,
		page: string;
	}
}
export type UserType = {
	id:string,
	img?: string,
	username: string,
	email: string,
	password: string,
	phone: string, 
	address: string, 
	isAdmin: string,
	isActive: string
}