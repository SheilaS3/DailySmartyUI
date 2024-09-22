import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';


class NoPage extends Component {
    render() {
        return (
            <div className="no-page">
                <Logo size={55}/>
                <SearchBar page="results" onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                <div className="no-page-found">
                    No page was found
                </div>
            </div>
        )
    }
}

export default NoPage;