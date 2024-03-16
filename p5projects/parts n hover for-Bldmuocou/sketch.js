function setup() {
  createCanvas(400, 400);
}

const n = 7;

function draw() {
  background(220);
  fill(255, 0, 0);
  noStroke();

  const part_1 = width / n;

  for (let left = 0; left < width; left += part_1) {
    let right = left + part_1;
    if (mouseX > left && mouseX < right) {
      rect(left, 0, part_1, height);
    }
  }
  
  // let left = 0;
  // let right = left + part_1;
  // while (left < width) {
  //   if (mouseX > left && mouseX < right) {
  //     rect(left, 0, part_1, height);
  //   }
  //   left += part_1;
  //   right += part_1;
  // }

  //   if (mouseX > left && mouseX < right) {
  //     rect(left, 0, part_1, height);
  //   }

  //   left += part_1;
  //   right += part_1;
  //   if (mouseX > left && mouseX < right) {
  //     rect(left, 0, part_1, height);
  //   }

  //   left += part_1;
  //   right += part_1;
  //   if (mouseX > left && mouseX < right) {
  //     rect(left, 0, part_1, height);
  //   }

  // else if (mouseX > part_1 && mouseX < part_2) {
  //   rect(part_1, 0, part_1, height);
  // }
  // else if (mouseX > part_2 && mouseX < part_3) {
  //   rect(part_2, 0, part_1, height);
  // }
  // else if (mouseX > part_3 && mouseX < width) {
  //   rect(part_3, 0, part_1, height);
  // }
}