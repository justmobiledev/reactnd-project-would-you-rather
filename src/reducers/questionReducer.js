import { LOAD_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION } from '../actions/questionActions'

export default function questionReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONS: {
        
        const { questions } = action;
        return {
          ...state,
          questions
        }
    }
    case ADD_QUESTION : {
        const { question } = action
            
            const questions = {...state.questions, [question.id]: question};
        return {
            questions
        }
     }
    case UPDATE_QUESTION : {
        const { question } = action
            
            const questions = {...state.questions, [question.id]: question};
        return {
            questions
        }
    }
    default :
      return state
  }
}