import { React, Component } from "react";
import { TitleComponent } from "./title.component";
import { TestTableComponent } from './test-table.component';
import styles from '../styles.module.css';

export class ReportDetailsComponent extends Component {
    render() {
        const {
            details
        } = this.props;
        return (
            <div className={styles.slider}>
                {
                    details.map(d => (
                        <div key={details.indexOf(d)}>
                            <TitleComponent title={ `File : ` + d.spec.name } />
                            <TestTableComponent tests={d.tests} />
                        </div>
                    ))
                }
            </div>
        );
    }
}