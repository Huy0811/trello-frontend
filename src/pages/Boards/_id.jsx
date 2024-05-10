import Container from "@mui/material/Container"
import { useEffect, useState } from "react"
import { fetchBoardDetailsAPI } from "~/apis"
import { mockData } from "~/apis/mock-data"
import AppBar from "~/components/AppBar/AppBar"
import BoardBar from "./BoardBar/BoardBar"
import BoardContent from "./BoardContent/BoardContent"

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = "663da9ae634e3fdd14c96d6f"
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board)
    })
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  )
}

export default Board
