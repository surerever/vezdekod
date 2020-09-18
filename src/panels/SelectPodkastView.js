import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';


import "./styles.css"

function SelectPodkastView(props) {
 

return (
	<Panel id={props.id}>
		<PanelHeader separator={false}
			left={<PanelHeaderBack onClick={() => window.history.back()} />}>
		</PanelHeader>

        <div className="Title">Кому доступен данный подкаст</div>
        <Group
          description={props.description}
        >
            <Radio name="radio" onChange={ () => 
              { props.toggleRadio('1'); 
                props.changeDescription('При публикации записи с эпизодом, он становится доступным для всех пользователей');
                props.changeRadioUser('Всем пользователям') } 
              } checked={props.activeRadio === '1'}>Всем пользователям</Radio>
            <Radio name="radio" onChange={ () => 
              { props.toggleRadio('2'); 
                props.changeDescription('При публикации записи с эпизодом, он становится доступным для друзей и друзей друзей');
                props.changeRadioUser('Друзьям и друзьям друзей') } 
              } checked={props.activeRadio === '2'}>Друзьям и друзьям друзей</Radio>
            <Radio name="radio" onChange={ () => 
              { props.toggleRadio('3'); 
                props.changeDescription('При публикации записи с эпизодом, он становится доступным для всех друзей');
                props.changeRadioUser('Всем друзьям') } 
              } checked={props.activeRadio === '3'}>Всем друзьям</Radio>
            <Radio name="radio" onChange={ () => 
              { props.toggleRadio('4'); 
                props.changeDescription('При публикации записи с эпизодом, он становится доступным только Вам');
                props.changeRadioUser('Только мне') } 
              } checked={props.activeRadio === '4'}>Только мне</Radio>
		</Group>

	</Panel>
);
};


export default SelectPodkastView;