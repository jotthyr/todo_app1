import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UPDATE_CONTENT, HANDLE_SUBMIT, CREATE } from './reducers/crud'

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ev => {
                    ev.preventDefault()
                    this.props.addTodo(this.props.content)
                }}>
                    <label>Add new todo:</label>

                    <input
                        type="text"
                        onChange={ev => {
                            this.props.updateContent(ev.target.value)
                        }}
                        value={this.props.content}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    content: state.content,
});

const mapDispatchToProps = dispatch => ({
    updateContent: (newContent) => {
        dispatch({type: UPDATE_CONTENT, payload: newContent});
    },
    addTodo: (content) => {
        dispatch({type: CREATE, payload: content});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);