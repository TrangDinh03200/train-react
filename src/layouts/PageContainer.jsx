import React from "react";

const PageContainer = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <div className="cover-spin"></div>}
      {children}
    </>
  );
};

export default PageContainer;
