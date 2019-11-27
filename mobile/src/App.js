import React from "react";
import { useSelector } from "react-redux";

import createRouter from "./routes";

export default function App() {
  const { signed = true } = useSelector(state => state.auth);
  const { mentor = false } = useSelector(state => state.user.profile);

  const Routes = createRouter(signed, mentor);

  return <Routes />;
}
