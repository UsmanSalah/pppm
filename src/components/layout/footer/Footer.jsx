import React from "react";

const Footer = () => (
    <footer style={{ background: "#f9f9f9", padding: "20px", fontFamily: "Arial" }}>
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>

            <div>
                <h3>🍕 Куда Пицца</h3>
                <p>© Copyright 2021 — Куда Пицца</p>
            </div>

            <div>
                <h4>Куда пицца</h4>
                <p>О компании</p>
                <p>Пользовательское соглашение</p>
                <p>Условия гарантии</p>
            </div>

            <div>
                <h4>Помощь</h4>
                <p>Ресторан</p>
                <p>Контакты</p>
                <p>Поддержка</p>
                <p>Отследить заказ</p>
            </div>

            <div>
                <h4>Контакты</h4>
                <p>📞 +7 (926) 223-10-11</p>
                <p>📍 Москва, ул. Юных Ленинцев, д.99</p>
                <p>🔗 Facebook | 📷 Instagram</p>
            </div>
        </div>
    </footer>
);

export default Footer;
