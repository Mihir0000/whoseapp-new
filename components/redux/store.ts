import { createStore, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import { userState } from './reducers/channelReducer';
import channelReducer from './reducers/channelReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = (context: Context) =>
    createStore(channelReducer, composeWithDevTools());
export const wrapper = createWrapper<Store<userState>>(makeStore, {
    debug: false,
});
