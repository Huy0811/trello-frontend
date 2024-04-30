import AppsIcon from "@mui/icons-material/Apps"
import CloseIcon from "@mui/icons-material/Close"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import SvgIcon from "@mui/material/SvgIcon"
import TextField from "@mui/material/TextField"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg"
import ModeSelect from "~/components/ModeSelect/ModeSelect"
import Profiles from "./Menus/Profiles"
import Recent from "./Menus/Recent"
import Starred from "./Menus/Starred"
import Templates from "./Menus/Templates"
import Workspace from "./Menus/Workspaces"

function AppBar() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        paddingX: 2,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0")
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "#ffffff" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color: "#ffffff" }} />
          <Typography
            variant="span"
            sx={{
              fontSize: " 1.2rem",
              fontWeight: "bold",
              color: "#ffffff"
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{ color: "#ffffff", border: "none", "&:hover": { border: "none" } }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="text"
          size="small"
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#ffffff" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{ color: "#ffffff", cursor: "pointer", display: searchValue ? "inline-block" : "none" }}
                onClick={() => setSearchValue("")}
              />
            )
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
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
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "#ffffff" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "#ffffff", cursor: "pointer" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
