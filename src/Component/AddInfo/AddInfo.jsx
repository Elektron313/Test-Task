import React from 'react';
import {Input} from '../Common/FormsControls/FormControls';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../Utils/Validators';
import {addRow} from '../../redux/table-reducer';
import {connect} from 'react-redux';


const FormAddInfo = ({ invalid, handleSubmit, fields }) => {

    return (
        <form className={'form-horizontal'} onSubmit={handleSubmit}>

            {fields.map(item =>
               <div>
                   <h3>{item.title}</h3>
                   <Field placeholder={item.field} name={item.field} component={Input} validate={[required]}/>
               </div>
            )}
            <button disabled={invalid}>send</button>
        </form>
    )
};

const FormAddDataRedux = reduxForm()(FormAddInfo);

const AddInfo = (props) => {

    const onSubmit = ({ id, firstName, lastName, email, phone }) => {
        props.addRow({ id, firstName, lastName, email, phone })
    };
    return (
        <div>
            <h2>Заполните форму</h2>
            <FormAddDataRedux onSubmit={onSubmit} form={props.nameForm} fields={props.fieldsForm}/>
            <button onClick={() => props.close(false)}>Close</button>
        </div>
    )
};

const mapDispatchToProps = ({
    addRow,
});



export default connect(null, mapDispatchToProps)(AddInfo);