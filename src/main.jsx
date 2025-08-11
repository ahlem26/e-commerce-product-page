import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { SECRETS } from "./config/secrets.js";
import { ClerkProvider } from "@clerk/clerk-react";

// Importer le provider du panier
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={SECRETS.CLERK_PUBLISHABLE_KEY}>
        <CartProvider>
          <App />
        </CartProvider>
      </ClerkProvider>
    </StrictMode>
  </BrowserRouter>
);
