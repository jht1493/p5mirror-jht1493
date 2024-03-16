// https://editor.p5js.org/jht1493/sketches/oP_wBebdW
// Truchet func 11

function setup() {
  createCanvas(800, 600);
  background(190);
  noStroke();

  let d = 50;
  let x0 = 0;
  let y0 = 0;
  let backc = 255;
  let forec = 0;
  let colr = [
    [backc, forec],
    [forec, backc],
  ];
  let edge;
  for (let y = 0; y < height; y += d) {
    if (!edge) {
      edge = random(state);
    }
    let a0 = edge[2];
    let a1 = edge[3];
    let nstate = [state[a0], state[a1]];
    for (let x = 0, icol = 0; x < width; x += d, icol += 1) {
      let st = random(nstate);
      let im = st[0];
      let ic = st[1];
      truc(x, y, d, im, colr[ic]);
      if (icol == 0) {
        edge = st;
      }
      let a0 = st[2];
      let a1 = st[3];
      nstate = [state[a0], state[a1]];
    }
  }
}

let state = [
  [0, 0, 1, 2],
  [0, 1, 0, 3],
  [1, 0, 0, 3],
  [1, 1, 1, 2],
];

function truc(x0, y0, d, m, cols) {
  fill(cols[0]);
  rect(x0, y0, d, d);
  fill(cols[1]);
  let d1 = m ? d : 0;
  let d2 = m ? 0 : d;
  arc(x0 + d1, y0, d, d, HALF_PI * (m + 0), HALF_PI * (m + 1), PIE);
  arc(x0 + d2, y0 + d, d, d, HALF_PI * (m + 2), HALF_PI * (m + 3), PIE);
}

// arc(x, y, w, h, start, stop, [mode], [detail])

// https://editor.p5js.org/jht1493/sketches/SQrWvF9zQ
// Truchet func 10

// https://editor.p5js.org/jht1493/sketches/6wi3Qiz6o
// Truchet func 9

// https://editor.p5js.org/jht1493/sketches/eEkY6Puq2
// Truchet func 8

// https://editor.p5js.org/jht1493/sketches/3T3NmXA9n
// Truchet func 7

// https://editor.p5js.org/jht1493/sketches/XoCFY-7Yi
// Truchet func 6

// https://editor.p5js.org/jht1493/sketches/FwfyGjYos
// Truchet func 5

// https://editor.p5js.org/jht1493/sketches/zOy0N1rYt
// Truchet func 4

// https://editor.p5js.org/jht1493/sketches/f5vzsNvfR
// Truchet func 3

// https://editor.p5js.org/jht1493/sketches/u13JQBCSD
// Truchet func 2

// https://editor.p5js.org/jht1493/sketches/V2ifPvqiw
// Truchet func

// https://editor.p5js.org/jht1493/sketches/jK_d9a5uK
// Truchet Therapeutic
