import {
    GET_ADS_START,
    GET_ADS_SUCCESS,
    GET_ADS_ERROR,
} from '../types/ads';

export const getAdsStartAC = () => ({
    type: GET_ADS_START,
});

export const getAdsSuccessAC = (ads) => ({
    type: GET_ADS_SUCCESS,
    ads,
});

export const getAdsErrorAC = (error) => ({
    type: GET_ADS_ERROR,
    error,
});