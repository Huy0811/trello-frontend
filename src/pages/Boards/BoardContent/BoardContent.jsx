import Box from "@mui/material/Box"
import { mapOrder } from "~/utils/sorts"
import ColumnList from "./ColumnList/ColumnList"

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id")

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        p: "10px 0px"
      }}
    >
      <ColumnList columns={orderedColumns} />
    </Box>
  )
}

export default BoardContent
