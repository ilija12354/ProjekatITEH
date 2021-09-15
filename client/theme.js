import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#f2dea7',
      main: '#fcba03',
      dark: '#736746',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#a7f2f2',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme