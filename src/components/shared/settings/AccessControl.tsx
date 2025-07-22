import { When } from "@components/utilities/When";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { usePermissions } from "@hooks/usePermissions";

type Props = {
  children: React.ReactNode;
  targetPermissions: Array<string>;
};

export function AccessControl({ children, targetPermissions }: Props) {
  const { permissions } = useUserNavigationContext();
  const { hasPermission } = usePermissions();
  return (
    <When value={hasPermission(permissions, targetPermissions)}>
      {children}
    </When>
  );
}
