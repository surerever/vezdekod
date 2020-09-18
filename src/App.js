import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import NewPod from './panels/NewPod';
import SelectPodkastView from './panels/SelectPodkastView';
import Editing from './panels/Editing';
import Opublikovat from './panels/Opublikovat';

class App extends React.Component {
	constructor(props) {
		super(props);
			
		this.state = {
			activePanel: 'home',
			image: '',
			activeRadio: "1",
			description: "При публикации записи с эпизодом, он становится доступным для всех пользователей",
			RadioUser: "Всем пользователям",
			audio: false,
			popout: null,
			valueInput: '',
			valueTextArea: '',
			checkedContent: false,
			checkedIskl: false,
			checkedTrailer: false,
			buttonDisabled: true,
			added: false
		};
		this.openDestructive = this.openDestructive.bind(this);
		this.closePopout = this.closePopout.bind(this);
        this.listenTextArea = this.listenTextArea.bind(this);
	};

componentDidMount() {
		window.addEventListener('popstate', e => e.preventDefault() & this.menu(e));
		window.history.pushState( {panel: 'home' }, `home` );
	}

changePanel = (e) => {
this.setState({ activePanel: e.currentTarget.dataset.to })
window.history.pushState( { panel: e.currentTarget.dataset.to }, `${e.currentTarget.dataset.to}`);
}	
 
menu (e) {
		if(e.state) {
			this.setState( { activePanel: e.state.panel } );
		} else {
			this.setState( {activePanel: 'home', search: '' } );
			window.history.pushState( { panel: 'home'}, `home` );
			bridge.send("VKWebAppClose", {"status": "success"});
		}
  }
	
changeImage = (e) => {
	this.setState({ image: URL.createObjectURL(e.target.files[0]) });
} 
clearImage = () => {
	this.setState({image: ''})
}

toggleRadio = (value) => {
	this.setState({ activeRadio: value })
  }

changeDescription = (value) => {
	this.setState({ description: value })
}  

changeRadioUser = (value) => {
    this.setState({RadioUser: value})
}

changeAudio = () => {
	this.setState({audio: true})
}

openDestructive () {
    this.setState({ popout:
      <Alert
        actionsLayout="vertical"
        actions={[{
          title: 'Удалить аудиозапись',
          autoclose: true,
		  mode: 'destructive',
		  action: () => this.setState({audio: false})
        }, {
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }]}
        onClose={this.closePopout}
      >
        <h2>Подтвердите действие</h2>
        <p>Вы уверены, что хотите удалить аудиозапись?</p>
      </Alert>
    });
  }

  closePopout () {
    this.setState({ popout: null });
  }

  listenInput = e => {
    this.setState({ valueInput: e.target.value });
  }

  listenTextArea = e => {
    this.setState({ valueTextArea: e.target.value });
  } 

  changeCheckedContent = () => {
      this.setState({checkedContent: !this.state.checkedContent})
  }
  changeCheckedIskl = () => {
	this.setState({checkedIskl: !this.state.checkedIskl})
}
changeCheckedTrailer = () => {
	this.setState({checkedTrailer: !this.state.checkedTrailer})
}  

addedChange = () => {
	this.setState({added: true})
}

	render() {
		
		return (
			      <View id="home" activePanel={this.state.activePanel} popout={this.state.popout}>
				      <Home id="home" activePanel={this.state.activePanel} added={this.state.added} changePanel={this.changePanel}/>
					  <NewPod id="newPod" activePanel={this.state.activePanel} changePanel={this.changePanel} image={this.state.image} changeImage={this.changeImage} clearImage={this.clearImage} RadioUser={this.state.RadioUser} audio={this.state.audio} changeAudio={this.changeAudio} openDestructive={this.openDestructive} listenInput={this.listenInput} listenTextArea={this.listenTextArea} valueInput={this.state.valueInput} valueTextArea={this.state.valueTextArea} checkedContent={this.state.checkedContent} checkedIskl={this.state.checkedIskl} checkedTrailer={this.state.checkedTrailer} changeCheckedContent={this.changeCheckedContent} changeCheckedIskl={this.changeCheckedIskl} changeCheckedTrailer={this.changeCheckedTrailer} />
					  <SelectPodkastView id="selectPodkastView" activePanel={this.state.activePanel} changePanel={this.changePanel} onRadiochange={this.onRadiochange} activeRadio={this.state.activeRadio} toggleRadio={this.toggleRadio} description={this.state.description} changeDescription={this.changeDescription} changeRadioUser={this.changeRadioUser}/>
					  <Editing id="editing" activePanel={this.state.activePanel} changePanel={this.changePanel}/>
					  <Opublikovat id="opublikovat" activePanel={this.state.activePanel} addedChange={this.addedChange} changePanel={this.changePanel} image={this.state.image} valueInput={this.state.valueInput} valueTextArea={this.state.valueTextArea}/>
				  </View>
		);
	}
}

export default App;
