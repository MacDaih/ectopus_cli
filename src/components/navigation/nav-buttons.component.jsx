import { React, Component } from 'react';
import styles from '../styles.module.css';
import clsx from 'clsx';
import { CgFolder, CgMathPercent } from 'react-icons/cg';
import { BiStats } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/ectopus.png';

export class NavButtonsComponent extends Component {
    render() {
        return (
            <div className={clsx(styles.row,styles.header)}>
                <div  className={styles.logo}>
                    <img src={logo} />
                </div>
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