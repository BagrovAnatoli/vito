import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAds from '../store/actions/thunks/ads';
import { adsSelector, adsLoadingSelector, adsErrorSelector } from '../store/selectors/ads';
import Card from './card';

function Cards() {
    const dispatch = useDispatch();
    const ads = useSelector(adsSelector);
    const loading = useSelector(adsLoadingSelector);
    const error = useSelector(adsErrorSelector);

    console.log('ads');
    console.log(ads);

    useEffect(() => {
        dispatch(getAds());
    }, []);

    return (
        <>
            { loading && <div>Загрузка</div> }
            { error && <div>{error.message}</div> }
            { ads.length > 0
                && ads.map((ad) => (
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
