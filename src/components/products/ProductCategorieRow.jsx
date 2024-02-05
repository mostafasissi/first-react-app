/**
 * line of table that contain the category name
 * 
 * @param {string} name 
 * @param {string} key 
 * @returns 
 */
export function ProductCategorieRow({name}){
    return (
        <tr >
            <td colSpan={2} ><strong>{name}</strong></td>
        </tr>
    )
}