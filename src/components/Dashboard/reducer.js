import { GET_STAT_SUCCEEDED } from './actionTypes.js';

const state = { stats: [] }

export const dashboard = (states = state, action) => {
    switch (action.type) {
        case GET_STAT_SUCCEEDED:
            states.stats = action.payload;
            return { ...states};

        default: return states;
    }
}