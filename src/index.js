import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDnclBg8syWi8q2voyc6PD5kqOfINLJPQs';

//Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

//Put the component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));