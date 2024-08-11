import PageTransition from '../_components/page-transition/page-transition';
import styles from './projects.module.css';

export default function Projects() {
    return (
        <div className="">
            <PageTransition>
                <main className={styles.mainProjects}>
                    <h1>PROJECT PAGE</h1>
                </main>
            </PageTransition>
        </div>
    );
}
