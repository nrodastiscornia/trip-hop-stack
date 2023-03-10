import { RemixBrowser } from "@remix-run/react";
import { StrictMode } from "react";
import { hydrate } from 'react-dom';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import createEmotionCache from "./src/createEmotionCache";
import theme from "./src/theme";

const emotionCache = createEmotionCache();

hydrate(
  <CacheProvider value={emotionCache}>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  </ThemeProvider>
  </CacheProvider>, 
  document,
);