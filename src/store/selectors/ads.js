export const storeAdsSelector = (store) => store.ads;

export const adsSelector = (store) => storeAdsSelector(store).ads;

export const adsLoadingSelector = (store) => storeAdsSelector(store).adsLoading;

export const adsErrorSelector = (store) => storeAdsSelector(store).adsError;

export const adsQuerySelector = (store) => storeAdsSelector(store).query;

export const adsFlteredByQuery = (query) => (store) => adsSelector(store).filter((ad) => {
    if (query) {
        return ad.title.toLowerCase().includes(query.toLowerCase());
    }
    return false;
});
