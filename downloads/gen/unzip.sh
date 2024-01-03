cd "../p5mirror-jht1493/downloads/../p5projects"
pwd
#
echo unzip 1 "timed-drawing copy-eV5XXhkWG"
rm -rf "timed-drawing copy-eV5XXhkWG"
mkdir "timed-drawing copy-eV5XXhkWG"
cd "timed-drawing copy-eV5XXhkWG"
unzip -q "../../downloads/zips/timed-drawing copy-eV5XXhkWG"
cd ..
cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
echo