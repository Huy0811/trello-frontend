import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Column from "./Column/Column"

function ColumnList({ columns }) {
  return (
    <SortableContext items={columns?.map((column) => column._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

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
    </SortableContext>
  )
}

export default ColumnList
