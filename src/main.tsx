import { HashRouter } from 'react-router';
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import InvitationGate, { useInvitationGate } from "./app/components/InvitationGate.tsx";
import "./styles/index.css";

function Root() {
  const { granted, grant } = useInvitationGate();

  if (!granted) {
    return <InvitationGate onGranted={grant} />;
  }

  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
