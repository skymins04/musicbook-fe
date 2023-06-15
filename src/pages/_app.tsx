import "@/themes/base.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/providers";
import { createEmotionCache } from "@/utils";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ChakraProvider>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
