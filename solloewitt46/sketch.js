/**
* Kevin's notes: see inline
*/
  // nice use of arrays!  You might want to consider moving your for-loop into your setup function.
  // I generally recommend keeping as much code inside of setup and draw as possible, and when we get to
  // the lesson on functions, it'll be important to keep code like for-loops inside of your custom functions
  // Create two fixed arrays of random numbers
  // Supports up to 1000 lines
  var xRand = [], yRand = [];
  for (var i=0; i<1000; i++) {
    xRand.push(Math.random());
    yRand.push(Math.random());
  }

function setup() {
  createCanvas(1000,500);
  background(0,0,0);
  stroke(0,255,0);

}

function draw() {
  //consider moving these variable declarations to the top of the page to make them global
  //I find it's usually easier to edit variables like these when they are at the top of your page rather than inside of 
  //the draw loop
  var bubbleSize = 0, numLines = 55, spacing = width/numLines;
  
  // Generate coordinates of the bubbles by 
  var x = [], y = [];
  for (var i=0; i<numLines; i++) {
    //p5 has a function called round() which is essentially the same as Math.round, but this works too
    x[i] = Math.round(xRand[i]*(spacing/2));
    y[i] = Math.round(yRand[i]*height);
  }

  // Draw lines
  for (i=0;i<numLines;i++){
    bubbleSize = x[i];
    line(i*spacing,0, i*spacing,y[i]-bubbleSize);
    line(i*spacing,y[i]-bubbleSize, i*spacing+x[i],y[i]);
    line(i*spacing+x[i],y[i], i*spacing,y[i]+bubbleSize);
    line(i*spacing,y[i]+bubbleSize, i*spacing,height);
  }
}
