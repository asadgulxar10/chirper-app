import { combineReducers } from 'react';
import authedUser from './authedUser';
import tweets from './tweets';
import users from './users';

export default combineReducers({
    authedUser,
    tweets,
    users,
})