import './app.css';
import Habits from "./habits";

import React, {Component} from 'react';
import Navbar from "./navbar";

class App extends Component {

    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0,},
            {id: 2, name: 'Running', count: 0,},
            {id: 3, name: 'Coding', count: 0,},
        ],
    }

    render() {
        return (
            <>
                <Navbar
                    totalCount={this.state.habits.filter(item => item.count > 0).length}
                />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
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

export default App;
