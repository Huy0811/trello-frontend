import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from "@mui/icons-material/Bolt"
import DashboardIcon from "@mui/icons-material/Dashboard"
import FilterListIcon from "@mui/icons-material/FilterList"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Tooltip from "@mui/material/Tooltip"

const MENU_STYLES = {
  color: "#ffffff",
  backgroundColor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": { color: "#ffffff" },
  "&:hover": { backgroundColor: "primary.50" }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        paddingX: 2,
        borderBottom: "1px solid #ffffff",
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2")
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip icon={<DashboardIcon />} label="Huy Board" clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDriveIcon />} label="Add To Google Drive" clickable sx={MENU_STYLES} />
        <Chip icon={<BoltIcon />} label="Automation" clickable sx={MENU_STYLES} />
        <Chip icon={<FilterListIcon />} label="Filters" clickable sx={MENU_STYLES} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{ color: "#ffffff", borderColor: "#ffffff", "&:hover": { borderColor: "#ffffff" } }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
              fontSize: "16px",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" }
            }
          }}
        >
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
          <Tooltip title="Huy">
            <Avatar alt="Huy" src="https://bxp-content-static.prod.public.atl-paas.net/img/favicon.ico" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
