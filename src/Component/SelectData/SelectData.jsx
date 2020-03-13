import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {setData} from '../../redux/selectData-reducer';
import {connect} from 'react-redux';
import {addDataOnPage, addSort, setCurrentPage, setRow} from '../../redux/table-reducer';


const FormSelectData = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'currentSelectData'} component={'select'}>
                <option/>
                <option value={'littleData'}>little data</option>
                <option value={'bigData'}>big data</option>
            </Field>
            <div>
                <button>select</button>
            </div>

        </form>
    )
};


const FormDataRedux = reduxForm({
    form: 'selectData',
})(FormSelectData);



const SelectData = (props) => {

    const portionData = (currentSelectData) => {
        if (currentSelectData === 'littleData') {
            const data = props.littleBaseData.slice(0, props.pageSize);
            props.addDataOnPage(data)
        }
        if (currentSelectData === 'bigData') {
            const data = props.bigBaseData.slice(0, props.pageSize);
            props.addDataOnPage(data)
        }
    };

    const onSubmit = ({currentSelectData}) => {
        props.setData(currentSelectData);
        props.setCurrentPage(1);
        props.addSort(null);
        props.setRow(null);
        portionData(currentSelectData);

    };

    return (
        <div>
            <h1>Select data</h1>
            <FormDataRedux onSubmit={onSubmit}/>
        </div>
    )
};

const mapDispatchToProps = ({
    addDataOnPage,
    setData,
    setCurrentPage,
    addSort,
    setRow,
});

const mapStateToProps = (state) => ({
    littleBaseData: state.data.littleData,
    bigBaseData: state.data.bigData,
    pageSize: state.table.pageSize,
});
export default connect(mapStateToProps , mapDispatchToProps)(SelectData);
