import { useGetProducts } from "./hooks";
import './Products.css'
const Products = () => {
  const { products, isLoading, error,page,setPage,isPreviousData,isFetching ,isError} = useGetProducts();
  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Something went wrong...</h1>
  if(isFetching) return <h1>Fetching...</h1>
  return (
    <div className="container">
      {products?.data?.map((item) => (
          <div className="card-container" key={item.id}>
            <div className="card-image">
              <img src={item.image} alt="images" />
            </div>
            <div className="card-content">
              <h2>{item.title}</h2>
            </div>
          </div>
        )) || <h1>No products found</h1>}
        
        <span>Current Page: {page}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          setPage(old => old + 1)
          
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData}
      >
        Next Page
      </button>
    </div>
  );
};

export default Products;
