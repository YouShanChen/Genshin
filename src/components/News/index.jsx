import styles from "./news.module.css";

export default function News() {
    return (
        <div className="container">
            <div className={styles.box}>
                <div className={styles.title}>
                    最新活動
                </div>
                <div className={styles.imgbox}>

                </div>
            </div>
        </div>
    );
}