import { useState } from 'react';

export default function useErrors() {
  const [errors, setErros] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErros((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErros((prevState) => prevState.filter(
      (error) => error.field === fieldName,
    ));
  }

  function removeAllErrors() {
    return errors.splice(0, errors.length);
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    errors, setError, removeError, removeAllErrors, getErrorMessageByFieldName,
  };
}
