import { React, Component } from 'react';
import { connect } from 'react-redux';
import { getReports } from '../store/action/report';
import { ReportCardComponent } from '../components/display/report-card.component';
import { TitleComponent } from '../components/display/title.component';
import { PropTypes } from 'prop-types';
import styles from './layout.module.css';


class ReportsComponent extends Component {
    constructor(props) {
        super(props);
        this.props.getReports();
    }
    render() {
        const {
            reports
        } = this.props;
        return(
            <div className={styles.viewPort}>
                <TitleComponent title="Reports"/>
                {   
                    reports.length > 0 ?
                        reports.map(r => (
                        <ReportCardComponent 
                            key={reports.indexOf(r)}
                            report={r}
                        />
                        ))
                        :
                        (
                            <div>No reports :(</div>
                        )
                }
            </div>
        )
    }
};

ReportsComponent.propTypes = {
    reports: PropTypes.array
};

const mapStateToProps = state => ({
    reports: state.report.reports
});
const mapDispatchToProps = dispatch => ({
    getReports: () => {
        dispatch(getReports());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ReportsComponent);