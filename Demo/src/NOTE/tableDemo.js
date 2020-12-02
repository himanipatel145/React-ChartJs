import React, { Component } from 'react';


export default class TableDemo extends Component {
    constructor(props, context) {
        super(props, context);
    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    
    fetchDetails(song) {
        console.log(song);
    }

    renderResultRows(data) {
        var self = this;
        return data.map(function (song) {
            return (
                <tr onClick={self.fetchDetails(song)}>
                    <td data-title="Song">{song.S_SONG}</td>
                    <td data-title="Movie">{song.S_MOVIE}</td>
                    <td data-title="Year">{song.S_YEAR}</td>
                </tr>
            );
        }.bind(this));
    }

    render() {
        return (
            <div id="no-more-tables">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Movie</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.isEmpty(this.props.searchResult)
                            ? this.renderResultRows(this.props.searchResult)
                            : ''}
                    </tbody>
                </table>
            </div>
        );
    }
}