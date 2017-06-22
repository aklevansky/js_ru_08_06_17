import React from 'react'
import './CommentAddForm.css'

export default class CommentAddForm extends React.Component {

	state = {
		userName: ''
	}

	render() {
		return (<form>
					 User: <input type="text" value={this.state.userName} onChange={this.handleUserName} />
					 <br/>
					 Comment: <textarea name="comment" rows="10" cols="50" onChange={this.handleCommentText}/>
				</form>);
	}

	handleUserName = (ev) => {

		this.setState({userName: ev.target.value});

		try {
			this.checkInput(ev.target.value.length, 5, 15);
			ev.target.classList.remove('lengthError');

		} catch (e) {
			ev.target.classList.add('lengthError');

		}
	}

	handleCommentText = (ev) => {

		try {
			this.checkInput(ev.target.value.length, 15, 50);
			//Не лезь в DOM. Я же говорил, что этого стоит избегать, задача писать в декларативном стиле
			ev.target.classList.remove('lengthError');

		} catch (e) {
			ev.target.classList.add('lengthError');
			
		}

	}

	checkInput = (input, min, max) => {
	
		if (input < min || input > max) {
			//в JS ексепшины не очень хорошая практика, очень ухудшают перорманс
			throw new Error('Length Error');
		}
	}
} 
