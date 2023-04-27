import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className="container">
            <div className={styles.box}>
                <div className={styles.title}>
                    卡池倒數
                </div>
                <div className={styles.imgbox}>

                </div>
            </div>
        </div>
    );
}