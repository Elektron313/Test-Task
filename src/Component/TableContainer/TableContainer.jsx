import React from 'react';
import {
    addDataOnPage,
    addSort,
    setCurrentPage, setFilterData,
    setRow,
    setSortField,
    showAddInfo
} from '../../redux/table-reducer';
import {connect} from 'react-redux';
import Table from './Table';
import * as _ from 'lodash'

class TableContainer extends React.Component {

    onRowSelect = (person) => {
        this.props.setRow(person);
    };

    onSort = (sortField) => {

        const sortType = this.props.sort === 'asc' ? 'desc' : 'asc';
        this.props.addSort(sortType);
        this.props.setSortField(sortField);
        const orderedData = _.orderBy(this.props.dataOnPage, sortField, sortType);
        this.props.addDataOnPage(orderedData);
    };

    onPageChange = (currentPage, data) => {
        this.props.setCurrentPage(currentPage);
        const endElementDataOnPage = currentPage * this.props.pageSize;
        const portionData = data.slice(endElementDataOnPage - this.props.pageSize, endElementDataOnPage);
        this.props.addDataOnPage(portionData)
    };

    render() {
        const { littleBaseData, bigBaseData, totalItemCountBigData, totalItemCountLittleData, pageSize, currentPage } = this.props;
        return (
            <div>

                {this.props.currentDataForTable === 'littleData' && <Table
                    data={littleBaseData}
                    totalItem={totalItemCountLittleData}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.onPageChange}
                    dataOnPage={this.props.dataOnPage}
                    onSort={this.onSort}
                    sort={this.props.sort}
                    sortField={this.props.sortField}
                    onRowSelect={this.onRowSelect}
                    row={this.props.row}
                    showAddInfoInTable={this.props.showAddInfoInTable}
                    showAddInfo={this.props.showAddInfo}
                    columnsTable={this.props.columnsTable}
                    addDataOnPage={this.props.addDataOnPage}
                    />
                }

                {this.props.currentDataForTable === 'bigData' && <Table
                    data={ bigBaseData}
                    totalItem={totalItemCountBigData}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.onPageChange}
                    dataOnPage={this.props.dataOnPage}
                    onSort={this.onSort}
                    sort={this.props.sort}
                    sortField={this.props.sortField}
                    onRowSelect={this.onRowSelect}
                    row={this.props.row}
                    showAddInfoInTable={this.props.showAddInfoInTable}
                    showAddInfo={this.props.showAddInfo}
                    columnsTable={this.props.columnsTable}
                    addDataOnPage={this.props.addDataOnPage}
                    />
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        totalItemCountBigData: state.data.totalItemCountBigData,
        totalItemCountLittleData: state.data.totalItemCountLittleData,
        littleBaseData: state.data.littleData,
        bigBaseData: state.data.bigData,
        currentDataForTable: state.data.currentData,
        pageSize: state.table.pageSize,
        currentPage: state.table.currentPage,
        dataOnPage: state.table.dataOnPage,
        sort: state.table.sort,
        sortField: state.table.sortField,
        row: state.table.row,
        showAddInfoInTable: state.table.showAddInfoInTable,
        columnsTable: state.table.columnsTable,
    }
};

const mapDispatchToProps = ({
    setCurrentPage,
    addDataOnPage,
    addSort,
    setSortField,
    setRow,
    showAddInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);