import { useState } from "react";

export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return [
        value,
        (evt) =>
            setValue((prevState) => ({
                ...prevState,
                [evt.target.name]: evt.target.value,
            })),
    ];
};
