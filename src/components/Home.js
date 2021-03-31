import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { tambahPapan } from '../action'
import { Button, Grid } from '@material-ui/core'
import PapanThumbnail from './PapanThumbnail'

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`

const CreateTitle = styled.h3`
  font-size: 48px;
  color: grey;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`

const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState('')

  const handleChange = (e) => {
    setNewBoardTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(tambahPapan(newBoardTitle))
    // console.log(newBoardTitle)
  }

  const renderBoards = () => {
    // console.log('ini data board order =>', boardOrder, "ini data boards", boards)
    return boardOrder.map((boardID) => {
      const board = boards[boardID]
      // console.log("ini data board", board)
      return (
        <>
          <Link key={boardID} to={`/${board.id}`} style={{ textDecoration: 'none' }}>
            <PapanThumbnail {...board} />
          </Link>
        </>
      )
    })
  }

  const renderCreateBoard = () => {
    return (
      <form style={{ textAlign: 'center' }}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput onChange={handleChange} value={newBoardTitle} placeholder='Your boards title...' type='text' />
        <Button
          onClick={handleSubmit}
          style={{ height: '80px', marginLeft: '1rem' }}
          variant='contained'
          color='primary'
          size='large'
        >
          Submit
        </Button>
      </form>
    )
  }

  return (
    <Grid>
      <HomeContainer>
        {renderCreateBoard()}
        <h2>This is your current board</h2>
        <Thumbnails>{renderBoards()}</Thumbnails>
      </HomeContainer>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
})

export default connect(mapStateToProps)(Home)
