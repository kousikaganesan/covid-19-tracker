import { GET_STAT_SUCCEEDED } from './actionTypes.js';

const state = { data: [] }

export const dashboard = (states = state, action) => {
    switch (action.type) {
        case GET_STAT_SUCCEEDED:
            states.data = action.payload;
            return { ...states};

        default: return states;
    }
}