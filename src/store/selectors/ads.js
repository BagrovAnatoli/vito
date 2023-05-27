export const storeAdsSelector = (store) => store.ads;

export const adsSelector = (store) => storeAdsSelector(store).ads;

export const adsLoadingSelector = (store) => storeAdsSelector(store).adsLoading;

export const adsErrorSelector = (store) => storeAdsSelector(store).adsError;

export const articleSelector = (store) => storeAdsSelector(store).article;

export const articleLoadingSelector = (store) => storeAdsSelector(store).articleLoading;

export const articleErrorSelector = (store) => storeAdsSelector(store).articleError;

export const adsQuerySelector = (store) => storeAdsSelector(store).query;

export const adsFlteredByQuery = (query) => (store) => adsSelector(store).filter((ad) => {
    console.log(query);
    if (query) {
        return ad.title.toLowerCase().includes(query.toLowerCase());
    }
    return false;
});
