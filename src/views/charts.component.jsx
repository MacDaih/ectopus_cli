import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMetrics } from '../store/action/report';
import { renderLineChart } from '../components/display/line-chart.component';
import { DataTable } from '../components/datas/data-table.compent';
import PropTypes from 'prop-types';
import styles from './layout.module.css';
const titles = {
    speed: "TESTS SPEED",
    count: "TESTS COUNT"
};

class ChartsComponent extends Component {
    constructor(props) {
        super(props);
        this.props.getMetrics();
    }
    render() {
        const {
            metric
        } = this.props;
        return (
            <Fragment>
                {renderLineChart(metric.linear)}
                <div className={styles.vertiDisplay}>
                    <DataTable field={titles.speed} datas={metric.speed}/>
                    <DataTable field={titles.count} datas={metric.figures}/>
                </div>
            </Fragment>
        );
    }
}

ChartsComponent.propTypes = {
    metric: PropTypes.object
};

const mapStateToProps = state => ({
    metric: state.report.metric
});
const mapDispatchToProps = dispatch => ({
    getMetrics: () => {
        dispatch(getMetrics());
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ChartsComponent);