import { GET_STAT_SUCCEEDED, SEARCH } from './actionTypes.js';

const state = { global: {}, countries: [] }

export const dashboard = (states = state, action) => {
    switch (action.type) {
        case GET_STAT_SUCCEEDED:
            const { Global, Countries } = action.payload;
            states.global = Global;
            states.countries = Countries;
            return { ...states};

        case SEARCH:
            states.countries = action.payload;
            return { ...states};
   
        default: return states;
    }
}