let amt = 100;
let currentSort = 'Interactive Mode';
let numbers = [];
let sortBtn, shuffleBtn,panicBtn,tourBtn;
let sel,slider,vtype,abs,amtSlider,amtDisplay;
let algorithms = {"Bubble Sort":(a)=>bubbleSort(a),
"Insertion Sort":(a)=>insertionSort(a),
"Heap Sort":(a)=>heapSort(a),
"Merge Sort":(a)=>mergeSort(a),
"Comb Sort":(a)=>combSort(a),
"Shell Sort":(a)=>shellSort(a),
"Gnome Sort":(a)=>gnomeSort(a),
"Count Sort":(a)=>countSort(a,0,a.length),
"Stooge Sort":(a)=>stoogeSort(a),
"Pancake Sort":(a)=>pancakeSort(a),
"Sleep Sort":(a)=>sleepSort(a),
"Cocktail Sort":(a)=>cocktailSort(a),
"Quick Sort":(a)=>quickSort(a,0,numbers.length-1),
"LSD Sort Base 2":(a)=>sortLSD(a,2),
"LSD Sort Base 4":(a)=>sortLSD(a,4),
"LSD Sort Base 10":(a)=>sortLSD(a,10)};
function setup() {
  createCanvas(400, 400);
  panic();
  panicBtn = createButton('panic');
  panicBtn.mousePressed(panic);
  sortBtn = createButton('sort');
  sortBtn.mousePressed(function() {
    algorithms[sel.value()](numbers);
  });
  shuffleBtn = createButton('shuffle');
  shuffleBtn.mousePressed(function() {
    shuffleSort(numbers);
  });
  sel = createSelect();
  for(let key in algorithms){
    sel.option(key);
  }
  slider = createSlider(0,10,1,0.01);
  amtSlider = createSlider(5,1000,100,5);
  amtSlider.mouseMoved(function(){
    if(amt != amtSlider.value()){
      amt = amtSlider.value();
      amtDisplay.html(amt);
      panic();
    }
  });
  vtype = createCheckbox('Spreading');
  abs = createCheckbox('Absolute');
  amtDisplay = createP('100');
  tourBtn = createButton('Take the Tour');
  tourBtn.mousePressed(async function(){
    for(let algo in algorithms){
      currentSort = 'Shuffling...';
      await shuffleSort(numbers);
      currentSort = algo;
      await sleep();
      await algorithms[algo](numbers);
    }
    currentSort = 'Interactive Mode';
  });
}
function panic(){
  numbers = [];
  for (let i = 0; i < amt; i++) numbers.push(i);
  step = TWO_PI / numbers.length;
  colorMode(HSB, numbers.length);
}
let step;

function draw() {
  background(0);
  textSize(16);
  text(currentSort,5,16);
  translate(width / 2, height / 2);
  noStroke();
  for (let i = 0; i < TWO_PI; i += step) {
    let index = floor(i/step);
    fill(numbers[index], numbers.length, numbers.length);
    beginShape(TRIANGLES);
    vertex(0, 0);
    let len = 100;
    if(vtype.checked()){
      let add =(index-numbers[index]);
      if(abs.checked()) add = Math.abs(add);
      len+=add;
    }
    vertex(cos(i) * len, sin(i) * len);
    vertex(cos(i + step) * len, sin(i + step) * len);
    //point(cos(i)*100,sin(i)*100);
    endShape();
  }
}

function sleep() {
  let ms = slider.value();
  if(ms <= 0) return null;
  return new Promise(resolve => setTimeout(resolve, ms));
}
