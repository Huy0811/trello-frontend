import AddCardIcon from "@mui/icons-material/AddCard"
import AttachmentIcon from "@mui/icons-material/Attachment"
import Cloud from "@mui/icons-material/Cloud"
import CommentIcon from "@mui/icons-material/Comment"
import ContentCopy from "@mui/icons-material/ContentCopy"
import ContentCut from "@mui/icons-material/ContentCut"
import ContentPaste from "@mui/icons-material/ContentPaste"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import GroupIcon from "@mui/icons-material/Group"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Divider from "@mui/material/Divider"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { useState } from "react"

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "50px"

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        p: "10px 0px"
      }}
    >
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
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More Options">
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "text.primary", cursor: "pointer" }}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown"
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Create</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: "0px 5px",
              m: "0px 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
                borderRadius: "7px"
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#bfc2cf",
                borderRadius: "7px"
              }
            }}
          >
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://vlu.edu.vn/_next/image?url=https%3A%2F%2Fvluwebmedia.s3.ap-southeast-1.amazonaws.com%2FVLU_00481_8d35ffd5b9.jpg&w=1920&q=75"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Huy</Typography>
              </CardContent>
              <CardActions sx={{ p: "0px 4px 8px" }}>
                <Button size="small" startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<CommentIcon />}>
                  15
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                  10
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 03</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 04</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 05</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 06</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 07</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 08</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 09</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 10</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button startIcon={<AddCardIcon />}>Create</Button>
            <Tooltip title="Drag">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More Options">
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "text.primary", cursor: "pointer" }}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-column-dropdown"
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Create</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: "0px 5px",
              m: "0px 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
                borderRadius: "7px"
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#bfc2cf",
                borderRadius: "7px"
              }
            }}
          >
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://vlu.edu.vn/_next/image?url=https%3A%2F%2Fvluwebmedia.s3.ap-southeast-1.amazonaws.com%2FVLU_00481_8d35ffd5b9.jpg&w=1920&q=75"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Huy</Typography>
              </CardContent>
              <CardActions sx={{ p: "0px 4px 8px" }}>
                <Button size="small" startIcon={<GroupIcon />}>
                  20
                </Button>
                <Button size="small" startIcon={<CommentIcon />}>
                  15
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                  10
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
              <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button startIcon={<AddCardIcon />}>Create</Button>
            <Tooltip title="Drag">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
