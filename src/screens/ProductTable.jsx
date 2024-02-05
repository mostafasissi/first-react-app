import { ProductCategorieRow } from "../assets/components/products/ProductCategorieRow";
import { ProductRow } from "../assets/components/products/ProductRow";

export function ProductTable({products}){
    let lastCategory = null;
    let rows = [];
    products.forEach(product => {
        if(product.category != lastCategory ){
          rows.push(<ProductCategorieRow name = {product.category}  key={product.category} />)
        }
        lastCategory = product.category;
        rows.push(<ProductRow product = {product} key={product.name} />)
    })
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
    )
  }