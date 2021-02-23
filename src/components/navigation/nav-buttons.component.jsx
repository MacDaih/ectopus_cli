import { React, Component } from 'react';
import styles from '../styles.module.css';
import clsx from 'clsx';
import { CgFolder, CgMathPercent } from 'react-icons/cg';
import { BiStats } from 'react-icons/bi';
import { Link } from 'react-router-dom';
export class NavButtonsComponent extends Component {
    render() {
        return (
            <div className={clsx(styles.row,styles.header)}>
                <h1 className={styles.logo}>ECTOPUS</h1>
                <div className={styles.floatNav}>
                    <Link to="/">
                        <CgFolder className={styles.navIcon} />
                    </Link>
                    <CgMathPercent className={styles.navIcon} />
                    <Link to="/metrics">
                        <BiStats className={styles.navIcon} />
                    </Link>
                </div>
            </div>
        );
    }
}