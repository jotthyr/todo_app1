import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HANDLE_CHANGE, HANDLE_SUBMIT, CREATE } from './reducers/crud'

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                    <label>Add new todo:</label>

                    <input
                        type="text"
                        onChange={(e) => this.props.handleChange(e)}
                        alue={this.props.content}
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
    handleChange: (event) => {
        dispatch({type: HANDLE_CHANGE, payload: event});
    },
    handleSubmit: (event) => {
        this.props.addTodo(this.props.content);
        dispatch({type: HANDLE_SUBMIT, payload: event});
    },
    addTodo: (this.props.content) => {
        dispatch({type: CREATE, payload: this.props.content});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);