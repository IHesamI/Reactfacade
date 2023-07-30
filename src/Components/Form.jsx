import React from 'react'

export default function useValidator() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MAX_NAME_LENGTH = 30;
    const MIN_NAME_LENGTH = 10;
    function validateData(Data) {
        const [email, name] = Data;
        const isvalid = emailRegex.test(email) && (name.length <= MAX_NAME_LENGTH && name.length >= MIN_NAME_LENGTH);
        return isvalid ? isvalid : { error: 'Not a valid infos' }
    }
    return [validateData]
}
