import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // Called when the component is going to unmount:
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        if (isCurrent.current) {
          setState({ data: data, loading: false });
        }
      });
  }, [url, setState]);

  return state;
};
