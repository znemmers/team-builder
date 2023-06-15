import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const {name, value} = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
        } 

    return (
        <form onSubmit={handleSubmit}>
            <label> Name
            <input
                placeholder="Enter your name!"
                name='name'
                value={props.values.name}
                onChange={handleChange}
            />
            </label>
            <label> Email
                <input 
                    placeholder= 'Enter your email!'
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    placeholder="Your role here!"
                    value={props.values.role}
                    name='role'
                    onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your Team!' />
        </form>
    )
}

export default Form;