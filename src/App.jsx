import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import ThreeDRotation from "@mui/icons-material/ThreeDRotation"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function App() {
  return (
    <>
      <Typography variant="body2" color={"text.secondary"}>
        Huy
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
