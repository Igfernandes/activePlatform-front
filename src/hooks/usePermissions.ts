import { PermissionsData } from "@type/Users/UsersGroup";
import { useState } from "react";

export function usePermissions() {
  const [permissions, setPermissions] = useState<Array<PermissionsData>>([]);
  const hasPermission = (
    userPermissions: Array<PermissionsData>,
    acceptPermissions: Array<string>
  ) => {
    return userPermissions.some(
      (permission) =>
        !acceptPermissions || acceptPermissions.includes(permission.name)
    );
  };

  return {
    hasPermission,
    setPermissions,
    permissions,
  };
}
