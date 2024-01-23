import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from '@/app/auth';
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const logOutAction = async () => {
	'use server';
	await signOut();
}
const Sidebar = async () => {
	const {user}:any = await auth();
	console.log(user)
  return (
    <div className={styles.container} >
			<div className={styles.user}>
				<Image className={styles.userImage}  alt={user.username} src={user.img || '/noavatar.png'} width='50' height='50'/>
				<div className={styles.userDetails}>
					<span className={styles.userName}>{user.username}</span>
					<span className={styles.userTitle}>Administrator</span>
				</div>
			</div>
			<ul>
				{menuItems.map(cat => {
					return <li key={cat.title}>
						<span className={styles.cat}>{cat.title}</span>
						{cat.list.map(item=>{
							return <MenuLink item={item} key={item.title}/>
						})}
					</li>
				})}
			</ul>
			<form action={logOutAction}>
				<button className={styles.logout} >
					<MdLogout/>
					Logout
				</button>
			</form>
		</div>
  );
}
export default Sidebar;