/* eslint-disable array-callback-return */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, setPapanAktif } from "../action";
import { Link } from "react-router-dom";
import KanbanList from "./List";
import KanbanCreate from "./Create";
import styled from "styled-components";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


class KanbanBoard extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardId } = this.props.match.params;
    // console.log(this.props.match)

    this.props.dispatch(setPapanAktif(boardId));
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists, cards, match, boards } = this.props;
    const { boardId } = match.params;
    console.log(boards)
    const board = boards[boardId];
    console.log(board)
    if (!board) {
      return <p>Board not found</p>;
    }
    const listOrder = board.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Link to="/">Home</Link>
        <h2>{board.judul}</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.card.map(cardID => cards[cardID]);
                  console.log(listCards)

                  return (
                    <KanbanList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <KanbanCreate list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards
});

export default connect(mapStateToProps)(KanbanBoard);
