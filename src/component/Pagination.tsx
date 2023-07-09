/* eslint-disable jsx-a11y/anchor-is-valid */
type PaginateProps = {
  postperpage: number;
  totalPost: number;
  paginatepage: (page: number) => void;
  page: number;
};

export default function CustomPagination(props: PaginateProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPost / props.postperpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === props.page ? "active" : ""}`}
            >
              <a
                onClick={() => {
                  props.paginatepage(number);
                  window.scrollTo(0, 0);
                }}
                className="page-link"
                style={{ cursor: "pointer" }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
