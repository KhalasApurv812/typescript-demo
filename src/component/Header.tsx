import { Box} from "@chakra-ui/react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type SearchProps = {
  filter: string;
  handleSearch: (e: any) => void;
};
export default function Header(props: SearchProps) {
  return (
    <>
      <Box className="NavBar">
        <Box display={"flex"}>
        <Box className="navbar-brand">
          Navbar
        </Box>
        <Box className="Nav-inner">
          <Box className="nav-data" as={Link} to="/">Home</Box>
          <Box className="nav-data" as={Link} to="/product">Product</Box>
          <Box className="nav-data" as={Link} to="/contact">Contact</Box>
        </Box>
        </Box>
        <Box className="nav-search">
        <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={props.filter}
                onChange={(e) => props.handleSearch(e)}
              />
              <Button variant="dark">Search</Button>
            </Form>
        </Box>
      </Box>
    </>
  );
}
