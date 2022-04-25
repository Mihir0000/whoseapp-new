import { combineReducers } from 'redux';
import channelReducer from './channelReducer';

const reducers = combineReducers({
    Channel: channelReducer,
});

export default reducers;
// export type RootState = ReturnType<typeof reducers>;
