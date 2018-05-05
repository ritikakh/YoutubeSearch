import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component{
    constructor(props) {
        super(props); //calling the parent method of Component

        this.state = {next: 'search'}; //initiallizing state
    }
    render () {
        return (
            <div>
                <input
                    value = {this.state.next}
                    onChange={event => this.setState({next: event.target.value})}
                />
            </div>
        );
    }
}





export default SearchBar;