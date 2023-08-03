export const appendFlattenObjectToFormData = (formData: FormData, obj: any) => {
  for (const [key, value] of Object.entries(obj)) {
    const entries =
      typeof value === "object" ? Object.entries(value!) : [[key, value]];
    for (const [key, value] of entries) {
      formData.append(key as string, value);
    }
  }
};
