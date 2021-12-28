import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    // console.log("Single rendering (componentDidMount)");

    // Cleanup function (componentWillUnmount)
    return () => {
      // console.log("Unmount (cleanup function)");
    };
  }, []);

  return <h3>Hello!</h3>;
};
