import * from './actionnames';

function export playerAdded(name) {
	return {
		type : PLAYER_ADDED,
		payload : {
			name,
			score : 0
		}
	}
}

function export scoreUpdated(score) {
	return {
		type : SCORE_UPDATED,
		payload : { score }
	}
}