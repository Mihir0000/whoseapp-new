import { channelConstant } from '../constants/channelConstants';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

export interface userState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState: userState = {
    loading: false,
    error: null,
    data: [],
};

const userReducer = (
    state: userState = initialState,
    action: AnyAction
): userState => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case channelConstant.CHANNEL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                data: [],
            };
        case channelConstant.CHANNEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };
        case channelConstant.CHANNEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
};

export default userReducer;
