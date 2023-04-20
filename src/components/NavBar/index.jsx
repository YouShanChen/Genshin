import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/products/category/tableware"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            <NavLink to="/products/category/cookware"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                角色
            </NavLink>
            <NavLink to="/products/category/home-accessories"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
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
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}