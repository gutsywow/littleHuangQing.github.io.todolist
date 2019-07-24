
const reducers = (state={
    todos:[],
    visibilityFilter:"SHOW_ALL"
}, action) => {
    switch (action.type) {
        case "ADD_TODO"://添加
            return Object.assign({}, state, {
                todos: [...state.todos,{content:action.content,complete:false,id:action.id}]
            });
        case "DEL_TODO"://删除全部
            return Object.assign({}, state, {
                todos: [...state.todos].splice()
            });
        case "TOGGLE_TODO"://切换状态
            return Object.assign({}, state, {
                todos: [...state.todos].map(function (item, index) {
                    if (item.id === action.id) {
                        console.log('------------------')
                        item.complete=!item.complete;
                    }
                    return item
                })
            });
        case "SET_VISIBILITY_FILTER"://显示
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        default: return state;
    }
};
export default reducers;