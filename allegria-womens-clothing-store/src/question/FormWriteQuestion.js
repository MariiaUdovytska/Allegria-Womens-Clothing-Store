import React from 'react';
import '../css/question/formWriteQuestion.css';
import { Form } from 'react-bootstrap';

function FormWriteQuestion() {
	return (
		<div className='question-write'>
			<div className='question-write__body'>
				<h3>Есть вопросы или предложения?<br></br>НАПИШИТЕ НАМ</h3>
				<input type="text" id="name" name="name" className='question-write__body-name' placeholder='Имя'></input>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="E-mail" />
					</Form.Group>
				</Form>
				<div className='question-write__body-choice'>
					<span>Что Вас интересует:</span>
					<Form.Select aria-label="Новинки">
						<option>Вопрос</option>
						<option value="1">Пожелание</option>
					</Form.Select>
				</div>
				<textarea type="text" rows="4" id="get" name="get" className='question-write__body-get' placeholder='Текс сообщения'></textarea>
				<button type='submit'>Отправить</button>
			</div>
		</div>
	);
}

export default FormWriteQuestion;