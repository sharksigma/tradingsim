import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [pagenumber, setPagenumber] = useState(1);
  const path = useLocation();

  useEffect(() => {
    if (path.pathname === "/home") setPagenumber(1);
    else if (path.pathname === "/entry") setPagenumber(2);
    else if (path.pathname === "/exit") setPagenumber(3);
    else if (path.pathname === "/result") setPagenumber(4);
  }, [path]);

  const footerContainerStyles = {
    textAlign: "center",
    margin: "32px",
    display: `${path.pathname === "/" ? "none" : ""}`,
  };

  return (
    <div style={footerContainerStyles}>
      <h2 style={{ width: "100%" }}>(Page {pagenumber} of 4)</h2>
    </div>
  );
};

export default Footer;
