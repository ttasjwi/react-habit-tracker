import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {

    render() {
        return (
            <ul className="habits">
                {
                    this.props.habits.map(habit => (
                            /**
                             * 컴포넌트에 인자들을 전달하면, 이들을 묶어서 props 오브젝트의 요소로 전달한다.
                             * 리스트, set을 통해 생성 시 구분할 수 있도록 고유한 key를 지정해야한다. (권장)
                             */
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                        )
                    )
                }
            </ul>
        );
    }

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

}

export default Habits;
