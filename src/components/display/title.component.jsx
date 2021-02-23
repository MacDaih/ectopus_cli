import { React, Component} from 'react';
import styles from '../styles.module.css';

export class TitleComponent extends Component {
    render() {
        const {
            title
        } = this.props;
        return (
            <div className={styles.headTitle}>
                { title }
            </div>
        );
    }
}