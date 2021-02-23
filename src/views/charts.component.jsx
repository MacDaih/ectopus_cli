import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMetrics } from '../store/action/report';
import { renderLineChart } from '../components/display/line-chart.component';
import PropTypes from 'prop-types';

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