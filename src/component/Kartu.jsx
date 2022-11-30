import { AiOutlineEdit, AiOutlineDelete, AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Kartu = (props) => {
    const [show, setShow] = useState(false);
    const { item, updateTodo, removeTodo, completeTodo } = props;
    // const [check, setCheck] = useState(false)
    const inputRef = useRef(true);

    useEffect(() => {
        setShow(show)

        console.log('ada yg berubah nih')
    });

    const ToggleData = () => {
        setShow(!show);
    };

    const update = (id, value, e) => {
        if (e.which === 13) {
            //here 13 is key code for enter key
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;
        }
    };

    return (
        <>
            <div>
                <div className="card border border-stone-500 flex items-center justify-between py-2 px-4 rounded-lg bg-white drop-shadow-2xl">
                    <button onClick={() => { completeTodo(item.id); ToggleData() }}>
                        {show ? <AiOutlineCheckSquare fontSize='1.5em' /> : <AiOutlineBorder fontSize='1.5em' />}
                    </button>
                    <p
                        ref={inputRef}
                        disabled={inputRef}
                        defaultValue={item.item}
                        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
                    >{item.item}</p>
                    <div className="flex items-center gap-2">
                        <button className="bg-red-500 p-1 rounded-lg"
                            onClick={() => removeTodo(item.id)}>
                            <AiOutlineDelete color="white" fontSize='1.5em' />
                        </button>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Kartu