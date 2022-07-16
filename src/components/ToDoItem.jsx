import React from 'react';

const ToDoItem = () => (
    <li className="todoapp__item">
        {/* 아이템 완료 체크 / 체크 해제를 위한 체크박스 */}
        <input type="checkbox" className="todoapp__item-checkbox" />
        {/* 아이템 내용 */}
        <span className="todoapp__item-ctx">ToDo Item</span>
        {/* 수정 버튼 */}
        <button type="button" classNmae="todoapp__item-edit-btn">
            수정
        </button>
        {/* 삭제 버튼 */}
        <button type="button" classNmae="todoapp__item-delete-btn">
            삭제
        </button>
    </li>
);

export default ToDoItem;