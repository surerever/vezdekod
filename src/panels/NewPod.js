import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import File from '@vkontakte/vkui/dist/components/File/File';
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import Icon28PodcastOutline from '@vkontakte/icons/dist/28/podcast_outline';

import "./styles.css"

function NewPod(props) {
 

return (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()} />}>
			Новый подкаст
		</PanelHeader>

		<div className="topWrap">
			<div className="topWrap_avaWrapper">
				{props.image == "" 
				?
			    <File className="topWrap_avaWrapper_ava" required accept="image/*" onChange={(e) => {props.changeImage(e)}}>
			        <Icon56GalleryOutline className="topWrap_avaWrapper_ava_Icon56Gallery" width={32} height={32}/>
			    </File>
				:
				<div className="topWrap_avaWrapper_ava">
                    <img src={props.image}></img>
					<Icon24DismissOverlay className="topWrap_avaWrapper_ava_Icon24DismissOverlay" width={16} height={16} onClick={() => {props.clearImage()}}/>
				</div>
                }
			</div>
			<FormLayout className="Fl">
                 <Input type="text" placeholder="Введите название подкаста" top="Название" value={props.valueInput} onChange={(e) => {props.listenInput(e)}} />
			</FormLayout>
		</div>
	    <FormLayout>
		    <Textarea top="Любимая музыка" placeholder="Введите описание подкаста" top="Описание подкаста" value={props.valueTextArea} onChange={(e) => {props.listenTextArea(e)}}  />
        </FormLayout>

		
			{props.audio === false 
			? <div className="placeholder">
                <div className="placeholder_header">Загрузите Ваш подкаст</div>          
                <div className="placeholder_descr">Выберите готовый аудиофайл из вашего телефона и добавьте его</div>
			    <Button size="l" mode="outline" onClick={props.changeAudio}>Загрузить файл</Button>
			  </div>
			:
			<>
			  <Group separator="hide" description="Вы можете добавить таймкоды и скорректировать подкаст в режиме редактирования">
			      <div className="audio_wrap">
				      <div className="audio_wrap_Ava">
                          <Icon28PodcastOutline width={23} height={24.5} style={{ color: "#99A2AD"}}/>
					  </div>
					  <div className="audio_wrap_Title">
					      My_podcast.mp3
					  </div>
					  <div className="audio_wrap_Time">
						  59.16
					  </div>
			      </div>
	
			  </Group>
			  <div className="ButtonWrap">
			      <Button size="xl" mode="secondary" stretched style={{marginBottom: "10px"}} onClick={props.openDestructive}>Удалить аудиозапись</Button>
			      <Button size="xl" mode="outline" stretched onClick={props.changePanel} data-to="editing">Редактировать аудиозапись</Button>
		      </div>
			</>
            }
        

		<Separator />

            <Checkbox checked={props.checkedContent} onChange={props.changeCheckedContent}>Ненормативный контент</Checkbox>
			<Checkbox checked={props.checkedIskl} onChange={props.changeCheckedIskl} >Исключить эпизод из экспорта</Checkbox>
			<Checkbox checked={props.checkedTrailer} onChange={props.changeCheckedTrailer}>Трейлер подкаста</Checkbox>

		<Group className="Bottom_Bar">
          <Cell description={props.RadioUser} expandable onClick={props.changePanel} data-to="selectPodkastView">
		  Кому доступен данный подкаст
          </Cell>
        </Group>

        <Div>
			{props.audio == false || props.image == '' || props.valueInput == '' || props.valueTextArea == '' ?
            <Button size="xl" stretched disabled={true}>Далее</Button> :
			<Button size="xl" stretched onClick={props.changePanel} data-to="opublikovat">Далее</Button>}
        </Div>
        
	</Panel>
);
};


export default NewPod;