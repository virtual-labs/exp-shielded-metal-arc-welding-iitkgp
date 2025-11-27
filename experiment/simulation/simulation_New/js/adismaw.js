/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
import * as THREE from 'three' ;

import { STLLoader } from './threejs/jsm/loaders/STLLoader.js';

import {OrbitControls} from './threejs/jsm/controls/OrbitControls.js';

import WebGL from 'three/addons/capabilities/WebGL.js';


function aditya(){
const mn=0.0001;
const mx=100;
var actme, oxyme, mldme, trnme, arnme;
const sizs={
    wd:window.innerWidth*0.5,
    ht:window.innerHeight*0.5
};
let l=(sizs.wd / sizs.ht /1000).toFixed(4);
let b=(sizs.wd / sizs.ht /1000).toFixed(4);
let h=(sizs.wd / sizs.ht /1000).toFixed(4);
window.addEventListener("resize",()=>{
    rndr.setSize(sizs.wd, sizs.ht, mn, mx);
    $("#smaw").animate({
        width:sizs.wd,
        height:sizs.ht
    },1);
    window.location.reload();
});
const stldr = new STLLoader();
const scn=new THREE.Scene();
const lgt=new THREE.PointLight(0xffffff, mn, mx);
lgt.position.set(20, 20, 20);
const cam=new THREE.PerspectiveCamera(45, sizs.wd / sizs.ht, mn, mx);
cam.position.set(-5,1,2);
scn.add(cam);            
scn.add(lgt);

const cnvs= document.querySelector("#smaw");
const rndr=new THREE.WebGLRenderer({canvas:cnvs});

rndr.setSize(sizs.wd, sizs.ht, mn, mx);
rndr.render(scn,cam);

const ctr = new OrbitControls(cam, cnvs);


stldr.load( './images/wldma.stl', function ( act ) {
    const actma = new THREE.MeshBasicMaterial( { opacity: act.alpha, vertexColors: true } );
    actme = new THREE.Mesh( act, actma );
	scn.add( actme );
    actme.position.set( sizs.wd / sizs.ht*2, sizs.wd / sizs.ht*0.5, 0 );
    actme.rotation.set( -Math.PI/2, 0, 0 );
    actme.scale.set(l*1.2, b*1.2, h*1.2 );
    actme.castShadow = true;
    actme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );
let ml='./images/wrkpclmp.stl';
stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2*0 );
    mldme.position.set( sizs.wd / sizs.ht*0.19 , -sizs.wd / sizs.ht*0, sizs.wd / sizs.ht*0.34 );
    mldme.scale.set(sizs.wd / sizs.ht*0.002 , sizs.wd / sizs.ht*0.002, sizs.wd / sizs.ht*0.002 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );


const tr='./images/Elcthldr.stl';
stldr.load(tr, function ( trn ) {
    const trnma = new THREE.MeshMatcapMaterial( { opacity: trn.alpha, vertexColors: true } );
    trnme = new THREE.Mesh( trn, trnma );
	scn.add( trnme );
    trnme.rotation.set( Math.PI, Math.PI/2, Math.PI/2 );
    trnme.position.set(-sizs.wd / sizs.ht*0.01, sizs.wd / sizs.ht*0.25, sizs.wd / sizs.ht*0.26);
    trnme.scale.set(l,b,h );
    trnme.castShadow = true;
    trnme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );

const ar='./images/arc.stl';
stldr.load(ar, function ( arn ) {
    const arma = new THREE.MeshMatcapMaterial( { opacity: arn.alpha, vertexColors: true } );
    arnme = new THREE.Mesh( arn, arma );
	scn.add( arnme );
    arnme.rotation.set( -5.24*Math.PI/8, Math.PI/2*0, Math.PI/2 );
    arnme.position.set(-sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.51);
    arnme.scale.set(l*0.85,b*0.85,h*1 );
    arnme.castShadow = true;
    arnme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );

const wr1 = new THREE.CylinderGeometry(0.8,0.8,10,16);
const wrm1 = new THREE.MeshMatcapMaterial( {color: '#ffffff'} );
const wrv1 = new THREE.Mesh( wr1, wrm1 );
wrv1.rotation.set( -Math.PI/8*1, Math.PI*0, Math.PI/2*0);
wrv1.position.set(sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.24, sizs.wd / sizs.ht*0.33);
wrv1.scale.set(l*8,b*8,h*8);
//scn.add(wrv1);

const wr = new THREE.CylinderGeometry(1,1,22,16);
const wrm = new THREE.MeshMatcapMaterial( {color: '#5a6977'} );
const wrv = new THREE.Mesh( wr, wrm );
wrv.rotation.set( -Math.PI/8*1, Math.PI*0, Math.PI/2*0);
wrv.position.set(sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.13, sizs.wd / sizs.ht*0.375);
wrv.scale.set(l*8,b*8,h*8);
//scn.add(wrv);

const grp= new THREE.Group();
grp.add(wrv1);
grp.add(wrv);
scn.add(grp);

let crvo = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*2, sizs.wd / sizs.ht*0.29, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.85, sizs.wd / sizs.ht*0.29, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.3 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.0, sizs.wd / sizs.ht*0.22, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.011, sizs.wd / sizs.ht*0.25, sizs.wd / sizs.ht*0.14 )
] );


let crva = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*2, sizs.wd / sizs.ht*0.29, sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.85, sizs.wd / sizs.ht*0.29, sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.85, -sizs.wd / sizs.ht*0.03, sizs.wd / sizs.ht*0.34 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.45, -sizs.wd / sizs.ht*0.038, sizs.wd / sizs.ht*0.34 )
] );

