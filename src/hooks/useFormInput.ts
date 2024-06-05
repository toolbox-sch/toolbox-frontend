import { useState } from 'react';

const useFormInput = <T extends object>(initialState: T) => {
  const [input, setInput] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  return [input, handleInputChange] as const;
};

export default useFormInput;
