import React from 'react';
import ReactDOM from 'react-dom';
import MainStep from './components/MainStep';

class App extends React.Component{
    render(){
        return <MainStep />
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));