import React, {Component} from 'react';

class Habit extends Component {

    state = {
        count: 0,
    };

    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.countIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.countDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        );
    }

    countIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트

        // this.state.count ++; (x)
        // React는 단순히 state를 변경하면 변경을 감지하지 못 함.
        // setState를 통해 상태를 명시적으로 변경해야한다.

        this.setState({count: this.state.count + 1});
    }

    countDecrement = () => {
        if (this.#isCountBiggerThanZero()) {
            this.setState({count: this.state.count - 1});
        }
    }

    #isCountBiggerThanZero = () => {
        return this.state.count > 0;
    }

}

export default Habit;
