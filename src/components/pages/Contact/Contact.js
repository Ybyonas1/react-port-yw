import React from "react";
import { useState } from "react";
// import { validateEmail } from "../../helpers/helpers";
import './assets/contact.css'

const Contact = () => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        e.target(setFocused(true));
    };
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'comment') {
            setComment(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if (!validateEmail(email) || !name) {
        //     setErrorMessage('email or name is not valid, please try again!');
        //     return;
        // } else {
        //     setErrorMessage('');
        // }

        setName('');
        setComment('');
        setEmail('');
    };
    // HOW TO I REMOVE THE PLACEHOLDERS WHEN I INPUT SOMETHING IN THE TEXT BAR!!
    return (
        <div className="row justify-content-center align-items-center text-center col-11 col-lg-6 m-auto">
            <form className="form container col-12 col-lg-9 bg-black border border-white mt-5 p-5">
                <div>
                    <h4
                        className="text-light text-start aboutMe">name:</h4>
                    <input
                        className="text-dark col-10 fs-5 border border-warning p-2"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="First and last name"
                        // onfocus="this.placeholder = ''"
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                        minLength={2}
                    />
                    <span className="error">{name.length > 0 ? 'please enter a valid name' : ' '}</span>
                </div>
                <div>
                    <h4 className="text-light aboutMe mt-4 text-start">email:</h4>
                    <input
                        className="text-dark col-10 fs-5 border border-warning p-2"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email@email.com"
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                    />
                    <span className="error">{email.length > 0 ? 'please enter a valid email' : ' '}</span>
                </div>
                <div>
                    <h4 className="text-light mt-4 aboutMe text-start">comment:</h4>
                    <textarea
                        rows="3"
                        className="text-dark col-10 fs-5 border border-warning p-2"
                        value={comment}
                        name="comment"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Looking forward to your message!"
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                        minLength={2}
                    />
                    <span className="error">{comment.length > 0 ? 'please enter a valid comment' : ' '}</span>
                </div>
                <div>
                    <button
                        className="col-6 icon btn aboutMe btn-info btn-lg mt-4 fw-bold"
                        type="button"
                        onClick={handleFormSubmit}
                        onChange={handleInputChange}
                    >
                        enter
                    </button>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text text-danger fs-5 mt-5">{errorMessage}</p>
                    </div>
                )}
            </form>

        </div>
    );
};

export default Contact;