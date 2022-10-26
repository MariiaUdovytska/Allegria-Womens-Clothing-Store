import React from 'react';
import '../css/registration/registration.css';

function PasswordField() {
	const { useState } = React;
	const [inputtext, setinputtext] = useState({
		password: ""
	});

	const [warnpassword] = useState(false);

	const [eye, seteye] = useState(true);
	const [password, setpassword] = useState("password");
	const [type, settype] = useState(false);

	const inputEvent = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setinputtext((lastValue) => {
			return {
				...lastValue,
				[name]: value
			}
		});
	}

	const Eye = () => {
		if (password === "password") {
			setpassword("text");
			seteye(false);
			settype(true);
		}
		else {
			setpassword("password");
			seteye(true);
			settype(false);
		}
	}

	return (
		<div className="input-text mb-3 col-md-6 registration__body-password">
			<input type={password} className={` ${warnpassword ? "warning" : ""} ${type ? "type_password" : ""}`}
				placeholder="Пароль"
				value={inputtext.password}
				onChange={inputEvent}
				name="password"
			/>
			<i onClick={Eye} className={`bi ${eye ? "bi-eye-fill" : "bi-eye-slash-fill"}`} style={{ color: '#B7C1C5' }}></i>
		</div>
	);
}

export default PasswordField;