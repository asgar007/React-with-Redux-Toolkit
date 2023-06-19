
/* This import work for Redux */
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

/* This Import work for Redux ToolKit */
const { createSlice } = require('@reduxjs/toolkit');

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        /* ADD REDUCER AND ACTION */
        add:(state, action)=>{
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        /* TOOGLE */
        toggle: (state, action)=>{
            state.todos.map((todo, i) => {
                if(i == action.payload){
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }
    }
});

/* EXPORTING REDUCERS WILL BE USED TO SET UP STORE */
export const todoReducer = todoSlice.reducer;
/* EXPORTING ACTIONS WILL BE USED BY COMPONENTS */
export const actions = todoSlice.actions;

/* SELECTOR it simplify more in components will use in useSelector() */
export const todoSelector = (state)=> state.todoReducer.todos;






/* No need this much code Since we are using Redux toolkit */

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }