// play 3 scales and graph amplitude using layers
// pre layers
// review 17.10_radialGraph and 17.1_playMode ui edit visual
// visualizing
// let x = r * cos(i);
// let y = r * sin(i);

let a_songs = [];
let a_volume = 0.5;
let song_list = ['media/song0.m4a', 'media/song1.m4a', 'media/song2.m4a'];
// let song_list = ['media/song0.m4a'];
let song_index = -1;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  load_next();
  create_ui();
}

function create_ui() {
  createButton('play0').mousePressed(function () {
    a_songs[0].play();
  });
  createButton('play1').mousePressed(function () {
    a_songs[1].play();
  });
  createButton('play2').mousePressed(function () {
    a_songs[2].play();
  });
  createDiv();
  createButton('stopAll').mousePressed(function () {
    stopAll();
  });
}

function draw() {
  background(0);
  // for (let song of a_songs) {
    // song.graph();
  // }
  a_songs[0].graph();
}

function stopAll() {
  for (let song of a_songs) {
    song.stop();
  }
}

function load_next() {
  song_index++;
  if (song_index >= song_list.length) {
    console.log('load_next done');
    return;
  }
  let song_file = song_list[song_index];
  // console.log('song_index', song_index);
  loadSound(song_file, sound_loaded);
}

function sound_loaded(arg_song) {
  let song = arg_song;
  console.log('sound_loaded arg_song', arg_song);
  // a_song.play();
  song.setVolume(a_volume);
  // console.log('sound_loaded song_file', song_file);
  // console.log('a_song.duration()', a_song.duration());
  // a_song.loop();
  console.log('song_index', song_index);
  let sp = new SongPlayer(song, song_index);
  a_songs[song_index] = sp;
  load_next();
}

class SongPlayer {
  constructor(song, index) {
    this.song = song;
    this.index = index;
    this.volhistory = [];
    this.amp = new p5.Amplitude();
    this.amp.setInput(this.song);
  }
  play() {
    this.song.play();
  }
  stop() {
    this.song.stop();
  }
  loop() {
    this.song.loop();
  }
  pause() {
    this.song.pause();
  }
  setLoop(state) {
    this.song.setLoop(state);
  }
  graph() {
    let amp = this.amp;
    let volhistory = this.volhistory;
    let vol = amp.getLevel();
    // console.log('index', this.index, 'vol', vol);
    volhistory.push(vol);
    background(0);
    stroke(255);
    noFill();
    push();
    translate(width / 2, height / 2);
    beginShape();
    let n = volhistory.length;
    for (let i = 0; i < n; i++) {
      // map(value, start1, stop1, start2, stop2
      let vol = volhistory[i];
      let r = map(vol, 0, 1, 10, width * 8);
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
      // console.log('index', this.index, 'vol', vol, 'x', x, 'y', y);
    }
    endShape();
    pop();
    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/QWKytZi9v
// scale-amp

// https://editor.p5js.org/jht1493/sketches/Q1gCKuVib
// 17.10_radialGraph

// https://editor.p5js.org/jht1493/sketches/BnkIJwE5R
// 17.1_playMode ui edit visual

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// const iterable = [10, 20, 30];
// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }
// 11
// 21
// 31
