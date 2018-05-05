import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDnclBg8syWi8q2voyc6PD5kqOfINLJPQs';

//Create a compnent
const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

//Put the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));