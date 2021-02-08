import {useState} from 'react';

export function useLocalStorage (key:any, defaultValue:any){
    const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
    const [value, setValue] = useState(getInitialValue);
    const setAndStoreValue = (newValue:any) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    };
    return [value, setAndStoreValue];
}