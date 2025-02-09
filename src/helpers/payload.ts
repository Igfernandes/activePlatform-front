export function getPayloadJSON<PayloadShape>(data: PayloadShape): string {
  return JSON.stringify(data);
}

export function getPayloadFormData<PayloadShape extends object>(
  data: PayloadShape
): FormData {
  const payload = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value == "") return;

    payload.append(key, value.toString());
  });

  return payload;
}
