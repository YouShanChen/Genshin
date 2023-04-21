import { theme } from 'antd';
import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
    } = theme.useToken();
    return (
        <div style={{
            backgroundColor: colorBgFooter,
            color: colorTextFooter,
        }}>
            <div className="container">
                <footer className={styles.footer}>
                    © 2023 Genshin
                </footer>
            </div>

        </div>

    );
}