let a_video;
let a_img;
let a_scale = 2;
let a_width = 320 / a_scale;
let a_height = 240 / a_scale;
let a_factor = 0.5;
let a_fpixels;
let n_pixels;
let a_video_started;
let a_video_inited;

function setup() {
  print('setup started')
  createCanvas(a_width, a_height);

  n_pixels = a_width * a_height;
  print('n_pixels', n_pixels)

  a_video = createCapture(VIDEO, video_startup);
  // a_video = createCapture(VIDEO);
  a_video.size(a_width, a_height);
  a_video.hide();

  // same as new p5.Image(100, 100);
  a_img = createImage(a_width, a_height);

  pixelDensity(1);
  print('setup end')
}

function video_startup() {
  print('video_startup');
  a_video_started = true;
  // return;
}

function init_fpixels() {
  const stime = Date.now();
  a_fpixels = [];
  
  // n_pixels = 100;
  a_video.loadPixels();
  let vindex = 0;
  for (let ind = 0; ind < n_pixels; ind++) {
    a_fpixels.push( a_video.pixels[vindex++] );
    a_fpixels.push( a_video.pixels[vindex++] );
    a_fpixels.push( a_video.pixels[vindex++] );
    a_fpixels.push(0);
    vindex++;
  }
  print('init_fpixels vindex', vindex)
  // a_video.updatePixels();
  
  let x = 0;
  let y = 0;
  // const pix = a_video.get(x, y);
  // print('pix', pix);
  
  // for (y = 0; y < a_width; y++) {
  //   for (x = 0; x < a_height; x++) {
  //     const pix = a_video.get(x, y);
  //     a_fpixels.push(pix[0]);
  //     a_fpixels.push(pix[1]);
  //     a_fpixels.push(pix[2]);
  //     a_fpixels.push(pix[3]);
  //   }
  // }
  const lapse = Date.now() - stime;
  print('lapse', lapse);
}

function draw() {
  // background(0);
  if (a_video_started && ! a_video_inited) {
    print('draw a_video_started', a_video_started)
    a_video_inited = true;
    init_fpixels();
    print('draw init_fpixels done')
  }
  a_img.loadPixels();
  let x, y;

  // draw a red line
  y = height / 4;
  for (x = 0; x < a_img.width; x++) {
    writeColor(a_img, x, y, 255, 0, 0, 255);
  }

  // draw a blue line
  y = a_img.height - y;
  for (x = 0; x < a_img.width; x++) {
    writeColor(a_img, x, y, 0, 0, 255, 255);
  }

  // draw a green line
  x = width / 2;
  for (y = 0; y < height; y++) {
    writeColor(a_img, x, y, 0, 255, 0, 255);
  }

  a_img.updatePixels();

  // print('frameCount', frameCount, 'a_video.loadedmetadata', a_video.loadedmetadata)
  // if (a_video.loadedmetadata) {
  //   let c = a_video.get(0, 0, 40, 40);
  //   image(c, 0, 0);
  // }

  image(a_video, 0, 0);
  image(a_img, 0, 0);
}

// Write a color to array of image pixels
function writeColor(image, x, y, red, green, blue, alpha) {
  let index = (x + y * width) * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
  image.pixels[index + 3] = alpha;
}

// https://p5js.org/reference/#/p5.Image