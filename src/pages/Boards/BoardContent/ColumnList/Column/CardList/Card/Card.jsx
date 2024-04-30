import AttachmentIcon from "@mui/icons-material/Attachment"
import CommentIcon from "@mui/icons-material/Comment"
import GroupIcon from "@mui/icons-material/Group"
import { Card as MuiCard } from "@mui/material"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }

  return (
    <MuiCard sx={{ cursor: "pointer", boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)", overflow: "unset" }}>
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
    </MuiCard>
  )
}

export default Card
