import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';

import "./styles.css"

function Editing(props) {
 

return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()} />}>
                Редактирование
		</PanelHeader>

		<div className="WrapperEdit">
            <div className="WrapperEdit_timeline">
			</div>
			<div className="WrapperEdit_cerf">
			</div>
			<div className="WrapperEdit_cyka">
			</div>
		</div>
        
        <Group header={<Header mode="secondary">Таймкоды</Header>} description="Отметки времени с названием темы. Позволяют слушателям легче путешествовать по подкасту.">
            <div className="timecodes">
                <div className="timecodes_icon">
                    <Icon28AddCircleOutline width={22} height={22} style={{color:"#3F8AE0"}}/>
				</div>
				<div className="timecodes_title">
					Добавить таймкод
				</div>
		    </div>
		</Group>

	</Panel>
);
};


export default Editing;