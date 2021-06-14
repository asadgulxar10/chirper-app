import { getInitialData } from '../utils/api';
import { setAuthUser } from './authedUser';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';

const AUTH_ID = 'tylermdginnis';

export const handleInitialData = () => (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
        dispatch(receiveTweets);
        dispatch(receiveUsers);
        dispatch(setAuthUser);
    })
}