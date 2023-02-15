import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adsQuerySelector,  adsFlteredByQuery } from '../store/selectors/ads';
import { getAdsSuccessAC } from '../store/actions/creators/ads';
import Card from './card';
import { ads } from '../api/stubData/ads';

function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdsSuccessAC(ads));
    }, []);

    const query = useSelector(adsQuerySelector);
    const filteredAds = useSelector(adsFlteredByQuery(query));

    const adsForDisplay = filteredAds.length > 0 ? filteredAds : ads;

    return (
        <>
            { adsForDisplay.length > 0
                && adsForDisplay.map((ad) => (
                    <Card
                      title={ad.title}
                      price={ad.price}
                      city={ad.city}
                      createdOn={ad.created_on}
                      imgUrl={ad.imgUrl}
                      id={ad.id}
                      key={ad.id}
                    />
            ))}
        </>
    );
}

export default Cards;
