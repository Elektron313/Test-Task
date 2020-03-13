import * as axios from 'axios';


export const dataAPI = {
    bigData() {return axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}' +
        '&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')},

    littleData(){return axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}' +
        '&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')},
};