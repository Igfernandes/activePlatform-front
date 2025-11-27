import { PermissionsData } from "@type/Users/UsersGroup";
import { useCallback, useState } from "react";

export function usePermissions() {
  const [permissions, setPermissions] = useState<PermissionsData[]>([]);

  const hasPermission = useCallback(
    (required: string[] = []) => {
      if (required.length === 0) return true; // sem requisitos

      return required.some((name) =>
        permissions.some((p) => p.name === name)
      );
    },
    [permissions]
  );

  return {
    permissions,
    setPermissions,
    hasPermission,
  };
}
