import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAds } from '../store/actions/thunks/ads';
import {
 adsSelector, adsLoadingSelector, adsErrorSelector, adsQuerySelector, adsFlteredByQuery,
} from '../store/selectors/ads';
import Card from './card';

function Cards() {
    const dispatch = useDispatch();
    const ads = useSelector(adsSelector);
    const loading = useSelector(adsLoadingSelector);
    const error = useSelector(adsErrorSelector);
    const query = useSelector(adsQuerySelector);
    const filteredAds = useSelector(adsFlteredByQuery(query));

    console.log('ads');
    console.log(ads);

    useEffect(() => {
        dispatch(getAds());
    }, []);

    const adsForDisplay = filteredAds.length > 0 ? filteredAds : ads;

    return (
        <>
            { loading && <div>Загрузка</div> }
            { error && <div>{error.message}</div> }
            { adsForDisplay.length > 0
                && adsForDisplay.map((ad) => (
                    <Card
                      title={ad.title}
                      price={ad.price}
                      city={ad.user.city}
                      createdOn={ad.created_on}
                      imgUrl={ad?.images[0]?.url}
                      id={ad.id}
                      key={ad.id}
                    />
                ))}
        </>
    );
}

export default Cards;
