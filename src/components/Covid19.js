import React, {Component} from 'react';
import base64 from 'react-native-base64';
import Header from './Header';
import {Link} from 'react-router-dom';

class Covid19 extends Component {
    state = { covid19Recovered: {}, covid19Deaths : {}, covidCases: {}, covidConfirmed: {},country:{}};
    token;
    componentDidMount() { 
        console.log("componentDidMount ");       
        var auth = "Basic " + base64.encode("7R1k2gFfA55LQ6JHrmUakLGULHsa" + ":" + "ZO8Fqsw0MWdNNj_BUJXgQyID6zca");
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': auth, 'Access-Control-Allow-Origin':'*'}
        };

        fetch('https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/token?grant_type=password&username=drohne@nubentos.com&password=Covid-19', requestOptions)
            // .then(response => console.log(response));     
            .then(response => response.json())
            .then(data => {
                const requestOptions2 = {
                    method: 'GET',
                    headers: {'Authorization': 'Bearer '+data['access_token'], 'Access-Control-Allow-Origin':'*'}
                };        
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/recovered?country=spain",requestOptions2)
                .then(responsecovidRecoveredConfirmed => responsecovidRecoveredConfirmed.json())
                .then(data2 => {this.setState( {covid19Recovered: data2[0] })}) ;
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/deaths?country=spain",requestOptions2)
                .then(responsecovidDeathConfirmed => responsecovidDeathConfirmed.json())
                .then(covidDeathsData => {this.setState( {covid19Deaths: covidDeathsData[0] })}) ;
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases?country=spain",requestOptions2)
                .then(responsecovidCases => responsecovidCases.json())
                .then(covidCasesData => {this.setState( {covidCases: covidCasesData[0] })}) ;
                // fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases/confirmed?country=Spain",requestOptions2)
                // .then(responsecovidCasesConfirmed => responsecovidCasesConfirmed.json())
                // .then(covidDataConfirmed => {this.setState( {covidConfirmed: covidDataConfirmed[0] })}) ;
            })
    }

    searchByCountry = () => {
        var auth = "Basic " + base64.encode("7R1k2gFfA55LQ6JHrmUakLGULHsa" + ":" + "ZO8Fqsw0MWdNNj_BUJXgQyID6zca");
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': auth, 'Access-Control-Allow-Origin':'*'}
        };

        fetch('https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/token?grant_type=password&username=drohne@nubentos.com&password=Covid-19', requestOptions)
            // .then(response => console.log(response));     
            .then(response => response.json())
            .then(data => {
                const requestOptions2 = {
                    method: 'GET',
                    headers: {'Authorization': 'Bearer '+data['access_token'], 'Access-Control-Allow-Origin':'*'}
                };        
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/recovered?country="+this.state.country,requestOptions2)
                .then(responsecovidRecoveredConfirmed => responsecovidRecoveredConfirmed.json())
                .then(data2 => {this.setState( {covid19Recovered: data2[0] })}) ;
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/deaths?country="+this.state.country,requestOptions2)
                .then(responsecovidDeathConfirmed => responsecovidDeathConfirmed.json())
                .then(covidDeathsData => {this.setState( {covid19Deaths: covidDeathsData[0] })}) ;
                fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases?country="+this.state.country,requestOptions2)
                .then(responsecovidCases => responsecovidCases.json())
                .then(covidCasesData => {this.setState( {covidCases: covidCasesData[0] })}) ;
                // fetch("https://cors-anywhere.herokuapp.com/https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases/confirmed?country=Spain",requestOptions2)
                // .then(responsecovidCasesConfirmed => responsecovidCasesConfirmed.json())
                // .then(covidDataConfirmed => {this.setState( {covidConfirmed: covidDataConfirmed[0] })}) ;
            })

    }

    componentWillUnmount() {
        console.log("componentWillUnmount-> ",  this.token);
    }

    getParsedDate(strDate){
        var strSplitDate = String(strDate).split('-');
        var strDatAndHour = String(strSplitDate[2]).split('T');
        var customDate = strDatAndHour[0] +"-"+strSplitDate[1]+"-"+strSplitDate[0];
        return customDate;
    }

    updateCountryQuery = event => {
        console.log(event.target.value);
        var country = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        console.log(country);
        this.setState({country:country });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.searchByCountry();
        }
    }
    

    render() {
        const {id ,date , country, data } = this.state.covid19Recovered;
        var customParseDate = this.getParsedDate(date);
        //var covidTitle= "Cases of covd in "+{country}+"to day:"+{customParseDate};
        var deathData = this.state.covid19Deaths['data'];
        var casesData = this.state.covidCases['data'];
        //var casesConfirmed = this.state.covidConfirmed['data'];
        return (
            <div>
                <div>
                <h2>Http request to Api : </h2>
                <p><a href="https://www.nubentos.com/covid-19-information/" target="_blank">https://www.nubentos.com/covid-19-information/</a></p>      
                </div>  
               <input 
                    onChange={this.updateCountryQuery}
                    placeholder="Search by country"
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.searchByCountry}>Search</button>
                <div key={id}>
                    <h2>Cases of covid in {country} to day: {customParseDate}</h2>
                    <table class="table table-striped table-dark">
                        <thead class="thead-dark">
                            <td>Total cases</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                        </thead>
                        <tbody>
                            <td>{casesData}</td>
                            <td>{data}</td>
                            <td>{deathData}</td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Covid19;
