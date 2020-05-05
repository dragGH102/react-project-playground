import React, {PureComponent} from 'react';
import {
    Title,
    Square
} from './styles';

interface Props {
    title: string;
    squares: Array<0|1|null>;
    handleSquareClick: () => void;
}

// <Props> is the typescript way to define propTypes
class Board extends PureComponent<Props> {

    renderSquare(props: { key: number, value: any, onClick: () => void }) {
        const { key, value, onClick } = props;

        return (
            <Square key={key} className="square" onClick={onClick}>
                { value }
            </Square>
        )
    }

    render() {
        const { title, squares, handleSquareClick } = this.props;

        return (
            <div className="board">
                <Title>{title}</Title>
                <div>
                    {[...Array(3).keys()]
                        .map((i) => (
                            <div className="board-row">
                                {[...Array(3).keys()]
                                    .map((j) => this.renderSquare({
                                        key: (i+1)*(j+1),
                                        value: squares[i],
                                        onClick: handleSquareClick
                                    }))
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
    // title is in fact not provided by the parent component (Game)
    static defaultProps = {
        title: "Board",
    };
}



export default Board;
