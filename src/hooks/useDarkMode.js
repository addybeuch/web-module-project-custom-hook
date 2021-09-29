import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage('beenza', initialValues);

    return[values,setValues]
}

export default useDarkMode;

