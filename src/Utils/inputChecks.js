export const inputChecks = (type, name) => {
  if (type === "text") {
    return { required: "*Please fill this field" }; // Return validation rules for a text input
  } else if (type === "email") {
    return {
      required: "*Please fill this field",
      pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/, // Return validation rules for an email input
    };
  } else if (type === "number") {
    switch (name) {
      case "mobile":
        return {
          required: "*Please fill this field",
          minLength: { value: 10, message: "*Invalid mobile number " },
          maxLength: { value: 10, message: "*Invalid mobile number" },
        }; // Return validation rules for a mobile number input
      case "postalCode":
        return {
          required: "*Please fill this field",
          minLength: { value: 6, message: "*Invalid postal code" },
          maxLength: { value: 6, message: "*Invalid postal code" },
        }; // Return validation rules for a postal code input
      default:
        return { required: "*Please fill this field" }; // Return default validation rules for a number input
    }
  }
};
