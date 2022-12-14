import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.whatsapp,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});
