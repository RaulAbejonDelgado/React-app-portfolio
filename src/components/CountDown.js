import React ,{Component} from 'react';

class CountDown extends Component {
    state = {deadline: 'October 19, 2020', newDeadline:'', days:0, hours: 0, min: 0, sec:0};



    updateDeadLine = event => {
        console.log(event.target.value);
        this.setState({newDeadline:event.target.value });

    }

    calculeDealine = event => {
        if(event.key === 'Enter' || event.key === undefined) {
            this.calcule();
        }
    }

    calcule = () => {

        this.getTimeUnit();
    }

    getTimeUnit() {
        const time = Date.parse(this.state.newDeadline) - Date.parse(this.state.deadline);
        const seconds = Math.floor((time/1000) );
        const minutis = Math.floor((time/1000/60) );
        const hours = Math.floor(time/(1000*60*60));
        const days = Math.floor(time/(1000*60*60*24));
        console.log(time);
        console.log(seconds);
        console.log(minutis);
        this.setState({days: days ,hours: hours, min: minutis ,sec: seconds }) ;
    }

    render() {
        return(
            <div>
                <div>Count down {this.state.deadline}</div>
                <div class="d-flex justify-content-around">
                    <div>{this.state.days} days</div>
                    <div>{this.state.hours} hours</div>
                    <div>{this.state.min} minutes</div>
                    <div>{this.state.sec} seconds</div>
                </div>
                <div>
                    <input placeholder="Date to count down" onChange={this.updateDeadLine}/>
                    <button class="btn btn-sm primary" onKeyPress={this.calculeDealine} onClick={this.calculeDealine} >Submit</button>
                </div>
            </div>
        )
    }
    
}

export default CountDown;