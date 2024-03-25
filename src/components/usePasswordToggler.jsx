import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function usePasswordToggler() {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FontAwesomeIcon className='hover:cursor-pointer'
            icon={visible ? faEye : faEyeSlash }
            onClick={() => setVisiblity(visiblity => !visiblity)}
        />
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
}

export default usePasswordToggler