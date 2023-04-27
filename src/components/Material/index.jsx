import styles from "./material.module.css";

export default function Material() {
    return (
        <div className="container">
            <div className={styles.box}>
                <div className={styles.title}>
                    今日素材
                </div>
                <div className={styles.imgbox}>

                </div>
            </div>
        </div>
    );
}