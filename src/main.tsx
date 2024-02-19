import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global-styles.ts";
import { AppRoutes } from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>
);
