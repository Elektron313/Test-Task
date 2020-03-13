import {dataAPI} from '../Api/Api';

const LOAD_BIG_DATA = 'selectData-reducer/LOAD_BIG_DATA';
const LOAD_LITTLE_DATA = 'selectData-reducer/LOAD_LITTLE_DATA';
const TOGGLE_IS_FETCHING = 'selectData-reducer/TOGGLE_IS_FETCHING';
const SET_TOTAL_BIG_DATA = 'selectData-reducer/SET_TOTAL_BIG_DATA';
const SET_TOTAL_LITTLE_DATA = 'selectData-reducer/SET_TOTAL_LITTLE_DATA';
const SET_CURRENT_DATA =  'selectData-reducer/SET_CURRENT_DATA';

const initState = {
    bigData: null,
    totalItemCountBigData: null,
    littleData: null,
    totalItemCountLittleData: null,
    isFetching: false,
    currentData: null,
};

export const selectDataReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_BIG_DATA: {
            return {
                ...state,
                bigData: action.data,
            }
        }
        case SET_TOTAL_BIG_DATA: {
            return {
                ...state,
                totalItemCountBigData: action.total,
            }
        }
        case SET_TOTAL_LITTLE_DATA: {
            return {
                ...state,
                totalItemCountLittleData: action.total,
            }
        }
        case LOAD_LITTLE_DATA: {
            return {
                ...state,
                littleData: action.data,
            }
        }
        case SET_CURRENT_DATA: {
            return {
                ...state,
                currentData: action.nameData
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.value,
            }
        }
        default:
            return state
    }
};

export const setData = (nameData) => ({ type: SET_CURRENT_DATA, nameData});
const setTotalBigData = (total) => ({ type: SET_TOTAL_BIG_DATA, total});
const setTotalLittleData = (total) => ({ type: SET_TOTAL_LITTLE_DATA, total});
const setBigData = (data) => ({ type: LOAD_BIG_DATA, data });
const setLittleData = (data) => ({ type: LOAD_LITTLE_DATA, data });
const toggleIsFetching = (value) => ({ type: TOGGLE_IS_FETCHING, value });


 export const getData = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const requestBigData = dataAPI.bigData();
    const requestLittleData = dataAPI.littleData();
    const [bigData, littleData] = await Promise.all([requestBigData, requestLittleData]);
    dispatch(setTotalBigData(bigData.data.length));
    dispatch(setLittleData(littleData.data));
    dispatch(setTotalLittleData(littleData.data.length));
    dispatch(setBigData(bigData.data));
    dispatch(toggleIsFetching(false));
};