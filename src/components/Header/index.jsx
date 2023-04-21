import { useState } from "react";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import NavBar from "../NavBar";
import Link from "../Link"

export default function Header({ title }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container">
            <div className={styles.header}>
                <Link to="/">
                    <h1 className={styles.headerTitle}>
                        {title}
                    </h1>
                </Link>
                <HamburgerMenu
                    onClick={() => setIsOnTouch(!isOnTouch)}
                    isOnTouch={isOnTouch}
                />
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>

        </div>

    );
}