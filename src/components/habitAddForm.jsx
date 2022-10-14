import React, {Component} from 'react';

class HabitAddForm extends Component {

    inputRef = React.createRef(); // input에 사용할 ref
    formRef = React.createRef();

    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
}

export default HabitAddForm;
