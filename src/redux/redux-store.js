import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {selectDataReducer} from './selectData-reducer';
import {tableReducer} from './table-reducer';


const reducers = combineReducers({
    form: formReducer,
    data: selectDataReducer,
    table: tableReducer,
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store