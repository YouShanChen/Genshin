import styles from "./chardata.module.css";

export default function CharData() {
    return (
        <div className="container">
            <div className={styles.box}>
                <div className={styles.upBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.title}>
                            角色名字
                        </div>
                        <div className={styles.content}>
                            <div className={styles.fullName}>
                                全名
                            </div>
                            <div className={styles.nickName}>
                                綽號
                            </div>
                            <div className={styles.eye}>
                                神之眼
                            </div>
                            <div className={styles.nation}>
                                所屬
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgBox}>

                    </div>
                </div>
                <div className={styles.des}>介紹內文</div>
            </div>
        </div>
    );
}