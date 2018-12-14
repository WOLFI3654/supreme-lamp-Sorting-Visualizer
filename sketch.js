let numbers = [];
let sortBtn, shuffleBtn;
let sel,slider;
let algorithms = {"Bubble Sort":(a)=>bubbleSort(a),
                  "Insertion Sort":(a)=>insertionSort(a),
                  "Heap Sort":(a)=>heapSort(a),
                  "Merge Sort":(a)=>mergeSort(a),
                  "Quick Sort":(a)=>quickSort(a,0,numbers.length-1),
                  "LSD Sort Base 2":(a)=>sortLSD(a,2),
                  "LSD Sort Base 4":(a)=>sortLSD(a,4),
                  "LSD Sort Base 10":(a)=>sortLSD(a,10)};
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 500; i++) numbers.push(i);
  step = TWO_PI / numbers.length;
  colorMode(HSB, numbers.length);
  sortBtn = createButton('sort');
  sortBtn.mousePressed(function() {
    algorithms[sel.value()](numbers);
  });
  shuffleBtn = createButton('shuffle');
  shuffleBtn.mousePressed(function() {
    shuffle(numbers, true);
  });
  sel = createSelect();
  for(let key in algorithms){
    sel.option(key);
  }
  slider = createSlider(0,10,1,0.01);

}

let step;

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noStroke();
  for (let i = 0; i < TWO_PI; i += step) {
    let index = floor(i/step);
    fill(numbers[index], numbers.length, numbers.length);
    beginShape(TRIANGLES);
    vertex(0, 0);
    let len = 100+(index-numbers[index]);
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
