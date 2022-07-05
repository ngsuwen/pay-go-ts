import { ProductData } from "../../../App";

export function sortFunction(array:ProductData[], key:any) {
    function sortByKey(a: ProductData, b: ProductData) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    array.sort(sortByKey);
}