import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

const Search:({placeholder}:{placeholder:string})=>React.ReactNode = ({placeholder})=>{
	return (
		<div className={styles.container}>
			<MdSearch/>
			<input type="text" placeholder={placeholder} />
		</div>
		)
}
export default Search;