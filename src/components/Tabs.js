import React, {Component} from 'react';
import TabsItem from "./TabsItem";
import LoginForm from "./LoginForm";
import tabImg1 from "../img/box-personal-copy-2.png";
import TabsItemContent from "./TabsItemContent";

class Tabs extends Component {
    render() {
        return (
            <div className="Tabs">
                <TabsItem itemTitle="Как подарить набор другу, чтобы он создал свой личный кабинет?">
                    <TabsItemContent>
                        <div className="TabsContent__text">
                            <p>Все просто! На подарочной упаковке ДНК-теста указан временный логин и пароль,
                                который
                                защищен стираемой полосой.
                                Человеку, который получил ДНК-тест в подарок, нужно ввести временный логин и
                                пароль
                                на странице входа в личный кабинет <a href="http://lk.genotek.ru"
                                                                      target="_blank">lk.genotek.ru.</a> После
                                этого ему будет предложено
                                зарегистрироваться или указать данные уже зарегистрированного пользователя,
                                ввести
                                номер пробирки и вызвать курьера для доставки биоматериала в лабораторию.
                                Обратите внимание, что по умолчанию вы не получите доступ к результатам
                                ДНК-теста
                                того, кому вы подарили тест. Но вы можете попросить вашего близкого
                                поделиться с
                                вами результатами в его настройках профиля.</p>
                        </div>
                        <div className="TabsContent__img">
                            <img src={tabImg1} alt=""/>
                        </div>
                    </TabsItemContent>
                </TabsItem>
                <TabsItem itemTitle="Хочу активировать ДНК-тест в этом личном кабинете">
                    <TabsItemContent>
                        <div className="TabsContent__text">
                            <p>На подарочной упаковке ДНК-теста указан временный логин и пароль, который
                                защищен стираемой полосой. Пожалуйста, введите их ниже. После ввода
                                временных данных, вы сможете ввести номер пробирки и вызвать курьера для
                                доставки биоматериала в лабораторию. </p>
                            <p className="img__mob"><img src={tabImg1} alt=""/></p>
                            <div className="TabsContent__form">
                                <LoginForm/>
                            </div>
                        </div>
                        <div className="TabsContent__img img__desktop">
                            <img src={tabImg1} alt=""/>
                        </div>
                    </TabsItemContent>
                </TabsItem>
            </div>
        )
    };
}

export default Tabs;
