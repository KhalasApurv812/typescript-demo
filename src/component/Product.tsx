import {
  Box,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import CustomPagination from "./Pagination";

type ProductData = {
  name: string;
  image: string;
  price: number;
  slug: string;
  category: string;
  id: number;
};

export default function Product() {
  const [data, setData] = useState<ProductData[]>([]);
  const [, setOrder] = useState<string>("");
  const [searchInput, setSearchInput] = useState([]);
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const PER_PAGE: number = 10;

  // pagination method start
  const indexofLastpost = page * PER_PAGE;
  const indexofFirstpost = indexofLastpost - PER_PAGE;
  const currentPosts = data.slice(indexofFirstpost, indexofLastpost);

  //change page of pagination
  const paginate = (updatepage: number) => {
    setPage(updatepage);
  };
  // end
  // end

  const sortAscending = () => {
    setOrder("asc");
    const sortascData = data.sort(function (a, b) {
      return a.price - b.price;
    });
    setData(sortascData);
  };

  const sortDescending = () => {
    setOrder("dsc");
    const sortdscData = data.sort(function (a, b) {
      return b.price - a.price;
    });
    setData(sortdscData);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (e.target.value === "") {
      setData(searchInput);
    } else {
      const filterdata = data.filter((elem) =>
        elem.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterdata);
    }
    setFilter(e.target.value);
  };

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSearchInput(res);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Header filter={filter} handleSearch={handleSearch} />

      <div className="product-Page">
        <Box className="order-Button">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorscheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc" onClick={() => sortAscending()}>
                Ascending
              </MenuItemOption>
              <MenuItemOption value="desc" onClick={() => sortDescending()}>
                Descending
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        </Box>

        <Container>
          <Row>
            {currentPosts.map((newdata) => {
              return (
                <Col
                  className="my-2"
                  key={newdata.id}
                  style={{ textAlign: "left" }}
                  xxl={3}
                  lg={3}
                  md={6}
                  sm={6}
                >
                  <Card>
                    <Card.Img variant="top" src={newdata.image} />
                    <Card.Body>
                      <Card.Title>Name :- {newdata.name}</Card.Title>
                      <Card.Text>
                        Price :- {newdata.price}
                        <br />
                        Category :- {newdata.category}
                        <br />
                        Slug :- {newdata.slug}
                      </Card.Text>
                      <Link to={`/product/slug=${newdata.slug}`}>
                        <Button variant="primary">View details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <div className="my-3">
            <CustomPagination
              postperpage={PER_PAGE}
              totalPost={data.length}
              paginatepage={paginate}
              page={page}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
