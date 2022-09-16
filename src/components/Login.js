import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import * as yup from 'yup';


const initialFormValues = {
    username: '',
    password: ''
};

const initialFormErrors = {
    username: '',
    password
};

const initialDisabled = true;

export default function Login() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormErrors);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: ''}))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }
    const handleChange = (e, name, value) => {
        
    }
}