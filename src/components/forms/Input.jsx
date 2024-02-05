/**
 * 
 * @param {string} value
 * @param {string} placeholder
 * @param {(s:string)=> void} onChange
 * @returns 
 */
export function Input({value , placeholder, onChange}) {
    return (
        <div>
            <input 
                type="text" 
                className="form-control" 
                placeholder={placeholder}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                 />
        </div>
    )
}