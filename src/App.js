import React from 'react';
import './App.css';
import SelectData from './Component/SelectData/SelectData';
import Table from './Component/TableContainer/Table';
import {getData} from './redux/selectData-reducer';
import {connect} from 'react-redux';
import Preloader from './Component/Common/Preloader/Preloader';
import TableContainer from './Component/TableContainer/TableContainer';

class App extends React.Component {

 componentDidMount() {
     this.props.getData();
 }

    render() {
        if (this.props.isFetching) {
            return <Preloader/>
        }

        return (
            <div className="container">
                <SelectData/>
                <TableContainer/>
            </div>
        );
    }
}
    const mapStateToProps = (state) => ({
        isFetching: state.data.isFetching,
    });

    const mapDispatchToProps = ({
        getData,
    })

export default connect(mapStateToProps, mapDispatchToProps)(App);
