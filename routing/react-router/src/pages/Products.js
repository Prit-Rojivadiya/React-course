import { Link } from "react-router-dom";

const PRDUCTS = [
  {
    id: 1,
    title: "Product1",
  },
  {
    id: 2,
    title: "Product2",
  },
  {
    id: 3,
    title: "Product3",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRDUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsPage;
