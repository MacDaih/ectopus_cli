import React, { Component } from 'react';

export class FiltersComponent extends Component {
    render() {
        const { apps } = this.props;
        return (
            <div>
                <form>
                    <div>
                        <label for="apps">Select App</label>
                    </div>
                </form>
            </div>
        )
    }
}