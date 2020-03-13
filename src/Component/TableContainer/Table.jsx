import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import DetailRowView from '../DetailRowView/DetailRowView';
import AddInfo from '../AddInfo/AddInfo';
import DataTable from './DataTable';


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: this.props.data
        }
    }

    onChange = ({ target: { value } }) => {
        this.setState({ search: value })
    };

    onSubmit = (e) => {

        e.preventDefault();
        const { search } = this.state;
        const { columnsTable, data, addDataOnPage, pageSize } = this.props;
        const fields = columnsTable.map(({field}) => field);
        const filteredData =  data.filter(item =>
            fields.some(field =>
                item[field].toString().toLowerCase().startsWith(search.toLowerCase())
            )
        );
        debugger
        this.setState({ data: filteredData });
        addDataOnPage(filteredData.slice(0, pageSize))


    };

    render() {

        const { search, data } = this.state;

        return (
            <div>
                <div>
                    {
                        this.props.showAddInfoInTable
                            ? <AddInfo
                                close={this.props.showAddInfo}
                                fieldsForm={this.props.columnsTable}
                                nameForm={'addInfo'}
                            />
                            : <button onClick={() => this.props.showAddInfo(true)}>AddInfo</button>
                    }
                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder={'Enter the data'} value={search} onChange={this.onChange}/>
                        <button type='submit'>send</button>
                    </form>

                </div>
                <Paginator
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    onPageChange={this.props.onPageChange}
                    data={data}
                />
                <DataTable
                    columnsTable={this.props.columnsTable}
                    data={this.props.dataOnPage}
                    onRowSelect={this.props.onRowSelect}
                    sortField={this.props.sortField}
                    onSort={this.props.onSort}
                    sort={this.props.sort}
                />
                {this.props.row ? <DetailRowView person={this.props.row} close={this.props.onRowSelect}/> : null}
            </div>
        )
    }
}

export  default Table;