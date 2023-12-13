import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
	return (
		<div className={styles.container}>
			<h2>Latest Transactions</h2>
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
						<div className={styles.user}>
								<Image src="/noavatar.png" alt="img" width="40" height="40" className={styles.userImage} />
								John
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>Pending</span>
						</td>
						<td>14.03.2024</td>
						<td>$3.300</td>
					</tr>
					<tr>
						<td>
							<div className={styles.user}>
								<Image src="/noavatar.png" alt="img" width="40" height="40" className={styles.userImage} />
								John
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.done}`}>Done</span>
						</td>
						<td>14.03.2024</td>
						<td>$3.300</td>
					</tr>
					<tr>
						<td>
							<div className={styles.user}>
								<Image src="/noavatar.png" alt="img" width="40" height="40" className={styles.userImage} />
								John
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
						</td>
						<td>14.03.2024</td>
						<td>$3.300</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
export default Transactions;