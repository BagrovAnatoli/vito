import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAds from '../store/actions/thunks/ads';
import Card from './card';

function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAds());
    }, []);

    return (
        <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
}

export default Cards;
