import apiReducer from '../src/store/reducers/api.reducer';
import globalReducer from '../src/store/reducers/global.reducer';
import * as types from "../src/store/types";

describe('Reducers:  ', () => {
    describe('Api Reducers:  ', () => {
        it('Returns the initial', () => {
          expect(apiReducer(undefined, {})).toEqual({isApiLoading: false});
        });
        it('States Update When api Call Started', () => {
            let state = {isApiLoading: true};
            let newState = apiReducer(state, types.API_START)
          expect(newState).toEqual(state);
        });
        it('States Update When api Call Ends ', () => {
            let state = {isApiLoading: false};
            let newState = apiReducer(state, types.API_END)
          expect(newState).toEqual(state);
        });
    })
    describe('Global Reducers:  ', () => {
        it('Returns the initial state', () => {
            expect(globalReducer(undefined, {})).toEqual({codes: {}});
        });
        it('States returns with payload', () => {
            let state = {codes: "hello"};
            let newState = globalReducer(state, {type: types.STORE_GLOBAL_CODES, payload: "hello"})
            expect(newState).toEqual(state);
        });
    })
  
});