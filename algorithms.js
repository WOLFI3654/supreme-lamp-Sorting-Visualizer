async function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
			await sleep();
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  	await sleep();
  }
}
async function sortLSD(arr,len2) {}

async function mergeSort (arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = await mergeSort(arr.slice(0, mid));
    var subRight = await mergeSort(arr.slice(mid));
    return await merge(arr,subLeft, subRight);
}

async function merge (arr,node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    result = result.concat(node1.length? node1 : node2);
    arr.length = 0;
    arr.push(...result);
    await sleep();
    return result;
}

async function bubbleSort(array){
  var sorted = false
  while (!sorted){
    sorted = true;
    for(let i = 0; i < array.length; i++){
      let element = array[i];
      if (element > array[i+1]) {
        array[i] = array[i+1];
        array[i+1] = element;
        sorted = false;
        await sleep();
      }
    }
  }
}



async function quickSort(arr, left, right){
   var len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = await partition(arr, pivot, left, right);

   //sort left and right
   await quickSort(arr, left, partitionIndex - 1);
   await quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}



async function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      await swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  await swap(arr, right, partitionIndex);
  return partitionIndex;
}



async function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   await sleep();
}

let n;
async function heapSort(arr) {
    n=arr.length;
    await buildheap(arr);
    while (n > 1) {
        n--;
        await swap(arr,0, n);
        await downheap(arr,0);
    }
}

async function buildheap(arr) {
    for (let index = n / 2 - 1; index >= 0; index--)
        await downheap(arr,Math.floor(index));
}

async function downheap(list,v) {
    let w = 2 * v + 1;
    while (w < n) {
        if (w + 1 < n)
            if (list[w + 1] > list[w]) w++;

        if (list[v] >= list[w]) return;
        await swap(list,v, w);
        v = w;
        w = 2 * v + 1;
    }
}
