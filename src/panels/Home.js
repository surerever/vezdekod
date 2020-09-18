import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';

function Home(props) {

	return (
	<Panel id={props.id}> <PanelHeader>Подкасты</PanelHeader>


{props.added == false ?
<Placeholder
            icon={<Icon56AddCircleOutline />}
			action={<Button size="l" onClick={props.changePanel} data-to="newPod">Добавить подкаст</Button>}
			header={<div className="jaja">Добавьте первый подкаст</div>}
            stretched
          >
           Добавляйте, редактируйте и делитесь подкастами вашего сообщества.
          </Placeholder> :
          <Placeholder
          icon={<Icon56CheckCircleOutline style={{color:"#3F8AE0"}} />}
          header={<div className="jaja">Подкаст добавлен</div>}
          action={<Button size="l">Поделиться подкастом</Button>}
        >
          Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
        </Placeholder>}

	  </Panel>
	);
  }
  
  export default Home;