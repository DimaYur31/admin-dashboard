"use client";
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search:({placeholder}:{placeholder:string})=>React.ReactNode = ({placeholder})=>{
	const searchParams = useSearchParams();
	const {replace} = useRouter();
	const pathName = usePathname();
	const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if(e.target.value){
		e.target.value.length > 2 &&	params.set('q', e.target.value);
		}else{
			params.delete('q');
		}
		replace(`${pathName}?${params}`);
	}, 300);

	return (
		<div className={styles.container}>
			<MdSearch/>
			<input type="text" placeholder={placeholder} onChange={handleSearch}/>
		</div>
		);
}
export default Search;