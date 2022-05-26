import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../customerUtils";

export default function UserIsAdminGuard() {
  const user = getCurrentUser();

  if (!user || !user.isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
}
