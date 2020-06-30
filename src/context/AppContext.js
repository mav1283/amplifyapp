import React, { createContext, useMemo } from 'react';
import useAWSapi from './hooks/useAWSapi';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const {
    state,
    fetchRequest,
    handleFormData,
    createRequest,
    deleteRequest,
    fileUpload,
  } = useAWSapi();

  const contextValue = useMemo(
    () => ({
      state,
      fetchRequest,
      handleFormData,
      createRequest,
      deleteRequest,
      fileUpload,
    }),
    [
      state,
      fetchRequest,
      handleFormData,
      createRequest,
      deleteRequest,
      fileUpload,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
