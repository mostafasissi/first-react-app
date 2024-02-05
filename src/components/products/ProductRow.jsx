/**
 * Line of products with 2 colomn (name/price) 
 * 
 * @param {{name : string , stocked : boolean , price : string}} product 
 * @param {string} key 
 * @returns 
 */
export function ProductRow({product}){
    
    const style = product.stocked ? undefined :{color : "red"}

    return(
        <tr>
            <td style = {style} >{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}