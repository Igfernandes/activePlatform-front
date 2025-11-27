import { When } from "@components/utilities/When";
import { useUserNavigationContext } from "@contexts/UserNavigation";

type Props = {
  children: React.ReactNode;
  targetPermissions: Array<string>;
};

export function AccessControl({ children, targetPermissions }: Props) {
  const { hasPermission } = useUserNavigationContext();
  return (
    <When value={hasPermission(targetPermissions)}>
      {children}
    </When>
  );
}
