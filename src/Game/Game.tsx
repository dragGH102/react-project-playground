import React, { PureComponent } from 'react';
import Board from "../Board";

// State here, instead of props. in fact Game has no props!
type State = {
    history:
        // 1 element per game step
        {
            // we must use Array<> instead of shorthand [] as we have
            // multiple possible types (0 = X, 1 = Y, null = no one)
            squares: Array<0|1|null>
        }[];
    currentStep: number;
    xIsNext: boolean;
};

// a PureComponent handles shouldComponentUpdate lifecycle
// automatically by performing a state and props shallow comparison
// meaning only changing references will trigger a component update
// (Game component never needs to re-render indeed, the children do and
// they will based on new object reference, i.e. we return a new object from
// whatever method aims to mutate the states. This way we leverage immutability
// design principle which prevents awful side effects from mutating objects where we
// should not)
// .. Actually, Game has no props at all (i.e. stuff coming inTO it)
class Game extends PureComponent {

    // state = { ... } is a class field and it's the equivalent to...
    /*
        constructor(props) {
            // this first always (call super() on PureComponent implementation
            super(props);

            this.state = { .... }
    }
     */

    // we don't use static because states actually mutates!
    state: State = {
        // history contains the values of each square at each step
        // At step 1 (index 0) no squares are filled, so all null
        history: [{
            squares: Array(9).fill(null)
        }],

        // step 0 is where the game begins
        currentStep: 0,

        // X starts first!
        xIsNext: true
    };
    // yet another altarnative to the above, is 'React without ES6'
    // i.e. using createReactClass which also binds normal class methods
    // (e.g. func() { } ) without using


    render() {
        const { history, currentStep } = this.state;

        // Board will be re-rendered based on history position change
        // (because of the props 'squares')
        const current = history[currentStep];

        return (
            <div>
                <Board squares={current.squares} />
            </div>
        );

    }

    /*
     defaultProps are actually not necessary as we set them in
     constructor (class field in this component) and typescript
     is enforcing props being passed up from the parent
     as it would be incorrect to mark them as optional in Props type
     ...Actually, totally useless here anyway as Gamehas no props
     */
   /* defaultProps = {
      history: null,
      currentStep: null,
      xIsNext: null
    };*/
}

export default Game;
