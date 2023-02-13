export const storeAdsSelector = (store) => store.ads;

export const adsSelector = (store) => storeAdsSelector(store).ads;

export const adsLoadingSelector = (store) => storeAdsSelector(store).adsLoading;

export const adsErrorSelector = (store) => storeAdsSelector(store).adsError;
