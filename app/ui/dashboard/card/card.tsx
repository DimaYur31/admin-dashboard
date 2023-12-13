import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
	return (
		<div className={styles.container}>
			<MdSupervisedUserCircle size="24"/>
			<div className={styles.texts}>
				<h3>Total Users</h3>
				<p>10.273</p>
				<div>
					<p><span className={styles.positive} >12%</span> more than previous week</p>
				</div>
			</div>
		</div>
	)
}
export default Card;