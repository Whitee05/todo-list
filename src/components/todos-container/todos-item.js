import React from "react";

const TodoItem = ({ id, content, active, onComplete, onDelete }) => {
    const classList = `todos-item ${(active) ? 'todos-item_active' : ''}`;
    return (
        <div onClick={() => onComplete(id)} className={classList} key={id}>
            <span className={'todos-item__text'}>
                {content}
            </span>
            <button onClick={() => onDelete(id)} className="todos-item__delete">✕</button>
        </div>
    );
}

export default TodoItem;
