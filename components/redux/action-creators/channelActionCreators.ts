import axios from 'axios';
import { channelConstant } from '../constants/channelConstants';

export const channelActionCreator = (channel: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: channelConstant.CHANNEL_REQUEST,
        });
        try {
            const channelLink = `https://api.backendless.com/0F12B69E-DAB8-64B1-FF04-5629AD521700/D0E9777B-0A5C-4894-8FD3-E92F69AE4D51/data/${channel}?pageSize=100&sortBy=%60created%60%20desc`;
            const { data } = await axios.get(channelLink);

            dispatch({
                type: channelConstant.CHANNEL_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: channelConstant.CHANNEL_FAIL,
                payload: error.message,
            });
        }
    };
};
