import {Outlet} from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './AppLayout.module.css';

const AppLayout = () => {
    return (
        <div className={styles.layout}>
            <Header></Header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
