import {defaultStyles, defaultTableName} from '../constants';
import {clone} from '../core/utils';

const defaultState = {
    colState: {},
    rowState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    title: defaultTableName,
    currentStyles: defaultStyles,
    lastOpened: new Date().toJSON()
}

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

export function normalizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState)
}
