import React from 'react';

function List(props){

    const {items,deleteHandler} = props;

    return(
        <ol>

            {items && items.map(item => (
                <li key = {item.id} style = 
                {{textDecoration: item.completed?'line-through':'none'}}>
                    
                    <label onClick = {props.toggleHandler 
                    && (() => props.toggleHandler(item.id))}>
                        {item.name}
                    </label>

                    <button onClick = {() => deleteHandler(item)}>
                        X
                    </button>

                </li>
            ))}
        
        </ol>
    );
}

export default List;