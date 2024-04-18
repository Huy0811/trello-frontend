import AppsIcon from "@mui/icons-material/Apps"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import SvgIcon from "@mui/material/SvgIcon"
import TextField from "@mui/material/TextField"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg"
import ModeSelect from "~/components/ModeSelect"
import Profiles from "./Menus/Profiles"
import Recent from "./Menus/Recent"
import Starred from "./Menus/Starred"
import Templates from "./Menus/Templates"
import Workspace from "./Menus/Workspaces"

function AppBar() {
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
        paddingX: 2
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color: "primary.main" }} />
          <Typography
            variant="span"
            sx={{
              fontSize: " 1.2rem",
              fontWeight: "bold",
              color: "primary.main"
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
          <Button variant="outlined" startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField id="outlined-search" label="Search field" type="search" size="small" sx={{ minWidth: "120px" }} />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "primary.main", cursor: "pointer" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
