import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon16Play from '@vkontakte/icons/dist/16/play';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import "./styles.css"

function Opublikovat(props) {
 

return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()} />}>
                Новый подкаст
		</PanelHeader>

        <div className="topWrapBitch">
			<div className="topWrap_avaWrapper">
				<div className="topWrap_avaWrapper_ava">
                    <img src={props.image}></img>
                    <div className="master">
                        <Icon16Play style={{color:"white"}}/>
                    </div>
				</div>
			</div>
            <div className="allwrapperbitches">
                <div className="bitch">
                    {props.valueInput}
			    </div>
                <div className="groupBitch">
                    ПараDogs
                </div>
                <div className="dlitBitch">
                    Длительность: 59:16
                </div>
            </div>
		</div>

        <Separator />

        <div className="cockWrapper">
            <div className="niceCock">
                Описание подкаста
            </div>
            <div className="awesomeDick">
                {props.valueTextArea}
            </div>
        </div>

        <Separator />

        <div className="cockWrapper">
            <div className="niceCock suck">
                Содержание
            </div>
            <div className="awesomeDick">
                <div className="pidoras">
                   <span className="pisos">05:41</span> — Начало обсуждения
                </div>
                <div className="pidoras">
                <span className="pisos">15:23</span> — Основная тема подкаста
                </div>
                <div className="pidoras">
                <span className="pisos">25:37</span> — Разговор с гостем
                </div>
                <div className="pidoras">
                <span className="pisos">43:15</span> — Рекламная интеграция 
                </div>
                <div className="pidoras">
                <span className="pisos">47:00</span> — Вопросы от зрителей
                </div>
                <div className="pidoras">
                <span className="pisos">58:00</span> — Подведение итогов розыгрыша
                </div>
            </div>
        </div>

        <Separator />

        <Div>
            <Button size="xl" stretched onClick={(e) => {props.changePanel(e);props.addedChange()}} data-to="home">Далее</Button>
        </Div>
	</Panel>
);
};


export default Opublikovat;