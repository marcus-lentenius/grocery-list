import React, {useContext, useEffect, useState} from "react";
import {ContextData} from "../View";
import {dataLoader} from "../../scripts/fetchData";

const Hob = () => {
    const Data = useContext(ContextData)
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [data, setData] = useState(undefined);


    useEffect(() => {
        console.log(Data)
        if (!isLoadingComplete && !Data) {
            setData(dataLoader())
            setLoadingComplete(true)
        }
    }, [Data])

    return (
        <>
            {data ? <p></p> : null}
        </>
    );
}

export default Hob;