import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {

    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0,},
            {id: 2, name: 'Running', count: 0,},
            {id: 3, name: 'Coding', count: 0,},
        ],
    }

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
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
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits}); // {habits:habits}
    };

    handleDecrement = (habit) => {
        if (habit.count > 0) {
            const habits = [...this.state.habits];
            const index = habits.indexOf(habit);
            habits[index].count--;
            this.setState({habits});
        }
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };

}

export default Habits;
