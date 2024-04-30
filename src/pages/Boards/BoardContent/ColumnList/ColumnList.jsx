import NoteAddIcon from "@mui/icons-material/NoteAdd"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Column from "./Column/Column"

function ColumnList() {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": { m: 2 }
      }}
    >
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: "150px",
          maxWidth: "150px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d"
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{ color: "#ffffff", width: "100%", justifyContent: "flex-start", pl: 2.5, py: 1 }}
        >
          Column
        </Button>
      </Box>
    </Box>
  )
}

export default ColumnList
