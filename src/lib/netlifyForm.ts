// src/lib/netlifyForm.ts
export type NetlifySubmitOptions = {
  form: HTMLFormElement;
  /**
   * Netlify recomienda POST a "/" para AJAX forms.
   * Puedes sobrescribirlo si lo necesitas.
   */
  endpoint?: string;
  /**
   * Si quieres que Netlify muestre un campo "fullName" en la UI,
   * lo construimos desde firstName/lastName.
   */
  fullName?: {
    firstField: string; // e.g. "firstName"
    lastField: string;  // e.g. "lastName"
    targetField?: string; // default "fullName"
  };
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");

export async function submitNetlifyForm({
  form,
  endpoint = "/",
  fullName,
}: NetlifySubmitOptions): Promise<Response> {
  const formData = new FormData(form);

  if (fullName) {
    const first = (formData.get(fullName.firstField) ?? "").toString().trim();
    const last = (formData.get(fullName.lastField) ?? "").toString().trim();
    const value = `${first} ${last}`.trim();
    if (value) formData.set(fullName.targetField ?? "fullName", value);
  }

  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    data[key] = String(value);
  });

  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode(data),
  });
}