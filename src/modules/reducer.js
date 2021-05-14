import actionTypes from './actions'

const initialState = {
    articles: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTCILE: {
            const articles = state.articles;
            return
        }

        case actionTypes.REMOVE_ARTCILE: {

        }

        case actionTypes.UPDATE_ARTCILE: {

        }

        default:
            return state;
    }
}