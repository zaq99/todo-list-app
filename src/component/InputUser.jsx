import { useState } from "react"
import { connect } from 'react-redux'
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const InputUser = (props) => {
    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };

    console.log('todo text', props)

    return (
        <>
            <div className="flex flex-col justify-center text-center mt-20">
                <h1 className="text-3xl font-semibold">Apa rencanamu hari ini ?</h1>
                <div className="mt-5 flex flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        onChange={(e) => handleChange(e)}
                        value={todo}
                        className="w-1/4 border border-stone-500 p-2 rounded-lg" placeholder="aku ingin..." autoFocus />
                    <button onClick={() => add()} className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white">Tambah</button>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(InputUser);