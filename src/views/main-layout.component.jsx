import React,{ Component, Fragment } from 'react';
import styles from './layout.module.css';
import { NavButtonsComponent } from '../components/navigation/nav-buttons.component';

export class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <NavButtonsComponent/>
                <div className={styles.mainContainer}>
                    {children}
                </div>
            </Fragment>
        );
    }
}