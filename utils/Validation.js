import toast from "react-hot-toast";

export const Validation = ({ text, setError }) => {
  let isValid = true;
  let newError = {};

  if (!text.trim()) {
    isValid = false;
    newError.text = "Please input a text";
    toast.error("Please input a task", {
      duration: 1000,
    });
  }

  setError(newError);
  return isValid;
};
