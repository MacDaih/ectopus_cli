import { React, Component } from 'react';
import { Route, Switch } from 'react-router';
import ReportsComponent from '../views/reports.component';
import ChartsComponent from '../views/charts.component';

export class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ReportsComponent}></Route>
                <Route exact path="/metrics" component={ChartsComponent}></Route>
            </Switch>
        ); 
    }
}