import Box from "@mui/material/Box"
import ColumnList from "./ColumnList/ColumnList"

function BoardContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        p: "10px 0px"
      }}
    >
      <ColumnList />
    </Box>
  )
}

export default BoardContent
