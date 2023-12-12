'use client';
import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

type ListType ={
	item:{
		title: string,
		path: string,
  	icon: JSX.Element
	}
}

const MenuLink: React.FC<ListType>= ({item}) =>{
	const pathName = usePathname(); 

	return <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} >
{item.icon}
{item.title}
	</Link>
}
export default MenuLink;