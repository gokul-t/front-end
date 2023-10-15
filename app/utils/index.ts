export function getFormDataAsJSON<Type> (form: HTMLFormElement) {
    const formData = new FormData(form);
    const formJson:Type = Object.fromEntries(formData.entries()) as Type;
    return formJson;
}