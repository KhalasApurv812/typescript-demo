import React, { useEffect, useRef, useState } from "react";
import { Button, Overlay, Tooltip } from "react-bootstrap";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setTopButtton(true);
      } else {
        setTopButtton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <>
          <Button
            ref={target}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{
              position: "fixed",
              bottom: "50px",
              height: "50px",
              right: "50px",
              fontSize: "50px",
              border: "1px solid black",
              background: "oldlace",
            }}
            onClick={() => {
              setShow(false);
              scrollUp();
            }}
          >
            <div className="seticon">
              <h1 style={{ color: "black" }}>^</h1>
            </div>
          </Button>
          <Overlay target={target.current} show={show} placement="top">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                scroll to top
              </Tooltip>
            )}
          </Overlay>
        </>
      )}
    </div>
  );
}
