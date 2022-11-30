import React, { useState } from "react";
import { connect } from "react-redux";
import {
    addTodos,
    completeTodos,
    removeTodos,
    updateTodos,
} from "../redux/reducer";
import Kartu from "./Kartu"

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const ListKartu = (props) => {
    const [sort, setSort] = useState("active");

    return (
        <>
            <div className="flex justify-center w-1/3  mx-auto mt-10 gap-4">
                <button className="py-1 px-5 rounded-full bg-sky-400 text-white"
                    onClick={() => setSort("all")}>Semua</button>
                <button className="py-1 px-5 rounded-full bg-sky-400 text-white"
                    onClick={() => setSort("active")}>Aktif</button>
                <button className="py-1 px-5 rounded-full bg-sky-400 text-white"
                    onClick={() => setSort("completed")}>Selesai</button>
            </div>

            <div className="mt-5 flex flex-col gap-2 justify-center w-2/5 mx-auto">
                {props.todos.length > 0 && sort === "active"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === false && (
                                <Kartu
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {/* for completed items */}
                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === true && (
                                <Kartu
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {/* for all items */}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item) => {
                        return (
                            <Kartu
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListKartu);