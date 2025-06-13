export async function handlePermissions() {
  if ("Notification" in window) {
    return Notification.requestPermission();
  }
}
