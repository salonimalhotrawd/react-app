import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    /**
     * @method getDerivedStateFromProps
     * @param {*} props contains the props
     * @param {*} state contains the state
     * @returns state || null
     */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[persons.js] getDerivedStateFromProps has called');
    //     return state;
    // }

    /**
     * @method shouldComponentUpdate
     * @param {*} nextProps contains the nextProps to update
     * @param {*} nextState contains the nextState to update
     * @returns true || false (whether to update the state or not)
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[persons.js] shouldComponentUpdate has called');
        return true;
    }

    /**
     * @method getSnapshotBeforeUpdate
     * @param {*} prevProps contains the previous props before the updation
     * @param {*} prevState contains the previous state before the updation
     * @returns snapshot object || null
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js] getSnapshotBeforeUpdate has called');
        return { message: 'Snapshot!!' };
    }

    /**
     * @method componentDidUpdate
     * @param {*} prevProps contains the previous props before the updation
     * @param {*} prevState contains the previous state before the updation
     * @param {*} Snapshot contains snapshot object
     */
    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[persons.js] getSnapshotBeforeUpdate has called');
        console.log(Snapshot);
    }


    render() {
        console.log('[persons.js render called]');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)} />
            )
        })
    }
}
export default Persons;