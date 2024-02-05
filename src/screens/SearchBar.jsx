import { Checkbox } from "../components/forms/Chekbox";
import { Input } from "../components/forms/Input";

export function SearchBar({searchText ,  onSearchTextChange, showStockedOnly , onStockedOnlyChange}){

  
    return (
      <div className="container my-3">
          <form className="form-control">
            <Input placeholder="Search" value={searchText} onChange={onSearchTextChange} />
            <Checkbox id="checked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="Show only products in the stock" />
          </form>
      </div>
    )
  }