import React, { useRef, useState } from 'react'

function Todolist() {
    const [list, setList] = useState([]);

    const ref = useRef(null)

    const handleOnAdd = () => {
        setList([...list, ref.current.value])
        ref.current.value = [];
        console.log(list);
    }
    const handleDelete = (listitem) => {
        setList(
            list.filter((e) => {
                return e != listitem
            })
        )
    }
    return (
        <>
            <center>
                <input ref={ref} style={{ border: "2px solid black", width: "100px" }} type="text" />
                <button onClick={handleOnAdd}>Add Me</button>
            </center>
            {list?.map((listitem) => {
                return (
                    <>
                        <center>
                            <div key={listitem} style={{ border: "2px solid black", width: "200px", height: "200px", background: "blue",margin:"2rem"}}>{listitem}</div>
                            <button onClick={() => {
                                handleDelete(listitem)
                            }}>
                                Delete
                            </button>
                        </center>
                    </>
                )
            })}
        </>
    )
}

export default Todolist











// Array
// const arr=["abs", 1,2,"abcd"];


// Object
// const obj={
//     num:1,
//     str:"name"
// }