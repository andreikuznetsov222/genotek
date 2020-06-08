import React from 'react';
import Header from './Header';
import MainText from './MainText';
import Banner from './Banner';
import Tabs from './Tabs';

class Layout extends React.Component {
    render() {
        return (
            <div className="Layout">
                <div className="Layout__page">
                    <div className="Layout__top">
                        <Header/>
                        <MainText
                            title="Подарочный набор для сдачи ДНК-теста доставлен"
                            subtitle="Спасибо, что выбрали Genotek! На упаковке вы найдете подробную инструкцию как сдать ДНК-тест."
                        />
                    </div>
                    <Banner/>
                    <Tabs/>
                </div>
            </div>
        );
    }
}

export default Layout;
