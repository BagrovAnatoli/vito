import {
    getAdsStartAC,
    getAdsSuccessAC,
    getAdsErrorAC,
} from '../creators/ads';

import { adsAPI } from '../../../api/api';

const getAds = () => async (dispatch) => {
    console.log('getAdsThunk');

    dispatch(getAdsStartAC());

    try {
        const response = await adsAPI.getAds();
        // console.log(response);
        dispatch(getAdsSuccessAC(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(getAdsErrorAC(error));
    }
};

export default getAds;
