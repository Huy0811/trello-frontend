import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import CloseIcon from "@mui/icons-material/Close"
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { toast } from "react-toastify"
import Column from "./Column/Column"

function ColumnList({ columns }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const [newColumnTitle, setNewColumnTitle] = useState("")

  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const addNewColumn = () => {
    if (!newColumnTitle) {
      toast.error("Please enter column title !")
      return
    }

    toggleOpenNewColumnForm()
    setNewColumnTitle("")
  }

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
        {!openNewColumnForm ? (
          <Box
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d"
            }}
            onClick={toggleOpenNewColumnForm}
          >
            <Button
              startIcon={<NoteAddIcon />}
              sx={{ color: "#ffffff", width: "100%", justifyContent: "flex-start", pl: 2.5, py: 1 }}
            >
              Column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              p: 1,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <TextField
              label="Enter column title"
              type="text"
              size="small"
              variant="outlined"
              autoFocus
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
                "& label": { color: "#ffffff" },
                "& label.Mui-focused": { color: "#ffffff" },
                "& input": { color: "#ffffff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ffffff" },
                  "&:hover fieldset": { borderColor: "#ffffff" },
                  "&.Mui-focused fieldset": { borderColor: "#ffffff" }
                }
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                  boxShadow: "none",
                  border: "0.5px solid",
                  borderColor: (theme) => theme.palette.success.main,
                  "&:hover": { bgcolor: (theme) => theme.palette.success.main }
                }}
                onClick={addNewColumn}
              >
                Add Column
              </Button>
              <CloseIcon
                fontSize="small"
                sx={{ color: "white", cursor: "pointer", "&:hover": { color: (theme) => theme.palette.warning.light } }}
                onClick={() => {
                  toggleOpenNewColumnForm()
                  setNewColumnTitle("")
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ColumnList
