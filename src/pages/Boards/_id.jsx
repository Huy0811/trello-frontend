import Container from "@mui/material/Container"
import { useEffect, useState } from "react"
import { fetchBoardDetailsAPI } from "~/apis"
import AppBar from "~/components/AppBar/AppBar"
import BoardBar from "./BoardBar/BoardBar"
import BoardContent from "./BoardContent/BoardContent"

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = "663cd11fe6751622f56bcbb7"
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board)
    })
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
