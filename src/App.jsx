import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls'

function App() {

const [isplay, setIsPlay] = useState(false);

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // camera.lookAt(new THREE.Vector3(10,20,0));
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

  //-------------------------------responsive
    window.addEventListener('resize', function(){
        var height = window.innerHeight;
        var width = window.innerWidth;
        renderer.setSize( width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    });

    // --------------------------------------create an AudioListener and add it to the camera

    // var audio = new Audio();
    // audio.src = 'Ant Saunders - Yellow Hearts.mp3';
    // audio.controls = true;
    // audio.loop = true;
    // audio.autoplay = true;
    // Establish all variables that your Analyser will use
    // var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
    //
    // window.addEventListener("load", initMp3Player, false);
    // function initMp3Player(){
    //   document.getElementById('audio_box').appendChild(audio);
    //   context = new AudioContext();
    //   // const AudioContext = window.AudioContext || window.webkitAudioContext;
    //   // const audioContext = new AudioContext(); // AudioContext object instance
    //   analyser = context.createAnalyser(); // AnalyserNode method
    //   canvas = document.getElementById('analyser_render');
    //   ctx = canvas.getContext('2d');
    //   // Re-route audio playback into the processing graph of the AudioContext
    //   source = context.createMediaElementSource(audio);
    //   console.log(source);
    //   source.connect(analyser);
    //   analyser.connect(context.destination);
    //   frameLooper();
    // }


    // function frameLooper(){
    //   window.webkitRequestAnimationFrame(frameLooper);
    //   fbc_array = new Uint8Array(analyser.frequencyBinCount);
    //   analyser.getByteFrequencyData(fbc_array);
    //   ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    //   ctx.fillStyle = '#00CCFF'; // Color of the bars
    //   bars = 100;
    //   for (var i = 0; i < bars; i++) {
    //     // console.log(fbc_array[i]);
    //     bar_x = i * 3;
    //     bar_width = 2;
    //     bar_height = -(fbc_array[i] / 2);
    //     //  fillRect( x, y, width, height ) // Explanation of the parameters below
    //     ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    //   }
    // }













     // const AudioContext = window.AudioContext || window.webkitAudioContext;
     // const audioContext = new AudioContext();
     // var analyser = audioContext.createAnalyser();
     // var audio  = document.getElementById("myAudio");
     // const source = audioContext.createMediaElementSource(audio);
     // source.connect(audioContext.destination);
     // source.connect(analyser);
     // console.log(source);
     // audio.play();
     // var fbc_array = new Uint8Array(analyser.frequencyBinCount);
 	   // analyser.getByteFrequencyData(fbc_array);
     // for(var i=0;i<100;i++){
     //   console.log(fbc_array[i]);
     // }
     // console.log(audioContext);
     // console.log(analyser);
     // analyser.fftSize = 2048;
     // var bufferLength = analyser.frequencyBinCount;
     // var dataArray = new Uint8Array(bufferLength);
     // var data = analyser.getByteTimeDomainData(dataArray);
     // console.log(data);

    // const listener = new THREE.AudioListener();
    // camera.add( listener );
    // console.log(listener);
    // // create a global audio source
    // const sound = new THREE.Audio( listener );
    // console.log(sound);
    // // load a sound and set it as the Audio object's buffer
    // const audioLoader = new THREE.AudioLoader();
    // audioLoader.load( './Ant Saunders - Yellow Hearts.mp3', function( buffer ) {
    //   sound.setBuffer( buffer );
    //   sound.setLoop( true );
    //   sound.setVolume( 0.5 );
    //   sound.play();
    // });
    //
    // create an AudioAnalyser, passing in the sound and desired fftSize
   //  const analyser = new THREE.AudioAnalyser( sound, 2048 );
   //  console.log(analyser);
   //  console.log(analyser.data);
   //  console.log(analyser.analyser.fftSize);
   //  var frequencyData = new Uint8Array(analyser.analyser.frequencyBinCount);
   //  console.log(frequencyData);
   //  var bufferLength = analyser.analyser.frequencyBinCount;
   // console.log(bufferLength);




    //-------------------------------contrtols
    const controls = new OrbitControls( camera, renderer.domElement );


    camera.position.z = 5;
    clock = new THREE.Clock();
    console.log(10);

    });

    // var red = 1;
    // var changeColor = function ()
    //  {
    //
    //
    //  }
    var check = true;
     var changeShape = function (x)
      {
        //--------------------------------shape
        if(check==true){
          console.log('dhfbgjdf');

          console.log(fbc_array.reduce((a, b) => a + b, 0));
        }
        var reduced = fbc_array.reduce((a, b) => a + b, 0);
        reduced = reduced/35000;
        console.log(reduced);

        check=false;
        var geometry = new THREE.SphereGeometry(2,15, 15, 1, 6.3, 0, reduced);
        var material = new THREE.MeshBasicMaterial({
        color: 0x0095DD,
        wireframe: true,
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.rotation.set(1.6,0,0);

    // cube.material.color.set(colors[Math.floor(Math.random() * (4 - 0 + 1) ) + 0]);
    scene.add(cube);
    setTimeout(function () {
      scene.remove( cube );
      cube.geometry.dispose();
    }, 100);

      }
     // var updateColor = function() {
     //   var time = clock.getElapsedTime();
     //   if ( time > 2 ) {
     //     changeColor();
     //     clock.start();
     //   }
     // };
     var updateShape = function() {
       var time = clock.getElapsedTime();
       if ( time > 0.1 ) {
         changeShape(Math.floor(Math.random() * (32 - 3 + 1) + 3));
         clock.start();
       }
     };
    const animate = function () {
      requestAnimationFrame( animate );

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // console.log(frequencyData);
      // updateColor();
      updateShape();
      renderer.render( scene, camera );
    };






    var audio = new Audio();
    audio.src = 'Ant Saunders - Yellow Hearts.mp3';
    var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
    let x = 10;
    let colors = ['red', 'blue', 'green', 'orange', 'white'];
    let scene,camera,renderer,clock;
    // window.addEventListener("load", initMp3Player, false);
    function initMp3Player(){
      document.getElementById('audio_box').appendChild(audio);
      context = new AudioContext();
      // const AudioContext = window.AudioContext || window.webkitAudioContext;
      // const audioContext = new AudioContext(); // AudioContext object instance
      analyser = context.createAnalyser(); // AnalyserNode method
      canvas = document.getElementById('analyser_render');
      ctx = canvas.getContext('2d');
      // Re-route audio playback into the processing graph of the AudioContext
      source = context.createMediaElementSource(audio);
      console.log(source);
      source.connect(analyser);
      analyser.connect(context.destination);
      frameLooper();
    }
    function frameLooper(){
      window.webkitRequestAnimationFrame(frameLooper);
      fbc_array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(fbc_array);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.fillStyle = '#00CCFF'; // Color of the bars
      bars = 100;
      for (var i = 0; i < bars; i++) {
        // console.log(fbc_array[i]);
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        //  fillRect( x, y, width, height ) // Explanation of the parameters below
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
      }
    }
    function load(){
      audio.controls = true;
      audio.loop = true;
      setTimeout(function () {
        audio.play();
        initMp3Player();
      }, 3000);
      setTimeout(function () {
        animate();
        console.log('fdsngidf');
      }, 4000);
      // audio.autoplay = true;
    }
    function pause(){

      audio.pause();
      // audio.autoplay = true;
    }
  return (
    <div className="App">
    <button onClick={() => load()}>Load</button>
    <button onClick={() => pause()}>Pause</button>

    </div>
  )
}

export default App
