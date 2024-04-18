import { experimental_extendTheme as extendTheme } from "@mui/material/styles"

const theme = extendTheme({
  trello: {
    appBarHeight: "60px",
    boardBarHeight: "60px"
  },
  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "7px",
            height: "7px"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "7px"
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#ffffff",
            borderRadius: "7px"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": { borderWidth: "1px !important" },
          "& fieldset": { borderWidth: "1px !important" },
          "&:hover fieldset": { borderWidth: "2px !important" },
          "&.Mui-focused fieldset": { borderWidth: "2px !important" }
        }
      }
    }
  }
})

export default theme
