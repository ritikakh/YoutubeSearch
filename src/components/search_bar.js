import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component{
    constructor(props) {
        super(props); //calling the parent method of Component

        this.state = {term: ''}; //initiallizing state
    }
    render () {
        return (
            <div className="search-bar">
                <input
                    placeholder="search video"
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}





export default SearchBar;