const gmtryo = new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.015, 16, false );
const mtuo = new THREE.MeshStandardMaterial( { color: 0x39a300, emissive: 0x39a300, metalness:1.0 ,side: 2 } );
const mshtuo = new THREE.Mesh( gmtryo, mtuo );
const gmtrya = new THREE.TubeGeometry( crva, 64, sizs.wd / sizs.ht*0.015, 16, false );
const mtua = new THREE.MeshStandardMaterial( { color: 0xe60505, emissive: 0xe60505, metalness:1.0 ,side: 2 } );
const mshtua = new THREE.Mesh( gmtrya, mtua );

scn.add(mshtua);
scn.add(mshtuo);


let wbv = new THREE.Shape();
wbv.moveTo( 0,0 );
wbv.lineTo( ((sizs.wd / sizs.ht)/8).toFixed(2), 0 );
wbv.lineTo( (sizs.wd / sizs.ht+0.12).toFixed(2), (sizs.wd / sizs.ht+0.12).toFixed(2) );
wbv.lineTo( -(sizs.wd / sizs.ht+0.12).toFixed(2), (sizs.wd / sizs.ht+0.12).toFixed(2) );
wbv.lineTo( -((sizs.wd / sizs.ht)/8).toFixed(2), 0 );
wbv.lineTo( 0, 0 );
wbv.closed=true;
var extset = {
	steps: 0,
	depth: 0,
	bevelEnabled: false,    
};
const gmtf = new THREE.ExtrudeGeometry( wbv, extset );
const matf = new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: false, side: THREE.DoubleSide } );
const fill = new THREE.Mesh( gmtf, matf );
fill.position.set(sizs.wd / sizs.ht*0.0015, -sizs.wd / sizs.ht*0.0155, sizs.wd / sizs.ht*0.43);
fill.rotation.set( Math.PI/1*0, -Math.PI/6*0, -Math.PI/2*0);
fill.scale.set((sizs.wd / sizs.ht*0.0174).toFixed(4),(sizs.wd / sizs.ht*0.0225).toFixed(4),(sizs.wd / sizs.ht*0.12).toFixed(4));
scn.add( fill );

const lstnr = new THREE.AudioListener();
cam.add(lstnr);
const aud = new THREE.Audio(lstnr);
const adldr = new THREE.AudioLoader();
adldr.load('./images/Wldsd.mp3', (buffer) => {
    aud.setBuffer(buffer);
});


let i=0,j=0, k=sizs.wd / sizs.ht*0.0011, m=sizs.wd / sizs.ht*0.0019, adi=0;


const loop = () => {
    rndr.render(scn,cam);
    scn.add( trnme );
    setTimeout(function() {window.requestAnimationFrame(loop);},500)
    if(i<= ((sizs.wd / sizs.ht)*0.525)){
        adit();
        trnme.position.set(-sizs.wd / sizs.ht*0.01, sizs.wd / sizs.ht*0.25-k*0.14, sizs.wd / sizs.ht*0.26-m*0.929); scn.add( trnme );
        wrv1.position.set(sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.24-k*0.14, sizs.wd / sizs.ht*0.33-m*0.929);
        wrv.position.set(sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.13-k*0.008, sizs.wd / sizs.ht*0.375-m*0.9929);
        wrv.scale.set(l*8,b*(8-k*4.8),h*8);
        arnme.position.set(-sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.50-m);
let crvo = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*2, sizs.wd / sizs.ht*0.29, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.85, sizs.wd / sizs.ht*0.29, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.3-m*0.9 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.0, sizs.wd / sizs.ht*0.22-k*0.14, -sizs.wd / sizs.ht*0.14-m),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.011, sizs.wd / sizs.ht*0.25-k*0.14, sizs.wd / sizs.ht*0.14-m)
] );
scn.add( trnme );
scn.remove(mshtuo);
mshtuo.geometry= new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.015, 16, false );
scn.add(mshtuo);
    k+=sizs.wd / sizs.ht*0.0011;
    m+=sizs.wd / sizs.ht*0.0009;

    i+=sizs.wd / sizs.ht*0.001455;
    extset = {
        steps: j,
        depth: -j/100,
        bevelEnabled: false
    };
   fill.geometry= new THREE.ExtrudeGeometry( wbv, extset );
    j=j+0.793;
    rndr.render(scn,cam);
    console.clear();
    }
    else{
        if(adi==0){
            scn.add( trnme );
            scn.remove(fill);
            scn.remove(arnme);
            scn.remove(mldme);
            adi=1;
            ml='./images/wrkpicclamp.stl';
    stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2*0 );
    mldme.position.set( sizs.wd / sizs.ht*0.19 , -sizs.wd / sizs.ht*0, sizs.wd / sizs.ht*0.34 );
    mldme.scale.set(sizs.wd / sizs.ht*0.002 , sizs.wd / sizs.ht*0.002, sizs.wd / sizs.ht*0.002 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );
        }
    }
}
const adit = () => {
            aud.playbackRate = 2.0;
                aud.play();
                setTimeout(() => {
                    aud.stop();
                }, 1000);
        };
loop();
}

$(document).ready(()=>{
    if ( WebGL.isWebGLAvailable() ) {
        $('#adisim').hide();
        $("#pstr").click(function(){
            $('#adisim').show();
            aditya();
          });

    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'war' ).appendChild( warning );
    
    }
});