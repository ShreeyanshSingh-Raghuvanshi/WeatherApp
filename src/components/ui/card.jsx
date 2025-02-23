import React from "react";

const Card = ({ children, className }) => {
  return <div className={`bg-white p-4 rounded-lg shadow ${className}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export { Card, CardContent };
