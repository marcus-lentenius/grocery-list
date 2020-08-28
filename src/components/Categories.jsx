import React, {useContext} from "react";
import Item from "./Item";
import AppData from "./App";

const Categories = ({category}) => {
    const Data = useContext(AppData)

    return (
        <>
            {
                category.map(category => (
                    <>
                        {/*//todo gör en headline*/}
                        <p key={'headline_' + category} style={{color: "blue"}}>{category}</p>
                        {
                            Data.items.filter(item => item.category === category).map(item=>(
                                //todo >item.name<
                                    <Item key={'categories_' + item} item={item}/>
                                )
                            )
                        }
                    </>
                ))
            }
        </>
    );
}

export default Categories