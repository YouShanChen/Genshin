import { useState } from "react";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import NavBar from "../NavBar";

export default function Header({ title}) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.headerWwrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <Link to="/">
                        <h1 className={styles.headerTitle}>
                            {title}
                        </h1>
                    </Link>

                </div>


                <hr className={styles.hrHeaderLine} />
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>

        </div>

    );
}