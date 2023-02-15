import Card from './card';

function Cards() {
    const ads = [
        {
            title: "Кресло",
            price: 1000,
            city: "Санкт-Петербург",
            createdOn: "Сегодня",
            imgUrl: "/",
            id: 1,
        },
        {
            title: "Диван",
            price: 4000,
            city: "Нижний Новгород",
            createdOn: "Вчера",
            imgUrl: "/",
            id: 2,
        },
        {
            title: "Велосипед",
            price: 15000,
            city: "Екатеринбург",
            createdOn: "Неделю назад",
            imgUrl: "/",
            id: 3,
        },
        {
            title: "Компьютер",
            price: 9000,
            city: "Омск",
            createdOn: "три дня назад",
            imgUrl: "/",
            id: 4,
        },
    ];

    return (
        <>
            { ads.length > 0
                && ads.map((ad) => (
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
