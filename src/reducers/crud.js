export const CREATE = 'CREATE'
export const READ = 'READ'
export const UPDATE = 'UPDATE'
export const DEL = 'DEL'
export const EDIT1 = 'EDIT1'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'

const initialState = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ],
    flipflag1: false,
    flipflag2: false,
    content: ''
  }

export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            let todos = [...state.todos, action.payload]

            return {
                ...state,
                todos,
            }

        case UPDATE:
            if (state.flipflag1 ===  true) {
                const todos = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {id: action.payload, content: action.payload1}
                    } else {
                        return {id: todo.id, content: todo.content}
                    }
                })

                return {
                    ...state,
                    todos,
                }
            }

            break;

        case EDIT1:
            return {
                ...state,
                flipflag2: action.payload,
                flipflag1: !state.flipflag1
            }

        case DEL:
            const filteredTodos = state.todos.filter(todo => {
                return todo.id !== action.payload
            });

            return {
                ...state,
                todos: filteredTodos,
            }

        case UPDATE_CONTENT:
            return {
                ...state,
                content: action.payload
            }

        case HANDLE_SUBMIT:
            action.payload.preventDefault();

            return {
                ...state,
                content: ''
            }

        default:
            return state;
    }
}

export default crudReducer;