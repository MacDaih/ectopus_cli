import { React, Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles.module.css';

const FILTERS = {
    body: 'body'
};

export class TestTableComponent extends Component {
    render() {
        const {
            tests
        } = this.props;
        return(
            <table className={styles.testTab}>
                <thead>
                    <tr>
                    {
                        Object.keys(tests[0]).map( (t,i) => 
                            !FILTERS[t] && (
                                <td key={i} className={styles.testCell}>
                                    {t.toUpperCase()}
                                </td>
                            )
                        )
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        tests.map(t => (
                            <tr>
                                <td className={styles.testCell}>
                                    {t.title.join(' -> ')}
                                </td>
                                <td className={styles.testCell}>
                                    {t.state}
                                </td>
                                <td className={styles.testCell}>
                                    {t.attempts.length}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

TestTableComponent.propTypes = {
    test: PropTypes.array
};