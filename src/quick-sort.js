'use strict';

function quickSort(input) {

if(input.constructor !== Array ){

	throw "input not an array";

}
else if( input.length === 0){
	var emptyArr=new Array();
	return emptyArr;


}
else if(input.length === 1)
{
	return input;
}

else {
var sortedArr=quickSort(input,0,input.length-1);

function quickSort(items, left, right) {

    var index;

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;

   
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}



return sortedArr;


}



};
module.exports = quickSort;