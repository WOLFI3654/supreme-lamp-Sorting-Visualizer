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
async function stoogeSort (array, i, j) {
  if (j === undefined) {
    j = array.length - 1;
  }

  if (i === undefined) {
    i = 0;
  }

  if (array[j] < array[i]) {
    await swap(array,i,j);
  }

  if (j - i > 1) {
    var t = Math.floor((j - i + 1) / 3);
    stoogeSort(array, i, j-t);
    stoogeSort(array, i+t, j);
    stoogeSort(array, i, j-t);
  }
}
async function countSort(arr, min, max) {
  var i, z = 0, count = [];

  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i=0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
      await sleep();
    }
  }

}
async function gnomeSort(a) {
  async function moveBack(i) {
    for( ; i > 0 && a[i-1] > a[i]; i--)
    await swap(a,i,i-1);

  }
  for (var i = 1; i < a.length; i++) {
    if (a[i-1] > a[i]) await moveBack(i);
  }
}
async function sleepSort(arr) {
  const res = arr;
  arr = res.slice();
  res.length = 0;
  for (let n of arr)
  setTimeout(() => {
    res.push(n);
  }, n * 4);
};
async function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i)
    continue; // element already in place

    var new_slice;

    // flip this max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx+1).reverse();
      for (var j = 0; j <= max_idx; j++){
        arr[j] = new_slice[j];
        await sleep();
      }
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i+1).reverse();
    for (var j = 0; j <= i; j++){
      arr[j] = new_slice[j];
      await sleep();
    }
  }
  return this;
}

async function cocktailSort(arr){
  let isSorted = true;
  while (isSorted){
    for (let i = 0; i< arr.length - 1;i++){
      if (arr[i] > arr[i + 1])
      {
        await swap(arr,i,i+1);
        isSorted = true;
      }
    }

    if (!isSorted)
    break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--){
      if (arr[j-1] > arr[j])
      {
        await swap(arr,j,j-1);
        isSorted = true;
      }
    }
  }
}
async function shellSort (a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h){
        a[j] = a[j - h];
        await sleep();
      }
      a[j] = k;
      await sleep();
    }
  }
  return a;
}
async function sortLSD (arr,len2) {
  var idx1, idx2, idx3, len1, radix, radixKey;
  var radices = {}, buckets = {}, num, curr;
  var currLen, radixStr, currBucket;

  len1 = arr.length;

  // find the relevant radices to process for efficiency
  for (idx1 = 0;idx1 < len1;idx1++) {
    radices[arr[idx1].toString().length] = 0;
  }

  // loop for each radix. For each radix we put all the items
  // in buckets, and then pull them out of the buckets.
  for (radix in radices) {
    // put each array item in a bucket based on its radix value
    len1 = arr.length;
    for (idx1 = 0;idx1 < len1;idx1++) {
      curr = arr[idx1];
      // item length is used to find its current radix value
      currLen = curr.toString().length;
      // only put the item in a radix bucket if the item
      // key is as long as the radix
      if (currLen >= radix) {
        // radix starts from beginning of key, so need to
        // adjust to get redix values from start of stringified key
        radixKey = curr.toString()[currLen - radix];
        // create the bucket if it does not already exist
        if (!buckets.hasOwnProperty(radixKey)) {
          buckets[radixKey] = [];
        }
        // put the array value in the bucket
        buckets[radixKey].push(curr);
      } else {
        if (!buckets.hasOwnProperty('0')) {
          buckets['0'] = [];
        }
        buckets['0'].push(curr);
      }
    }
    // for current radix, items are in buckets, now put them
    // back in the array based on their buckets
    // this index moves us through the array as we insert items
    idx1 = 0;
    // go through all the buckets
    for (idx2 = 0;idx2 < len2;idx2++) {
      // only process buckets with items
      if (buckets[idx2] != null) {
        currBucket = buckets[idx2];
        // insert all bucket items into array
        len1 = currBucket.length;
        for (idx3 = 0;idx3 < len1;idx3++) {
          arr[idx1++] = currBucket[idx3];
          await sleep();
        }
      }
    }
    buckets = {};
  }
}
async function shuffleSort(arra1) {
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    await swap(arra1,ctr,index);
  }
}

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
