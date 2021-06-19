

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash/fp'
import LeaderboardItem from './LeaderboardItem'
import {Redirect} from 'react-router-dom'

class Leaderboard extends Component {
    componentDidMount = () => {
        // Check login state
        if (!this.props.authedUser) {
          this.props.history.push(`/login`)
        }
      }

  render() {

      const users = this.props.users;
      //const questions = this.props.questions;

      // Generate leaderboard
      let leaderboardItems = [];
      if (!isEmpty(users)) {
        for (const id in users) {
            const user = users[id];
            const answerCount =  user.answers ? Object.keys(user.answers).length: 0;
            const questionCount = user.questions ? user.questions.length : 0;
            const score = answerCount + questionCount;

            const leaderboardItem = {name: user.name, avatarURL: user.avatarURL, answerCount: answerCount, questionCount: questionCount, score: score};
            leaderboardItems.push(leaderboardItem);
        }
      }

      // Sort by score desc
      leaderboardItems.sort(function(a, b) {
        return b.score - a.score;
    });

    return (
        <div style={{marginTop: 24}}>
            {
                !isEmpty(leaderboardItems) ? 
                leaderboardItems.map((item, index) => (
                    <LeaderboardItem key={index} item={item}/>
                )) : null
            }
    </div>
    )
  }
}

function mapStateToProps ({authedUserReducer, userReducer, questionReducer}) {
    return {
        authedUser: authedUserReducer ? authedUserReducer.authedUser : undefined,
        users: userReducer.users,
        questions: questionReducer.questions,
    }
  }
  
  export default connect(mapStateToProps)(Leaderboard)