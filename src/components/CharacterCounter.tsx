import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import React from "react";



const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: "team sequence", // default value (aka initial value)
});
export function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}

function TextInput() {
    const [text, setText] = useRecoilState(textState);


    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});

const CharacterCount=()=> {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}