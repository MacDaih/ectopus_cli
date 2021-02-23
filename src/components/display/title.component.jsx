import { React, Component} from 'react';
import { PropTypes } from 'prop-types';
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

TitleComponent.propTypes = {
    title: PropTypes.string
};