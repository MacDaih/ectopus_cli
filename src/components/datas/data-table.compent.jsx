import React, { Component } from 'react';
import { TitleComponent } from '../display/title.component';
import styles from './data.module.css';
export class DataTable extends Component {
    render() {
        const {
            field,
            datas
        } = this.props;
        return (
            <div className={styles.tabCntr}>
                <TitleComponent title={field} />
                <table>
                    <thead>
                        <tr>
                        {
                            datas && Object.keys(datas[0]).map(k => (
                                    <td>
                                        {k}
                                    </td>
                                )
                            )
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas && datas.map(d => (
                                <tr>
                                    {
                                        Object.values(d).map(v => (
                                            <td>
                                                {v}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}