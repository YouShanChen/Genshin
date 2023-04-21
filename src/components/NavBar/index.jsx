import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            <NavLink to="/Character"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                角色
            </NavLink>
            <NavLink to="/Team"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                隊伍
            </NavLink>     
        </>
    )
    const DrawerContent = () =>(
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.drawerItemActive : styles.drawerItem)}>
                首頁
            </NavLink>
            <NavLink to="/Character"
                className={({ isActive }) => (isActive ? styles.drawerItemActive : styles.drawerItem)}>
                角色
            </NavLink>
            <NavLink to="/Team"
                className={({ isActive }) => (isActive ? styles.drawerItemActive : styles.drawerItem)}>
                隊伍
            </NavLink>     
        </>
    )
    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="Genshin" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <DrawerContent />
                </div>
            </Drawer>
        </>

    );
}