import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Nomatch() {
  return (
    <div className="no-Match-Page">
      <Image className="no-match-image" src="https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-12.jpg" />
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
