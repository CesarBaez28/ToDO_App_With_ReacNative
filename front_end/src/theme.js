import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: '#24292e',
    textsecundary: '#586069',
    primary: '#0366D6',
    white: '#FEFEFE'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System"
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700' 
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  textInputError: {
    borderColor: 'red'
  }
}

export default theme