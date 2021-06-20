import {updateUser} from './userActions';
import {setAuthedUser} from './authedUserActions';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export function loadQuestions (questions) {
    return {
      type: LOAD_QUESTIONS,
      questions,
    }
  }

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function updateQuestion (question) {
    return {
      type: UPDATE_QUESTION,
      question,
    }
  }

export function handleAddQuestion (question) {
    return (dispatch, getState) => {

      dispatch(addQuestion(question));
  
      // Update user info
      const { authedUserReducer } = getState();
      const authedUser = authedUserReducer.authedUser;
      const user = {...authedUser, questions: [...authedUser.questions, question.id]};

      dispatch(updateUser(user));
    }
  }

  export function handleUpdateQuestion (question) {
    return (dispatch, getState) => {
      dispatch(updateQuestion(question));
  
      // Update user info
      const { authedUserReducer } = getState();
      const authedUser = authedUserReducer.authedUser;

      let selectedOption = '';
        if (question.optionOne.votes.includes(authedUser.id)) {
            selectedOption = 'optionOne';
        }
        else {
            selectedOption = 'optionTwo';
        }

      const user = {...authedUser, answers: {...authedUser.answers, [question.id]: selectedOption}};

      dispatch(updateUser(user));
      dispatch(setAuthedUser(user));
    }
  }