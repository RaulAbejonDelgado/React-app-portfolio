import React, { Component } from 'react';

const TITLES = [
    'Java ',
    'python',
    'JavaScript'

];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};

    componentDidMount(){
       setTimeout (() => this.setState({fadeIn: false}),
         2000);
        console.log('Title component has mounted');

        this.animateTitles();
    }

    componentWillUnMount() {
        console.log("Title component will unmount!");
        clearInterval(this.titleInterval);
        //clearTimeout(this.setTimeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() =>{
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length ;

            this.setState({ titleIndex, fadeIn: true })
            setTimeout (() => this.setState({fadeIn: false}),
            2000);

        }, 4000)

        console.log('this.titleInterval',this.titleInterval );
    }



    render(){
        const { fadeIn, titleIndex} = this.state;
        const title = TITLES[this.state.titleIndex];
        return(
            <p className={this.state.fadeIn ? 'title-fade-in' : 'title-fade-out'}>known languages {title}</p>
         
        )
    }
}

export default Title;
