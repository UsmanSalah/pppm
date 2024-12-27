
import React, {useEffect, useState} from 'react';
import {
    combo,
    decerts,
    drinks,
    fire,
    pizza,
    pizzabox,
    snacs,
    soupbox,
    souse,
    sushi,
} from "../../assets/index.js";

const url = 'https://673c34cc96b8dcd5f3f8e777.mockapi.io/api/v1/pizza'

const menu =[
    {
        icon:fire,
        name:'Акции',
    },
    {
        icon:pizza,
        name:'Пицца',
        id:'pizza'
    },
    {
        icon:sushi,
        name:'Суши',
        id:'sushi'
    },
    {
        icon:drinks,
        name:'Напитки',
        id:'drinks'
    },
    {
        icon:snacs,
        name:'Закуски',
        id:'snacks'
    },
    {
        icon:combo,
        name:'Комбо',
        id:'combo'
    },
    {
        icon:decerts,
        name:'Дисерт',
        id:'deserts'
    },
    {
        icon:souse,
        name:'Соусы',
        id:'sauces'
    }

]
const sales = [
    {
     bgImage:soupbox,
     text:"3 cредние пиццы от 999 рублей"
    },
    {
        bgImage:pizzabox,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },
    {
        bgImage:soupbox,
        text:"3 cредние пиццы от 999 рублей"
    },
    {
        bgImage:pizzabox,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },

]

const HomePage = () => {
    const [pizzaDate,setPizzaDate] = useState([])

    const fetchDate = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizzaDate(data);
        console.log(data);
    }
    useEffect(() => {
        fetchDate();
    }, [])

    if (!pizzaDate.length) {
        return <h1 className={"text-center text-[44px]"}>...Loading</h1>
    }

    return (
        <div className={"container mx-auto"}>
            <div className={"flex gap-[30px]"}>
                {menu.map((m) => {
                    return (
                        <div
                            className={"w-[135px] h-[104px] border rounded-[12px] flex items-center justify-center flex-col"}>
                            <img src={m.icon} alt="photo"/>
                            <p>{m.name}</p>
                        </div>
                    )

                })}
            </div>
            <div className={"flex"}>
                {sales.map((s, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${s.bgImage})`,
                                backgroundSize: "cover",
                                margin: "30px 15px",
                                display: "flex",
                                alignItems: "end",
                            }}
                            className={"w-[300px] h-[343px] p-[20px] "}>
                            <p className={"text-white text-[20px] font-[600] w-[220px]"}>{s.text}</p>
                        </div>
                    )
                })}
            </div>

            <section id={"pizza"}>
                <h2>Pizza</h2>
                <div className={"flex"}>
                    {pizzaDate[0].data.map(pizzaItem => {
                        return (
                            <div key={pizzaItem.name}> {pizzaItem.name}</div>
                        )
                    })}
                </div>
            </section>

            <section id={"sushi"}>
                <h2>Sushi</h2>
            </section>

            <section id={"drinks"}>
                <h2>Drinks</h2>
            </section>

            <section id={"snacks"}>
                <h2>Snacks</h2>
            </section>
        </div>
    )
}

export default HomePage;