import { React, Component } from 'react';
import { IoCloseCircle, IoCheckmarkCircleSharp, IoDocumentTextSharp } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CgSandClock } from 'react-icons/cg';
import { MdTimer } from 'react-icons/md';
import styles from '../styles.module.css';
import clsx from 'clsx';
import { ReportDetailsComponent } from './report-details.component';
export class ReportCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: false
        };
        this.displayDetails = this.displayDetails.bind(this);
    }
    displayDetails() {
        const d = this.state.details;
        this.setState({
            details: !d
        })
    }
    render() {
        const {
            report
        } = this.props;
        const dur = report.duration / 1000;
        const duration = dur.toString() + 's';
        let  vec = report.start_at.replace('T',' ');
        let split = vec.split('.');
        split.pop();
        const parsed = split[0]; 
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.subRow}>
                        <IoDocumentTextSharp className={clsx(styles.neutral,styles.mainIcon)}>
                        </IoDocumentTextSharp>
                        <p>
                            {report.name}
                        </p>
                    </div>
                    <div className={styles.subRow}>
                        <MdTimer className={clsx(styles.neutral,styles.mainIcon)}></MdTimer>
                        <p>{parsed}</p>
                    </div>
                    <div className={styles.subRow}>
                        <CgSandClock className={clsx(styles.neutral,styles.mainIcon)}></CgSandClock>
                        <p>{duration}</p>
                    </div>
                    <div className={styles.subRow}>
                        <IoCheckmarkCircleSharp className={clsx(styles.success,styles.mainIcon)}></IoCheckmarkCircleSharp>
                        <p>{report.passed} / {report.total_tests}</p>
                    </div>
                    <div className={styles.subRow}>
                        <IoCloseCircle  className={clsx(styles.failed,styles.mainIcon)}></IoCloseCircle>
                        <p>{report.failed} / {report.total_tests}</p>
                    </div>
                    <IoMdArrowDropdown className={clsx(styles.neutral,styles.mainIcon)} onClick={this.displayDetails}></IoMdArrowDropdown>
                </div>
                {
                    this.state.details && <ReportDetailsComponent  details={ report.runs }/>
                }
                <div className={styles.sep}>
                </div>
            </div>
        )
    }
}