import React, {PureComponent} from 'react';
import {
    Title,
    Square
} from './styles';

interface Props {
    title: string;
    squares: Array<0|1|null>;
}

// <Props> is the typescript way to define propTypes
class Board extends PureComponent<Props> {

    renderSquare(key: number, value: any) {
        return (
            <Square key={key}>
                { value }
            </Square>
        )
    }

    render() {
        const { title, squares } = this.props;

        return (
            <div className="board">
                <Title>{title}</Title>
                <div>
                    {[...Array(3).keys()]
                        .map((i) => (
                            <div className="board-row">
                                {[...Array(3).keys()]
                                    .map((j) => this.renderSquare((i+1)*(j+1), squares[i]))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    // class field
    // This is the typescript way to define defaultProps
    static defaultProps = {
        title: "Board",
    };
}



export default Board;
