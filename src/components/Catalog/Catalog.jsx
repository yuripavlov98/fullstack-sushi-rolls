import React from "react";
import Card from "../Card/Card";
import s from "./Catalog.module.css"
const Catalog = () => {
	return (
        <div>
            <div className={s.top}>
                <h2 className={s.title}>Рекомендуем</h2>
                <div className={s.search}>
                    <img src='/icons/search.svg' alt='поиск'/>
                    <input placeholder="Поиск ..."/>
                </div>
            </div>
            <div className={s.catalog}>
                <Card />
            </div>
        </div>
	);
};

export default Catalog;
