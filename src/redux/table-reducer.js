const SET_CURRENT_PAGE = 'table-reducer/SET_CURRENT_PAGE';
const ADD_SORT = 'table-reducer/ADD_SORT';
const SET_SORT_FIELD = 'table-reducer/SET_SORT_FIELD';
const SET_DATA_ON_PAGE = 'table-reducer/SET_DATA_ON_PAGE';
const SET_ROW = 'table-reducer/SET_ROW';
const SHOW_ADD_INFO = 'table-reducer/SHOW_ADD_INFO';
const ADD_ROW ='table-reducer/ADD_ROW';

const columnsTable = [
    {
        title: 'ID',
        field: 'id',
    },
    {
        title: ' First Name',
        field: 'firstName',
    },
    {
        title: 'Last Name',
        field: 'lastName',
    },
    {
        title: 'E-mail',
        field: 'email',
    },
    {
        title: 'Phone',
        field: 'phone',
    },
];

const initState = {
    pageSize:  30,
    currentPage: 1,
    sort: 'asc',
    sortField: null,
    dataOnPage: null,
    row: null,
    showAddInfoInTable: false,
    totalCountFilterData: null,
    columnsTable,
};

export const tableReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }

        case ADD_ROW: {
            return {
                ...state,
                dataOnPage: [action.row, ...state.dataOnPage]
            }
        }
        case ADD_SORT: {
            return {
                ...state,
                sort: action.value,
            }
        }
        case SHOW_ADD_INFO: {
            return {
                ...state,
                showAddInfoInTable: action.value,
            }
        }
        case SET_ROW: {
            return {
                ...state,
                row: action.row,
            }
        }
        case SET_DATA_ON_PAGE: {
            return {
                ...state,
                dataOnPage: action.data,
            }
        }
        case SET_SORT_FIELD: {
            return {
                ...state,
                sortField: action.field,
            }
        }
        default: {
            return state
        }
    }
};

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const addSort = (value) => ({ type: ADD_SORT, value});
export const setSortField = (field) => ({ type: SET_SORT_FIELD, field });
export const addDataOnPage = (data) => ({ type: SET_DATA_ON_PAGE, data});
export const setRow = (row) => ({type: SET_ROW, row});
export const showAddInfo = (value) => ({ type: SHOW_ADD_INFO, value});
export const addRow = (row) => ({ type: ADD_ROW, row });
