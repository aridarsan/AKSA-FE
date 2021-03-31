import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: lightblue;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`

const Title = styled.h3`
  color: grey;
  text-decoration: none;
`

const PapanThumbnail = ({ title }) => {
  // console.log({judul})
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  )
}

export default PapanThumbnail
