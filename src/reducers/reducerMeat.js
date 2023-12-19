import { SELL_MEAT } from "./actionTypes"

const reducerMeat = (state=[], action) => {
	switch(action.type) {
		case SELL_MEAT: {
			if (state.numOfMeat)
				return {
					...state,
					numOfMeat: state.numOfMeat - 1
				}
			else
			return {
				...state,
				numOfMeat: 0
			}
		}
		default: return state
	}
}

export default reducerMeat
