(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="179",Ha={ROTATE:0,DOLLY:1,PAN:2},Oa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},N0=0,Cp=1,O0=2,b_=1,F0=2,As=3,mo=0,Qi=1,Ps=2,co=0,Va=1,Rp=2,Pp=3,Dp=4,B0=5,Vo=100,k0=101,z0=102,H0=103,V0=104,G0=200,W0=201,X0=202,Y0=203,ff=204,df=205,$0=206,q0=207,K0=208,Z0=209,j0=210,J0=211,Q0=212,ev=213,tv=214,pf=0,mf=1,_f=2,ja=3,gf=4,vf=5,xf=6,Sf=7,w_=0,nv=1,iv=2,uo=0,rv=1,sv=2,ov=3,av=4,lv=5,cv=6,uv=7,A_=300,Ja=301,Qa=302,yf=303,Mf=304,Zu=306,Ef=1e3,Wo=1001,Tf=1002,xr=1003,hv=1004,Pc=1005,ss=1006,fh=1007,Xo=1008,Ns=1009,C_=1010,R_=1011,jl=1012,Ad=1013,ta=1014,os=1015,hc=1016,Cd=1017,Rd=1018,Jl=1020,P_=35902,D_=1021,L_=1022,$r=1023,Ql=1026,ec=1027,Pd=1028,Dd=1029,I_=1030,Ld=1031,Id=1033,mu=33776,_u=33777,gu=33778,vu=33779,bf=35840,wf=35841,Af=35842,Cf=35843,Rf=36196,Pf=37492,Df=37496,Lf=37808,If=37809,Uf=37810,Nf=37811,Of=37812,Ff=37813,Bf=37814,kf=37815,zf=37816,Hf=37817,Vf=37818,Gf=37819,Wf=37820,Xf=37821,xu=36492,Yf=36494,$f=36495,U_=36283,qf=36284,Kf=36285,Zf=36286,fv=3200,dv=3201,pv=0,mv=1,io="",Cr="srgb",el="srgb-linear",Du="linear",on="srgb",_a=7680,Lp=519,_v=512,gv=513,vv=514,N_=515,xv=516,Sv=517,yv=518,Mv=519,Ip=35044,Up="300 es",as=2e3,Lu=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=Math.PI/180,jf=180/Math.PI;function fc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ei[r&255]+Ei[r>>8&255]+Ei[r>>16&255]+Ei[r>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[t&63|128]+Ei[t>>8&255]+"-"+Ei[t>>16&255]+Ei[t>>24&255]+Ei[n&255]+Ei[n>>8&255]+Ei[n>>16&255]+Ei[n>>24&255]).toLowerCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function Ev(r,e){return(r%e+e)%e}function dh(r,e,t){return(1-t)*r+t*e}function xl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tv={DEG2RAD:Su};class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const w=Math.sqrt(T),P=Math.atan2(w,p*M);m=Math.sin(m*P)/w,a=Math.sin(a*P)/w}const v=a*M;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Np.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new q,Np=new na;class At{constructor(e,t,n,i,s,o,a,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],T=i[4],v=i[7],w=i[2],P=i[5],C=i[8];return s[0]=o*_+a*M+l*w,s[3]=o*m+a*T+l*P,s[6]=o*p+a*v+l*C,s[1]=c*_+u*M+h*w,s[4]=c*m+u*T+h*P,s[7]=c*p+u*v+h*C,s[2]=f*_+d*M+g*w,s[5]=f*m+d*T+g*P,s[8]=f*p+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new At;function O_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bv(){const r=Iu("canvas");return r.style.display="block",r}const Op={};function Ga(r){r in Op||(Op[r]=!0,console.warn(r))}function wv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Fp=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const r={enabled:!0,workingColorSpace:el,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===on&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===on&&(i.r=Wa(i.r),i.g=Wa(i.g),i.b=Wa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===io?Du:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ga("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ga("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[el]:{primaries:e,whitePoint:n,transfer:Du,toXYZ:Fp,fromXYZ:Bp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cr},outputColorSpaceConfig:{drawingBufferColorSpace:Cr}},[Cr]:{primaries:e,whitePoint:n,transfer:on,toXYZ:Fp,fromXYZ:Bp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cr}}}),r}const qt=Av();function Is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ga;class Cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ga===void 0&&(ga=Iu("canvas")),ga.width=e.width,ga.height=e.height;const i=ga.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ga}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Iu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=fc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_h(i[o].image)):s.push(_h(i[o]))}else s=_h(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;const gh=new q;class Ri extends la{constructor(e=Ri.DEFAULT_IMAGE,t=Ri.DEFAULT_MAPPING,n=Wo,i=Wo,s=ss,o=Xo,a=$r,l=Ns,c=Ri.DEFAULT_ANISOTROPY,u=io){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=fc(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ef:e.x=e.x-Math.floor(e.x);break;case Wo:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ef:e.y=e.y-Math.floor(e.y);break;case Wo:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=A_;Ri.DEFAULT_ANISOTROPY=1;class Bn{constructor(e=0,t=0,n=0,i=1){Bn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(d+1)/2,w=(p+1)/2,P=(u+f)/4,C=(h+_)/4,N=(g+m)/4;return T>v&&T>w?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=P/n,s=C/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=P/i,s=N/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=N/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this.w=zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this.w=zt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends la{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ss,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bn(0,0,e,t),this.scissorTest=!1,this.viewport=new Bn(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ri(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ss,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ud(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Dv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class F_ extends Ri{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xr,this.minFilter=xr,this.wrapR=Wo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lv extends Ri{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xr,this.minFilter=xr,this.wrapR=Wo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hr):Hr.fromBufferAttribute(s,o),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dc.copy(n.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),Lc.subVectors(this.max,Sl),va.subVectors(e.a,Sl),xa.subVectors(e.b,Sl),Sa.subVectors(e.c,Sl),qs.subVectors(xa,va),Ks.subVectors(Sa,xa),Po.subVectors(va,Sa);let t=[0,-qs.z,qs.y,0,-Ks.z,Ks.y,0,-Po.z,Po.y,qs.z,0,-qs.x,Ks.z,0,-Ks.x,Po.z,0,-Po.x,-qs.y,qs.x,0,-Ks.y,Ks.x,0,-Po.y,Po.x,0];return!vh(t,va,xa,Sa,Lc)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,va,xa,Sa,Lc))?!1:(Ic.crossVectors(qs,Ks),t=[Ic.x,Ic.y,Ic.z],vh(t,va,xa,Sa,Lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ms=[new q,new q,new q,new q,new q,new q,new q,new q],Hr=new q,Dc=new ca,va=new q,xa=new q,Sa=new q,qs=new q,Ks=new q,Po=new q,Sl=new q,Lc=new q,Ic=new q,Do=new q;function vh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Do.fromArray(r,s);const a=i.x*Math.abs(Do.x)+i.y*Math.abs(Do.y)+i.z*Math.abs(Do.z),l=e.dot(Do),c=t.dot(Do),u=n.dot(Do);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Iv=new ca,yl=new q,xh=new q;class cl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Iv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const t=yl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(xh)),this.expandByPoint(yl.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Es=new q,Sh=new q,Uc=new q,Zs=new q,yh=new q,Nc=new q,Mh=new q;class ju{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sh.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(Sh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Uc),a=Zs.dot(this.direction),l=-Zs.dot(Uc),c=Zs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Sh).addScaledVector(Uc,f),d}intersectSphere(e,t){Es.subVectors(e.center,this.origin);const n=Es.dot(this.direction),i=Es.dot(Es)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,n,i,s){yh.subVectors(t,e),Nc.subVectors(n,e),Mh.crossVectors(yh,Nc);let o=this.direction.dot(Mh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zs.subVectors(this.origin,e);const l=a*this.direction.dot(Nc.crossVectors(Zs,Nc));if(l<0)return null;const c=a*this.direction.dot(yh.cross(Zs));if(c<0||l+c>o)return null;const u=-a*Zs.dot(Mh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ya.setFromMatrixColumn(e,0).length(),s=1/ya.setFromMatrixColumn(e,1).length(),o=1/ya.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uv,e,Nv)}lookAt(e,t,n){const i=this.elements;return ur.subVectors(e,t),ur.lengthSq()===0&&(ur.z=1),ur.normalize(),js.crossVectors(n,ur),js.lengthSq()===0&&(Math.abs(n.z)===1?ur.x+=1e-4:ur.z+=1e-4,ur.normalize(),js.crossVectors(n,ur)),js.normalize(),Oc.crossVectors(ur,js),i[0]=js.x,i[4]=Oc.x,i[8]=ur.x,i[1]=js.y,i[5]=Oc.y,i[9]=ur.y,i[2]=js.z,i[6]=Oc.z,i[10]=ur.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],T=n[7],v=n[11],w=n[15],P=i[0],C=i[4],N=i[8],y=i[12],S=i[1],L=i[5],B=i[9],X=i[13],Z=i[2],te=i[6],J=i[10],Q=i[14],W=i[3],ue=i[7],U=i[11],be=i[15];return s[0]=o*P+a*S+l*Z+c*W,s[4]=o*C+a*L+l*te+c*ue,s[8]=o*N+a*B+l*J+c*U,s[12]=o*y+a*X+l*Q+c*be,s[1]=u*P+h*S+f*Z+d*W,s[5]=u*C+h*L+f*te+d*ue,s[9]=u*N+h*B+f*J+d*U,s[13]=u*y+h*X+f*Q+d*be,s[2]=g*P+_*S+m*Z+p*W,s[6]=g*C+_*L+m*te+p*ue,s[10]=g*N+_*B+m*J+p*U,s[14]=g*y+_*X+m*Q+p*be,s[3]=M*P+T*S+v*Z+w*W,s[7]=M*C+T*L+v*te+w*ue,s[11]=M*N+T*B+v*J+w*U,s[15]=M*y+T*X+v*Q+w*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,T=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,P=t*M+n*T+i*v+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=M*C,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*C,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*C,e[4]=T*C,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*C,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*C,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*C,e[8]=v*C,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*C,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*C,e[12]=w*C,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*C,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,T=l*u,v=l*h,w=n.x,P=n.y,C=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+v)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(d-v)*P,i[5]=(1-(f+p))*P,i[6]=(m+M)*P,i[7]=0,i[8]=(g+T)*C,i[9]=(m-M)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ya.set(i[0],i[1],i[2]).length();const o=ya.set(i[4],i[5],i[6]).length(),a=ya.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vr.copy(this);const c=1/s,u=1/o,h=1/a;return Vr.elements[0]*=c,Vr.elements[1]*=c,Vr.elements[2]*=c,Vr.elements[4]*=u,Vr.elements[5]*=u,Vr.elements[6]*=u,Vr.elements[8]*=h,Vr.elements[9]*=h,Vr.elements[10]*=h,t.setFromRotationMatrix(Vr),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=as,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===as)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Lu)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=as,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===as)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Lu)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ya=new q,Vr=new En,Uv=new q(0,0,0),Nv=new q(1,1,1),js=new q,Oc=new q,ur=new q,kp=new En,zp=new na;class Os{constructor(e=0,t=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ov=0;const Hp=new q,Ma=new na,Ts=new En,Fc=new q,Ml=new q,Fv=new q,Bv=new na,Vp=new q(1,0,0),Gp=new q(0,1,0),Wp=new q(0,0,1),Xp={type:"added"},kv={type:"removed"},Ea={type:"childadded",child:null},Eh={type:"childremoved",child:null};class er extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=fc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=er.DEFAULT_UP.clone();const e=new q,t=new Os,n=new na,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new En},normalMatrix:{value:new At}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=er.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,t){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ts.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ts.lookAt(Ml,Fc,this.up):Ts.lookAt(Fc,Ml,this.up),this.quaternion.setFromRotationMatrix(Ts),i&&(Ts.extractRotation(i.matrixWorld),Ma.setFromRotationMatrix(Ts),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kv),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,Fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,Bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}er.DEFAULT_UP=new q(0,1,0);er.DEFAULT_MATRIX_AUTO_UPDATE=!0;er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gr=new q,bs=new q,Th=new q,ws=new q,Ta=new q,ba=new q,Yp=new q,bh=new q,wh=new q,Ah=new q,Ch=new Bn,Rh=new Bn,Ph=new Bn;class Yr{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gr.subVectors(e,t),i.cross(Gr);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gr.subVectors(i,t),bs.subVectors(n,t),Th.subVectors(e,t);const o=Gr.dot(Gr),a=Gr.dot(bs),l=Gr.dot(Th),c=bs.dot(bs),u=bs.dot(Th),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ch.setScalar(0),Rh.setScalar(0),Ph.setScalar(0),Ch.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,n),Ph.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ch,s.x),o.addScaledVector(Rh,s.y),o.addScaledVector(Ph,s.z),o}static isFrontFacing(e,t,n,i){return Gr.subVectors(n,t),bs.subVectors(e,t),Gr.cross(bs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gr.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Gr.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Yr.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ta.subVectors(i,n),ba.subVectors(s,n),bh.subVectors(e,n);const l=Ta.dot(bh),c=ba.dot(bh);if(l<=0&&c<=0)return t.copy(n);wh.subVectors(e,i);const u=Ta.dot(wh),h=ba.dot(wh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ta,o);Ah.subVectors(e,s);const d=Ta.dot(Ah),g=ba.dot(Ah);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ba,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Yp.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Yp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ta,o).addScaledVector(ba,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Dh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class en{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=Ev(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Dh(o,s,e+1/3),this.g=Dh(o,s,e),this.b=Dh(o,s,e-1/3)}return qt.colorSpaceToWorking(this,i),this}setStyle(e,t=Cr){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cr){const n=B_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cr){return qt.workingToColorSpace(Ti.copy(this),e),Math.round(zt(Ti.r*255,0,255))*65536+Math.round(zt(Ti.g*255,0,255))*256+Math.round(zt(Ti.b*255,0,255))}getHexString(e=Cr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Ti.copy(this),t);const n=Ti.r,i=Ti.g,s=Ti.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Ti.copy(this),t),e.r=Ti.r,e.g=Ti.g,e.b=Ti.b,e}getStyle(e=Cr){qt.workingToColorSpace(Ti.copy(this),e);const t=Ti.r,n=Ti.g,i=Ti.b;return e!==Cr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(Bc);const n=dh(Js.h,Bc.h,t),i=dh(Js.s,Bc.s,t),s=dh(Js.l,Bc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ti=new en;en.NAMES=B_;let zv=0;class dc extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=fc(),this.name="",this.type="Material",this.blending=Va,this.side=mo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new en(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(n.blending=this.blending),this.side!==mo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ff&&(n.blendSrc=this.blendSrc),this.blendDst!==df&&(n.blendDst=this.blendDst),this.blendEquation!==Vo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_a&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_a&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_a&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class k_ extends dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new en(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wn=new q,kc=new Pt;let Hv=0;class Kr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ip,this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zi(t,this.array),n=Zi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zi(t,this.array),n=Zi(n,this.array),i=Zi(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zi(t,this.array),n=Zi(n,this.array),i=Zi(i,this.array),s=Zi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class z_ extends Kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class H_ extends Kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zr extends Kr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vv=0;const wr=new En,Lh=new er,wa=new q,hr=new ca,El=new ca,ai=new q;class zs extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=fc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?H_:z_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new At().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hr.setFromBufferAttribute(s),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(ai.addVectors(hr.min,El.min),hr.expandByPoint(ai),ai.addVectors(hr.max,El.max),hr.expandByPoint(ai)):(hr.expandByPoint(El.min),hr.expandByPoint(El.max))}hr.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ai.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ai));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ai.fromBufferAttribute(a,c),l&&(wa.fromBufferAttribute(e,c),ai.add(wa)),i=Math.max(i,n.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kr(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new q,l[N]=new q;const c=new q,u=new q,h=new q,f=new Pt,d=new Pt,g=new Pt,_=new q,m=new q;function p(N,y,S){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,N),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[N].add(_),a[y].add(_),a[S].add(_),l[N].add(m),l[y].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,y=M.length;N<y;++N){const S=M[N],L=S.start,B=S.count;for(let X=L,Z=L+B;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const T=new q,v=new q,w=new q,P=new q;function C(N){w.fromBufferAttribute(i,N),P.copy(w);const y=a[N];T.copy(y),T.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(P,y);const L=v.dot(l[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,L)}for(let N=0,y=M.length;N<y;++N){const S=M[N],L=S.start,B=S.count;for(let X=L,Z=L+B;X<Z;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kr(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zs,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new En,Lo=new ju,zc=new cl,qp=new q,Hc=new q,Vc=new q,Gc=new q,Ih=new q,Wc=new q,Kp=new q,Xc=new q;class qr extends er{constructor(e=new zs,t=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Wc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ih.fromBufferAttribute(h,e),o?Wc.addScaledVector(Ih,u):Wc.addScaledVector(Ih.sub(t),u))}t.add(Wc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(s),Lo.copy(e.ray).recast(e.near),!(zc.containsPoint(Lo.origin)===!1&&(Lo.intersectSphere(zc,qp)===null||Lo.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&($p.copy(s).invert(),Lo.copy(e.ray).applyMatrix4($p),!(n.boundingBox!==null&&Lo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lo)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=T;v<w;v+=3){const P=a.getX(v),C=a.getX(v+1),N=a.getX(v+2);i=Yc(this,p,e,n,c,u,h,P,C,N),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);i=Yc(this,o,e,n,c,u,h,M,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=T;v<w;v+=3){const P=v,C=v+1,N=v+2;i=Yc(this,p,e,n,c,u,h,P,C,N),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,T=m+1,v=m+2;i=Yc(this,o,e,n,c,u,h,M,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Gv(r,e,t,n,i,s,o,a){let l;if(e.side===Qi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===mo,a),l===null)return null;Xc.copy(a),Xc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xc);return c<t.near||c>t.far?null:{distance:c,point:Xc.clone(),object:r}}function Yc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Hc),r.getVertexPosition(l,Vc),r.getVertexPosition(c,Gc);const u=Gv(r,e,t,n,Hc,Vc,Gc,Kp);if(u){const h=new q;Yr.getBarycoord(Kp,Hc,Vc,Gc,h),i&&(u.uv=Yr.getInterpolatedAttribute(i,a,l,c,h,new Pt)),s&&(u.uv1=Yr.getInterpolatedAttribute(s,a,l,c,h,new Pt)),o&&(u.normal=Yr.getInterpolatedAttribute(o,a,l,c,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Yr.getNormal(Hc,Vc,Gc,f.normal),u.face=f,u.barycoord=h}return u}class ul extends zs{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zr(c,3)),this.setAttribute("normal",new Zr(u,3)),this.setAttribute("uv",new Zr(h,2));function g(_,m,p,M,T,v,w,P,C,N,y){const S=v/C,L=w/N,B=v/2,X=w/2,Z=P/2,te=C+1,J=N+1;let Q=0,W=0;const ue=new q;for(let U=0;U<J;U++){const be=U*L-X;for(let $e=0;$e<te;$e++){const Ct=$e*S-B;ue[_]=Ct*M,ue[m]=be*T,ue[p]=Z,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=P>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push($e/C),h.push(1-U/N),Q+=1}}for(let U=0;U<N;U++)for(let be=0;be<C;be++){const $e=f+be+te*U,Ct=f+be+te*(U+1),et=f+(be+1)+te*(U+1),ne=f+(be+1)+te*U;l.push($e,Ct,ne),l.push(Ct,et,ne),W+=6}a.addGroup(d,W,y),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tl(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zi(r){const e={};for(let t=0;t<r.length;t++){const n=tl(r[t]);for(const i in n)e[i]=n[i]}return e}function Wv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function V_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}const Xv={clone:tl,merge:zi};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fs extends dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=$v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tl(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class G_ extends er{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=as,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qs=new q,Zp=new Pt,jp=new Pt;class Rr extends G_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,t){return this.getViewBounds(e,Zp,jp),t.subVectors(jp,Zp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Su*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Aa=-90,Ca=1;class qv extends er{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rr(Aa,Ca,e,t);i.layers=this.layers,this.add(i);const s=new Rr(Aa,Ca,e,t);s.layers=this.layers,this.add(s);const o=new Rr(Aa,Ca,e,t);o.layers=this.layers,this.add(o);const a=new Rr(Aa,Ca,e,t);a.layers=this.layers,this.add(a);const l=new Rr(Aa,Ca,e,t);l.layers=this.layers,this.add(l);const c=new Rr(Aa,Ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===as)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class W_ extends Ri{constructor(e=[],t=Ja,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kv extends ia{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new W_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ul(5,5,5),s=new Fs({name:"CubemapFromEquirect",uniforms:tl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qi,blending:co});s.uniforms.tEquirect.value=t;const o=new qr(i,s),a=t.minFilter;return t.minFilter===Xo&&(t.minFilter=ss),new qv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class $c extends er{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zv={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $c;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jv extends er{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jv extends Ri{constructor(e=null,t=1,n=1,i,s,o,a,l,c=xr,u=xr,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends Kr{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ra=new En,Jp=new En,qc=[],Qp=new ca,Qv=new En,Tl=new qr,bl=new cl;class ex extends qr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ca),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),Qp.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(Qp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),bl.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(bl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Tl.geometry=this.geometry,Tl.material=this.material,Tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(n),e.ray.intersectsSphere(bl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ra),Jp.multiplyMatrices(n,Ra),Tl.matrixWorld=Jp,Tl.raycast(e,qc);for(let o=0,a=qc.length;o<a;o++){const l=qc[o];l.instanceId=s,l.object=this,t.push(l)}qc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jv(new Float32Array(i*this.count),i,this.count,Pd,os));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nh=new q,tx=new q,nx=new At;class no{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Nh.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nx.getNormalMatrix(e),i=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Io=new cl,ix=new Pt(.5,.5),Kc=new q;class X_{constructor(e=new no,t=new no,n=new no,i=new no,s=new no,o=new no){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=as,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],T=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-o,d-u,p-g,w-M).normalize(),i[1].setComponents(c+o,d+u,p+g,w+M).normalize(),i[2].setComponents(c+a,d+h,p+_,w+T).normalize(),i[3].setComponents(c-a,d-h,p-_,w-T).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,p-m,w-v).normalize();else if(i[4].setComponents(c-l,d-f,p-m,w-v).normalize(),t===as)i[5].setComponents(c+l,d+f,p+m,w+v).normalize();else if(t===Lu)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Io)}intersectsSprite(e){Io.center.set(0,0,0);const t=ix.distanceTo(e.center);return Io.radius=.7071067811865476+t,Io.applyMatrix4(e.matrixWorld),this.intersectsSphere(Io)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kc.x=i.normal.x>0?e.max.x:e.min.x,Kc.y=i.normal.y>0?e.max.y:e.min.y,Kc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends dc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new en(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new q,Ou=new q,em=new En,wl=new ju,Zc=new cl,Oh=new q,tm=new q;class rx extends er{constructor(e=new zs,t=new Y_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Nu.fromBufferAttribute(t,i-1),Ou.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nu.distanceTo(Ou);e.setAttribute("lineDistance",new Zr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(i),Zc.radius+=s,e.ray.intersectsSphere(Zc)===!1)return;em.copy(i).invert(),wl.copy(e.ray).applyMatrix4(em);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),T=jc(this,e,wl,l,p,M,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=jc(this,e,wl,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=jc(this,e,wl,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=jc(this,e,wl,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Nu.fromBufferAttribute(a,i),Ou.fromBufferAttribute(a,s),t.distanceSqToSegment(Nu,Ou,Oh,tm)>n)return;Oh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oh);if(!(c<e.near||c>e.far))return{distance:c,point:tm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const nm=new q,im=new q;class sx extends rx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)nm.fromBufferAttribute(t,i),im.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nm.distanceTo(im);e.setAttribute("lineDistance",new Zr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $_ extends Ri{constructor(e,t,n=ta,i,s,o,a=xr,l=xr,c,u=Ql,h=1){if(u!==Ql&&u!==ec)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ju extends zs{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let T=0;T<c;T++){const v=T*h-s;g.push(v,-M,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const T=M+c*p,v=M+c*(p+1),w=M+1+c*(p+1),P=M+1+c*p;d.push(T,v,P),d.push(v,w,P)}this.setIndex(d),this.setAttribute("position",new Zr(g,3)),this.setAttribute("normal",new Zr(_,3)),this.setAttribute("uv",new Zr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class ox extends dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lx extends G_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cx extends Rr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Xr{constructor(e){this.value=e}clone(){return new Xr(this.value.clone===void 0?this.value:this.value.clone())}}const rm=new En;class hx{constructor(e,t,n=0,i=1/0){this.ray=new ju(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rm),this}intersectObject(e,t=!0,n=[]){return Jf(e,this,n,t),n.sort(sm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Jf(e[i],this,n,t);return n.sort(sm),n}}function sm(r,e){return r.distance-e.distance}function Jf(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Jf(s[o],e,t,!0)}}class om{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fx extends sx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new zs;i.setAttribute("position",new Zr(t,3)),i.setAttribute("color",new Zr(n,3));const s=new Y_({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new en,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dx extends la{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function am(r,e,t,n){const i=px(n);switch(t){case D_:return r*e;case Pd:return r*e/i.components*i.byteLength;case Dd:return r*e/i.components*i.byteLength;case I_:return r*e*2/i.components*i.byteLength;case Ld:return r*e*2/i.components*i.byteLength;case L_:return r*e*3/i.components*i.byteLength;case $r:return r*e*4/i.components*i.byteLength;case Id:return r*e*4/i.components*i.byteLength;case mu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wf:case Cf:return Math.max(r,16)*Math.max(e,8)/4;case bf:case Af:return Math.max(r,8)*Math.max(e,8)/2;case Rf:case Pf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xu:case Yf:case $f:return Math.ceil(r/4)*Math.ceil(e/4)*16;case U_:case qf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function px(r){switch(r){case Ns:case C_:return{byteLength:1,components:1};case jl:case R_:case hc:return{byteLength:2,components:1};case Cd:case Rd:return{byteLength:2,components:4};case ta:case Ad:case os:return{byteLength:4,components:1};case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_S=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ES=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,My=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:_x,alphahash_pars_fragment:gx,alphamap_fragment:vx,alphamap_pars_fragment:xx,alphatest_fragment:Sx,alphatest_pars_fragment:yx,aomap_fragment:Mx,aomap_pars_fragment:Ex,batching_pars_vertex:Tx,batching_vertex:bx,begin_vertex:wx,beginnormal_vertex:Ax,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Ux,color_fragment:Nx,color_pars_fragment:Ox,color_pars_vertex:Fx,color_vertex:Bx,common:kx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:Yx,colorspace_pars_fragment:$x,envmap_fragment:qx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:lS,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_fragment:sS,lights_lambert_pars_fragment:oS,lights_pars_begin:aS,lights_toon_fragment:cS,lights_toon_pars_fragment:uS,lights_phong_fragment:hS,lights_phong_pars_fragment:fS,lights_physical_fragment:dS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:_S,lights_fragment_end:gS,logdepthbuf_fragment:vS,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:yS,map_fragment:MS,map_pars_fragment:ES,map_particle_fragment:TS,map_particle_pars_fragment:bS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:AS,morphinstance_vertex:CS,morphcolor_vertex:RS,morphnormal_vertex:PS,morphtarget_pars_vertex:DS,morphtarget_vertex:LS,normal_fragment_begin:IS,normal_fragment_maps:US,normal_pars_fragment:NS,normal_pars_vertex:OS,normal_vertex:FS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:kS,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:VS,opaque_fragment:GS,packing:WS,premultiplied_alpha_fragment:XS,project_vertex:YS,dithering_fragment:$S,dithering_pars_fragment:qS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:JS,shadowmap_vertex:QS,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:ry,specularmap_fragment:sy,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:uy,uv_pars_fragment:hy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:_y,backgroundCube_vert:gy,backgroundCube_frag:vy,cube_vert:xy,cube_frag:Sy,depth_vert:yy,depth_frag:My,distanceRGBA_vert:Ey,distanceRGBA_frag:Ty,equirect_vert:by,equirect_frag:wy,linedashed_vert:Ay,linedashed_frag:Cy,meshbasic_vert:Ry,meshbasic_frag:Py,meshlambert_vert:Dy,meshlambert_frag:Ly,meshmatcap_vert:Iy,meshmatcap_frag:Uy,meshnormal_vert:Ny,meshnormal_frag:Oy,meshphong_vert:Fy,meshphong_frag:By,meshphysical_vert:ky,meshphysical_frag:zy,meshtoon_vert:Hy,meshtoon_frag:Vy,points_vert:Gy,points_frag:Wy,shadow_vert:Xy,shadow_frag:Yy,sprite_vert:$y,sprite_frag:qy},Ne={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},is={basic:{uniforms:zi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:zi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new en(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:zi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:zi([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:zi([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new en(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:zi([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:zi([Ne.points,Ne.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:zi([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:zi([Ne.common,Ne.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:zi([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:zi([Ne.sprite,Ne.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:zi([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:zi([Ne.lights,Ne.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};is.physical={uniforms:zi([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Jc={r:0,b:0,g:0},Uo=new Os,Ky=new En;function Zy(r,e,t,n,i,s,o){const a=new en(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const w=g(T);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Zu)?(u===void 0&&(u=new qr(new ul(1,1,1),new Fs({name:"BackgroundCubeMaterial",uniforms:tl(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Uo.copy(v.backgroundRotation),Uo.x*=-1,Uo.y*=-1,Uo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Uo.y*=-1,Uo.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(Uo)),u.material.toneMapped=qt.getTransfer(w.colorSpace)!==on,(h!==w||f!==w.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new qr(new Ju(2,2),new Fs({name:"BackgroundMaterial",uniforms:tl(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:mo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(w.colorSpace)!==on,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,v){T.getRGB(Jc,V_(r)),n.buffers.color.setClear(Jc.r,Jc.g,Jc.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m,dispose:M}}function jy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,L,B,X,Z){let te=!1;const J=h(X,B,L);s!==J&&(s=J,c(s.object)),te=d(S,X,B,Z),te&&g(S,X,B,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,v(S,L,B,X),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,L,B){const X=B.wireframe===!0;let Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let te=Z[L.id];te===void 0&&(te={},Z[L.id]=te);let J=te[X];return J===void 0&&(J=f(l()),te[X]=J),J}function f(S){const L=[],B=[],X=[];for(let Z=0;Z<t;Z++)L[Z]=0,B[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:X,object:S,attributes:{},index:null}}function d(S,L,B,X){const Z=s.attributes,te=L.attributes;let J=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){const U=Z[W];let be=te[W];if(be===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),U===void 0||U.attribute!==be||be&&U.data!==be.data)return!0;J++}return s.attributesNum!==J||s.index!==X}function g(S,L,B,X){const Z={},te=L.attributes;let J=0;const Q=B.getAttributes();for(const W in Q)if(Q[W].location>=0){let U=te[W];U===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(U=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(U=S.instanceColor));const be={};be.attribute=U,U&&U.data&&(be.data=U.data),Z[W]=be,J++}s.attributes=Z,s.attributesNum=J,s.index=X}function _(){const S=s.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const B=s.newAttributes,X=s.enabledAttributes,Z=s.attributeDivisors;B[S]=1,X[S]===0&&(r.enableVertexAttribArray(S),X[S]=1),Z[S]!==L&&(r.vertexAttribDivisor(S,L),Z[S]=L)}function M(){const S=s.newAttributes,L=s.enabledAttributes;for(let B=0,X=L.length;B<X;B++)L[B]!==S[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function T(S,L,B,X,Z,te,J){J===!0?r.vertexAttribIPointer(S,L,B,Z,te):r.vertexAttribPointer(S,L,B,X,Z,te)}function v(S,L,B,X){_();const Z=X.attributes,te=B.getAttributes(),J=L.defaultAttributeValues;for(const Q in te){const W=te[Q];if(W.location>=0){let ue=Z[Q];if(ue===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const U=ue.normalized,be=ue.itemSize,$e=e.get(ue);if($e===void 0)continue;const Ct=$e.buffer,et=$e.type,ne=$e.bytesPerElement,xe=et===r.INT||et===r.UNSIGNED_INT||ue.gpuType===Ad;if(ue.isInterleavedBufferAttribute){const de=ue.data,Se=de.stride,se=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Je=0;Je<W.locationSize;Je++)p(W.location+Je,de.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Je=0;Je<W.locationSize;Je++)m(W.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Je=0;Je<W.locationSize;Je++)T(W.location+Je,be/W.locationSize,et,U,Se*ne,(se+be/W.locationSize*Je)*ne,xe)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)p(W.location+de,ue.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let de=0;de<W.locationSize;de++)T(W.location+de,be/W.locationSize,et,U,be*ne,be/W.locationSize*de*ne,xe)}}else if(J!==void 0){const U=J[Q];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(W.location,U);break;case 3:r.vertexAttrib3fv(W.location,U);break;case 4:r.vertexAttrib4fv(W.location,U);break;default:r.vertexAttrib1fv(W.location,U)}}}}M()}function w(){N();for(const S in n){const L=n[S];for(const B in L){const X=L[B];for(const Z in X)u(X[Z].object),delete X[Z];delete L[B]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const B in L){const X=L[B];for(const Z in X)u(X[Z].object),delete X[Z];delete L[B]}delete n[S.id]}function C(S){for(const L in n){const B=n[L];if(B[S.id]===void 0)continue;const X=B[S.id];for(const Z in X)u(X[Z].object),delete X[Z];delete B[S.id]}}function N(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Jy(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==$r&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===hc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ns&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==os&&!N)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:w,maxSamples:P}}function eM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new no,a=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,T=M*4;let v=p.clippingState||null;l.value=v,v=u(g,f,T,d);for(let w=0;w!==T;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==_;++T,v+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tM(r){let e=new WeakMap;function t(o,a){return a===yf?o.mapping=Ja:a===Mf&&(o.mapping=Qa),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yf||a===Mf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kv(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Fa=4,lm=[.125,.215,.35,.446,.526,.582],Go=20,Fh=new lx,cm=new en;let Bh=null,kh=0,zh=0,Hh=!1;const Bo=(1+Math.sqrt(5))/2,Pa=1/Bo,um=[new q(-Bo,Pa,0),new q(Bo,Pa,0),new q(-Pa,0,Bo),new q(Pa,0,Bo),new q(0,Bo,-Pa),new q(0,Bo,Pa),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],nM=new q;class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=nM}=s;Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,kh,zh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ja||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ss,minFilter:ss,generateMipmaps:!1,type:hc,format:$r,colorSpace:el,depthBuffer:!1},i=fm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iM(s)),this._blurMaterial=rM(s,e,t)}return i}_compileMaterial(e){const t=new qr(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,n,i,s){const l=new Rr(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(cm),h.toneMapping=uo,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new k_({name:"PMREM.Background",side:Qi,depthWrite:!1,depthTest:!1}),m=new qr(new ul,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(cm),p=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;Qc(i,v*w,T>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ja||e.mapping===Qa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=um[(i-s-1)%um.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qr(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Go-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Go;m>Go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Go}`);const p=[];let M=0;for(let C=0;C<Go;++C){const N=C/_,y=Math.exp(-N*N/2);p.push(y),C===0?M+=y:C<m&&(M+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const v=this._sizeLods[i],w=3*v*(i>T-Fa?i-T+Fa:0),P=4*(this._cubeSize-v);Qc(t,w,P,3*v,2*v),l.setRenderTarget(t),l.render(h,Fh)}}function iM(r){const e=[],t=[],n=[];let i=r;const s=r-Fa+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Fa?l=lm[o-r+Fa-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),T=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,N=P>2?0:-1,y=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];M.set(y,_*g*P),T.set(f,m*g*P);const S=[P,P,P,P,P,P];v.set(S,p*g*P)}const w=new zs;w.setAttribute("position",new Kr(M,_)),w.setAttribute("uv",new Kr(T,m)),w.setAttribute("faceIndex",new Kr(v,p)),e.push(w),i>Fa&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fm(r,e,t){const n=new ia(r,e,t);return n.texture.mapping=Zu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rM(r,e,t){const n=new Float32Array(Go),i=new q(0,1,0);return new Fs({name:"SphericalGaussianBlur",defines:{n:Go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:co,depthTest:!1,depthWrite:!1})}function dm(){return new Fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:co,depthTest:!1,depthWrite:!1})}function pm(){return new Fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:co,depthTest:!1,depthWrite:!1})}function Od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yf||l===Mf,u=l===Ja||l===Qa;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hm(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new hm(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ga("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let T=0,v=M.length;T<v;T+=3){const w=M[T+0],P=M[T+1],C=M[T+2];f.push(w,P,P,C,C,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let T=0,v=M.length/3-1;T<v;T+=3){const w=T+0,P=T+1,C=T+2;f.push(w,P,P,C,C,w)}}else return;const m=new(O_(f)?H_:z_)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uM(r,e,t){const n=new WeakMap,i=new Bn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*P*4*h),N=new F_(C,w,P,h);N.type=os,N.needsUpdate=!0;const y=v*4;for(let L=0;L<h;L++){const B=p[L],X=M[L],Z=T[L],te=w*P*4*L;for(let J=0;J<B.count;J++){const Q=J*y;g===!0&&(i.fromBufferAttribute(B,J),C[te+Q+0]=i.x,C[te+Q+1]=i.y,C[te+Q+2]=i.z,C[te+Q+3]=0),_===!0&&(i.fromBufferAttribute(X,J),C[te+Q+4]=i.x,C[te+Q+5]=i.y,C[te+Q+6]=i.z,C[te+Q+7]=0),m===!0&&(i.fromBufferAttribute(Z,J),C[te+Q+8]=i.x,C[te+Q+9]=i.y,C[te+Q+10]=i.z,C[te+Q+11]=Z.itemSize===4?i.w:1)}}f={count:h,texture:N,size:new Pt(w,P)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function hM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const K_=new Ri,mm=new $_(1,1),Z_=new F_,j_=new Lv,J_=new W_,_m=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),Sm=new Float32Array(4);function hl(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_m[i];if(s===void 0&&(s=new Float32Array(i),_m[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ni(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ii(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qu(r,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2fv(this.addr,e),ii(t,e)}}function pM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;r.uniform3fv(this.addr,e),ii(t,e)}}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4fv(this.addr,e),ii(t,e)}}function _M(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ni(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ii(t,e)}else{if(ni(t,n))return;Sm.set(n),r.uniformMatrix2fv(this.addr,!1,Sm),ii(t,n)}}function gM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ni(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ii(t,e)}else{if(ni(t,n))return;xm.set(n),r.uniformMatrix3fv(this.addr,!1,xm),ii(t,n)}}function vM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ni(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ii(t,e)}else{if(ni(t,n))return;vm.set(n),r.uniformMatrix4fv(this.addr,!1,vm),ii(t,n)}}function xM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function SM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2iv(this.addr,e),ii(t,e)}}function yM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;r.uniform3iv(this.addr,e),ii(t,e)}}function MM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4iv(this.addr,e),ii(t,e)}}function EM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function TM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2uiv(this.addr,e),ii(t,e)}}function bM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;r.uniform3uiv(this.addr,e),ii(t,e)}}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4uiv(this.addr,e),ii(t,e)}}function AM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mm.compareFunction=N_,s=mm):s=K_,t.setTexture2D(e||s,i)}function CM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||j_,i)}function RM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||J_,i)}function PM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Z_,i)}function DM(r){switch(r){case 5126:return fM;case 35664:return dM;case 35665:return pM;case 35666:return mM;case 35674:return _M;case 35675:return gM;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return SM;case 35668:case 35672:return yM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return TM;case 36295:return bM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(r,e){r.uniform1fv(this.addr,e)}function IM(r,e){const t=hl(e,this.size,2);r.uniform2fv(this.addr,t)}function UM(r,e){const t=hl(e,this.size,3);r.uniform3fv(this.addr,t)}function NM(r,e){const t=hl(e,this.size,4);r.uniform4fv(this.addr,t)}function OM(r,e){const t=hl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function FM(r,e){const t=hl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function BM(r,e){const t=hl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kM(r,e){r.uniform1iv(this.addr,e)}function zM(r,e){r.uniform2iv(this.addr,e)}function HM(r,e){r.uniform3iv(this.addr,e)}function VM(r,e){r.uniform4iv(this.addr,e)}function GM(r,e){r.uniform1uiv(this.addr,e)}function WM(r,e){r.uniform2uiv(this.addr,e)}function XM(r,e){r.uniform3uiv(this.addr,e)}function YM(r,e){r.uniform4uiv(this.addr,e)}function $M(r,e,t){const n=this.cache,i=e.length,s=Qu(t,i);ni(n,s)||(r.uniform1iv(this.addr,s),ii(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||K_,s[o])}function qM(r,e,t){const n=this.cache,i=e.length,s=Qu(t,i);ni(n,s)||(r.uniform1iv(this.addr,s),ii(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||j_,s[o])}function KM(r,e,t){const n=this.cache,i=e.length,s=Qu(t,i);ni(n,s)||(r.uniform1iv(this.addr,s),ii(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||J_,s[o])}function ZM(r,e,t){const n=this.cache,i=e.length,s=Qu(t,i);ni(n,s)||(r.uniform1iv(this.addr,s),ii(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Z_,s[o])}function jM(r){switch(r){case 5126:return LM;case 35664:return IM;case 35665:return UM;case 35666:return NM;case 35674:return OM;case 35675:return FM;case 35676:return BM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}class JM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class QM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function ym(r,e){r.seq.push(e),r.map[e.id]=e}function tE(r,e,t){const n=r.name,i=n.length;for(Vh.lastIndex=0;;){const s=Vh.exec(n),o=Vh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ym(t,c===void 0?new JM(a,r,e):new QM(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new eE(a),ym(t,h)),t=h}}}class yu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);tE(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Mm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const nE=37297;let iE=0;function rE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Em=new At;function sE(r){qt._getMatrix(Em,qt.workingColorSpace,r);const e=`mat3( ${Em.elements.map(t=>t.toFixed(4))} )`;switch(qt.getTransfer(r)){case Du:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Tm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+rE(r.getShaderSource(e),a)}else return s}function oE(r,e){const t=sE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aE(r,e){let t;switch(e){case rv:t="Linear";break;case sv:t="Reinhard";break;case ov:t="Cineon";break;case av:t="ACESFilmic";break;case cv:t="AgX";break;case uv:t="Neutral";break;case lv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eu=new q;function lE(){qt.getLuminanceCoefficients(eu);const r=eu.x.toFixed(4),e=eu.y.toFixed(4),t=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function uE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Pl(r){return r!==""}function bm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(r){return r.replace(fE,pE)}const dE=new Map;function pE(r,e){let t=Rt[e];if(t===void 0){const n=dE.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(r){return r.replace(mE,_E)}function _E(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function vE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ja:case Qa:e="ENVMAP_TYPE_CUBE";break;case Zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qa:e="ENVMAP_MODE_REFRACTION";break}return e}function SE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case w_:e="ENVMAP_BLENDING_MULTIPLY";break;case nv:e="ENVMAP_BLENDING_MIX";break;case iv:e="ENVMAP_BLENDING_ADD";break}return e}function yE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ME(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gE(t),c=vE(t),u=xE(t),h=SE(t),f=yE(t),d=cE(t),g=uE(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pl).join(`
`),p.length>0&&(p+=`
`)):(m=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),p=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==uo?"#define TONE_MAPPING":"",t.toneMapping!==uo?Rt.tonemapping_pars_fragment:"",t.toneMapping!==uo?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),lE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),o=Qf(o),o=bm(o,t),o=wm(o,t),a=Qf(a),a=bm(a,t),a=wm(a,t),o=Am(o),a=Am(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+o,v=M+p+a,w=Mm(i,i.VERTEX_SHADER,T),P=Mm(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,P),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",X=i.getShaderInfoLog(w)||"",Z=i.getShaderInfoLog(P)||"",te=B.trim(),J=X.trim(),Q=Z.trim();let W=!0,ue=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,P);else{const U=Tm(i,w,"vertex"),be=Tm(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+U+`
`+be)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(J===""||Q==="")&&(ue=!1);ue&&(L.diagnostics={runnable:W,programLog:te,vertexShader:{log:J,prefix:m},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(w),i.deleteShader(P),N=new yu(i,_),y=hE(i,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,nE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=P,this}let EE=0;class TE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bE(e),t.set(e,n)),n}}class bE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function wE(r,e,t,n,i,s,o){const a=new Nd,l=new TE,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,L,B,X){const Z=B.fog,te=X.geometry,J=y.isMeshStandardMaterial?B.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),W=Q&&Q.mapping===Zu?Q.image.height:null,ue=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const U=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=U!==void 0?U.length:0;let $e=0;te.morphAttributes.position!==void 0&&($e=1),te.morphAttributes.normal!==void 0&&($e=2),te.morphAttributes.color!==void 0&&($e=3);let Ct,et,ne,xe;if(ue){const Le=is[ue];Ct=Le.vertexShader,et=Le.fragmentShader}else Ct=y.vertexShader,et=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),xe=l.getFragmentShaderID(y);const de=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),se=X.isInstancedMesh===!0,Je=X.isBatchedMesh===!0,De=!!y.map,Ue=!!y.matcap,I=!!Q,Ae=!!y.aoMap,ze=!!y.lightMap,ut=!!y.bumpMap,z=!!y.normalMap,gt=!!y.displacementMap,Pe=!!y.emissiveMap,st=!!y.metalnessMap,Qe=!!y.roughnessMap,Vt=y.anisotropy>0,D=y.clearcoat>0,x=y.dispersion>0,G=y.iridescence>0,ae=y.sheen>0,ce=y.transmission>0,ie=Vt&&!!y.anisotropyMap,Oe=D&&!!y.clearcoatMap,ge=D&&!!y.clearcoatNormalMap,we=D&&!!y.clearcoatRoughnessMap,Te=G&&!!y.iridescenceMap,_e=G&&!!y.iridescenceThicknessMap,Ee=ae&&!!y.sheenColorMap,qe=ae&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Me=!!y.specularColorMap,tt=!!y.specularIntensityMap,O=ce&&!!y.transmissionMap,me=ce&&!!y.thicknessMap,ve=!!y.gradientMap,Ce=!!y.alphaMap,fe=y.alphaTest>0,re=!!y.alphaHash,Be=!!y.extensions;let We=uo;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(We=r.toneMapping);const It={shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:Ct,fragmentShader:et,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Je,batchingColor:Je&&X._colorsTexture!==null,instancing:se,instancingColor:se&&X.instanceColor!==null,instancingMorph:se&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:el,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:Ue,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:ze,bumpMap:ut,normalMap:z,displacementMap:f&&gt,emissiveMap:Pe,normalMapObjectSpace:z&&y.normalMapType===mv,normalMapTangentSpace:z&&y.normalMapType===pv,metalnessMap:st,roughnessMap:Qe,anisotropy:Vt,anisotropyMap:ie,clearcoat:D,clearcoatMap:Oe,clearcoatNormalMap:ge,clearcoatRoughnessMap:we,dispersion:x,iridescence:G,iridescenceMap:Te,iridescenceThicknessMap:_e,sheen:ae,sheenColorMap:Ee,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:Me,specularIntensityMap:tt,transmission:ce,transmissionMap:O,thicknessMap:me,gradientMap:ve,opaque:y.transparent===!1&&y.blending===Va&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:re,combine:y.combine,mapUv:De&&_(y.map.channel),aoMapUv:Ae&&_(y.aoMap.channel),lightMapUv:ze&&_(y.lightMap.channel),bumpMapUv:ut&&_(y.bumpMap.channel),normalMapUv:z&&_(y.normalMap.channel),displacementMapUv:gt&&_(y.displacementMap.channel),emissiveMapUv:Pe&&_(y.emissiveMap.channel),metalnessMapUv:st&&_(y.metalnessMap.channel),roughnessMapUv:Qe&&_(y.roughnessMap.channel),anisotropyMapUv:ie&&_(y.anisotropyMap.channel),clearcoatMapUv:Oe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(y.sheenRoughnessMap.channel),specularMapUv:Ve&&_(y.specularMap.channel),specularColorMapUv:Me&&_(y.specularColorMap.channel),specularIntensityMapUv:tt&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:me&&_(y.thicknessMap.channel),alphaMapUv:Ce&&_(y.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(z||Vt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(De||Ce),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:$e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===on,decodeVideoTextureEmissive:Pe&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===on,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ps,flipSided:y.side===Qi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(S,y),T(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=g[y.type];let L;if(S){const B=is[S];L=Xv.clone(B.uniforms)}else L=y.uniforms;return L}function w(y,S){let L;for(let B=0,X=u.length;B<X;B++){const Z=u[B];if(Z.cacheKey===S){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new ME(r,S,y,s),u.push(L)),L}function P(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:N}}function AE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function CE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||CE),n.length>1&&n.sort(f||Rm),i.length>1&&i.sort(f||Rm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function RE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Pm,r.set(n,[o])):i>=s.length?(o=new Pm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function PE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new en};break;case"SpotLight":t={position:new q,direction:new q,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new en,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new en,groundColor:new en};break;case"RectAreaLight":t={color:new en,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function DE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let LE=0;function IE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UE(r){const e=new PE,t=DE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new En,o=new En;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,T=0,v=0,w=0,P=0,C=0;c.sort(IE);for(let y=0,S=c.length;y<S;y++){const L=c[y],B=L.color,X=L.intensity,Z=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*X,h+=B.g*X,f+=B.b*X;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],X);C++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=te,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(B).multiplyScalar(X),J.distance=Z,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[_]=J;const Q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=te,v++}_++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(B).multiplyScalar(X),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const Q=L.shadow,W=t.get(L);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=J,g++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(X),J.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=J,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==v||N.numSpotMaps!==w||N.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=v,N.numSpotMaps=w,N.numLightProbes=C,n.version=LE++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(T.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Dm(r){const e=new UE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Dm(r),e.set(i,[a])):s>=o.length?(a=new Dm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BE(r,e,t){let n=new X_;const i=new Pt,s=new Pt,o=new Bn,a=new ox({depthPacking:dv}),l=new ax,c={},u=t.maxTextureSize,h={[mo]:Qi,[Qi]:mo,[Ps]:Ps},f=new Fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new zs;g.setAttribute("position",new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let p=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),B=r.state;B.setBlending(co),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=p!==As&&this.type===As,Z=p===As&&this.type!==As;for(let te=0,J=P.length;te<J;te++){const Q=P[te],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ue=W.getFrameExtents();if(i.multiply(ue),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||X===!0||Z===!0){const be=this.type!==As?{minFilter:xr,magFilter:xr}:{};W.map!==null&&W.map.dispose(),W.map=new ia(i.x,i.y,be),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const U=W.getViewportCount();for(let be=0;be<U;be++){const $e=W.getViewport(be);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),B.viewport(o),W.updateMatrices(Q,be),n=W.getFrustum(),v(C,N,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===As&&M(W,N),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,S,L)};function M(P,C){const N=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ia(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(C,null,N,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(C,null,N,d,_,null)}function T(P,C,N,y){let S=null;const L=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)S=L;else if(S=N.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=S.uuid,X=C.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let te=Z[X];te===void 0&&(te=S.clone(),Z[X]=te,C.addEventListener("dispose",w)),S=te}if(S.visible=C.visible,S.wireframe=C.wireframe,y===As?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=r.properties.get(S);B.light=N}return S}function v(P,C,N,y,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===As)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const X=e.update(P),Z=P.material;if(Array.isArray(Z)){const te=X.groups;for(let J=0,Q=te.length;J<Q;J++){const W=te[J],ue=Z[W.materialIndex];if(ue&&ue.visible){const U=T(P,ue,y,S);P.onBeforeShadow(r,P,C,N,X,U,W),r.renderBufferDirect(N,null,X,U,P,W),P.onAfterShadow(r,P,C,N,X,U,W)}}}else if(Z.visible){const te=T(P,Z,y,S);P.onBeforeShadow(r,P,C,N,X,te,null),r.renderBufferDirect(N,null,X,te,P,null),P.onAfterShadow(r,P,C,N,X,te,null)}}const B=P.children;for(let X=0,Z=B.length;X<Z;X++)v(B[X],C,N,y,S)}function w(P){P.target.removeEventListener("dispose",w);for(const N in c){const y=c[N],S=P.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const kE={[pf]:mf,[_f]:xf,[gf]:Sf,[ja]:vf,[mf]:pf,[xf]:_f,[Sf]:gf,[vf]:ja};function zE(r,e){function t(){let O=!1;const me=new Bn;let ve=null;const Ce=new Bn(0,0,0,0);return{setMask:function(fe){ve!==fe&&!O&&(r.colorMask(fe,fe,fe,fe),ve=fe)},setLocked:function(fe){O=fe},setClear:function(fe,re,Be,We,It){It===!0&&(fe*=We,re*=We,Be*=We),me.set(fe,re,Be,We),Ce.equals(me)===!1&&(r.clearColor(fe,re,Be,We),Ce.copy(me))},reset:function(){O=!1,ve=null,Ce.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,ve=null,Ce=null,fe=null;return{setReversed:function(re){if(me!==re){const Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),me=re;const We=fe;fe=null,this.setClear(We)}},getReversed:function(){return me},setTest:function(re){re?de(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(re){ve!==re&&!O&&(r.depthMask(re),ve=re)},setFunc:function(re){if(me&&(re=kE[re]),Ce!==re){switch(re){case pf:r.depthFunc(r.NEVER);break;case mf:r.depthFunc(r.ALWAYS);break;case _f:r.depthFunc(r.LESS);break;case ja:r.depthFunc(r.LEQUAL);break;case gf:r.depthFunc(r.EQUAL);break;case vf:r.depthFunc(r.GEQUAL);break;case xf:r.depthFunc(r.GREATER);break;case Sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=re}},setLocked:function(re){O=re},setClear:function(re){fe!==re&&(me&&(re=1-re),r.clearDepth(re),fe=re)},reset:function(){O=!1,ve=null,Ce=null,fe=null,me=!1}}}function i(){let O=!1,me=null,ve=null,Ce=null,fe=null,re=null,Be=null,We=null,It=null;return{setTest:function(Le){O||(Le?de(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Le){me!==Le&&!O&&(r.stencilMask(Le),me=Le)},setFunc:function(Le,je,vt){(ve!==Le||Ce!==je||fe!==vt)&&(r.stencilFunc(Le,je,vt),ve=Le,Ce=je,fe=vt)},setOp:function(Le,je,vt){(re!==Le||Be!==je||We!==vt)&&(r.stencilOp(Le,je,vt),re=Le,Be=je,We=vt)},setLocked:function(Le){O=Le},setClear:function(Le){It!==Le&&(r.clearStencil(Le),It=Le)},reset:function(){O=!1,me=null,ve=null,Ce=null,fe=null,re=null,Be=null,We=null,It=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,T=null,v=null,w=null,P=null,C=new en(0,0,0),N=0,y=!1,S=null,L=null,B=null,X=null,Z=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=Q>=2);let ue=null,U={};const be=r.getParameter(r.SCISSOR_BOX),$e=r.getParameter(r.VIEWPORT),Ct=new Bn().fromArray(be),et=new Bn().fromArray($e);function ne(O,me,ve,Ce){const fe=new Uint8Array(4),re=r.createTexture();r.bindTexture(O,re),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<ve;Be++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(me+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return re}const xe={};xe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(ja),ut(!1),z(Cp),de(r.CULL_FACE),Ae(co);function de(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Se(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function se(O,me){return h[O]!==me?(r.bindFramebuffer(O,me),h[O]=me,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=me),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Je(O,me){let ve=d,Ce=!1;if(O){ve=f.get(me),ve===void 0&&(ve=[],f.set(me,ve));const fe=O.textures;if(ve.length!==fe.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let re=0,Be=fe.length;re<Be;re++)ve[re]=r.COLOR_ATTACHMENT0+re;ve.length=fe.length,Ce=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(ve)}function De(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const Ue={[Vo]:r.FUNC_ADD,[k0]:r.FUNC_SUBTRACT,[z0]:r.FUNC_REVERSE_SUBTRACT};Ue[H0]=r.MIN,Ue[V0]=r.MAX;const I={[G0]:r.ZERO,[W0]:r.ONE,[X0]:r.SRC_COLOR,[ff]:r.SRC_ALPHA,[j0]:r.SRC_ALPHA_SATURATE,[K0]:r.DST_COLOR,[$0]:r.DST_ALPHA,[Y0]:r.ONE_MINUS_SRC_COLOR,[df]:r.ONE_MINUS_SRC_ALPHA,[Z0]:r.ONE_MINUS_DST_COLOR,[q0]:r.ONE_MINUS_DST_ALPHA,[J0]:r.CONSTANT_COLOR,[Q0]:r.ONE_MINUS_CONSTANT_COLOR,[ev]:r.CONSTANT_ALPHA,[tv]:r.ONE_MINUS_CONSTANT_ALPHA};function Ae(O,me,ve,Ce,fe,re,Be,We,It,Le){if(O===co){_===!0&&(Se(r.BLEND),_=!1);return}if(_===!1&&(de(r.BLEND),_=!0),O!==B0){if(O!==m||Le!==y){if((p!==Vo||v!==Vo)&&(r.blendEquation(r.FUNC_ADD),p=Vo,v=Vo),Le)switch(O){case Va:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rp:r.blendFunc(r.ONE,r.ONE);break;case Pp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Va:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,T=null,w=null,P=null,C.set(0,0,0),N=0,m=O,y=Le}return}fe=fe||me,re=re||ve,Be=Be||Ce,(me!==p||fe!==v)&&(r.blendEquationSeparate(Ue[me],Ue[fe]),p=me,v=fe),(ve!==M||Ce!==T||re!==w||Be!==P)&&(r.blendFuncSeparate(I[ve],I[Ce],I[re],I[Be]),M=ve,T=Ce,w=re,P=Be),(We.equals(C)===!1||It!==N)&&(r.blendColor(We.r,We.g,We.b,It),C.copy(We),N=It),m=O,y=!1}function ze(O,me){O.side===Ps?Se(r.CULL_FACE):de(r.CULL_FACE);let ve=O.side===Qi;me&&(ve=!ve),ut(ve),O.blending===Va&&O.transparent===!1?Ae(co):Ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ce=O.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){S!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),S=O)}function z(O){O!==N0?(de(r.CULL_FACE),O!==L&&(O===Cp?r.cullFace(r.BACK):O===O0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),L=O}function gt(O){O!==B&&(J&&r.lineWidth(O),B=O)}function Pe(O,me,ve){O?(de(r.POLYGON_OFFSET_FILL),(X!==me||Z!==ve)&&(r.polygonOffset(me,ve),X=me,Z=ve)):Se(r.POLYGON_OFFSET_FILL)}function st(O){O?de(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=r.TEXTURE0+te-1),ue!==O&&(r.activeTexture(O),ue=O)}function Vt(O,me,ve){ve===void 0&&(ue===null?ve=r.TEXTURE0+te-1:ve=ue);let Ce=U[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[ve]=Ce),(Ce.type!==O||Ce.texture!==me)&&(ue!==ve&&(r.activeTexture(ve),ue=ve),r.bindTexture(O,me||xe[O]),Ce.type=O,Ce.texture=me)}function D(){const O=U[ue];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){Ct.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ct.copy(O))}function qe(O){et.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Ve(O,me){let ve=c.get(me);ve===void 0&&(ve=new WeakMap,c.set(me,ve));let Ce=ve.get(O);Ce===void 0&&(Ce=r.getUniformBlockIndex(me,O.name),ve.set(O,Ce))}function Me(O,me){const Ce=c.get(me).get(O);l.get(me)!==Ce&&(r.uniformBlockBinding(me,Ce,O.__bindingPointIndex),l.set(me,Ce))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ue=null,U={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,T=null,v=null,w=null,P=null,C=new en(0,0,0),N=0,y=!1,S=null,L=null,B=null,X=null,Z=null,Ct.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Se,bindFramebuffer:se,drawBuffers:Je,useProgram:De,setBlending:Ae,setMaterial:ze,setFlipSided:ut,setCullFace:z,setLineWidth:gt,setPolygonOffset:Pe,setScissorTest:st,activeTexture:Qe,bindTexture:Vt,unbindTexture:D,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Te,texImage3D:_e,updateUBOMapping:Ve,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:we,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:Oe,scissor:Ee,viewport:qe,reset:tt}}function HE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,x){return d?new OffscreenCanvas(D,x):Iu("canvas")}function _(D,x,G){let ae=1;const ce=Vt(D);if((ce.width>G||ce.height>G)&&(ae=G/Math.max(ce.width,ce.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(ae*ce.width),Oe=Math.floor(ae*ce.height);h===void 0&&(h=g(ie,Oe));const ge=x?g(ie,Oe):h;return ge.width=ie,ge.height=Oe,ge.getContext("2d").drawImage(D,0,0,ie,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Oe+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(D,x,G,ae,ce=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=x;if(x===r.RED&&(G===r.FLOAT&&(ie=r.R32F),G===r.HALF_FLOAT&&(ie=r.R16F),G===r.UNSIGNED_BYTE&&(ie=r.R8)),x===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ie=r.R8UI),G===r.UNSIGNED_SHORT&&(ie=r.R16UI),G===r.UNSIGNED_INT&&(ie=r.R32UI),G===r.BYTE&&(ie=r.R8I),G===r.SHORT&&(ie=r.R16I),G===r.INT&&(ie=r.R32I)),x===r.RG&&(G===r.FLOAT&&(ie=r.RG32F),G===r.HALF_FLOAT&&(ie=r.RG16F),G===r.UNSIGNED_BYTE&&(ie=r.RG8)),x===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ie=r.RG8UI),G===r.UNSIGNED_SHORT&&(ie=r.RG16UI),G===r.UNSIGNED_INT&&(ie=r.RG32UI),G===r.BYTE&&(ie=r.RG8I),G===r.SHORT&&(ie=r.RG16I),G===r.INT&&(ie=r.RG32I)),x===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),G===r.UNSIGNED_INT&&(ie=r.RGB32UI),G===r.BYTE&&(ie=r.RGB8I),G===r.SHORT&&(ie=r.RGB16I),G===r.INT&&(ie=r.RGB32I)),x===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),G===r.UNSIGNED_INT&&(ie=r.RGBA32UI),G===r.BYTE&&(ie=r.RGBA8I),G===r.SHORT&&(ie=r.RGBA16I),G===r.INT&&(ie=r.RGBA32I)),x===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),x===r.RGBA){const Oe=ce?Du:qt.getTransfer(ae);G===r.FLOAT&&(ie=r.RGBA32F),G===r.HALF_FLOAT&&(ie=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ie=Oe===on?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(D,x){let G;return D?x===null||x===ta||x===Jl?G=r.DEPTH24_STENCIL8:x===os?G=r.DEPTH32F_STENCIL8:x===jl&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ta||x===Jl?G=r.DEPTH_COMPONENT24:x===os?G=r.DEPTH_COMPONENT32F:x===jl&&(G=r.DEPTH_COMPONENT16),G}function w(D,x){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==xr&&D.minFilter!==ss?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function P(D){const x=D.target;x.removeEventListener("dispose",P),N(x),x.isVideoTexture&&u.delete(x)}function C(D){const x=D.target;x.removeEventListener("dispose",C),S(x)}function N(D){const x=n.get(D);if(x.__webglInit===void 0)return;const G=D.source,ae=f.get(G);if(ae){const ce=ae[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&y(D),Object.keys(ae).length===0&&f.delete(G)}n.remove(D)}function y(D){const x=n.get(D);r.deleteTexture(x.__webglTexture);const G=D.source,ae=f.get(G);delete ae[x.__cacheKey],o.memory.textures--}function S(D){const x=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(x.__webglFramebuffer[ae]))for(let ce=0;ce<x.__webglFramebuffer[ae].length;ce++)r.deleteFramebuffer(x.__webglFramebuffer[ae][ce]);else r.deleteFramebuffer(x.__webglFramebuffer[ae]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[ae])}else{if(Array.isArray(x.__webglFramebuffer))for(let ae=0;ae<x.__webglFramebuffer.length;ae++)r.deleteFramebuffer(x.__webglFramebuffer[ae]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ae=0;ae<x.__webglColorRenderbuffer.length;ae++)x.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[ae]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=D.textures;for(let ae=0,ce=G.length;ae<ce;ae++){const ie=n.get(G[ae]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(G[ae])}n.remove(D)}let L=0;function B(){L=0}function X(){const D=L;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),L+=1,D}function Z(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function te(D,x){const G=n.get(D);if(D.isVideoTexture&&st(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const ae=D.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,D,x);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+x)}function J(D,x){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){xe(G,D,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+x)}function Q(D,x){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){xe(G,D,x);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+x)}function W(D,x){const G=n.get(D);if(D.version>0&&G.__version!==D.version){de(G,D,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+x)}const ue={[Ef]:r.REPEAT,[Wo]:r.CLAMP_TO_EDGE,[Tf]:r.MIRRORED_REPEAT},U={[xr]:r.NEAREST,[hv]:r.NEAREST_MIPMAP_NEAREST,[Pc]:r.NEAREST_MIPMAP_LINEAR,[ss]:r.LINEAR,[fh]:r.LINEAR_MIPMAP_NEAREST,[Xo]:r.LINEAR_MIPMAP_LINEAR},be={[_v]:r.NEVER,[Mv]:r.ALWAYS,[gv]:r.LESS,[N_]:r.LEQUAL,[vv]:r.EQUAL,[yv]:r.GEQUAL,[xv]:r.GREATER,[Sv]:r.NOTEQUAL};function $e(D,x){if(x.type===os&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ss||x.magFilter===fh||x.magFilter===Pc||x.magFilter===Xo||x.minFilter===ss||x.minFilter===fh||x.minFilter===Pc||x.minFilter===Xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ue[x.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ue[x.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ue[x.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,U[x.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,U[x.minFilter]),x.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xr||x.minFilter!==Pc&&x.minFilter!==Xo||x.type===os&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ct(D,x){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",P));const ae=x.source;let ce=f.get(ae);ce===void 0&&(ce={},f.set(ae,ce));const ie=Z(x);if(ie!==D.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ce[ie].usedTimes++;const Oe=ce[D.__cacheKey];Oe!==void 0&&(ce[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&y(x)),D.__cacheKey=ie,D.__webglTexture=ce[ie].texture}return G}function et(D,x,G){return Math.floor(Math.floor(D/G)/x)}function ne(D,x,G,ae){const ie=D.updateRanges;if(ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,G,ae,x.data);else{ie.sort((_e,Ee)=>_e.start-Ee.start);let Oe=0;for(let _e=1;_e<ie.length;_e++){const Ee=ie[Oe],qe=ie[_e],Ve=Ee.start+Ee.count,Me=et(qe.start,x.width,4),tt=et(Ee.start,x.width,4);qe.start<=Ve+1&&Me===tt&&et(qe.start+qe.count-1,x.width,4)===Me?Ee.count=Math.max(Ee.count,qe.start+qe.count-Ee.start):(++Oe,ie[Oe]=qe)}ie.length=Oe+1;const ge=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ee=ie.length;_e<Ee;_e++){const qe=ie[_e],Ve=Math.floor(qe.start/4),Me=Math.ceil(qe.count/4),tt=Ve%x.width,O=Math.floor(Ve/x.width),me=Me,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,tt,O,me,ve,G,ae,x.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ge),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function xe(D,x,G){let ae=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ae=r.TEXTURE_3D);const ce=Ct(D,x),ie=x.source;t.bindTexture(ae,D.__webglTexture,r.TEXTURE0+G);const Oe=n.get(ie);if(ie.version!==Oe.__version||ce===!0){t.activeTexture(r.TEXTURE0+G);const ge=qt.getPrimaries(qt.workingColorSpace),we=x.colorSpace===io?null:qt.getPrimaries(x.colorSpace),Te=x.colorSpace===io||ge===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let _e=_(x.image,!1,i.maxTextureSize);_e=Qe(x,_e);const Ee=s.convert(x.format,x.colorSpace),qe=s.convert(x.type);let Ve=T(x.internalFormat,Ee,qe,x.colorSpace,x.isVideoTexture);$e(ae,x);let Me;const tt=x.mipmaps,O=x.isVideoTexture!==!0,me=Oe.__version===void 0||ce===!0,ve=ie.dataReady,Ce=w(x,_e);if(x.isDepthTexture)Ve=v(x.format===ec,x.type),me&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ve,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ee,qe,null));else if(x.isDataTexture)if(tt.length>0){O&&me&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,tt[0].width,tt[0].height);for(let fe=0,re=tt.length;fe<re;fe++)Me=tt[fe],O?ve&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ee,qe,Me.data):t.texImage2D(r.TEXTURE_2D,fe,Ve,Me.width,Me.height,0,Ee,qe,Me.data);x.generateMipmaps=!1}else O?(me&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,_e.width,_e.height),ve&&ne(x,_e,Ee,qe)):t.texImage2D(r.TEXTURE_2D,0,Ve,_e.width,_e.height,0,Ee,qe,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ve,tt[0].width,tt[0].height,_e.depth);for(let fe=0,re=tt.length;fe<re;fe++)if(Me=tt[fe],x.format!==$r)if(Ee!==null)if(O){if(ve)if(x.layerUpdates.size>0){const Be=am(Me.width,Me.height,x.format,x.type);for(const We of x.layerUpdates){const It=Me.data.subarray(We*Be/Me.data.BYTES_PER_ELEMENT,(We+1)*Be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,We,Me.width,Me.height,1,Ee,It)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,_e.depth,Ee,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,Ve,Me.width,Me.height,_e.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,_e.depth,Ee,qe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,Ve,Me.width,Me.height,_e.depth,0,Ee,qe,Me.data)}else{O&&me&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,tt[0].width,tt[0].height);for(let fe=0,re=tt.length;fe<re;fe++)Me=tt[fe],x.format!==$r?Ee!==null?O?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,Ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ve&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Ee,qe,Me.data):t.texImage2D(r.TEXTURE_2D,fe,Ve,Me.width,Me.height,0,Ee,qe,Me.data)}else if(x.isDataArrayTexture)if(O){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ve,_e.width,_e.height,_e.depth),ve)if(x.layerUpdates.size>0){const fe=am(_e.width,_e.height,x.format,x.type);for(const re of x.layerUpdates){const Be=_e.data.subarray(re*fe/_e.data.BYTES_PER_ELEMENT,(re+1)*fe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,_e.width,_e.height,1,Ee,qe,Be)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ee,qe,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,_e.width,_e.height,_e.depth,0,Ee,qe,_e.data);else if(x.isData3DTexture)O?(me&&t.texStorage3D(r.TEXTURE_3D,Ce,Ve,_e.width,_e.height,_e.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ee,qe,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,_e.width,_e.height,_e.depth,0,Ee,qe,_e.data);else if(x.isFramebufferTexture){if(me)if(O)t.texStorage2D(r.TEXTURE_2D,Ce,Ve,_e.width,_e.height);else{let fe=_e.width,re=_e.height;for(let Be=0;Be<Ce;Be++)t.texImage2D(r.TEXTURE_2D,Be,Ve,fe,re,0,Ee,qe,null),fe>>=1,re>>=1}}else if(tt.length>0){if(O&&me){const fe=Vt(tt[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Ve,fe.width,fe.height)}for(let fe=0,re=tt.length;fe<re;fe++)Me=tt[fe],O?ve&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ee,qe,Me):t.texImage2D(r.TEXTURE_2D,fe,Ve,Ee,qe,Me);x.generateMipmaps=!1}else if(O){if(me){const fe=Vt(_e);t.texStorage2D(r.TEXTURE_2D,Ce,Ve,fe.width,fe.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,qe,_e)}else t.texImage2D(r.TEXTURE_2D,0,Ve,Ee,qe,_e);m(x)&&p(ae),Oe.__version=ie.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function de(D,x,G){if(x.image.length!==6)return;const ae=Ct(D,x),ce=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const ie=n.get(ce);if(ce.version!==ie.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const Oe=qt.getPrimaries(qt.workingColorSpace),ge=x.colorSpace===io?null:qt.getPrimaries(x.colorSpace),we=x.colorSpace===io||Oe===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let re=0;re<6;re++)!Te&&!_e?Ee[re]=_(x.image[re],!0,i.maxCubemapSize):Ee[re]=_e?x.image[re].image:x.image[re],Ee[re]=Qe(x,Ee[re]);const qe=Ee[0],Ve=s.convert(x.format,x.colorSpace),Me=s.convert(x.type),tt=T(x.internalFormat,Ve,Me,x.colorSpace),O=x.isVideoTexture!==!0,me=ie.__version===void 0||ae===!0,ve=ce.dataReady;let Ce=w(x,qe);$e(r.TEXTURE_CUBE_MAP,x);let fe;if(Te){O&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,tt,qe.width,qe.height);for(let re=0;re<6;re++){fe=Ee[re].mipmaps;for(let Be=0;Be<fe.length;Be++){const We=fe[Be];x.format!==$r?Ve!==null?O?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,We.width,We.height,Ve,We.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,tt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,We.width,We.height,Ve,Me,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,tt,We.width,We.height,0,Ve,Me,We.data)}}}else{if(fe=x.mipmaps,O&&me){fe.length>0&&Ce++;const re=Vt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,tt,re.width,re.height)}for(let re=0;re<6;re++)if(_e){O?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee[re].width,Ee[re].height,Ve,Me,Ee[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,Ee[re].width,Ee[re].height,0,Ve,Me,Ee[re].data);for(let Be=0;Be<fe.length;Be++){const It=fe[Be].image[re].image;O?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,It.width,It.height,Ve,Me,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,tt,It.width,It.height,0,Ve,Me,It.data)}}else{O?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,Me,Ee[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,Ve,Me,Ee[re]);for(let Be=0;Be<fe.length;Be++){const We=fe[Be];O?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Ve,Me,We.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,tt,Ve,Me,We.image[re])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),ie.__version=ce.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Se(D,x,G,ae,ce,ie){const Oe=s.convert(G.format,G.colorSpace),ge=s.convert(G.type),we=T(G.internalFormat,Oe,ge,G.colorSpace),Te=n.get(x),_e=n.get(G);if(_e.__renderTarget=x,!Te.__hasExternalTextures){const Ee=Math.max(1,x.width>>ie),qe=Math.max(1,x.height>>ie);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,we,Ee,qe,x.depth,0,Oe,ge,null):t.texImage2D(ce,ie,we,Ee,qe,0,Oe,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Pe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ce,_e.__webglTexture,0,gt(x)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ce,_e.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(D,x,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),x.depthBuffer){const ae=x.depthTexture,ce=ae&&ae.isDepthTexture?ae.type:null,ie=v(x.stencilBuffer,ce),Oe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=gt(x);Pe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,ie,x.width,x.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,ie,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ie,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,D)}else{const ae=x.textures;for(let ce=0;ce<ae.length;ce++){const ie=ae[ce],Oe=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),we=T(ie.internalFormat,Oe,ge,ie.colorSpace),Te=gt(x);G&&Pe(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,we,x.width,x.height):Pe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,we,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,we,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Je(D,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(x.depthTexture);ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const ce=ae.__webglTexture,ie=gt(x);if(x.depthTexture.format===Ql)Pe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(x.depthTexture.format===ec)Pe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function De(D){const x=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const ae=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ae){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ae.removeEventListener("dispose",ce)};ae.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=ae}if(D.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ae=D.texture.mipmaps;ae&&ae.length>0?Je(x.__webglFramebuffer[0],D):Je(x.__webglFramebuffer,D)}else if(G){x.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[ae]),x.__webglDepthbuffer[ae]===void 0)x.__webglDepthbuffer[ae]=r.createRenderbuffer(),se(x.__webglDepthbuffer[ae],D,!1);else{const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,ie)}}else{const ae=D.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),se(x.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,ie)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(D,x,G){const ae=n.get(D);x!==void 0&&Se(ae.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&De(D)}function I(D){const x=D.texture,G=n.get(D),ae=n.get(x);D.addEventListener("dispose",C);const ce=D.textures,ie=D.isWebGLCubeRenderTarget===!0,Oe=ce.length>1;if(Oe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=x.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let we=0;we<x.mipmaps.length;we++)G.__webglFramebuffer[ge][we]=r.createFramebuffer()}else G.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)G.__webglFramebuffer[ge]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let ge=0,we=ce.length;ge<we;ge++){const Te=n.get(ce[ge]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&Pe(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const we=ce[ge];G.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Te=s.convert(we.format,we.colorSpace),_e=s.convert(we.type),Ee=T(we.internalFormat,Te,_e,we.colorSpace,D.isXRRenderTarget===!0),qe=gt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ee,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),$e(r.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Se(G.__webglFramebuffer[ge][we],D,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we);else Se(G.__webglFramebuffer[ge],D,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ge=0,we=ce.length;ge<we;ge++){const Te=ce[ge],_e=n.get(Te);let Ee=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,_e.__webglTexture),$e(Ee,Te),Se(G.__webglFramebuffer,D,Te,r.COLOR_ATTACHMENT0+ge,Ee,0),m(Te)&&p(Ee)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),$e(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)Se(G.__webglFramebuffer[we],D,x,r.COLOR_ATTACHMENT0,ge,we);else Se(G.__webglFramebuffer,D,x,r.COLOR_ATTACHMENT0,ge,0);m(x)&&p(ge),t.unbindTexture()}D.depthBuffer&&De(D)}function Ae(D){const x=D.textures;for(let G=0,ae=x.length;G<ae;G++){const ce=x[G];if(m(ce)){const ie=M(D),Oe=n.get(ce).__webglTexture;t.bindTexture(ie,Oe),p(ie),t.unbindTexture()}}}const ze=[],ut=[];function z(D){if(D.samples>0){if(Pe(D)===!1){const x=D.textures,G=D.width,ae=D.height;let ce=r.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(D),ge=x.length>1;if(ge)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const we=D.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const _e=n.get(x[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,G,ae,0,0,G,ae,ce,r.NEAREST),l===!0&&(ze.length=0,ut.length=0,ze.push(r.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ze.push(ie),ut.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const _e=n.get(x[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const x=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function gt(D){return Math.min(i.maxSamples,D.samples)}function Pe(D){const x=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(D){const x=o.render.frame;u.get(D)!==x&&(u.set(D,x),D.update())}function Qe(D,x){const G=D.colorSpace,ae=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==el&&G!==io&&(qt.getTransfer(G)===on?(ae!==$r||ce!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Pe}function VE(r,e){function t(n,i=io){let s;const o=qt.getTransfer(i);if(n===Ns)return r.UNSIGNED_BYTE;if(n===Cd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===P_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===C_)return r.BYTE;if(n===R_)return r.SHORT;if(n===jl)return r.UNSIGNED_SHORT;if(n===Ad)return r.INT;if(n===ta)return r.UNSIGNED_INT;if(n===os)return r.FLOAT;if(n===hc)return r.HALF_FLOAT;if(n===D_)return r.ALPHA;if(n===L_)return r.RGB;if(n===$r)return r.RGBA;if(n===Ql)return r.DEPTH_COMPONENT;if(n===ec)return r.DEPTH_STENCIL;if(n===Pd)return r.RED;if(n===Dd)return r.RED_INTEGER;if(n===I_)return r.RG;if(n===Ld)return r.RG_INTEGER;if(n===Id)return r.RGBA_INTEGER;if(n===mu||n===_u||n===gu||n===vu)if(o===on)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bf||n===wf||n===Af||n===Cf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rf||n===Pf||n===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rf||n===Pf)return o===on?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Df)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lf||n===If||n===Uf||n===Nf||n===Of||n===Ff||n===Bf||n===kf||n===zf||n===Hf||n===Vf||n===Gf||n===Wf||n===Xf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===If)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Of)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ff)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xf)return o===on?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xu||n===Yf||n===$f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xu)return o===on?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===U_||n===qf||n===Kf||n===Zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Q_ extends Ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Q_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fs({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qr(new Ju(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends la{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new XE,m={},p=t.getContextAttributes();let M=null,T=null;const v=[],w=[],P=new Pt;let C=null;const N=new Rr;N.viewport=new Bn;const y=new Rr;y.viewport=new Bn;const S=[N,y],L=new cx;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=v[ne];return xe===void 0&&(xe=new Uh,v[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=v[ne];return xe===void 0&&(xe=new Uh,v[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=v[ne];return xe===void 0&&(xe=new Uh,v[ne]=xe),xe.getHandSpace()};function Z(ne){const xe=w.indexOf(ne.inputSource);if(xe===-1)return;const de=v[xe];de!==void 0&&(de.update(ne.inputSource,ne.frame,c||o),de.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",J);for(let ne=0;ne<v.length;ne++){const xe=w[ne];xe!==null&&(w[ne]=null,v[ne].disconnect(xe))}B=null,X=null,_.reset();for(const ne in m)delete m[ne];e.setRenderTarget(M),d=null,f=null,h=null,i=null,T=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",te),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Se=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?ec:Ql,Se=p.stencil?Jl:ta);const Je={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=h.createProjectionLayer(Je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ia(f.textureWidth,f.textureHeight,{format:$r,type:Ns,depthTexture:new $_(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ia(d.framebufferWidth,d.framebufferHeight,{format:$r,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(ne){for(let xe=0;xe<ne.removed.length;xe++){const de=ne.removed[xe],Se=w.indexOf(de);Se>=0&&(w[Se]=null,v[Se].disconnect(de))}for(let xe=0;xe<ne.added.length;xe++){const de=ne.added[xe];let Se=w.indexOf(de);if(Se===-1){for(let Je=0;Je<v.length;Je++)if(Je>=w.length){w.push(de),Se=Je;break}else if(w[Je]===null){w[Je]=de,Se=Je;break}if(Se===-1)break}const se=v[Se];se&&se.connect(de)}}const Q=new q,W=new q;function ue(ne,xe,de){Q.setFromMatrixPosition(xe.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const Se=Q.distanceTo(W),se=xe.projectionMatrix.elements,Je=de.projectionMatrix.elements,De=se[14]/(se[10]-1),Ue=se[14]/(se[10]+1),I=(se[9]+1)/se[5],Ae=(se[9]-1)/se[5],ze=(se[8]-1)/se[0],ut=(Je[8]+1)/Je[0],z=De*ze,gt=De*ut,Pe=Se/(-ze+ut),st=Pe*-ze;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(st),ne.translateZ(Pe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),se[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Qe=De+Pe,Vt=Ue+Pe,D=z-st,x=gt+(Se-st),G=I*Ue/Vt*Qe,ae=Ae*Ue/Vt*Qe;ne.projectionMatrix.makePerspective(D,x,G,ae,Qe,Vt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let xe=ne.near,de=ne.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(de=_.depthFar)),L.near=y.near=N.near=xe,L.far=y.far=N.far=de,(B!==L.near||X!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,X=L.far),L.layers.mask=ne.layers.mask|6,N.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;const Se=ne.parent,se=L.cameras;U(L,Se);for(let Je=0;Je<se.length;Je++)U(se[Je],Se);se.length===2?ue(L,N,y):L.projectionMatrix.copy(N.projectionMatrix),be(ne,L,Se)};function be(ne,xe,de){de===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(de.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=jf*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(ne){return m[ne]};let $e=null;function Ct(ne,xe){if(u=xe.getViewerPose(c||o),g=xe,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let Se=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Se=!0);for(let Ue=0;Ue<de.length;Ue++){const I=de[Ue];let Ae=null;if(d!==null)Ae=d.getViewport(I);else{const ut=h.getViewSubImage(f,I);Ae=ut.viewport,Ue===0&&(e.setRenderTargetTextures(T,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(T))}let ze=S[Ue];ze===void 0&&(ze=new Rr,ze.layers.enable(Ue),ze.viewport=new Bn,S[Ue]=ze),ze.matrix.fromArray(I.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(I.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Ue===0&&(L.matrix.copy(ze.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Se===!0&&L.cameras.push(ze)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ue=h.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(Ue,i.renderState)}if(se&&se.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ue=0;Ue<de.length;Ue++){const I=de[Ue].camera;if(I){let Ae=m[I];Ae||(Ae=new Q_,m[I]=Ae);const ze=h.getCameraImage(I);Ae.sourceTexture=ze}}}for(let de=0;de<v.length;de++){const Se=w[de],se=v[de];Se!==null&&se!==void 0&&se.update(Se,xe,c||o)}$e&&$e(ne,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),g=null}const et=new q_;et.setAnimationLoop(Ct),this.setAnimationLoop=function(ne){$e=ne},this.dispose=function(){}}}const No=new Os,$E=new En;function qE(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,V_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,v=M.envMapRotation;T&&(m.envMap.value=T,No.copy(v),No.x*=-1,No.y*=-1,No.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(No.y*=-1,No.z*=-1),m.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(No)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const v=T.program;n.uniformBlockBinding(M,v)}function c(M,T){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(M,w);const P=e.render.frame;s[M.id]!==P&&(f(M),s[M.id]=P)}function u(M){const T=h();M.__bindingPointIndex=T;const v=r.createBuffer(),w=M.__size,P=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=i[M.id],v=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let P=0,C=v.length;P<C;P++){const N=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,S=N.length;y<S;y++){const L=N[y];if(d(L,P,y,w)===!0){const B=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let te=0;te<X.length;te++){const J=X[te],Q=_(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,B+Z,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,T,v,w){const P=M.value,C=T+"_"+v;if(w[C]===void 0)return typeof P=="number"||typeof P=="boolean"?w[C]=P:w[C]=P.clone(),!0;{const N=w[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return w[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(M){const T=M.uniforms;let v=0;const w=16;for(let C=0,N=T.length;C<N;C++){const y=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,L=y.length;S<L;S++){const B=y[S],X=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,te=X.length;Z<te;Z++){const J=X[Z],Q=_(J),W=v%w,ue=W%Q.boundary,U=W+ue;v+=ue,U!==0&&w-U<Q.storage&&(v+=w-U),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}const P=v%w;return P>0&&(v+=w-P),M.__size=v,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ZE{constructor(e={}){const{canvas:t=bv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=uo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Cr;let P=0,C=0,N=null,y=-1,S=null;const L=new Bn,B=new Bn;let X=null;const Z=new en(0);let te=0,J=t.width,Q=t.height,W=1,ue=null,U=null;const be=new Bn(0,0,J,Q),$e=new Bn(0,0,J,Q);let Ct=!1;const et=new X_;let ne=!1,xe=!1;const de=new En,Se=new q,se=new Bn,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ue(){return N===null?W:1}let I=n;function Ae(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),I===null){const k="webgl2";if(I=Ae(k,b),I===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ze,ut,z,gt,Pe,st,Qe,Vt,D,x,G,ae,ce,ie,Oe,ge,we,Te,_e,Ee,qe,Ve,Me,tt;function O(){ze=new oM(I),ze.init(),Ve=new VE(I,ze),ut=new Qy(I,ze,e,Ve),z=new zE(I,ze),ut.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),gt=new cM(I),Pe=new AE,st=new HE(I,ze,z,Pe,ut,Ve,gt),Qe=new tM(v),Vt=new sM(v),D=new mx(I),Me=new jy(I,D),x=new aM(I,D,gt,Me),G=new hM(I,x,D,gt),_e=new uM(I,ut,st),ge=new eM(Pe),ae=new wE(v,Qe,Vt,ze,ut,Me,ge),ce=new qE(v,Pe),ie=new RE,Oe=new NE(ze),Te=new Zy(v,Qe,Vt,z,G,d,l),we=new BE(v,G,ut),tt=new KE(I,gt,ut,z),Ee=new Jy(I,ze,gt),qe=new lM(I,ze,gt),gt.programs=ae.programs,v.capabilities=ut,v.extensions=ze,v.properties=Pe,v.renderLists=ie,v.shadowMap=we,v.state=z,v.info=gt}O();const me=new YE(v,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(J,Q,!1))},this.getSize=function(b){return b.set(J,Q)},this.setSize=function(b,k,K=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,Q=k,t.width=Math.floor(b*W),t.height=Math.floor(k*W),K===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(J*W,Q*W).floor()},this.setDrawingBufferSize=function(b,k,K){J=b,Q=k,W=K,t.width=Math.floor(b*K),t.height=Math.floor(k*K),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,k,K,j){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,k,K,j),z.viewport(L.copy(be).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy($e)},this.setScissor=function(b,k,K,j){b.isVector4?$e.set(b.x,b.y,b.z,b.w):$e.set(b,k,K,j),z.scissor(B.copy($e).multiplyScalar(W).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){z.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,K=!0){let j=0;if(b){let H=!1;if(N!==null){const he=N.texture.format;H=he===Id||he===Ld||he===Dd}if(H){const he=N.texture.type,ye=he===Ns||he===ta||he===jl||he===Jl||he===Cd||he===Rd,He=Te.getClearColor(),Ie=Te.getClearAlpha(),Ze=He.r,Ke=He.g,Xe=He.b;ye?(g[0]=Ze,g[1]=Ke,g[2]=Xe,g[3]=Ie,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ze,_[1]=Ke,_[2]=Xe,_[3]=Ie,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}k&&(j|=I.DEPTH_BUFFER_BIT),K&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Te.dispose(),ie.dispose(),Oe.dispose(),Pe.dispose(),Qe.dispose(),Vt.dispose(),G.dispose(),Me.dispose(),tt.dispose(),ae.dispose(),me.dispose(),me.removeEventListener("sessionstart",vt),me.removeEventListener("sessionend",Re),it.stop()};function ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=gt.autoReset,k=we.enabled,K=we.autoUpdate,j=we.needsUpdate,H=we.type;O(),gt.autoReset=b,we.enabled=k,we.autoUpdate=K,we.needsUpdate=j,we.type=H}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){const k=b.target;k.removeEventListener("dispose",re),Be(k)}function Be(b){We(b),Pe.remove(b)}function We(b){const k=Pe.get(b).programs;k!==void 0&&(k.forEach(function(K){ae.releaseProgram(K)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,K,j,H,he){k===null&&(k=Je);const ye=H.isMesh&&H.matrixWorld.determinant()<0,He=Kt(b,k,K,j,H);z.setMaterial(j,ye);let Ie=K.index,Ze=1;if(j.wireframe===!0){if(Ie=x.getWireframeAttribute(K),Ie===void 0)return;Ze=2}const Ke=K.drawRange,Xe=K.attributes.position;let dt=Ke.start*Ze,St=(Ke.start+Ke.count)*Ze;he!==null&&(dt=Math.max(dt,he.start*Ze),St=Math.min(St,(he.start+he.count)*Ze)),Ie!==null?(dt=Math.max(dt,0),St=Math.min(St,Ie.count)):Xe!=null&&(dt=Math.max(dt,0),St=Math.min(St,Xe.count));const yt=St-dt;if(yt<0||yt===1/0)return;Me.setup(H,j,He,K,Ie);let Ut,Xt=Ee;if(Ie!==null&&(Ut=D.get(Ie),Xt=qe,Xt.setIndex(Ut)),H.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*Ue()),Xt.setMode(I.LINES)):Xt.setMode(I.TRIANGLES);else if(H.isLine){let nt=j.linewidth;nt===void 0&&(nt=1),z.setLineWidth(nt*Ue()),H.isLineSegments?Xt.setMode(I.LINES):H.isLineLoop?Xt.setMode(I.LINE_LOOP):Xt.setMode(I.LINE_STRIP)}else H.isPoints?Xt.setMode(I.POINTS):H.isSprite&&Xt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ga("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const nt=H._multiDrawStarts,Mt=H._multiDrawCounts,mt=H._multiDrawCount,Di=Ie?D.get(Ie).bytesPerElement:1,ds=Pe.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<mt;Tn++)ds.setValue(I,"_gl_DrawID",Tn),Xt.render(nt[Tn]/Di,Mt[Tn])}else if(H.isInstancedMesh)Xt.renderInstances(dt,yt,H.count);else if(K.isInstancedBufferGeometry){const nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Mt=Math.min(K.instanceCount,nt);Xt.renderInstances(dt,yt,Mt)}else Xt.render(dt,yt)};function It(b,k,K){b.transparent===!0&&b.side===Ps&&b.forceSinglePass===!1?(b.side=Qi,b.needsUpdate=!0,vn(b,k,K),b.side=mo,b.needsUpdate=!0,vn(b,k,K),b.side=Ps):vn(b,k,K)}this.compile=function(b,k,K=null){K===null&&(K=b),p=Oe.get(K),p.init(k),T.push(p),K.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),b!==K&&b.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const He=he[ye];It(He,K,H),j.add(He)}else It(he,K,H),j.add(he)}),p=T.pop(),j},this.compileAsync=function(b,k,K=null){const j=this.compile(b,k,K);return new Promise(H=>{function he(){if(j.forEach(function(ye){Pe.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){H(b);return}setTimeout(he,10)}ze.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Le=null;function je(b){Le&&Le(b)}function vt(){it.stop()}function Re(){it.start()}const it=new q_;it.setAnimationLoop(je),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(b){Le=b,me.setAnimationLoop(b),b===null?it.stop():it.start()},me.addEventListener("sessionstart",vt),me.addEventListener("sessionend",Re),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,N),p=Oe.get(b,T.length),p.init(k),T.push(p),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(de,as,k.reversedDepth),xe=this.localClippingEnabled,ne=ge.init(this.clippingPlanes,xe),m=ie.get(b,M.length),m.init(),M.push(m),me.enabled===!0&&me.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&Ge(he,k,-1/0,v.sortObjects)}Ge(b,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,U),De=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,De&&Te.addToRenderList(m,b),this.info.render.frame++,ne===!0&&ge.beginShadows();const K=p.state.shadowsArray;we.render(K,b,k),ne===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const he=k.cameras;if(H.length>0)for(let ye=0,He=he.length;ye<He;ye++){const Ie=he[ye];gn(j,H,b,Ie)}De&&Te.render(b);for(let ye=0,He=he.length;ye<He;ye++){const Ie=he[ye];at(m,b,Ie,Ie.viewport)}}else H.length>0&&gn(j,H,b,k),De&&Te.render(b),at(m,b,k);N!==null&&C===0&&(st.updateMultisampleRenderTarget(N),st.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(v,b,k),Me.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],ne===!0&&ge.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ge(b,k,K,j){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){j&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const ye=G.update(b),He=b.material;He.visible&&m.push(b,ye,He,K,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const ye=G.update(b),He=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),se.copy(ye.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const Ie=ye.groups;for(let Ze=0,Ke=Ie.length;Ze<Ke;Ze++){const Xe=Ie[Ze],dt=He[Xe.materialIndex];dt&&dt.visible&&m.push(b,ye,dt,K,se.z,Xe)}}else He.visible&&m.push(b,ye,He,K,se.z,null)}}const he=b.children;for(let ye=0,He=he.length;ye<He;ye++)Ge(he[ye],k,K,j)}function at(b,k,K,j){const H=b.opaque,he=b.transmissive,ye=b.transparent;p.setupLightsView(K),ne===!0&&ge.setGlobalState(v.clippingPlanes,K),j&&z.viewport(L.copy(j)),H.length>0&&xt(H,k,K),he.length>0&&xt(he,k,K),ye.length>0&&xt(ye,k,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function gn(b,k,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ia(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?hc:Ns,minFilter:Xo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const he=p.state.transmissionRenderTarget[j.id],ye=j.viewport||L;he.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const He=v.getRenderTarget(),Ie=v.getActiveCubeFace(),Ze=v.getActiveMipmapLevel();v.setRenderTarget(he),v.getClearColor(Z),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),De&&Te.render(K);const Ke=v.toneMapping;v.toneMapping=uo;const Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ne===!0&&ge.setGlobalState(v.clippingPlanes,j),xt(b,K,j),st.updateMultisampleRenderTarget(he),st.updateRenderTargetMipmap(he),ze.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let St=0,yt=k.length;St<yt;St++){const Ut=k[St],Xt=Ut.object,nt=Ut.geometry,Mt=Ut.material,mt=Ut.group;if(Mt.side===Ps&&Xt.layers.test(j.layers)){const Di=Mt.side;Mt.side=Qi,Mt.needsUpdate=!0,$t(Xt,K,j,nt,Mt,mt),Mt.side=Di,Mt.needsUpdate=!0,dt=!0}}dt===!0&&(st.updateMultisampleRenderTarget(he),st.updateRenderTargetMipmap(he))}v.setRenderTarget(He,Ie,Ze),v.setClearColor(Z,te),Xe!==void 0&&(j.viewport=Xe),v.toneMapping=Ke}function xt(b,k,K){const j=k.isScene===!0?k.overrideMaterial:null;for(let H=0,he=b.length;H<he;H++){const ye=b[H],He=ye.object,Ie=ye.geometry,Ze=ye.group;let Ke=ye.material;Ke.allowOverride===!0&&j!==null&&(Ke=j),He.layers.test(K.layers)&&$t(He,k,K,Ie,Ke,Ze)}}function $t(b,k,K,j,H,he){b.onBeforeRender(v,k,K,j,H,he),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,k,K,j,b,he),H.transparent===!0&&H.side===Ps&&H.forceSinglePass===!1?(H.side=Qi,H.needsUpdate=!0,v.renderBufferDirect(K,k,j,H,b,he),H.side=mo,H.needsUpdate=!0,v.renderBufferDirect(K,k,j,H,b,he),H.side=Ps):v.renderBufferDirect(K,k,j,H,b,he),b.onAfterRender(v,k,K,j,H,he)}function vn(b,k,K){k.isScene!==!0&&(k=Je);const j=Pe.get(b),H=p.state.lights,he=p.state.shadowsArray,ye=H.state.version,He=ae.getParameters(b,H.state,he,k,K),Ie=ae.getProgramCacheKey(He);let Ze=j.programs;j.environment=b.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(b.isMeshStandardMaterial?Vt:Qe).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",re),Ze=new Map,j.programs=Ze);let Ke=Ze.get(Ie);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===ye)return tn(b,He),Ke}else He.uniforms=ae.getUniforms(b),b.onBeforeCompile(He,v),Ke=ae.acquireProgram(He,Ie),Ze.set(Ie,Ke),j.uniforms=He.uniforms;const Xe=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=ge.uniform),tn(b,He),j.needsLights=Jt(b),j.lightsStateVersion=ye,j.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function sn(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=yu.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function tn(b,k){const K=Pe.get(b);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Kt(b,k,K,j,H){k.isScene!==!0&&(k=Je),st.resetTextureUnits();const he=k.fog,ye=j.isMeshStandardMaterial?k.environment:null,He=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:el,Ie=(j.isMeshStandardMaterial?Vt:Qe).get(j.envMap||ye),Ze=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,St=!!K.morphAttributes.color;let yt=uo;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(yt=v.toneMapping);const Ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=Ut!==void 0?Ut.length:0,nt=Pe.get(j),Mt=p.state.lights;if(ne===!0&&(xe===!0||b!==S)){const hi=b===S&&j.id===y;ge.setState(j,b,hi)}let mt=!1;j.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Mt.state.version||nt.outputColorSpace!==He||H.isBatchedMesh&&nt.batching===!1||!H.isBatchedMesh&&nt.batching===!0||H.isBatchedMesh&&nt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&nt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&nt.instancing===!1||!H.isInstancedMesh&&nt.instancing===!0||H.isSkinnedMesh&&nt.skinning===!1||!H.isSkinnedMesh&&nt.skinning===!0||H.isInstancedMesh&&nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&nt.instancingMorph===!1&&H.morphTexture!==null||nt.envMap!==Ie||j.fog===!0&&nt.fog!==he||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ge.numPlanes||nt.numIntersection!==ge.numIntersection)||nt.vertexAlphas!==Ze||nt.vertexTangents!==Ke||nt.morphTargets!==Xe||nt.morphNormals!==dt||nt.morphColors!==St||nt.toneMapping!==yt||nt.morphTargetsCount!==Xt)&&(mt=!0):(mt=!0,nt.__version=j.version);let Di=nt.currentProgram;mt===!0&&(Di=vn(j,k,H));let ds=!1,Tn=!1,jr=!1;const fn=Di.getUniforms(),Yi=nt.uniforms;if(z.useProgram(Di.program)&&(ds=!0,Tn=!0,jr=!0),j.id!==y&&(y=j.id,Tn=!0),ds||S!==b){z.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fn.setValue(I,"projectionMatrix",b.projectionMatrix),fn.setValue(I,"viewMatrix",b.matrixWorldInverse);const qn=fn.map.cameraPosition;qn!==void 0&&qn.setValue(I,Se.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&fn.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&fn.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Tn=!0,jr=!0)}if(H.isSkinnedMesh){fn.setOptional(I,H,"bindMatrix"),fn.setOptional(I,H,"bindMatrixInverse");const hi=H.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),fn.setValue(I,"boneTexture",hi.boneTexture,st))}H.isBatchedMesh&&(fn.setOptional(I,H,"batchingTexture"),fn.setValue(I,"batchingTexture",H._matricesTexture,st),fn.setOptional(I,H,"batchingIdTexture"),fn.setValue(I,"batchingIdTexture",H._indirectTexture,st),fn.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&fn.setValue(I,"batchingColorTexture",H._colorsTexture,st));const gi=K.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&_e.update(H,K,Di),(Tn||nt.receiveShadow!==H.receiveShadow)&&(nt.receiveShadow=H.receiveShadow,fn.setValue(I,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yi.envMap.value=Ie,Yi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Yi.envMapIntensity.value=k.environmentIntensity),Tn&&(fn.setValue(I,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&xn(Yi,jr),he&&j.fog===!0&&ce.refreshFogUniforms(Yi,he),ce.refreshMaterialUniforms(Yi,j,W,Q,p.state.transmissionRenderTarget[b.id]),yu.upload(I,sn(nt),Yi,st)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(yu.upload(I,sn(nt),Yi,st),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&fn.setValue(I,"center",H.center),fn.setValue(I,"modelViewMatrix",H.modelViewMatrix),fn.setValue(I,"normalMatrix",H.normalMatrix),fn.setValue(I,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hi=j.uniformsGroups;for(let qn=0,Rn=hi.length;qn<Rn;qn++){const dn=hi[qn];tt.update(dn,Di),tt.bind(dn,Di)}}return Di}function xn(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Jt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,k,K){const j=Pe.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Pe.get(b.texture).__webglTexture=k,Pe.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const K=Pe.get(b);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const nn=I.createFramebuffer();this.setRenderTarget=function(b,k=0,K=0){N=b,P=k,C=K;let j=!0,H=null,he=!1,ye=!1;if(b){const Ie=Pe.get(b);if(Ie.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Ie.__webglFramebuffer===void 0)st.setupRenderTarget(b);else if(Ie.__hasExternalTextures)st.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Xe=b.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&Pe.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(b)}}const Ze=b.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ye=!0);const Ke=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[k])?H=Ke[k][K]:H=Ke[k],he=!0):b.samples>0&&st.useMultisampledRTT(b)===!1?H=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?H=Ke[K]:H=Ke,L.copy(b.viewport),B.copy(b.scissor),X=b.scissorTest}else L.copy(be).multiplyScalar(W).floor(),B.copy($e).multiplyScalar(W).floor(),X=Ct;if(K!==0&&(H=nn),z.bindFramebuffer(I.FRAMEBUFFER,H)&&j&&z.drawBuffers(b,H),z.viewport(L),z.scissor(B),z.setScissorTest(X),he){const Ie=Pe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,K)}else if(ye){const Ie=k;for(let Ze=0;Ze<b.textures.length;Ze++){const Ke=Pe.get(b.textures[Ze]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,K,Ie)}}else if(b!==null&&K!==0){const Ie=Pe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(b,k,K,j,H,he,ye,He=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){z.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ze=b.textures[He],Ke=Ze.format,Xe=Ze.type;if(!ut.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-j&&K>=0&&K<=b.height-H&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(k,K,j,H,Ve.convert(Ke),Ve.convert(Xe),he))}finally{const Ze=N!==null?Pe.get(N).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,k,K,j,H,he,ye,He=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie)if(k>=0&&k<=b.width-j&&K>=0&&K<=b.height-H){z.bindFramebuffer(I.FRAMEBUFFER,Ie);const Ze=b.textures[He],Ke=Ze.format,Xe=Ze.type;if(!ut.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.bufferData(I.PIXEL_PACK_BUFFER,he.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(k,K,j,H,Ve.convert(Ke),Ve.convert(Xe),0);const St=N!==null?Pe.get(N).__webglFramebuffer:null;z.bindFramebuffer(I.FRAMEBUFFER,St);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wv(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,he),I.deleteBuffer(dt),I.deleteSync(yt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,K=0){const j=Math.pow(2,-K),H=Math.floor(b.image.width*j),he=Math.floor(b.image.height*j),ye=k!==null?k.x:0,He=k!==null?k.y:0;st.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,ye,He,H,he),z.unbindTexture()};const rn=I.createFramebuffer(),_n=I.createFramebuffer();this.copyTextureToTexture=function(b,k,K=null,j=null,H=0,he=null){he===null&&(H!==0?(Ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let ye,He,Ie,Ze,Ke,Xe,dt,St,yt;const Ut=b.isCompressedTexture?b.mipmaps[he]:b.image;if(K!==null)ye=K.max.x-K.min.x,He=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Ze=K.min.x,Ke=K.min.y,Xe=K.isBox3?K.min.z:0;else{const gi=Math.pow(2,-H);ye=Math.floor(Ut.width*gi),He=Math.floor(Ut.height*gi),b.isDataArrayTexture?Ie=Ut.depth:b.isData3DTexture?Ie=Math.floor(Ut.depth*gi):Ie=1,Ze=0,Ke=0,Xe=0}j!==null?(dt=j.x,St=j.y,yt=j.z):(dt=0,St=0,yt=0);const Xt=Ve.convert(k.format),nt=Ve.convert(k.type);let Mt;k.isData3DTexture?(st.setTexture3D(k,0),Mt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(st.setTexture2DArray(k,0),Mt=I.TEXTURE_2D_ARRAY):(st.setTexture2D(k,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=I.getParameter(I.UNPACK_ROW_LENGTH),Di=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ds=I.getParameter(I.UNPACK_SKIP_PIXELS),Tn=I.getParameter(I.UNPACK_SKIP_ROWS),jr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const fn=b.isDataArrayTexture||b.isData3DTexture,Yi=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const gi=Pe.get(b),hi=Pe.get(k),qn=Pe.get(gi.__renderTarget),Rn=Pe.get(hi.__renderTarget);z.bindFramebuffer(I.READ_FRAMEBUFFER,qn.__webglFramebuffer),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let dn=0;dn<Ie;dn++)fn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.get(b).__webglTexture,H,Xe+dn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.get(k).__webglTexture,he,yt+dn)),I.blitFramebuffer(Ze,Ke,ye,He,dt,St,ye,He,I.DEPTH_BUFFER_BIT,I.NEAREST);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Pe.has(b)){const gi=Pe.get(b),hi=Pe.get(k);z.bindFramebuffer(I.READ_FRAMEBUFFER,rn),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,_n);for(let qn=0;qn<Ie;qn++)fn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gi.__webglTexture,H,Xe+qn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gi.__webglTexture,H),Yi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hi.__webglTexture,he,yt+qn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hi.__webglTexture,he),H!==0?I.blitFramebuffer(Ze,Ke,ye,He,dt,St,ye,He,I.COLOR_BUFFER_BIT,I.NEAREST):Yi?I.copyTexSubImage3D(Mt,he,dt,St,yt+qn,Ze,Ke,ye,He):I.copyTexSubImage2D(Mt,he,dt,St,Ze,Ke,ye,He);z.bindFramebuffer(I.READ_FRAMEBUFFER,null),z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Yi?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Mt,he,dt,St,yt,ye,He,Ie,Xt,nt,Ut.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,he,dt,St,yt,ye,He,Ie,Xt,Ut.data):I.texSubImage3D(Mt,he,dt,St,yt,ye,He,Ie,Xt,nt,Ut):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,he,dt,St,ye,He,Xt,nt,Ut.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,he,dt,St,Ut.width,Ut.height,Xt,Ut.data):I.texSubImage2D(I.TEXTURE_2D,he,dt,St,ye,He,Xt,nt,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Di),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ds),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jr),he===0&&k.generateMipmaps&&I.generateMipmap(Mt),z.unbindTexture()},this.copyTextureToTexture3D=function(b,k,K=null,j=null,H=0){return Ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,K,j,H)},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&st.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?st.setTextureCube(b,0):b.isData3DTexture?st.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?st.setTexture2DArray(b,0):st.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){P=0,C=0,N=null,z.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return as}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}}const Lm={type:"change"},Fd={type:"start"},eg={type:"end"},tu=new ju,Im=new no,jE=Math.cos(70*Tv.DEG2RAD),Qn=new q,ji=2*Math.PI,an={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6;class JE extends dx{constructor(e,t=null){super(e,t),this.state=an.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ha.ROTATE,MIDDLE:Ha.DOLLY,RIGHT:Ha.PAN},this.touches={ONE:Oa.ROTATE,TWO:Oa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new na,this._lastTargetPosition=new q,this._quat=new na().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new om,this._sphericalDelta=new om,this._scale=1,this._panOffset=new q,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new q,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eT.bind(this),this._onPointerDown=QE.bind(this),this._onPointerUp=tT.bind(this),this._onContextMenu=lT.bind(this),this._onMouseWheel=rT.bind(this),this._onKeyDown=sT.bind(this),this._onTouchStart=oT.bind(this),this._onTouchMove=aT.bind(this),this._onMouseDown=nT.bind(this),this._onMouseMove=iT.bind(this),this._interceptControlDown=cT.bind(this),this._interceptControlUp=uT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lm),this.update(),this.state=an.NONE}update(e=null){const t=this.object.position;Qn.copy(t).sub(this.target),Qn.applyQuaternion(this._quat),this._spherical.setFromVector3(Qn),this.autoRotate&&this.state===an.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ji:n>Math.PI&&(n-=ji),i<-Math.PI?i+=ji:i>Math.PI&&(i-=ji),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Qn.setFromSpherical(this._spherical),Qn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Qn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tu.origin.copy(this.object.position),tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tu.direction))<jE?this.object.lookAt(this.target):(Im.setFromNormalAndCoplanarPoint(this.object.up,this.target),tu.intersectPlane(Im,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(Lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ji/60*this.autoRotateSpeed*e:ji/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qn.setFromMatrixColumn(t,0),Qn.multiplyScalar(-e),this._panOffset.add(Qn)}_panUp(e,t){this.screenSpacePanning===!0?Qn.setFromMatrixColumn(t,1):(Qn.setFromMatrixColumn(t,0),Qn.crossVectors(this.object.up,Qn)),Qn.multiplyScalar(e),this._panOffset.add(Qn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qn.copy(i).sub(this.target);let s=Qn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function QE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eg),this.state=an.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ha.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=an.DOLLY;break;case Ha.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=an.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=an.ROTATE}break;case Ha.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=an.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=an.PAN}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Fd)}function iT(r){switch(this.state){case an.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case an.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case an.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function rT(r){this.enabled===!1||this.enableZoom===!1||this.state!==an.NONE||(r.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(eg))}function sT(r){this.enabled!==!1&&this._handleKeyDown(r)}function oT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Oa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=an.TOUCH_ROTATE;break;case Oa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=an.TOUCH_PAN;break;default:this.state=an.NONE}break;case 2:switch(this.touches.TWO){case Oa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=an.TOUCH_DOLLY_PAN;break;case Oa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=an.TOUCH_DOLLY_ROTATE;break;default:this.state=an.NONE}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(Fd)}function aT(r){switch(this._trackPointer(r),this.state){case an.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case an.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case an.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case an.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=an.NONE}}function lT(r){this.enabled!==!1&&r.preventDefault()}function cT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class us{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),us.nextNameID=us.nextNameID||0,this.$name.id=`lil-gui-name-${++us.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class hT extends us{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ed(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const fT={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ed,toHexString:ed},tc={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},dT={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=tc.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return tc.toHexString(i)}},pT={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=tc.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return tc.toHexString(i)}},mT=[fT,tc,dT,pT];function _T(r){return mT.find(e=>e.match(r))}class gT extends us{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_T(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ed(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Wh extends us{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class vT extends us{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+M),this.$input.value=this.getValue())},i=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,h;const f=5,d=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(o){const T=M.clientX-a,v=M.clientY-l;Math.abs(v)>f?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>f&&_()}if(!o){const T=M.clientY-c;h-=T*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,M,T,v,w)=>(p-M)/(T-M)*(w-v)+v,t=p=>{const M=this.$slider.getBoundingClientRect();let T=e(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(T)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const M=p.touches[0].clientX-a,T=p.touches[0].clientY-l;Math.abs(M)>Math.abs(T)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const T=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xT extends us{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ST extends us{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var yT=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function MT(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Um=!1;class Bd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Um&&a&&(MT(yT),Um=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new xT(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new vT(this,e,t,n,i,s);case"boolean":return new hT(this,e,t);case"string":return new ST(this,e,t);case"function":return new Wh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new gT(this,e,t,n)}addFolder(e){const t=new Bd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Wh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Wh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var ET=`varying vec2 vUv;

attribute vec3 aPosition;
attribute float aIndex;
attribute vec4 aTextureCoords;

uniform float uCurrentPage;
uniform float uPageThickness;
uniform float uPageWidth;
uniform float uPageHeight;
uniform float uMeshCount;
uniform float uTime;
uniform float uProgress;
uniform float uSplitProgress;
uniform float uPageSpacing;

uniform float uScrollY;
uniform float uMaxX;
uniform float uSpeedY;

varying vec4 vTextureCoords;
varying float vIndex;
varying float vRotationProgress;
varying vec3 vPosition;

mat3 getYrotationMatrix(float angle)
{
    return mat3(
        cos(angle), 0.0, sin(angle),
        0.0, 1.0, 0.0,
        -sin(angle), 0.0, cos(angle)
    );
}

mat3 getXrotationMatrix(float angle)
{
    return mat3(
        1.0, 0.0, 0.0,
        0.0, cos(angle), -sin(angle),
        0.0, sin(angle), cos(angle)
    );
}

float remap(float value, float originMin, float originMax)
{
    return clamp((value - originMin) / (originMax - originMin),0.,1.);
}

float getXwave(float x)
{
    return sin(x*2.) * 0.4;
}

void main()
{     
    
    float PI = 3.14159265359;

    
    vec3 rotationCenter = vec3(-uPageWidth*0.5, 0.0, 0.0);
    
    
    vec3 translatedPosition = position - rotationCenter;    
    
    

    float rotationAcclerationProgress = remap(uProgress,0.,0.3);

    
    float delayBeforeStart = (aIndex / uMeshCount);
    float localRotAccelerationProgress = clamp((rotationAcclerationProgress - delayBeforeStart), 0.0, 1.0);

    float yAngle = -(position.x*0.2*smoothstep(0.,0.3,rotationAcclerationProgress) - rotationAcclerationProgress*2.*PI - localRotAccelerationProgress*2.*PI);

    float fullSpeedRotationAngle = remap(uProgress,0.3,0.7);
    yAngle += fullSpeedRotationAngle*4.2*PI;    

    float stackingAngle = remap(uProgress,0.7,1.);
    
    yAngle += position.x*0.2*stackingAngle + (1.-localRotAccelerationProgress)*2.*PI*stackingAngle + PI*1.7*stackingAngle;

    float pageCrumple = (aIndex - (uMeshCount-1.)*0.5)*smoothstep(0.8,1.,stackingAngle)*((uPageWidth-translatedPosition.x-1.)*0.01);
    
    translatedPosition.z+= pageCrumple*(1.-uSplitProgress);
    
    float pageCrumpleAngle = (aIndex - (uMeshCount-1.)*0.5)*smoothstep(0.8,1.,stackingAngle)*((-pow(translatedPosition.x,2.))*0.002);
    yAngle+= pageCrumpleAngle;

    float stackingPages = (uMeshCount-aIndex) * uPageThickness*smoothstep(0.8,1.,stackingAngle);
    
    translatedPosition.z += stackingPages*(1.-uSplitProgress); 

    yAngle-= pageCrumpleAngle*uSplitProgress;

    yAngle-=uSplitProgress*PI*0.4;
    
    translatedPosition.z += uSplitProgress*uPageSpacing*( - (aIndex - (uMeshCount-1.)*0.5));        
    

    

    float boxCenterZ = uPageSpacing*( - (aIndex - (uMeshCount-1.)*0.5));        
    
    float maxZ = uMeshCount * (uPageSpacing + uPageThickness) * 0.5;

    
    float centerZProgress = boxCenterZ - uScrollY;
    float wrappedCenterZ = mod(centerZProgress + maxZ, 2.0 * maxZ) - maxZ - getXwave((position.y+uPageHeight*0.5)/uPageHeight)*clamp(uSpeedY*2.,-2.,2.    ); 
    
    
    float zOffset = wrappedCenterZ - boxCenterZ;
    
    translatedPosition.z += zOffset;
    
    
    
    
    
    

    
    
    
    vec3 rotatedPosition = getYrotationMatrix(yAngle) * translatedPosition;        

    rotatedPosition.z-=uSplitProgress;

    
    float initialRotationProgress = remap(uProgress,0.,0.15);

    
    rotatedPosition += rotationCenter;
    rotatedPosition.x += initialRotationProgress*uPageWidth*0.5; 
        

    float xAngle = -PI*0.2*initialRotationProgress;

    xAngle+=uSplitProgress*PI*0.2;
    

    vec3 newPosition = getXrotationMatrix(xAngle) * rotatedPosition;
        

    ////////////////////////tests//////////////////////

    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    

    vec4 modelPosition = modelMatrix * instanceMatrix * vec4(newPosition, 1.0);        

    

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;    

    vUv = uv;    
    vTextureCoords=aTextureCoords;
    vIndex=aIndex;
    vRotationProgress=localRotAccelerationProgress;
    
}`,TT=`varying vec2 vUv;
varying vec4 vTextureCoords;
uniform sampler2D uAtlas;

varying float vIndex;
varying float vRotationProgress;

void main()
{            
                 
    
    float xStart = vTextureCoords.x;
    float xEnd = vTextureCoords.y;
    float yStart = vTextureCoords.z;
    float yEnd = vTextureCoords.w;

     vec2 atlasUV = vec2(
        mix(xStart, xEnd, vUv.x),
        mix(yStart, yEnd, 1.-vUv.y)
    );

    if(vRotationProgress==0. && vIndex!=0.)
    {
        discard;
    }
    
    
    vec4 color = texture2D(uAtlas, atlasUV);
    
    gl_FragColor = color;
}`;function Cs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},kd,_i,Mn,Lr=1e8,hn=1/Lr,td=Math.PI*2,bT=td/4,wT=0,ng=Math.sqrt,AT=Math.cos,CT=Math.sin,ui=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},Bs=function(e){return typeof e=="number"},zd=function(e){return typeof e>"u"},fs=function(e){return typeof e=="object"},tr=function(e){return e!==!1},Hd=function(){return typeof window<"u"},nu=function(e){return In(e)||ui(e)},ig=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pi=Array.isArray,nd=/(?:-?\.?\d|\.)+/gi,rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ba=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sg=/[+-]=-?[.\d]+/,og=/[^,'"\[\]\s]+/gi,RT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,An,ts,id,Vd,yr={},Fu={},ag,lg=function(e){return(Fu=il(e,yr))&&sr},Gd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nc=function(e,t){return!t&&console.warn(e)},cg=function(e,t){return e&&(yr[e]=t)&&Fu&&(Fu[e]=t)||yr},ic=function(){return 0},PT={suppressEvents:!0,isStart:!0,kill:!1},Mu={suppressEvents:!0,kill:!1},DT={suppressEvents:!0},Wd={},ho=[],rd={},ug,pr={},Yh={},Nm=30,Eu=[],Xd="",Yd=function(e){var t=e[0],n,i;if(fs(t)||In(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Eu.length;i--&&!Eu[i].targetTest(t););n=Eu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ug(e[i],n)))||e.splice(i,1);return e},qo=function(e){return e._gsap||Yd(Ir(e))[0]._gsap},hg=function(e,t,n){return(n=e[t])&&In(n)?e[t]():zd(n)&&e.getAttribute&&e.getAttribute(t)||n},nr=function(e,t){return(e=e.split(",")).forEach(t)||e},Fn=function(e){return Math.round(e*1e5)/1e5||0},$n=function(e){return Math.round(e*1e7)/1e7||0},Xa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},LT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Bu=function(){var e=ho.length,t=ho.slice(0),n,i;for(rd={},ho.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$d=function(e){return!!(e._initted||e._startAt||e.add)},fg=function(e,t,n,i){ho.length&&!_i&&Bu(),e.render(t,n,!!(_i&&t<0&&$d(e))),ho.length&&!_i&&Bu()},dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(og).length<2?t:ui(e)?e.trim():e},pg=function(e){return e},Mr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},IT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},il=function(e,t){for(var n in t)e[n]=t[n];return e},Om=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fs(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ku=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},kl=function(e){var t=e.parent||An,n=e.keyframes?IT(Pi(e.keyframes)):Mr;if(tr(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},UT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},eh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_o=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ko=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sd=function(e,t,n,i){return e._startAt&&(_i?e._startAt.revert(Mu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},OT=function r(e){return!e||e._ts&&r(e.parent)},Fm=function(e){return e._repeat?rl(e._tTime,e=e.duration()+e._rDelay)*e:0},rl=function(e,t){var n=Math.floor(e=$n(e/t));return e&&n===e?n-1:n},zu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},th=function(e){return e._end=$n(e._start+(e._tDur/Math.abs(e._ts||e._rts||hn)||0))},nh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$n(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),th(e),n._dirty||Ko(n,e)),e},_g=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zu(e.rawTime(),t),(!t._dur||pc(0,t.totalDuration(),n)-t._tTime>hn)&&t.render(n,!0)),Ko(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-hn}},rs=function(e,t,n,i){return t.parent&&_o(t),t._start=$n((Bs(n)?n:n||e!==An?Ar(e,n,t):e._time)+t._delay),t._end=$n(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mg(e,t,"_first","_last",e._sort?"_start":0),od(t)||(e._recent=t),i||_g(e,t),e._ts<0&&nh(e,e._tTime),e},gg=function(e,t){return(yr.ScrollTrigger||Gd("scrollTrigger",t))&&yr.ScrollTrigger.create(t,e)},vg=function(e,t,n,i,s){if(Kd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_i&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ug!==_r.frame)return ho.push(e),e._lazy=[s,i],1},FT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},od=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},BT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&FT(e)&&!(!e._initted&&od(e))||(e._ts<0||e._dp._ts<0)&&!od(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=pc(0,e._tDur,t),u=rl(l,a),e._yoyo&&u&1&&(o=1-o),u!==rl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_i||i||e._zTime===hn||!t&&e._zTime){if(!e._initted&&vg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?hn:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&sd(e,t,n,!0),e._onUpdate&&!n&&vr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_o(e,1),!n&&!_i&&(vr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},sl=function(e,t,n,i){var s=e._repeat,o=$n(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$n(o*(s+1)+e._rDelay*s):o,a>0&&!i&&nh(e,e._tTime=e._tDur*a),e.parent&&th(e),n||Ko(e.parent,e),e},Bm=function(e){return e instanceof Wi?Ko(e):sl(e,e._dur)},zT={_start:0,endTime:ic,totalDuration:ic},Ar=function r(e,t,n){var i=e.labels,s=e._recent||zT,o=e.duration()>=Lr?s.endTime(!1):e._dur,a,l,c;return ui(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pi(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},zl=function(e,t,n){var i=Bs(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tr(l.vars.inherit)&&l.parent;o.immediateRender=tr(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yn(t[0],o,t[s+1])},xo=function(e,t){return e||e===0?t(e):t},pc=function(e,t,n){return n<e?e:n>t?t:n},Ai=function(e,t){return!ui(e)||!(t=RT.exec(e))?"":t[1]},HT=function(e,t,n){return xo(n,function(i){return pc(e,t,i)})},ad=[].slice,xg=function(e,t){return e&&fs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fs(e[0]))&&!e.nodeType&&e!==ts},VT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ui(i)&&!t||xg(i,1)?(s=n).push.apply(s,Ir(i)):n.push(i)})||n},Ir=function(e,t,n){return Mn&&!t&&Mn.selector?Mn.selector(e):ui(e)&&!n&&(id||!ol())?ad.call((t||Vd).querySelectorAll(e),0):Pi(e)?VT(e,n):xg(e)?ad.call(e,0):e?[e]:[]},ld=function(e){return e=Ir(e)[0]||nc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ir(t,n.querySelectorAll?n:n===e?nc("Invalid scope")||Vd.createElement("div"):e)}},Sg=function(e){return e.sort(function(){return .5-Math.random()})},yg=function(e){if(In(e))return e;var t=fs(e)?e:{each:e},n=Zo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return ui(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,T,v,w,P,C,N,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Lr])[1],!y){for(C=-Lr;C<(C=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:i%y,M=y===Lr?0:l?_*h/y-.5:i/y|0,C=0,N=Lr,P=0;P<_;P++)T=P%y-p,v=M-(P/y|0),m[P]=w=c?Math.abs(c==="y"?v:T):ng(T*T+v*v),w>C&&(C=w),w<N&&(N=w);i==="random"&&Sg(m),m.max=C-N,m.min=N,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ai(t.amount||t.each)||0,n=n&&_<0?Dg(n):n}return _=(m[f]-m.min)/m.max||0,$n(m.b+(n?n(_):_)*m.v)+m.u}},cd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$n(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bs(n)?0:Ai(n))}},Mg=function(e,t){var n=Pi(e),i,s;return!n&&fs(e)&&(i=n=e.radius||Lr,e.values?(e=Ir(e.values),(s=!Bs(e[0]))&&(i*=i)):e=cd(e.increment)),xo(t,n?In(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Lr,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Bs(o)?u:u+Ai(o)}:cd(e))},Eg=function(e,t,n,i){return xo(Pi(e)?!t:n===!0?!!(n=0):!i,function(){return Pi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},GT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},WT=function(e,t){return function(n){return e(parseFloat(n))+(t||Ai(n))}},XT=function(e,t,n){return bg(e,t,0,1,n)},Tg=function(e,t,n){return xo(n,function(i){return e[~~t(i)]})},YT=function r(e,t,n){var i=t-e;return Pi(e)?Tg(e,r(0,e.length),t):xo(n,function(s){return(i+(s-e)%i)%i+e})},$T=function r(e,t,n){var i=t-e,s=i*2;return Pi(e)?Tg(e,r(0,e.length-1),t):xo(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},rc=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?og:nd),n+=e.substr(t,i-t)+Eg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},bg=function(e,t,n,i,s){var o=t-e,a=i-n;return xo(s,function(l){return n+((l-e)/o*a||0)})},qT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=ui(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Pi(e)&&!Pi(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=il(Pi(e)?[]:{},e));if(!u){for(l in t)qd.call(a,e,l,"get",t[l]);s=function(g){return Jd(g,a)||(o?e.p:e)}}}return xo(n,s)},km=function(e,t,n){var i=e.labels,s=Lr,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},vr=function(e,t,n){var i=e.vars,s=i[t],o=Mn,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ho.length&&Bu(),a&&(Mn=a),u=l?s.apply(c,l):s.call(c),Mn=o,u},Dl=function(e){return _o(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_i),e.progress()<1&&vr(e,"onInterrupt"),e},ka,wg=[],Ag=function(e){if(e)if(e=!e.name&&e.default||e,Hd()||e.headless){var t=e.name,n=In(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ic,render:Jd,add:qd,kill:ub,modifier:cb,rawVars:0},o={targetTest:0,get:0,getSetter:jd,aliases:{},register:0};if(ol(),e!==i){if(pr[t])return;Mr(i,Mr(ku(e,s),o)),il(i.prototype,il(s,ku(e,o))),pr[i.prop=t]=i,e.targetTest&&(Eu.push(i),Wd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cg(t,i),e.register&&e.register(sr,i,ir)}else wg.push(e)},un=255,Ll={aqua:[0,un,un],lime:[0,un,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,un],navy:[0,0,128],white:[un,un,un],olive:[128,128,0],yellow:[un,un,0],orange:[un,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[un,0,0],pink:[un,192,203],cyan:[0,un,un],transparent:[un,un,un,0]},$h=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*un+.5|0},Cg=function(e,t,n){var i=e?Bs(e)?[e>>16,e>>8&un,e&un]:0:Ll.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])i=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&un,i&un,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&un,e&un]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(nd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=$h(l+1/3,s,o),i[1]=$h(l,s,o),i[2]=$h(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(rg),n&&i.length<4&&(i[3]=1),i}else i=e.match(nd)||Ll.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/un,o=i[1]/un,a=i[2]/un,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rg=function(e){var t=[],n=[],i=-1;return e.split(fo).forEach(function(s){var o=s.match(Ba)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},zm=function(e,t,n){var i="",s=(e+i).match(fo),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Cg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Rg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fo,"1").split(Ba),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fo),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},fo=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),KT=/hsl[a]?\(/,Pg=function(e){var t=e.join(" "),n;if(fo.lastIndex=0,fo.test(t))return n=KT.test(t),e[1]=zm(e[1],n),e[0]=zm(e[0],n,Rg(e[1])),!0},sc,_r=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,T,v,w,P;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,T=w-o,(T>0||M)&&(P=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=T+(T>=s?4:s-T),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](w,f,P,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ag&&(!id&&Hd()&&(ts=id=window,Vd=ts.document||{},yr.gsap=sr,(ts.gsapVersions||(ts.gsapVersions=[])).push(sr.version),lg(Fu||ts.GreenSockGlobals||!ts.gsap&&ts||{}),wg.forEach(Ag)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},sc=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),sc=0,c=ic},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var T=p?function(v,w,P,C){m(v,w,P,C),h.remove(T)}:m;return h.remove(m),a[M?"unshift":"push"](T),ol(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),ol=function(){return!sc&&_r.wake()},Wt={},ZT=/^[\d.\-M][\d.\-,\s]/,jT=/["']/g,JT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jT,"").trim():+c,i=l.substr(a+1).trim();return t},QT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},eb=function(e){var t=(e+"").split("("),n=Wt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[JT(t[1])]:QT(e).split(",").map(dg)):Wt._CE&&ZT.test(e)?Wt._CE("",e):n},Dg=function(e){return function(t){return 1-e(1-t)}},Lg=function r(e,t){for(var n=e._first,i;n;)n instanceof Wi?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zo=function(e,t){return e&&(In(e)?e:Wt[e]||eb(e))||t},ua=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return nr(e,function(a){Wt[a]=yr[a]=s,Wt[o=a.toLowerCase()]=n;for(var l in s)Wt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[a+"."+l]=s[l]}),s},Ig=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/td*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*CT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ig(a);return s=td/s,l.config=function(c,u){return r(e,c,u)},l},Kh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ig(n);return i.config=function(s){return r(e,s)},i};nr("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ua(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;ua("Elastic",qh("in"),qh("out"),qh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ua("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ua("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ua("Circ",function(r){return-(ng(1-r*r)-1)});ua("Sine",function(r){return r===1?1:-AT(r*bT)+1});ua("Back",Kh("in"),Kh("out"),Kh());Wt.SteppedEase=Wt.steps=yr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-hn;return function(a){return((i*pc(0,o,a)|0)+s)*n}}};nl.ease=Wt["quad.out"];nr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xd+=r+","+r+"Params,"});var Ug=function(e,t){this.id=wT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hg,this.set=t?t.getSetter:jd},oc=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sl(this,+t.duration,1,1),this.data=t.data,Mn&&(this._ctx=Mn,Mn.data.push(this)),sc||_r.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ol(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nh(this,n),!s._dp||s.parent||_g(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===hn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?rl(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-hn?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-hn?0:this._rts,this.totalTime(pc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),th(this),NT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ol(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==hn&&(this._tTime-=hn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rs(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tr(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DT);var i=_i;return _i=n,$d(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_i=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ar(this,n),tr(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,tr(i)),this._dur||(this._zTime=-hn),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-hn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-hn,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-hn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=In(n)?n:pg,a=function(){var c=i.then;i.then=null,In(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Dl(this)},r})();Mr(oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-hn,_prom:0,_ps:!1,_rts:1});var Wi=(function(r){tg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tr(n.sortChildren),An&&rs(n.parent||An,Cs(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gg(Cs(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return zl(0,arguments,this),this},t.from=function(i,s,o){return zl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return zl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,kl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yn(i,s,Ar(this,o),1),this},t.call=function(i,s,o){return rs(this,Yn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Yn(i,o,Ar(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,kl(o).immediateRender=tr(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,kl(a).immediateRender=tr(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$n(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,M,T,v,w,P,C;if(this!==An&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,T=this._ts,p=!T,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=$n(u%m),u===l?(_=this._repeat,f=c):(w=$n(u/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=rl(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),P&&_&1&&(f=c-f,C=1),_!==w&&!this._lock){var N=P&&w&1,y=N===(P&&_&1);if(_<w&&(N=!N),a=N?0:u%c?c:u,this._lock=1,this.render(a||(C?0:$n(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&vr(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=N?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Lg(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kT(this,$n(a),$n(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!w&&(vr(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-hn);break}}d=g}else{d=this._last;for(var S=i<0?i:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||_i&&$d(d)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=S?-hn:hn);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-hn)._zTime=f>=a?1:-1,this._ts))return this._start=v,th(this),this.render(i,s,o);this._onUpdate&&!s&&vr(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_o(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(vr(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Bs(s)||(s=Ar(this,s,i)),!(i instanceof oc)){if(Pi(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ui(i))return this.addLabel(i,s);if(In(i))i=Yn.delayedCall(0,i);else return this}return this!==i?rs(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Lr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ui(i)?this.removeLabel(i):In(i)?this.killTweensOf(i):(i.parent===this&&eh(this,i),i===this._recent&&(this._recent=this._last),Ko(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$n(_r.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ar(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Yn.delayedCall(0,s||ic,o);return a.data="isPause",this._hasPause=1,rs(this,a,Ar(this,i))},t.removePause=function(i){var s=this._first;for(i=Ar(this,i);s;)s._start===i&&s.data==="isPause"&&_o(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ro!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ir(i),l=this._first,c=Bs(s),u;l;)l instanceof Yn?LT(l._targets,a)&&(c?(!ro||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ar(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Yn.to(o,Mr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||hn,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&sl(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Mr({startAt:{time:Ar(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),km(this,Ar(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),km(this,Ar(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+hn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ko(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ko(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Lr,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,rs(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;sl(o,o===An&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(An._ts&&(fg(An,zu(i,An)),ug=_r.frame),_r.frame>=Nm){Nm+=Sr.autoSleep||120;var s=An._first;if((!s||!s._ts)&&Sr.autoSleep&&_r._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_r.sleep()}}},e})(oc);Mr(Wi.prototype,{_lock:0,_hasPause:0,_forcing:0});var tb=function(e,t,n,i,s,o,a){var l=new ir(this._pt,e,t,0,1,zg,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=rc(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(Xh)||[];h=Xh.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Xa(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Xh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(sg.test(i)||p)&&(l.e=0),this._pt=l,l},qd=function(e,t,n,i,s,o,a,l,c,u){In(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:In(h)?c?e[t.indexOf("set")||!In(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=In(h)?c?ob:Bg:Zd,g;if(ui(i)&&(~i.indexOf("random(")&&(i=rc(i)),i.charAt(1)==="="&&(g=Xa(f,i)+(Ai(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ud)return!isNaN(f*i)&&i!==""?(g=new ir(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?lb:kg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Gd(t,i),tb.call(this,e,t,f,i,d,l||Sr.stringFilter,c))},nb=function(e,t,n,i,s){if(In(e)&&(e=Hl(e,s,t,n,i)),!fs(e)||e.style&&e.nodeType||Pi(e)||ig(e))return ui(e)?Hl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Hl(e[a],s,t,n,i);return o},Ng=function(e,t,n,i,s,o){var a,l,c,u;if(pr[e]&&(a=new pr[e]).init(s,a.rawVars?t[e]:nb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ir(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ka))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ro,ud,Kd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!kd,v=e.timeline,w,P,C,N,y,S,L,B,X,Z,te,J,Q;if(v&&(!f||!s)&&(s="none"),e._ease=Zo(s,nl.ease),e._yEase=h?Dg(Zo(h===!0?s:h,nl.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(B=m[0]?qo(m[0]).harness:0,J=B&&i[B.prop],w=ku(i,Wd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Mu:PT),_._lazy=0),o){if(_o(e._startAt=Yn.set(m,Mr({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&tr(l),startAt:null,delay:0,onUpdate:c&&function(){return vr(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_i||!a&&!d)&&e._startAt.revert(Mu),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Mr({overwrite:!1,data:"isFromStart",lazy:a&&!_&&tr(l),immediateRender:a,stagger:0,parent:p},w),J&&(C[B.prop]=J),_o(e._startAt=Yn.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_i?e._startAt.revert(Mu):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,hn,hn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&tr(l)||l&&!g,P=0;P<m.length;P++){if(y=m[P],L=y._gsap||Yd(m)[P]._gsap,e._ptLookup[P]=Z={},rd[L.id]&&ho.length&&Bu(),te=M===m?P:M.indexOf(y),B&&(X=new B).init(y,J||w,e,te,M)!==!1&&(e._pt=N=new ir(e._pt,y,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(W){Z[W]=N}),X.priority&&(S=1)),!B||J)for(C in w)pr[C]&&(X=Ng(C,w,e,te,y,M))?X.priority&&(S=1):Z[C]=N=qd.call(e,y,C,"get",w[C],te,M,0,i.stringFilter);e._op&&e._op[P]&&e.kill(y,e._op[P]),T&&e._pt&&(ro=e,An.killTweensOf(y,Z,e.globalTime(t)),Q=!e.parent,ro=0),e._pt&&l&&(rd[L.id]=1)}S&&Hg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&v.render(Lr,!0,!0)},ib=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ud=1,e.vars[t]="+=0",Kd(e,a),ud=0,l?nc(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Fn(n)+Ai(h.e)),h.b&&(h.b=u.s+Ai(h.b))},rb=function(e,t){var n=e[0]?qo(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=il({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},sb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Pi(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Hl=function(e,t,n,i,s){return In(e)?e.call(t,n,i,s):ui(e)&&~e.indexOf("random(")?rc(e):e},Og=Xd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fg={};nr(Og+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Fg[r]=1});var Yn=(function(r){tg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:kl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||An,T=(Pi(n)||ig(n)?Bs(n[0]):"length"in i)?[n]:Ir(n),v,w,P,C,N,y,S,L;if(a._targets=T.length?Yd(T):nc("GSAP target "+n+" not found. https://gsap.com",!Sr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||nu(c)||nu(u)){if(i=a.vars,v=a.timeline=new Wi({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:T}),v.kill(),v.parent=v._dp=Cs(a),v._start=0,f||nu(c)||nu(u)){if(C=T.length,S=f&&yg(f),fs(f))for(N in f)~Og.indexOf(N)&&(L||(L={}),L[N]=f[N]);for(w=0;w<C;w++)P=ku(i,Fg),P.stagger=0,p&&(P.yoyoEase=p),L&&il(P,L),y=T[w],P.duration=+Hl(c,Cs(a),w,y,T),P.delay=(+Hl(u,Cs(a),w,y,T)||0)-a._delay,!f&&C===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),v.to(y,P,S?S(w,y,T):0),v._ease=Wt.none;v.duration()?c=u=0:a.timeline=0}else if(g){kl(Mr(v.vars.defaults,{ease:"none"})),v._ease=Zo(g.ease||i.ease||"none");var B=0,X,Z,te;if(Pi(g))g.forEach(function(J){return v.to(T,J,">")}),v.duration();else{P={};for(N in g)N==="ease"||N==="easeEach"||sb(N,g[N],P,g.easeEach);for(N in P)for(X=P[N].sort(function(J,Q){return J.t-Q.t}),B=0,w=0;w<X.length;w++)Z=X[w],te={ease:Z.e,duration:(Z.t-(w?X[w-1].t:0))/100*c},te[N]=Z.v,v.to(T,te,B),B+=te.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!kd&&(ro=Cs(a),An.killTweensOf(T),ro=0),rs(M,Cs(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===$n(M._time)&&tr(h)&&OT(Cs(a))&&M.data!=="nested")&&(a._tTime=-hn,a.render(Math.max(0,-u)||0)),m&&gg(Cs(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-hn&&!u?l:i<hn?0:i,f,d,g,_,m,p,M,T,v;if(!c)BT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=$n(h%_),h===l?(g=this._repeat,f=c):(m=$n(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=rl(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(T&&this._yEase&&Lg(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render($n(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(vg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(vr(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&sd(this,i,s,o),vr(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&vr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&sd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_o(this,1),!s&&!(u&&!a)&&(h||a||p)&&(vr(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){sc||_r.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kd(this,c),u=this._ease(c/this._dur),ib(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(nh(this,0),this.parent||mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_i),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ro&&ro.vars.overwrite!==!0)._first||Dl(this),this.parent&&o!==this.timeline.totalDuration()&&sl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ir(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&UT(a,l))return s==="all"&&(this._pt=0),Dl(this);for(h=this._op=this._op||[],s!=="all"&&(ui(s)&&(_={},nr(s,function(M){return _[M]=1}),s=_),s=rb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&eh(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Dl(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return zl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return zl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return An.killTweensOf(i,s,o)},e})(oc);Mr(Yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nr("staggerTo,staggerFrom,staggerFromTo",function(r){Yn[r]=function(){var e=new Wi,t=ad.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Zd=function(e,t,n){return e[t]=n},Bg=function(e,t,n){return e[t](n)},ob=function(e,t,n,i){return e[t](i.fp,n)},ab=function(e,t,n){return e.setAttribute(t,n)},jd=function(e,t){return In(e[t])?Bg:zd(e[t])&&e.setAttribute?ab:Zd},kg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},lb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Jd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},cb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ub=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?eh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Hg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ir=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||kg,this.d=l||this,this.set=c||Zd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=hb,this.m=n,this.mt=s,this.tween=i},r})();nr(Xd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Wd[r]=1});yr.TweenMax=yr.TweenLite=Yn;yr.TimelineLite=yr.TimelineMax=Wi;An=new Wi({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sr.stringFilter=Pg;var jo=[],Tu={},fb=[],Hm=0,db=0,Zh=function(e){return(Tu[e]||fb).map(function(t){return t()})},hd=function(){var e=Date.now(),t=[];e-Hm>2&&(Zh("matchMediaInit"),jo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ts.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Zh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hm=e,Zh("matchMedia"))},Vg=(function(){function r(t,n){this.selector=n&&ld(n),this.data=[],this._r=[],this.isReverted=!1,this.id=db++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){In(n)&&(s=i,i=n,n=In);var o=this,a=function(){var c=Mn,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ld(s)),Mn=o,h=i.apply(o,arguments),In(h)&&o._r.push(h),Mn=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===In?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Mn;Mn=null,n(this),Mn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Wi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=jo.length;o--;)jo[o].id===this.id&&jo.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),pb=(function(){function r(t){this.contexts=[],this.scope=t,Mn&&Mn.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){fs(n)||(n={matches:n});var o=new Vg(0,s||this.scope),a=o.conditions={},l,c,u;Mn&&!o.selector&&(o.selector=Mn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ts.matchMedia(n[c]),l&&(jo.indexOf(o)<0&&jo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(hd):l.addEventListener("change",hd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Hu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ag(i)})},timeline:function(e){return new Wi(e)},getTweensOf:function(e,t){return An.getTweensOf(e,t)},getProperty:function(e,t,n,i){ui(e)&&(e=Ir(e)[0]);var s=qo(e||{}).get,o=n?pg:dg;return n==="native"&&(n=""),e&&(t?o((pr[t]&&pr[t].get||s)(e,t,n,i)):function(a,l,c){return o((pr[a]&&pr[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ir(e),e.length>1){var i=e.map(function(u){return sr.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=pr[t],a=qo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ka._pt=0,h.init(e,n?u+n:u,ka,0,[e]),h.render(1,h),ka._pt&&Jd(1,ka)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=sr.to(e,Mr((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return An.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zo(e.ease,nl.ease)),Om(nl,e||{})},config:function(e){return Om(Sr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!pr[a]&&!yr[a]&&nc(t+" effect requires "+a+" plugin.")}),Yh[t]=function(a,l,c){return n(Ir(a),Mr(l||{},s),c)},o&&(Wi.prototype[t]=function(a,l,c){return this.add(Yh[t](a,fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Wt[e]=Zo(t)},parseEase:function(e,t){return arguments.length?Zo(e,t):Wt},getById:function(e){return An.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wi(e),i,s;for(n.smoothChildTiming=tr(e.smoothChildTiming),An.remove(n),n._dp=0,n._time=n._tTime=An._time,i=An._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yn&&i.vars.onComplete===i._targets[0]))&&rs(n,i,i._start-i._delay),i=s;return rs(An,n,0),n},context:function(e,t){return e?new Vg(e,t):Mn},matchMedia:function(e){return new pb(e)},matchMediaRefresh:function(){return jo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hd()},addEventListener:function(e,t){var n=Tu[e]||(Tu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:YT,wrapYoyo:$T,distribute:yg,random:Eg,snap:Mg,normalize:XT,getUnit:Ai,clamp:HT,splitColor:Cg,toArray:Ir,selector:ld,mapRange:bg,pipe:GT,unitize:WT,interpolate:qT,shuffle:Sg},install:lg,effects:Yh,ticker:_r,updateRoot:Wi.updateRoot,plugins:pr,globalTimeline:An,core:{PropTween:ir,globals:cg,Tween:Yn,Timeline:Wi,Animation:oc,getCache:qo,_removeLinkedListItem:eh,reverting:function(){return _i},context:function(e){return e&&Mn&&(Mn.data.push(e),e._ctx=Mn),Mn},suppressOverwrites:function(e){return kd=e}}};nr("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Hu[r]=Yn[r]});_r.add(Wi.updateRoot);ka=Hu.to({},{duration:0});var mb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_b=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=mb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},jh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ui(s)&&(l={},nr(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}_b(a,s)}}}},sr=Hu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_i?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},jh("roundProps",cd),jh("modifiers"),jh("snap",Mg))||Hu;Yn.version=Wi.version=sr.version="3.13.0";ag=1;Hd()&&ol();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vm,so,Ya,Qd,Yo,Gm,ep,gb=function(){return typeof window<"u"},ks={},ko=180/Math.PI,$a=Math.PI/180,Da=Math.atan2,Wm=1e8,tp=/([A-Z])/g,vb=/(left|right|width|margin|padding|x)/i,xb=/[\s,\(]\S/,ls={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Eb=function(e,t,n){return e.style[t]=n},Tb=function(e,t,n){return e.style.setProperty(t,n)},bb=function(e,t,n){return e._gsap[t]=n},wb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ab=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Cb=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Cn="transform",rr=Cn+"Origin",Rb=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ks&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ls[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rs(i,a)}):this.tfm[e]=o.x?o[e]:Rs(i,e),e===rr&&(this.tfm.zOrigin=o.zOrigin);else return ls.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Cn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(rr,t,"")),e=Cn}(s||t)&&this.props.push(e,t,s[e])},Xg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Pb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ep(),(!s||!s.isStart)&&!n[Cn]&&(Xg(n),i.zOrigin&&n[rr]&&(n[rr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Yg=function(e,t){var n={target:e,props:[],revert:Pb,save:Rb};return e._gsap||sr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},$g,dd=function(e,t){var n=so.createElementNS?so.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):so.createElement(e);return n&&n.style?n:so.createElement(e)},Ur=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(tp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,al(t)||t,1)||""},Xm="O,Moz,ms,Ms,Webkit".split(","),al=function(e,t,n){var i=t||Yo,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xm[o]:"")+e},pd=function(){gb()&&window.document&&(Vm=window,so=Vm.document,Ya=so.documentElement,Yo=dd("div")||{style:{}},dd("div"),Cn=al(Cn),rr=Cn+"Origin",Yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$g=!!al("perspective"),ep=sr.core.reverting,Qd=1)},Ym=function(e){var t=e.ownerSVGElement,n=dd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ya.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ya.removeChild(n),s},$m=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qg=function(e){var t,n;try{t=e.getBBox()}catch{t=Ym(e),n=1}return t&&(t.width||t.height)||n||(t=Ym(e)),t&&!t.width&&!t.x&&!t.y?{x:+$m(e,["x","cx","x1"])||0,y:+$m(e,["y","cy","y1"])||0,width:0,height:0}:t},Kg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qg(e))},ra=function(e,t){if(t){var n=e.style,i;t in ks&&t!==rr&&(t=Cn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(tp,"-$1").toLowerCase())):n.removeAttribute(t)}},oo=function(e,t,n,i,s,o){var a=new ir(e._pt,t,n,0,1,o?Wg:Gg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},qm={deg:1,rad:1,turn:1},Db={grid:1,flex:1},go=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Yo.style,l=vb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||qm[i]||qm[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Kg(e),(d||o==="%")&&(ks[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Fn(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===so||!_.appendChild)&&(_=so.body),m=_._gsap,m&&d&&m.width&&l&&m.time===_r.time&&!m.uncache)return Fn(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:ra(e,t)}else(d||o==="%")&&!Db[Ur(_,"display")]&&(a.position=Ur(e,"position")),_===e&&(a.position="static"),_.appendChild(Yo),g=Yo[u],_.removeChild(Yo),a.position="absolute";return l&&d&&(m=qo(_),m.time=_r.time,m.width=_[u]),Fn(f?g*s/h:g&&s?h/g*s:0)},Rs=function(e,t,n,i){var s;return Qd||pd(),t in ls&&t!=="transform"&&(t=ls[t],~t.indexOf(",")&&(t=t.split(",")[0])),ks[t]&&t!=="transform"?(s=lc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gu(Ur(e,rr))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vu[t]&&Vu[t](e,t,n)||Ur(e,t)||hg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?go(e,t,s,n)+n:s},Lb=function(e,t,n,i){if(!n||n==="none"){var s=al(t,e,1),o=s&&Ur(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ur(e,"borderTopColor"))}var a=new ir(this._pt,e.style,t,0,1,zg),l=0,c=0,u,h,f,d,g,_,m,p,M,T,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ur(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ur(e,t)||i,_?e.style[t]=_:ra(e,t)),u=[n,i],Pg(u),n=u[0],i=u[1],f=n.match(Ba)||[],w=i.match(Ba)||[],w.length){for(;h=Ba.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Xa(d,m)+v),p=parseFloat(m),T=m.substr((p+"").length),l=Ba.lastIndex-T.length,T||(T=T||Sr.units[t]||v,l===i.length&&(i+=T,a.e+=T)),v!==T&&(d=go(e,t,_,T)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Wg:Gg;return sg.test(i)&&(a.e=0),this._pt=a,a},Km={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ib=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Km[n]||n,t[1]=Km[i]||i,t.join(" ")},Ub=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ks[a]&&(l=1,a=a==="transformOrigin"?rr:Cn),ra(n,a);l&&(ra(n,Cn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",lc(n,1),o.uncache=1,Xg(i)))}},Vu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ir(e._pt,t,n,0,0,Ub);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ac=[1,0,0,1,0,0],Zg={},jg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zm=function(e){var t=Ur(e,Cn);return jg(t)?ac:t.substr(7).match(rg).map(Fn)},np=function(e,t){var n=e._gsap||qo(e),i=e.style,s=Zm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ac:s):(s===ac&&!e.offsetParent&&e!==Ya&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ya.appendChild(e)),s=Zm(e),l?i.display=l:ra(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ya.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},md=function(e,t,n,i,s,o){var a=e._gsap,l=s||np(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],T=t.split(" "),v=parseFloat(T[0])||0,w=parseFloat(T[1])||0,P,C,N,y;n?l!==ac&&(C=d*m-g*_)&&(N=v*(m/C)+w*(-_/C)+(_*M-m*p)/C,y=v*(-g/C)+w*(d/C)-(d*M-g*p)/C,v=N,w=y):(P=qg(e),v=P.x+(~T[0].indexOf("%")?v/100*P.width:v),w=P.y+(~(T[1]||T[0]).indexOf("%")?w/100*P.height:w)),i||i!==!1&&a.smooth?(p=v-c,M=w-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[rr]="0px 0px",o&&(oo(o,a,"xOrigin",c,v),oo(o,a,"yOrigin",u,w),oo(o,a,"xOffset",h,a.xOffset),oo(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},lc=function(e,t){var n=e._gsap||new Ug(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ur(e,rr)||"0",u,h,f,d,g,_,m,p,M,T,v,w,P,C,N,y,S,L,B,X,Z,te,J,Q,W,ue,U,be,$e,Ct,et,ne;return u=h=f=_=m=p=M=T=v=0,d=g=1,n.svg=!!(e.getCTM&&Kg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Cn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Cn]!=="none"?l[Cn]:"")),i.scale=i.rotate=i.translate="none"),C=np(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),md(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,C)),w=n.xOrigin||0,P=n.yOrigin||0,C!==ac&&(L=C[0],B=C[1],X=C[2],Z=C[3],u=te=C[4],h=J=C[5],C.length===6?(d=Math.sqrt(L*L+B*B),g=Math.sqrt(Z*Z+X*X),_=L||B?Da(B,L)*ko:0,M=X||Z?Da(X,Z)*ko+_:0,M&&(g*=Math.abs(Math.cos(M*$a))),n.svg&&(u-=w-(w*L+P*X),h-=P-(w*B+P*Z))):(ne=C[6],Ct=C[7],U=C[8],be=C[9],$e=C[10],et=C[11],u=C[12],h=C[13],f=C[14],N=Da(ne,$e),m=N*ko,N&&(y=Math.cos(-N),S=Math.sin(-N),Q=te*y+U*S,W=J*y+be*S,ue=ne*y+$e*S,U=te*-S+U*y,be=J*-S+be*y,$e=ne*-S+$e*y,et=Ct*-S+et*y,te=Q,J=W,ne=ue),N=Da(-X,$e),p=N*ko,N&&(y=Math.cos(-N),S=Math.sin(-N),Q=L*y-U*S,W=B*y-be*S,ue=X*y-$e*S,et=Z*S+et*y,L=Q,B=W,X=ue),N=Da(B,L),_=N*ko,N&&(y=Math.cos(N),S=Math.sin(N),Q=L*y+B*S,W=te*y+J*S,B=B*y-L*S,J=J*y-te*S,L=Q,te=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Fn(Math.sqrt(L*L+B*B+X*X)),g=Fn(Math.sqrt(J*J+ne*ne)),N=Da(te,J),M=Math.abs(N)>2e-4?N*ko:0,v=et?1/(et<0?-et:et):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jg(Ur(e,Cn)),Q&&e.setAttribute("transform",Q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Fn(d),n.scaleY=Fn(g),n.rotation=Fn(_)+a,n.rotationX=Fn(m)+a,n.rotationY=Fn(p)+a,n.skewX=M+a,n.skewY=T+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[rr]=Gu(c)),n.xOffset=n.yOffset=0,n.force3D=Sr.force3D,n.renderTransform=n.svg?Ob:$g?Jg:Nb,n.uncache=0,n},Gu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jh=function(e,t,n){var i=Ai(t);return Fn(parseFloat(t)+parseFloat(go(e,"x",n+"px",i)))+i},Nb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jg(e,t)},Oo="0deg",Al="0px",Fo=") ",Jg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,T=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Oo||u!==Oo)){var P=parseFloat(u)*$a,C=Math.sin(P),N=Math.cos(P),y;P=parseFloat(h)*$a,y=Math.cos(P),o=Jh(M,o,C*y*-T),a=Jh(M,a,-Math.sin(P)*-T),l=Jh(M,l,N*y*-T+T)}m!==Al&&(v+="perspective("+m+Fo),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||o!==Al||a!==Al||l!==Al)&&(v+=l!==Al||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fo),c!==Oo&&(v+="rotate("+c+Fo),u!==Oo&&(v+="rotateY("+u+Fo),h!==Oo&&(v+="rotateX("+h+Fo),(f!==Oo||d!==Oo)&&(v+="skew("+f+", "+d+Fo),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Fo),M.style[Cn]=v||"translate(0, 0)"},Ob=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,T=parseFloat(o),v=parseFloat(a),w,P,C,N,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$a,c*=$a,w=Math.cos(l)*h,P=Math.sin(l)*h,C=Math.sin(l-c)*-f,N=Math.cos(l-c)*f,c&&(u*=$a,y=Math.tan(c-u),y=Math.sqrt(1+y*y),C*=y,N*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,P*=y)),w=Fn(w),P=Fn(P),C=Fn(C),N=Fn(N)):(w=h,N=f,P=C=0),(T&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(T=go(d,"x",o,"px"),v=go(d,"y",a,"px")),(g||_||m||p)&&(T=Fn(T+g-(g*w+_*C)+m),v=Fn(v+_-(g*P+_*N)+p)),(i||s)&&(y=d.getBBox(),T=Fn(T+i/100*y.width),v=Fn(v+s/100*y.height)),y="matrix("+w+","+P+","+C+","+N+","+T+","+v+")",d.setAttribute("transform",y),M&&(d.style[Cn]=y)},Fb=function(e,t,n,i,s){var o=360,a=ui(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ko:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Wm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Wm)%o-~~(c/o)*o)),e._pt=f=new ir(e._pt,t,n,i,c,Sb),f.e=u,f.u="deg",e._props.push(n),f},jm=function(e,t){for(var n in t)e[n]=t[n];return e},Bb=function(e,t,n){var i=jm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Cn]=t,a=lc(n,1),ra(n,Cn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Cn],o[Cn]=t,a=lc(n,1),o[Cn]=c);for(l in ks)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ai(c),g=Ai(u),h=d!==g?go(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ir(e._pt,a,l,h,f-h,fd),e._pt.u=g||0,e._props.push(l));jm(a,i)};nr("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Vu[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Rs(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Qg={name:"css",register:pd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,T,v,w,P,C,N;Qd||pd(),this.styles=this.styles||Yg(e),N=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(pr[_]&&Ng(_,t,n,i,e,s)))){if(d=typeof u,g=Vu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=rc(u)),g)g(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",fo.lastIndex=0,fo.test(c)||(m=Ai(c),p=Ai(u)),p?m!==p&&(c=go(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),N.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],ui(c)&&~c.indexOf("random(")&&(c=rc(c)),Ai(c+"")||c==="auto"||(c+=Sr.units[_]||Ai(Rs(e,_))||""),(c+"").charAt(1)==="="&&(c=Rs(e,_))):c=Rs(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in ls&&(_==="autoAlpha"&&(f===1&&Rs(e,"visibility")==="hidden"&&h&&(f=0),N.push("visibility",0,a.visibility),oo(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ls[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in ks,T){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ur(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(w=e._gsap,w.renderTransform&&!t.parseTransform||lc(e,t.parseTransform),P=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new ir(this._pt,a,Cn,0,1,w.renderTransform,w,0,-1),v.dep=1),_==="scale")this._pt=new ir(this._pt,w,"scaleY",w.scaleY,(M?Xa(w.scaleY,M+h):h)-w.scaleY||0,fd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){N.push(rr,0,a[rr]),u=Ib(u),w.svg?md(e,u,0,P,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&oo(this,w,"zOrigin",w.zOrigin,p),oo(this,a,_,Gu(c),Gu(u)));continue}else if(_==="svgOrigin"){md(e,u,1,P,0,this);continue}else if(_ in Zg){Fb(this,w,_,f,M?Xa(f,M+u):u);continue}else if(_==="smoothOrigin"){oo(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Bb(this,u,e);continue}}else _ in a||(_=al(_)||_);if(T||(h||h===0)&&(f||f===0)&&!xb.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Ai(u)||(_ in Sr.units?Sr.units[_]:m),m!==p&&(f=go(e,_,c,p)),this._pt=new ir(this._pt,T?w:a,_,f,(M?Xa(f,M+h):h)-f,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Mb:fd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yb);else if(_ in a)Lb.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Gd(_,u);continue}T||(_ in a?N.push(_,0,a[_]):typeof e[_]=="function"?N.push(_,2,e[_]()):N.push(_,1,c||e[_])),o.push(_)}}C&&Hg(this)},render:function(e,t){if(t.tween._time||!ep())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rs,aliases:ls,getSetter:function(e,t,n){var i=ls[t];return i&&i.indexOf(",")<0&&(t=i),t in ks&&t!==rr&&(e._gsap.x||Rs(e,"x"))?n&&Gm===n?t==="scale"?wb:bb:(Gm=n||{})&&(t==="scale"?Ab:Cb):e.style&&!zd(e.style[t])?Eb:~t.indexOf("-")?Tb:jd(e,t)},core:{_removeProperty:ra,_getMatrix:np}};sr.utils.checkPrefix=al;sr.core.getStyleSaver=Yg;(function(r,e,t,n){var i=nr(r+","+e+","+t,function(s){ks[s]=1});nr(e,function(s){Sr.units[s]="deg",Zg[s]=1}),ls[i[13]]=r+","+e,nr(n,function(s){var o=s.split(":");ls[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Sr.units[r]="px"});sr.registerPlugin(Qg);var Wu=sr.registerPlugin(Qg)||sr;Wu.core.Tween;function kb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qh,Jm;function zb(){if(Jm)return Qh;Jm=1;var r=!1,e,t,n,i,s,o,a,l,c,u,h,f,d,g,_;function m(){if(!r){r=!0;var M=navigator.userAgent,T=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(M),v=/(Mac OS X)|(Windows)|(Linux)/.exec(M);if(f=/\b(iPhone|iP[ao]d)/.exec(M),d=/\b(iP[ao]d)/.exec(M),u=/Android/i.exec(M),g=/FBAN\/\w+;/i.exec(M),_=/Mobile/i.exec(M),h=!!/Win64/.exec(M),T){e=T[1]?parseFloat(T[1]):T[5]?parseFloat(T[5]):NaN,e&&document&&document.documentMode&&(e=document.documentMode);var w=/(?:Trident\/(\d+.\d+))/.exec(M);o=w?parseFloat(w[1])+4:e,t=T[2]?parseFloat(T[2]):NaN,n=T[3]?parseFloat(T[3]):NaN,i=T[4]?parseFloat(T[4]):NaN,i?(T=/(?:Chrome\/(\d+\.\d+))/.exec(M),s=T&&T[1]?parseFloat(T[1]):NaN):s=NaN}else e=t=n=s=i=NaN;if(v){if(v[1]){var P=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(M);a=P?parseFloat(P[1].replace("_",".")):!0}else a=!1;l=!!v[2],c=!!v[3]}else a=l=c=!1}}var p={ie:function(){return m()||e},ieCompatibilityMode:function(){return m()||o>e},ie64:function(){return p.ie()&&h},firefox:function(){return m()||t},opera:function(){return m()||n},webkit:function(){return m()||i},safari:function(){return p.webkit()},chrome:function(){return m()||s},windows:function(){return m()||l},osx:function(){return m()||a},linux:function(){return m()||c},iphone:function(){return m()||f},mobile:function(){return m()||f||d||u||_},nativeApp:function(){return m()||g},android:function(){return m()||u},ipad:function(){return m()||d}};return Qh=p,Qh}var ef,Qm;function Hb(){if(Qm)return ef;Qm=1;var r=!!(typeof window<"u"&&window.document&&window.document.createElement),e={canUseDOM:r,canUseWorkers:typeof Worker<"u",canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};return ef=e,ef}var tf,e_;function Vb(){if(e_)return tf;e_=1;var r=Hb(),e;r.canUseDOM&&(e=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function t(n,i){if(!r.canUseDOM||i&&!("addEventListener"in document))return!1;var s="on"+n,o=s in document;if(!o){var a=document.createElement("div");a.setAttribute(s,"return;"),o=typeof a[s]=="function"}return!o&&e&&n==="wheel"&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}return tf=t,tf}var nf,t_;function Gb(){if(t_)return nf;t_=1;var r=zb(),e=Vb(),t=10,n=40,i=800;function s(o){var a=0,l=0,c=0,u=0;return"detail"in o&&(l=o.detail),"wheelDelta"in o&&(l=-o.wheelDelta/120),"wheelDeltaY"in o&&(l=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(a=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(a=l,l=0),c=a*t,u=l*t,"deltaY"in o&&(u=o.deltaY),"deltaX"in o&&(c=o.deltaX),(c||u)&&o.deltaMode&&(o.deltaMode==1?(c*=n,u*=n):(c*=i,u*=i)),c&&!a&&(a=c<1?-1:1),u&&!l&&(l=u<1?-1:1),{spinX:a,spinY:l,pixelX:c,pixelY:u}}return s.getEventType=function(){return r.firefox()?"DOMMouseScroll":e("wheel")?"wheel":"mousewheel"},nf=s,nf}var rf,n_;function Wb(){return n_||(n_=1,rf=Gb()),rf}var Xb=Wb();const Yb=kb(Xb);class $b{scene;instancedMesh;geometry;material;meshCount=30;pageThickness=.01;pageSpacing=1;debug;pageDimensions;scrollY;sizes;imageInfos=[];atlasTexture=null;touch;constructor({scene:e,debug:t,sizes:n}){this.scene=e,this.debug=t,this.sizes=n,this.pageDimensions={width:2,height:3},this.scrollY={target:0,current:0,direction:-1},this.touch={startX:0,lastX:0,isActive:!1},this.createGeometry(),this.loadTextureAtlas().then(()=>{this.createMaterial(),this.createMeshes();let i;i=Wu.timeline(),i.fromTo(this.material.uniforms.uProgress,{value:0},{value:1,duration:5,ease:"power2.inOut"}),i.fromTo(this.material.uniforms.uSplitProgress,{value:0},{value:1,duration:1,ease:"power2.inOut"},"-=0.6"),i.call(()=>{window.addEventListener("wheel",this.onWheel.bind(this)),this.addTouchListeners()})})}async loadTextureAtlas(){const t=["./webgl-magazine-assets/512/p1.jpg","./webgl-magazine-assets/512/p2.jpg","./webgl-magazine-assets/512/p3.jpg","./webgl-magazine-assets/512/p4.jpg","./webgl-magazine-assets/512/p5.jpg","./webgl-magazine-assets/512/p6.jpg","./webgl-magazine-assets/512/p7.jpg","./webgl-magazine-assets/512/p8.jpg","./webgl-magazine-assets/512/p9.jpg","./webgl-magazine-assets/512/p10.jpg","./webgl-magazine-assets/512/p11.jpg","./webgl-magazine-assets/512/p12.jpg","./webgl-magazine-assets/512/p13.jpg"].map(c=>new Promise(u=>{const h=new Image;h.onload=()=>u(h),h.src=c})),n=await Promise.all(t),i=Math.max(...n.map(c=>c.width));let s=0;n.forEach(c=>{s+=c.height});const o=document.createElement("canvas");o.width=i,o.height=s;const a=o.getContext("2d");let l=0;this.imageInfos=n.map(c=>{const u=c.width/c.height;a.drawImage(c,0,l);const h={width:c.width,height:c.height,aspectRatio:u,uvs:{xStart:0,xEnd:c.width/i,yStart:1-l/s,yEnd:1-(l+c.height)/s}};return l+=c.height,h}),this.atlasTexture=new Ri(o),this.atlasTexture.needsUpdate=!0}createMaterial(){this.material=new Fs({vertexShader:ET,fragmentShader:TT,transparent:!0,uniforms:{uProgress:new Xr(0),uSplitProgress:new Xr(0),uPageThickness:new Xr(this.pageThickness),uPageWidth:new Xr(this.pageDimensions.width),uPageHeight:new Xr(this.pageDimensions.height),uMeshCount:new Xr(this.meshCount),uTime:new Xr(0),uAtlas:new Xr(this.atlasTexture),uScrollY:{value:0},uSpeedY:{value:0},uPageSpacing:new Xr(this.pageSpacing)}})}onWheel(e){let n=Yb(e).pixelY*this.sizes.height/window.innerHeight;this.scrollY.target+=n,this.material.uniforms.uSpeedY.value+=n}addTouchListeners(){window.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!1}),window.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!1}),window.addEventListener("touchend",this.onTouchEnd.bind(this),{passive:!1})}removeTouchListeners(){window.removeEventListener("touchstart",this.onTouchStart.bind(this)),window.removeEventListener("touchmove",this.onTouchMove.bind(this)),window.removeEventListener("touchend",this.onTouchEnd.bind(this))}onTouchStart(e){e.preventDefault();const t=e.touches[0];this.touch.startX=t.clientX,this.touch.lastX=t.clientX,this.touch.isActive=!0}onTouchMove(e){if(!this.touch.isActive)return;e.preventDefault();const t=e.touches[0],i=(this.touch.lastX-t.clientX)*this.sizes.height/window.innerHeight*2;this.scrollY.target+=i,this.material.uniforms.uSpeedY.value+=i,this.touch.lastX=t.clientX}onTouchEnd(e){e.preventDefault(),this.touch.isActive=!1}resetScroll(){this.scrollY={target:0,current:0,direction:-1},this.touch={startX:0,lastX:0,isActive:!1},this.material.uniforms.uSpeedY.value=0,this.material.uniforms.uScrollY.value=0}createGeometry(){this.geometry=new ul(this.pageDimensions.width,this.pageDimensions.height,this.pageThickness,50,50,1)}createMeshes(){this.instancedMesh=new ex(this.geometry,this.material,this.meshCount);const e=new Float32Array(this.meshCount*4),t=new Float32Array(this.meshCount);for(let n=0;n<this.meshCount;n++){const i=n%this.imageInfos.length;e[n*4+0]=this.imageInfos[i].uvs.xStart,e[n*4+1]=this.imageInfos[i].uvs.xEnd,e[n*4+2]=this.imageInfos[i].uvs.yStart,e[n*4+3]=this.imageInfos[i].uvs.yEnd,t[n]=n}this.instancedMesh.geometry.setAttribute("aTextureCoords",new Uu(e,4)),this.instancedMesh.geometry.setAttribute("aIndex",new Uu(t,1)),this.scene.add(this.instancedMesh)}onResize(e){this.sizes=e}updateScroll(e){this.scrollY.target+=e,this.material.uniforms.uSpeedY.value+=e}render(){this.material&&(this.scrollY.current=Wu.utils.interpolate(this.scrollY.current,this.scrollY.target,.12),this.material.uniforms.uScrollY.value=this.scrollY.current,this.material.uniforms.uSpeedY.value*=.835)}}class qb{element;scene;camera;renderer;sizes;dimensions;time;clock;raycaster;mouse;orbitControls;debug;scroll;mediaInfoBlock;magazine;constructor({scroll:e}){this.scroll=e,this.element=document.getElementById("webgl"),this.mediaInfoBlock=document.getElementById("media-block"),this.time=0,this.createClock(),this.createScene(),this.createCamera(),this.createRenderer(),this.setSizes(),this.createRayCaster(),this.addEventListeners(),this.createDebug(),this.createMagazine(),this.debug.hide(),this.render()}createScene(){this.scene=new jv}createCamera(){this.camera=new Rr(75,window.innerWidth/window.innerHeight,.1,100),this.scene.add(this.camera),this.camera.position.z=6}createHelpers(){const e=new fx(5);this.scene.add(e)}createOrbitControls(){this.orbitControls=new JE(this.camera,this.renderer.domElement)}createMagazine(){this.magazine=new $b({scene:this.scene,debug:this.debug,sizes:this.sizes})}createRenderer(){this.dimensions={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(2,window.devicePixelRatio)},this.renderer=new ZE({canvas:this.element,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.render(this.scene,this.camera),this.renderer.setPixelRatio(this.dimensions.pixelRatio)}createDebug(){this.debug=new Bd}setSizes(){let e=this.camera.fov*(Math.PI/180),t=this.camera.position.z*Math.tan(e/2)*2,n=t*this.camera.aspect;this.sizes={width:n,height:t}}createClock(){this.clock=new ux}createRayCaster(){this.raycaster=new hx,this.mouse=new Pt}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children),n=t[0];n&&"material"in n.object&&t[0].object}addEventListeners(){window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}onResize(){this.dimensions={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(2,window.devicePixelRatio)},this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.setSizes(),this.renderer.setPixelRatio(this.dimensions.pixelRatio),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.magazine?.onResize(this.sizes)}render(){this.time=this.clock.getElapsedTime(),this.renderer.render(this.scene,this.camera),this.magazine?.render()}}var Kb="1.3.9";function e0(r,e,t){return Math.max(r,Math.min(e,t))}function Zb(r,e,t){return(1-t)*r+t*e}function jb(r,e,t,n){return Zb(r,e,1-Math.exp(-t*n))}function Jb(r,e){return(r%e+e)%e}var Qb=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=e0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=jb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function ew(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var tw=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=ew(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},t0=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},i_=100/6,eo={passive:!1},nw=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,eo),this.element.addEventListener("touchstart",this.onTouchStart,eo),this.element.addEventListener("touchmove",this.onTouchMove,eo),this.element.addEventListener("touchend",this.onTouchEnd,eo)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new t0;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,eo),this.element.removeEventListener("touchstart",this.onTouchStart,eo),this.element.removeEventListener("touchmove",this.onTouchMove,eo),this.element.removeEventListener("touchend",this.onTouchEnd,eo)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?i_:n===2?this.window.width:1,s=n===1?i_:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},r_=r=>Math.min(1,1.001-Math.pow(2,-10*r)),iw=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Qb;emitter=new t0;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:T=!1,anchors:v=!1,autoToggle:w=!1,allowNestedScroll:P=!1,__experimental__naiveDimensions:C=!1}={}){window.lenisVersion=Kb,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=r_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:T,anchors:v,autoToggle:w,allowNestedScroll:P,__experimental__naiveDimensions:C},this.dimensions=new tw(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new nw(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=e0(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=r_:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);i.computedStyle=w;const P=w.overflowX,C=w.overflowY;if(s=["auto","overlay","scroll"].includes(P),o=["auto","overlay","scroll"].includes(C),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const w=e!==0,P=t!==0;w&&s&&a&&(g="x"),P&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,M,T;if(g==="x")_=r.scrollLeft,m=c-h,p=e,M=s,T=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,M=o,T=l;else return!1;return(p>0?_<m:_>0)&&M&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Jb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}},Il={exports:{}},rw=Il.exports,s_;function sw(){return s_||(s_=1,(function(r,e){(function(t,n){n(e)})(rw,(function(t){function n(Y,E){for(var F=0;F<E.length;F++){var A=E[F];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(Y,A.key,A)}}function i(Y,E,F){return E&&n(Y.prototype,E),Y}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,l,c,u,h,f,d,g,_,m,p,M=function(){return s||typeof window<"u"&&(s=window.gsap)&&s.registerPlugin&&s},T=1,v=[],w=[],P=[],C=Date.now,N=function(E,F){return F},y=function(){var E=d.core,F=E.bridge||{},A=E._scrollers,R=E._proxies;A.push.apply(A,w),R.push.apply(R,P),w=A,P=R,N=function(le,ee){return F[le](ee)}},S=function(E,F){return~P.indexOf(E)&&P[P.indexOf(E)+1][F]},L=function(E){return!!~g.indexOf(E)},B=function(E,F,A,R,V){return E.addEventListener(F,A,{passive:R!==!1,capture:!!V})},X=function(E,F,A,R){return E.removeEventListener(F,A,!!R)},Z="scrollLeft",te="scrollTop",J=function(){return _&&_.isPressed||w.cache++},Q=function(E,F){var A=function R(V){if(V||V===0){T&&(a.history.scrollRestoration="manual");var le=_&&_.isPressed;V=R.v=Math.round(V)||(_&&_.iOS?1:0),E(V),R.cacheID=w.cache,le&&N("ss",V)}else(F||w.cache!==R.cacheID||N("ref"))&&(R.cacheID=w.cache,R.v=E());return R.v+R.offset};return A.offset=0,E&&A},W={s:Z,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Q(function(Y){return arguments.length?a.scrollTo(Y,ue.sc()):a.pageXOffset||l[Z]||c[Z]||u[Z]||0})},ue={s:te,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:W,sc:Q(function(Y){return arguments.length?a.scrollTo(W.sc(),Y):a.pageYOffset||l[te]||c[te]||u[te]||0})},U=function(E,F){return(F&&F._ctx&&F._ctx.selector||s.utils.toArray)(E)[0]||(typeof E=="string"&&s.config().nullTargetWarn!==!1?console.warn("Element not found:",E):null)},be=function(E,F){for(var A=F.length;A--;)if(F[A]===E||F[A].contains(E))return!0;return!1},$e=function(E,F){var A=F.s,R=F.sc;L(E)&&(E=l.scrollingElement||c);var V=w.indexOf(E),le=R===ue.sc?1:2;!~V&&(V=w.push(E)-1),w[V+le]||B(E,"scroll",J);var ee=w[V+le],ke=ee||(w[V+le]=Q(S(E,A),!0)||(L(E)?R:Q(function(ft){return arguments.length?E[A]=ft:E[A]})));return ke.target=E,ee||(ke.smooth=s.getProperty(E,"scrollBehavior")==="smooth"),ke},Ct=function(E,F,A){var R=E,V=E,le=C(),ee=le,ke=F||50,ft=Math.max(500,ke*3),Zt=function(ct,Pn){var pn=C();Pn||pn-le>ke?(V=R,R=ct,ee=le,le=pn):A?R+=ct:R=V+(ct-V)/(pn-ee)*(le-ee)},Bt=function(){V=R=A?0:R,ee=le=0},ot=function(ct){var Pn=ee,pn=V,Kn=C();return(ct||ct===0)&&ct!==R&&Zt(ct),le===ee||Kn-ee>ft?0:(R+(A?pn:-pn))/((A?Kn:le)-Pn)*1e3};return{update:Zt,reset:Bt,getVelocity:ot}},et=function(E,F){return F&&!E._gsapAllow&&E.preventDefault(),E.changedTouches?E.changedTouches[0]:E},ne=function(E){var F=Math.max.apply(Math,E),A=Math.min.apply(Math,E);return Math.abs(F)>=Math.abs(A)?F:A},xe=function(){d=s.core.globals().ScrollTrigger,d&&d.core&&y()},de=function(E){return s=E||M(),!o&&s&&typeof document<"u"&&document.body&&(a=window,l=document,c=l.documentElement,u=l.body,g=[a,l,c,u],s.utils.clamp,p=s.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",h=Se.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,m=Se.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return T=0},500),xe(),o=1),o};W.op=ue,w.cache=0;var Se=(function(){function Y(F){this.init(F)}var E=Y.prototype;return E.init=function(A){o||de(s)||console.warn("Please gsap.registerPlugin(Observer)"),d||xe();var R=A.tolerance,V=A.dragMinimum,le=A.type,ee=A.target,ke=A.lineHeight,ft=A.debounce,Zt=A.preventDefault,Bt=A.onStop,ot=A.onStopDelay,pe=A.ignore,ct=A.wheelSpeed,Pn=A.event,pn=A.onDragStart,Kn=A.onDragEnd,bn=A.onDrag,fi=A.onPress,wt=A.onRelease,Er=A.onRight,Sn=A.onLeft,_t=A.onUp,Ii=A.onDown,$i=A.onChangeX,rt=A.onChangeY,ri=A.onChange,pt=A.onToggleX,ms=A.onToggleY,Zn=A.onHover,Ui=A.onHoverEnd,Ni=A.onMove,ln=A.ignoreCheck,zn=A.isNormalizer,Hn=A.onGestureStart,$=A.onGestureEnd,jn=A.onWheel,To=A.onEnable,Hs=A.onDisable,Tr=A.onClick,_s=A.scrollSpeed,vi=A.capture,Vn=A.allowClicks,Oi=A.lockAxis,xi=A.onLockAxis;this.target=ee=U(ee)||c,this.vars=A,pe&&(pe=s.utils.toArray(pe)),R=R||1e-9,V=V||0,ct=ct||1,_s=_s||1,le=le||"wheel,touch,pointer",ft=ft!==!1,ke||(ke=parseFloat(a.getComputedStyle(u).lineHeight)||22);var Vs,Fi,qi,Yt,Un,Ki,ar,oe=this,lr=0,gs=0,Gs=A.passive||!Zt&&A.passive!==!1,Dn=$e(ee,W),vs=$e(ee,ue),Ws=Dn(),bo=vs(),si=~le.indexOf("touch")&&!~le.indexOf("pointer")&&m[0]==="pointerdown",Xs=L(ee),Nn=ee.ownerDocument||l,Or=[0,0,0],br=[0,0,0],xs=0,ml=function(){return xs=C()},Gn=function(ht,jt){return(oe.event=ht)&&pe&&be(ht.target,pe)||jt&&si&&ht.pointerType!=="touch"||ln&&ln(ht,jt)},Ac=function(){oe._vx.reset(),oe._vy.reset(),Fi.pause(),Bt&&Bt(oe)},Ss=function(){var ht=oe.deltaX=ne(Or),jt=oe.deltaY=ne(br),Fe=Math.abs(ht)>=R,Et=Math.abs(jt)>=R;ri&&(Fe||Et)&&ri(oe,ht,jt,Or,br),Fe&&(Er&&oe.deltaX>0&&Er(oe),Sn&&oe.deltaX<0&&Sn(oe),$i&&$i(oe),pt&&oe.deltaX<0!=lr<0&&pt(oe),lr=oe.deltaX,Or[0]=Or[1]=Or[2]=0),Et&&(Ii&&oe.deltaY>0&&Ii(oe),_t&&oe.deltaY<0&&_t(oe),rt&&rt(oe),ms&&oe.deltaY<0!=gs<0&&ms(oe),gs=oe.deltaY,br[0]=br[1]=br[2]=0),(Yt||qi)&&(Ni&&Ni(oe),qi&&(pn&&qi===1&&pn(oe),bn&&bn(oe),qi=0),Yt=!1),Ki&&!(Ki=!1)&&xi&&xi(oe),Un&&(jn(oe),Un=!1),Vs=0},da=function(ht,jt,Fe){Or[Fe]+=ht,br[Fe]+=jt,oe._vx.update(ht),oe._vy.update(jt),ft?Vs||(Vs=requestAnimationFrame(Ss)):Ss()},pa=function(ht,jt){Oi&&!ar&&(oe.axis=ar=Math.abs(ht)>Math.abs(jt)?"x":"y",Ki=!0),ar!=="y"&&(Or[2]+=ht,oe._vx.update(ht,!0)),ar!=="x"&&(br[2]+=jt,oe._vy.update(jt,!0)),ft?Vs||(Vs=requestAnimationFrame(Ss)):Ss()},Ys=function(ht){if(!Gn(ht,1)){ht=et(ht,Zt);var jt=ht.clientX,Fe=ht.clientY,Et=jt-oe.x,lt=Fe-oe.y,Tt=oe.isDragging;oe.x=jt,oe.y=Fe,(Tt||(Et||lt)&&(Math.abs(oe.startX-jt)>=V||Math.abs(oe.startY-Fe)>=V))&&(qi=Tt?2:1,Tt||(oe.isDragging=!0),pa(Et,lt))}},wo=oe.onPress=function(bt){Gn(bt,1)||bt&&bt.button||(oe.axis=ar=null,Fi.pause(),oe.isPressed=!0,bt=et(bt),lr=gs=0,oe.startX=oe.x=bt.clientX,oe.startY=oe.y=bt.clientY,oe._vx.reset(),oe._vy.reset(),B(zn?ee:Nn,m[1],Ys,Gs,!0),oe.deltaX=oe.deltaY=0,fi&&fi(oe))},kt=oe.onRelease=function(bt){if(!Gn(bt,1)){X(zn?ee:Nn,m[1],Ys,!0);var ht=!isNaN(oe.y-oe.startY),jt=oe.isDragging,Fe=jt&&(Math.abs(oe.x-oe.startX)>3||Math.abs(oe.y-oe.startY)>3),Et=et(bt);!Fe&&ht&&(oe._vx.reset(),oe._vy.reset(),Zt&&Vn&&s.delayedCall(.08,function(){if(C()-xs>300&&!bt.defaultPrevented){if(bt.target.click)bt.target.click();else if(Nn.createEvent){var lt=Nn.createEvent("MouseEvents");lt.initMouseEvent("click",!0,!0,a,1,Et.screenX,Et.screenY,Et.clientX,Et.clientY,!1,!1,!1,!1,0,null),bt.target.dispatchEvent(lt)}}})),oe.isDragging=oe.isGesturing=oe.isPressed=!1,Bt&&jt&&!zn&&Fi.restart(!0),qi&&Ss(),Kn&&jt&&Kn(oe),wt&&wt(oe,Fe)}},Ao=function(ht){return ht.touches&&ht.touches.length>1&&(oe.isGesturing=!0)&&Hn(ht,oe.isDragging)},Fr=function(){return(oe.isGesturing=!1)||$(oe)},Br=function(ht){if(!Gn(ht)){var jt=Dn(),Fe=vs();da((jt-Ws)*_s,(Fe-bo)*_s,1),Ws=jt,bo=Fe,Bt&&Fi.restart(!0)}},kr=function(ht){if(!Gn(ht)){ht=et(ht,Zt),jn&&(Un=!0);var jt=(ht.deltaMode===1?ke:ht.deltaMode===2?a.innerHeight:1)*ct;da(ht.deltaX*jt,ht.deltaY*jt,0),Bt&&!zn&&Fi.restart(!0)}},Co=function(ht){if(!Gn(ht)){var jt=ht.clientX,Fe=ht.clientY,Et=jt-oe.x,lt=Fe-oe.y;oe.x=jt,oe.y=Fe,Yt=!0,Bt&&Fi.restart(!0),(Et||lt)&&pa(Et,lt)}},ma=function(ht){oe.event=ht,Zn(oe)},ys=function(ht){oe.event=ht,Ui(oe)},_l=function(ht){return Gn(ht)||et(ht,Zt)&&Tr(oe)};Fi=oe._dc=s.delayedCall(ot||.25,Ac).pause(),oe.deltaX=oe.deltaY=0,oe._vx=Ct(0,50,!0),oe._vy=Ct(0,50,!0),oe.scrollX=Dn,oe.scrollY=vs,oe.isDragging=oe.isGesturing=oe.isPressed=!1,p(this),oe.enable=function(bt){return oe.isEnabled||(B(Xs?Nn:ee,"scroll",J),le.indexOf("scroll")>=0&&B(Xs?Nn:ee,"scroll",Br,Gs,vi),le.indexOf("wheel")>=0&&B(ee,"wheel",kr,Gs,vi),(le.indexOf("touch")>=0&&h||le.indexOf("pointer")>=0)&&(B(ee,m[0],wo,Gs,vi),B(Nn,m[2],kt),B(Nn,m[3],kt),Vn&&B(ee,"click",ml,!0,!0),Tr&&B(ee,"click",_l),Hn&&B(Nn,"gesturestart",Ao),$&&B(Nn,"gestureend",Fr),Zn&&B(ee,f+"enter",ma),Ui&&B(ee,f+"leave",ys),Ni&&B(ee,f+"move",Co)),oe.isEnabled=!0,oe.isDragging=oe.isGesturing=oe.isPressed=Yt=qi=!1,oe._vx.reset(),oe._vy.reset(),Ws=Dn(),bo=vs(),bt&&bt.type&&wo(bt),To&&To(oe)),oe},oe.disable=function(){oe.isEnabled&&(v.filter(function(bt){return bt!==oe&&L(bt.target)}).length||X(Xs?Nn:ee,"scroll",J),oe.isPressed&&(oe._vx.reset(),oe._vy.reset(),X(zn?ee:Nn,m[1],Ys,!0)),X(Xs?Nn:ee,"scroll",Br,vi),X(ee,"wheel",kr,vi),X(ee,m[0],wo,vi),X(Nn,m[2],kt),X(Nn,m[3],kt),X(ee,"click",ml,!0),X(ee,"click",_l),X(Nn,"gesturestart",Ao),X(Nn,"gestureend",Fr),X(ee,f+"enter",ma),X(ee,f+"leave",ys),X(ee,f+"move",Co),oe.isEnabled=oe.isPressed=oe.isDragging=!1,Hs&&Hs(oe))},oe.kill=oe.revert=function(){oe.disable();var bt=v.indexOf(oe);bt>=0&&v.splice(bt,1),_===oe&&(_=0)},v.push(oe),zn&&L(ee)&&(_=oe),oe.enable(Pn)},i(Y,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),Y})();Se.version="3.13.0",Se.create=function(Y){return new Se(Y)},Se.register=de,Se.getAll=function(){return v.slice()},Se.getById=function(Y){return v.filter(function(E){return E.vars.id===Y})[0]},M()&&s.registerPlugin(Se);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var se,Je,De,Ue,I,Ae,ze,ut,z,gt,Pe,st,Qe,Vt,D,x,G,ae,ce,ie,Oe,ge,we,Te,_e,Ee,qe,Ve,Me,tt,O,me,ve,Ce,fe=1,re=Date.now,Be=re(),We=0,It=0,Le=function(E,F,A){var R=nn(E)&&(E.substr(0,6)==="clamp("||E.indexOf("max")>-1);return A["_"+F+"Clamp"]=R,R?E.substr(6,E.length-7):E},je=function(E,F){return F&&(!nn(E)||E.substr(0,6)!=="clamp(")?"clamp("+E+")":E},vt=function Y(){return It&&requestAnimationFrame(Y)},Re=function(){return Vt=1},it=function(){return Vt=0},Ge=function(E){return E},at=function(E){return Math.round(E*1e5)/1e5||0},gn=function(){return typeof window<"u"},xt=function(){return se||gn()&&(se=window.gsap)&&se.registerPlugin&&se},$t=function(E){return!!~ze.indexOf(E)},vn=function(E){return(E==="Height"?O:De["inner"+E])||I["client"+E]||Ae["client"+E]},sn=function(E){return S(E,"getBoundingClientRect")||($t(E)?function(){return Tc.width=De.innerWidth,Tc.height=O,Tc}:function(){return Tn(E)})},tn=function(E,F,A){var R=A.d,V=A.d2,le=A.a;return(le=S(E,"getBoundingClientRect"))?function(){return le()[R]}:function(){return(F?vn(V):E["client"+V])||0}},Kt=function(E,F){return!F||~P.indexOf(E)?sn(E):function(){return Tc}},xn=function(E,F){var A=F.s,R=F.d2,V=F.d,le=F.a;return Math.max(0,(A="scroll"+R)&&(le=S(E,A))?le()-sn(E)()[V]:$t(E)?(I[A]||Ae[A])-vn(R):E[A]-E["offset"+R])},Jt=function(E,F){for(var A=0;A<ce.length;A+=3)(!F||~F.indexOf(ce[A+1]))&&E(ce[A],ce[A+1],ce[A+2])},nn=function(E){return typeof E=="string"},rn=function(E){return typeof E=="function"},_n=function(E){return typeof E=="number"},b=function(E){return typeof E=="object"},k=function(E,F,A){return E&&E.progress(F?0:1)&&A&&E.pause()},K=function(E,F){if(E.enabled){var A=E._ctx?E._ctx.add(function(){return F(E)}):F(E);A&&A.totalTime&&(E.callbackAnimation=A)}},j=Math.abs,H="left",he="top",ye="right",He="bottom",Ie="width",Ze="height",Ke="Right",Xe="Left",dt="Top",St="Bottom",yt="padding",Ut="margin",Xt="Width",nt="Height",Mt="px",mt=function(E){return De.getComputedStyle(E)},Di=function(E){var F=mt(E).position;E.style.position=F==="absolute"||F==="fixed"?F:"relative"},ds=function(E,F){for(var A in F)A in E||(E[A]=F[A]);return E},Tn=function(E,F){var A=F&&mt(E)[D]!=="matrix(1, 0, 0, 1, 0, 0)"&&se.to(E,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),R=E.getBoundingClientRect();return A&&A.progress(0).kill(),R},jr=function(E,F){var A=F.d2;return E["offset"+A]||E["client"+A]||0},fn=function(E){var F=[],A=E.labels,R=E.duration(),V;for(V in A)F.push(A[V]/R);return F},Yi=function(E){return function(F){return se.utils.snap(fn(E),F)}},gi=function(E){var F=se.utils.snap(E),A=Array.isArray(E)&&E.slice(0).sort(function(R,V){return R-V});return A?function(R,V,le){le===void 0&&(le=.001);var ee;if(!V)return F(R);if(V>0){for(R-=le,ee=0;ee<A.length;ee++)if(A[ee]>=R)return A[ee];return A[ee-1]}else for(ee=A.length,R+=le;ee--;)if(A[ee]<=R)return A[ee];return A[0]}:function(R,V,le){le===void 0&&(le=.001);var ee=F(R);return!V||Math.abs(ee-R)<le||ee-R<0==V<0?ee:F(V<0?R-E:R+E)}},hi=function(E){return function(F,A){return gi(fn(E))(F,A.direction)}},qn=function(E,F,A,R){return A.split(",").forEach(function(V){return E(F,V,R)})},Rn=function(E,F,A,R,V){return E.addEventListener(F,A,{passive:!R,capture:!!V})},dn=function(E,F,A,R){return E.removeEventListener(F,A,!!R)},mc=function(E,F,A){A=A&&A.wheelHandler,A&&(E(F,"wheel",A),E(F,"touchmove",A))},hp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_c={toggleActions:"play",anticipatePin:0},gc={top:0,left:0,center:.5,bottom:1,right:1},vc=function(E,F){if(nn(E)){var A=E.indexOf("="),R=~A?+(E.charAt(A-1)+1)*parseFloat(E.substr(A+1)):0;~A&&(E.indexOf("%")>A&&(R*=F/100),E=E.substr(0,A-1)),E=R+(E in gc?gc[E]*F:~E.indexOf("%")?parseFloat(E)*F/100:parseFloat(E)||0)}return E},xc=function(E,F,A,R,V,le,ee,ke){var ft=V.startColor,Zt=V.endColor,Bt=V.fontSize,ot=V.indent,pe=V.fontWeight,ct=Ue.createElement("div"),Pn=$t(A)||S(A,"pinType")==="fixed",pn=E.indexOf("scroller")!==-1,Kn=Pn?Ae:A,bn=E.indexOf("start")!==-1,fi=bn?ft:Zt,wt="border-color:"+fi+";font-size:"+Bt+";color:"+fi+";font-weight:"+pe+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return wt+="position:"+((pn||ke)&&Pn?"fixed;":"absolute;"),(pn||ke||!Pn)&&(wt+=(R===ue?ye:He)+":"+(le+parseFloat(ot))+"px;"),ee&&(wt+="box-sizing:border-box;text-align:left;width:"+ee.offsetWidth+"px;"),ct._isStart=bn,ct.setAttribute("class","gsap-marker-"+E+(F?" marker-"+F:"")),ct.style.cssText=wt,ct.innerText=F||F===0?E+"-"+F:E,Kn.children[0]?Kn.insertBefore(ct,Kn.children[0]):Kn.appendChild(ct),ct._offset=ct["offset"+R.op.d2],Sc(ct,0,R,bn),ct},Sc=function(E,F,A,R){var V={display:"block"},le=A[R?"os2":"p2"],ee=A[R?"p2":"os2"];E._isFlipped=R,V[A.a+"Percent"]=R?-100:0,V[A.a]=R?"1px":0,V["border"+le+Xt]=1,V["border"+ee+Xt]=0,V[A.p]=F+"px",se.set(E,V)},Dt=[],rh={},fl,fp=function(){return re()-We>34&&(fl||(fl=requestAnimationFrame(ps)))},ha=function(){(!we||!we.isPressed||we.startX>Ae.clientWidth)&&(w.cache++,we?fl||(fl=requestAnimationFrame(ps)):ps(),We||yo("scrollStart"),We=re())},sh=function(){Ee=De.innerWidth,_e=De.innerHeight},dl=function(E){w.cache++,(E===!0||!Qe&&!ge&&!Ue.fullscreenElement&&!Ue.webkitFullscreenElement&&(!Te||Ee!==De.innerWidth||Math.abs(De.innerHeight-_e)>De.innerHeight*.25))&&ut.restart(!0)},So={},w0=[],dp=function Y(){return dn(Nt,"scrollEnd",Y)||Eo(!0)},yo=function(E){return So[E]&&So[E].map(function(F){return F()})||w0},or=[],pp=function(E){for(var F=0;F<or.length;F+=5)(!E||or[F+4]&&or[F+4].query===E)&&(or[F].style.cssText=or[F+1],or[F].getBBox&&or[F].setAttribute("transform",or[F+2]||""),or[F+3].uncache=1)},oh=function(E,F){var A;for(x=0;x<Dt.length;x++)A=Dt[x],A&&(!F||A._ctx===F)&&(E?A.kill(1):A.revert(!0,!0));me=!0,F&&pp(F),F||yo("revert")},mp=function(E,F){w.cache++,(F||!Li)&&w.forEach(function(A){return rn(A)&&A.cacheID++&&(A.rec=0)}),nn(E)&&(De.history.scrollRestoration=Me=E)},Li,Mo=0,_p,A0=function(){if(_p!==Mo){var E=_p=Mo;requestAnimationFrame(function(){return E===Mo&&Eo(!0)})}},gp=function(){Ae.appendChild(tt),O=!we&&tt.offsetHeight||De.innerHeight,Ae.removeChild(tt)},vp=function(E){return z(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(F){return F.style.display=E?"none":"block"})},Eo=function(E,F){if(I=Ue.documentElement,Ae=Ue.body,ze=[De,Ue,I,Ae],We&&!E&&!me){Rn(Nt,"scrollEnd",dp);return}gp(),Li=Nt.isRefreshing=!0,w.forEach(function(R){return rn(R)&&++R.cacheID&&(R.rec=R())});var A=yo("refreshInit");ie&&Nt.sort(),F||oh(),w.forEach(function(R){rn(R)&&(R.smooth&&(R.target.style.scrollBehavior="auto"),R(0))}),Dt.slice(0).forEach(function(R){return R.refresh()}),me=!1,Dt.forEach(function(R){if(R._subPinOffset&&R.pin){var V=R.vars.horizontal?"offsetWidth":"offsetHeight",le=R.pin[V];R.revert(!0,1),R.adjustPinSpacing(R.pin[V]-le),R.refresh()}}),ve=1,vp(!0),Dt.forEach(function(R){var V=xn(R.scroller,R._dir),le=R.vars.end==="max"||R._endClamp&&R.end>V,ee=R._startClamp&&R.start>=V;(le||ee)&&R.setPositions(ee?V-1:R.start,le?Math.max(ee?V:R.start+1,V):R.end,!0)}),vp(!1),ve=0,A.forEach(function(R){return R&&R.render&&R.render(-1)}),w.forEach(function(R){rn(R)&&(R.smooth&&requestAnimationFrame(function(){return R.target.style.scrollBehavior="smooth"}),R.rec&&R(R.rec))}),mp(Me,1),ut.pause(),Mo++,Li=2,ps(2),Dt.forEach(function(R){return rn(R.vars.onRefresh)&&R.vars.onRefresh(R)}),Li=Nt.isRefreshing=!1,yo("refresh")},ah=0,yc=1,pl,ps=function(E){if(E===2||!Li&&!me){Nt.isUpdating=!0,pl&&pl.update(0);var F=Dt.length,A=re(),R=A-Be>=50,V=F&&Dt[0].scroll();if(yc=ah>V?-1:1,Li||(ah=V),R&&(We&&!Vt&&A-We>200&&(We=0,yo("scrollEnd")),Pe=Be,Be=A),yc<0){for(x=F;x-- >0;)Dt[x]&&Dt[x].update(0,R);yc=1}else for(x=0;x<F;x++)Dt[x]&&Dt[x].update(0,R);Nt.isUpdating=!1}fl=0},lh=[H,he,He,ye,Ut+St,Ut+Ke,Ut+dt,Ut+Xe,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mc=lh.concat([Ie,Ze,"boxSizing","max"+Xt,"max"+nt,"position",Ut,yt,yt+dt,yt+Ke,yt+St,yt+Xe]),C0=function(E,F,A){fa(A);var R=E._gsap;if(R.spacerIsNative)fa(R.spacerState);else if(E._gsap.swappedIn){var V=F.parentNode;V&&(V.insertBefore(E,F),V.removeChild(F))}E._gsap.swappedIn=!1},ch=function(E,F,A,R){if(!E._gsap.swappedIn){for(var V=lh.length,le=F.style,ee=E.style,ke;V--;)ke=lh[V],le[ke]=A[ke];le.position=A.position==="absolute"?"absolute":"relative",A.display==="inline"&&(le.display="inline-block"),ee[He]=ee[ye]="auto",le.flexBasis=A.flexBasis||"auto",le.overflow="visible",le.boxSizing="border-box",le[Ie]=jr(E,W)+Mt,le[Ze]=jr(E,ue)+Mt,le[yt]=ee[Ut]=ee[he]=ee[H]="0",fa(R),ee[Ie]=ee["max"+Xt]=A[Ie],ee[Ze]=ee["max"+nt]=A[Ze],ee[yt]=A[yt],E.parentNode!==F&&(E.parentNode.insertBefore(F,E),F.appendChild(E)),E._gsap.swappedIn=!0}},R0=/([A-Z])/g,fa=function(E){if(E){var F=E.t.style,A=E.length,R=0,V,le;for((E.t._gsap||se.core.getCache(E.t)).uncache=1;R<A;R+=2)le=E[R+1],V=E[R],le?F[V]=le:F[V]&&F.removeProperty(V.replace(R0,"-$1").toLowerCase())}},Ec=function(E){for(var F=Mc.length,A=E.style,R=[],V=0;V<F;V++)R.push(Mc[V],A[Mc[V]]);return R.t=E,R},P0=function(E,F,A){for(var R=[],V=E.length,le=A?8:0,ee;le<V;le+=2)ee=E[le],R.push(ee,ee in F?F[ee]:E[le+1]);return R.t=E.t,R},Tc={left:0,top:0},xp=function(E,F,A,R,V,le,ee,ke,ft,Zt,Bt,ot,pe,ct){rn(E)&&(E=E(ke)),nn(E)&&E.substr(0,3)==="max"&&(E=ot+(E.charAt(4)==="="?vc("0"+E.substr(3),A):0));var Pn=pe?pe.time():0,pn,Kn,bn;if(pe&&pe.seek(0),isNaN(E)||(E=+E),_n(E))pe&&(E=se.utils.mapRange(pe.scrollTrigger.start,pe.scrollTrigger.end,0,ot,E)),ee&&Sc(ee,A,R,!0);else{rn(F)&&(F=F(ke));var fi=(E||"0").split(" "),wt,Er,Sn,_t;bn=U(F,ke)||Ae,wt=Tn(bn)||{},(!wt||!wt.left&&!wt.top)&&mt(bn).display==="none"&&(_t=bn.style.display,bn.style.display="block",wt=Tn(bn),_t?bn.style.display=_t:bn.style.removeProperty("display")),Er=vc(fi[0],wt[R.d]),Sn=vc(fi[1]||"0",A),E=wt[R.p]-ft[R.p]-Zt+Er+V-Sn,ee&&Sc(ee,Sn,R,A-Sn<20||ee._isStart&&Sn>20),A-=A-Sn}if(ct&&(ke[ct]=E||-.001,E<0&&(E=0)),le){var Ii=E+A,$i=le._isStart;pn="scroll"+R.d2,Sc(le,Ii,R,$i&&Ii>20||!$i&&(Bt?Math.max(Ae[pn],I[pn]):le.parentNode[pn])<=Ii+1),Bt&&(ft=Tn(ee),Bt&&(le.style[R.op.p]=ft[R.op.p]-R.op.m-le._offset+Mt))}return pe&&bn&&(pn=Tn(bn),pe.seek(ot),Kn=Tn(bn),pe._caScrollDist=pn[R.p]-Kn[R.p],E=E/pe._caScrollDist*ot),pe&&pe.seek(Pn),pe?E:Math.round(E)},D0=/(webkit|moz|length|cssText|inset)/i,Sp=function(E,F,A,R){if(E.parentNode!==F){var V=E.style,le,ee;if(F===Ae){E._stOrig=V.cssText,ee=mt(E);for(le in ee)!+le&&!D0.test(le)&&ee[le]&&typeof V[le]=="string"&&le!=="0"&&(V[le]=ee[le]);V.top=A,V.left=R}else V.cssText=E._stOrig;se.core.getCache(E).uncache=1,F.appendChild(E)}},yp=function(E,F,A){var R=F,V=R;return function(le){var ee=Math.round(E());return ee!==R&&ee!==V&&Math.abs(ee-R)>3&&Math.abs(ee-V)>3&&(le=ee,A&&A()),V=R,R=Math.round(le),R}},bc=function(E,F,A){var R={};R[F.p]="+="+A,se.set(E,R)},Mp=function(E,F){var A=$e(E,F),R="_scroll"+F.p2,V=function le(ee,ke,ft,Zt,Bt){var ot=le.tween,pe=ke.onComplete,ct={};ft=ft||A();var Pn=yp(A,ft,function(){ot.kill(),le.tween=0});return Bt=Zt&&Bt||0,Zt=Zt||ee-ft,ot&&ot.kill(),ke[R]=ee,ke.inherit=!1,ke.modifiers=ct,ct[R]=function(){return Pn(ft+Zt*ot.ratio+Bt*ot.ratio*ot.ratio)},ke.onUpdate=function(){w.cache++,le.tween&&ps()},ke.onComplete=function(){le.tween=0,pe&&pe.call(ot)},ot=le.tween=se.to(E,ke),ot};return E[R]=A,A.wheelHandler=function(){return V.tween&&V.tween.kill()&&(V.tween=0)},Rn(E,"wheel",A.wheelHandler),Nt.isTouch&&Rn(E,"touchmove",A.wheelHandler),V},Nt=(function(){function Y(F,A){Je||Y.register(se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ve(this),this.init(F,A)}var E=Y.prototype;return E.init=function(A,R){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!It){this.update=this.refresh=this.kill=Ge;return}A=ds(nn(A)||_n(A)||A.nodeType?{trigger:A}:A,_c);var V=A,le=V.onUpdate,ee=V.toggleClass,ke=V.id,ft=V.onToggle,Zt=V.onRefresh,Bt=V.scrub,ot=V.trigger,pe=V.pin,ct=V.pinSpacing,Pn=V.invalidateOnRefresh,pn=V.anticipatePin,Kn=V.onScrubComplete,bn=V.onSnapComplete,fi=V.once,wt=V.snap,Er=V.pinReparent,Sn=V.pinSpacer,_t=V.containerAnimation,Ii=V.fastScrollEnd,$i=V.preventOverlaps,rt=A.horizontal||A.containerAnimation&&A.horizontal!==!1?W:ue,ri=!Bt&&Bt!==0,pt=U(A.scroller||De),ms=se.core.getCache(pt),Zn=$t(pt),Ui=("pinType"in A?A.pinType:S(pt,"pinType")||Zn&&"fixed")==="fixed",Ni=[A.onEnter,A.onLeave,A.onEnterBack,A.onLeaveBack],ln=ri&&A.toggleActions.split(" "),zn="markers"in A?A.markers:_c.markers,Hn=Zn?0:parseFloat(mt(pt)["border"+rt.p2+Xt])||0,$=this,jn=A.onRefreshInit&&function(){return A.onRefreshInit($)},To=tn(pt,Zn,rt),Hs=Kt(pt,Zn),Tr=0,_s=0,vi=0,Vn=$e(pt,rt),Oi,xi,Vs,Fi,qi,Yt,Un,Ki,ar,oe,lr,gs,Gs,Dn,vs,Ws,bo,si,Xs,Nn,Or,br,xs,ml,Gn,Ac,Ss,da,pa,Ys,wo,kt,Ao,Fr,Br,kr,Co,ma,ys;if($._startClamp=$._endClamp=!1,$._dir=rt,pn*=45,$.scroller=pt,$.scroll=_t?_t.time.bind(_t):Vn,Fi=Vn(),$.vars=A,R=R||A.animation,"refreshPriority"in A&&(ie=1,A.refreshPriority===-9999&&(pl=$)),ms.tweenScroll=ms.tweenScroll||{top:Mp(pt,ue),left:Mp(pt,W)},$.tweenTo=Oi=ms.tweenScroll[rt.p],$.scrubDuration=function(Fe){Ao=_n(Fe)&&Fe,Ao?kt?kt.duration(Fe):kt=se.to(R,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ao,paused:!0,onComplete:function(){return Kn&&Kn($)}}):(kt&&kt.progress(1).kill(),kt=0)},R&&(R.vars.lazy=!1,R._initted&&!$.isReverted||R.vars.immediateRender!==!1&&A.immediateRender!==!1&&R.duration()&&R.render(0,!0,!0),$.animation=R.pause(),R.scrollTrigger=$,$.scrubDuration(Bt),Ys=0,ke||(ke=R.vars.id)),wt&&((!b(wt)||wt.push)&&(wt={snapTo:wt}),"scrollBehavior"in Ae.style&&se.set(Zn?[Ae,I]:pt,{scrollBehavior:"auto"}),w.forEach(function(Fe){return rn(Fe)&&Fe.target===(Zn?Ue.scrollingElement||I:pt)&&(Fe.smooth=!1)}),Vs=rn(wt.snapTo)?wt.snapTo:wt.snapTo==="labels"?Yi(R):wt.snapTo==="labelsDirectional"?hi(R):wt.directional!==!1?function(Fe,Et){return gi(wt.snapTo)(Fe,re()-_s<500?0:Et.direction)}:se.utils.snap(wt.snapTo),Fr=wt.duration||{min:.1,max:2},Fr=b(Fr)?gt(Fr.min,Fr.max):gt(Fr,Fr),Br=se.delayedCall(wt.delay||Ao/2||.1,function(){var Fe=Vn(),Et=re()-_s<500,lt=Oi.tween;if((Et||Math.abs($.getVelocity())<10)&&!lt&&!Vt&&Tr!==Fe){var Tt=(Fe-Yt)/Dn,oi=R&&!ri?R.totalProgress():Tt,Gt=Et?0:(oi-wo)/(re()-Pe)*1e3||0,On=se.utils.clamp(-Tt,1-Tt,j(Gt/2)*Gt/.185),Si=Tt+(wt.inertia===!1?0:On),Ln,yn,cn=wt,zr=cn.onStart,wn=cn.onInterrupt,cr=cn.onComplete;if(Ln=Vs(Si,$),_n(Ln)||(Ln=Si),yn=Math.max(0,Math.round(Yt+Ln*Dn)),Fe<=Un&&Fe>=Yt&&yn!==Fe){if(lt&&!lt._initted&&lt.data<=j(yn-Fe))return;wt.inertia===!1&&(On=Ln-Tt),Oi(yn,{duration:Fr(j(Math.max(j(Si-oi),j(Ln-oi))*.185/Gt/.05||0)),ease:wt.ease||"power3",data:j(yn-Fe),onInterrupt:function(){return Br.restart(!0)&&wn&&wn($)},onComplete:function(){$.update(),Tr=Vn(),R&&!ri&&(kt?kt.resetTo("totalProgress",Ln,R._tTime/R._tDur):R.progress(Ln)),Ys=wo=R&&!ri?R.totalProgress():$.progress,bn&&bn($),cr&&cr($)}},Fe,On*Dn,yn-Fe-On*Dn),zr&&zr($,Oi.tween)}}else $.isActive&&Tr!==Fe&&Br.restart(!0)}).pause()),ke&&(rh[ke]=$),ot=$.trigger=U(ot||pe!==!0&&pe),ys=ot&&ot._gsap&&ot._gsap.stRevert,ys&&(ys=ys($)),pe=pe===!0?ot:U(pe),nn(ee)&&(ee={targets:ot,className:ee}),pe&&(ct===!1||ct===Ut||(ct=!ct&&pe.parentNode&&pe.parentNode.style&&mt(pe.parentNode).display==="flex"?!1:yt),$.pin=pe,xi=se.core.getCache(pe),xi.spacer?vs=xi.pinState:(Sn&&(Sn=U(Sn),Sn&&!Sn.nodeType&&(Sn=Sn.current||Sn.nativeElement),xi.spacerIsNative=!!Sn,Sn&&(xi.spacerState=Ec(Sn))),xi.spacer=si=Sn||Ue.createElement("div"),si.classList.add("pin-spacer"),ke&&si.classList.add("pin-spacer-"+ke),xi.pinState=vs=Ec(pe)),A.force3D!==!1&&se.set(pe,{force3D:!0}),$.spacer=si=xi.spacer,pa=mt(pe),ml=pa[ct+rt.os2],Nn=se.getProperty(pe),Or=se.quickSetter(pe,rt.a,Mt),ch(pe,si,pa),bo=Ec(pe)),zn){gs=b(zn)?ds(zn,hp):hp,oe=xc("scroller-start",ke,pt,rt,gs,0),lr=xc("scroller-end",ke,pt,rt,gs,0,oe),Xs=oe["offset"+rt.op.d2];var _l=U(S(pt,"content")||pt);Ki=this.markerStart=xc("start",ke,_l,rt,gs,Xs,0,_t),ar=this.markerEnd=xc("end",ke,_l,rt,gs,Xs,0,_t),_t&&(ma=se.quickSetter([Ki,ar],rt.a,Mt)),!Ui&&!(P.length&&S(pt,"fixedMarkers")===!0)&&(Di(Zn?Ae:pt),se.set([oe,lr],{force3D:!0}),Ac=se.quickSetter(oe,rt.a,Mt),da=se.quickSetter(lr,rt.a,Mt))}if(_t){var bt=_t.vars.onUpdate,ht=_t.vars.onUpdateParams;_t.eventCallback("onUpdate",function(){$.update(0,0,1),bt&&bt.apply(_t,ht||[])})}if($.previous=function(){return Dt[Dt.indexOf($)-1]},$.next=function(){return Dt[Dt.indexOf($)+1]},$.revert=function(Fe,Et){if(!Et)return $.kill(!0);var lt=Fe!==!1||!$.enabled,Tt=Qe;lt!==$.isReverted&&(lt&&(kr=Math.max(Vn(),$.scroll.rec||0),vi=$.progress,Co=R&&R.progress()),Ki&&[Ki,ar,oe,lr].forEach(function(oi){return oi.style.display=lt?"none":"block"}),lt&&(Qe=$,$.update(lt)),pe&&(!Er||!$.isActive)&&(lt?C0(pe,si,vs):ch(pe,si,mt(pe),Gn)),lt||$.update(lt),Qe=Tt,$.isReverted=lt)},$.refresh=function(Fe,Et,lt,Tt){if(!((Qe||!$.enabled)&&!Et)){if(pe&&Fe&&We){Rn(Y,"scrollEnd",dp);return}!Li&&jn&&jn($),Qe=$,Oi.tween&&!lt&&(Oi.tween.kill(),Oi.tween=0),kt&&kt.pause(),Pn&&R&&(R.revert({kill:!1}).invalidate(),R.getChildren&&R.getChildren(!0,!0,!1).forEach(function($s){return $s.vars.immediateRender&&$s.render(0,!0,!0)})),$.isReverted||$.revert(!0,!0),$._subPinOffset=!1;var oi=To(),Gt=Hs(),On=_t?_t.duration():xn(pt,rt),Si=Dn<=.01||!Dn,Ln=0,yn=Tt||0,cn=b(lt)?lt.end:A.end,zr=A.endTrigger||ot,wn=b(lt)?lt.start:A.start||(A.start===0||!ot?0:pe?"0 0":"0 100%"),cr=$.pinnedContainer=A.pinnedContainer&&U(A.pinnedContainer,$),Jr=ot&&Math.max(0,Dt.indexOf($))||0,di=Jr,pi,yi,Ro,Cc,Mi,Jn,Qr,hh,Ap,gl,es,vl,Rc;for(zn&&b(lt)&&(vl=se.getProperty(oe,rt.p),Rc=se.getProperty(lr,rt.p));di-- >0;)Jn=Dt[di],Jn.end||Jn.refresh(0,1)||(Qe=$),Qr=Jn.pin,Qr&&(Qr===ot||Qr===pe||Qr===cr)&&!Jn.isReverted&&(gl||(gl=[]),gl.unshift(Jn),Jn.revert(!0,!0)),Jn!==Dt[di]&&(Jr--,di--);for(rn(wn)&&(wn=wn($)),wn=Le(wn,"start",$),Yt=xp(wn,ot,oi,rt,Vn(),Ki,oe,$,Gt,Hn,Ui,On,_t,$._startClamp&&"_startClamp")||(pe?-.001:0),rn(cn)&&(cn=cn($)),nn(cn)&&!cn.indexOf("+=")&&(~cn.indexOf(" ")?cn=(nn(wn)?wn.split(" ")[0]:"")+cn:(Ln=vc(cn.substr(2),oi),cn=nn(wn)?wn:(_t?se.utils.mapRange(0,_t.duration(),_t.scrollTrigger.start,_t.scrollTrigger.end,Yt):Yt)+Ln,zr=ot)),cn=Le(cn,"end",$),Un=Math.max(Yt,xp(cn||(zr?"100% 0":On),zr,oi,rt,Vn()+Ln,ar,lr,$,Gt,Hn,Ui,On,_t,$._endClamp&&"_endClamp"))||-.001,Ln=0,di=Jr;di--;)Jn=Dt[di],Qr=Jn.pin,Qr&&Jn.start-Jn._pinPush<=Yt&&!_t&&Jn.end>0&&(pi=Jn.end-($._startClamp?Math.max(0,Jn.start):Jn.start),(Qr===ot&&Jn.start-Jn._pinPush<Yt||Qr===cr)&&isNaN(wn)&&(Ln+=pi*(1-Jn.progress)),Qr===pe&&(yn+=pi));if(Yt+=Ln,Un+=Ln,$._startClamp&&($._startClamp+=Ln),$._endClamp&&!Li&&($._endClamp=Un||-.001,Un=Math.min(Un,xn(pt,rt))),Dn=Un-Yt||(Yt-=.01)&&.001,Si&&(vi=se.utils.clamp(0,1,se.utils.normalize(Yt,Un,kr))),$._pinPush=yn,Ki&&Ln&&(pi={},pi[rt.a]="+="+Ln,cr&&(pi[rt.p]="-="+Vn()),se.set([Ki,ar],pi)),pe&&!(ve&&$.end>=xn(pt,rt)))pi=mt(pe),Cc=rt===ue,Ro=Vn(),br=parseFloat(Nn(rt.a))+yn,!On&&Un>1&&(es=(Zn?Ue.scrollingElement||I:pt).style,es={style:es,value:es["overflow"+rt.a.toUpperCase()]},Zn&&mt(Ae)["overflow"+rt.a.toUpperCase()]!=="scroll"&&(es.style["overflow"+rt.a.toUpperCase()]="scroll")),ch(pe,si,pi),bo=Ec(pe),yi=Tn(pe,!0),hh=Ui&&$e(pt,Cc?W:ue)(),ct?(Gn=[ct+rt.os2,Dn+yn+Mt],Gn.t=si,di=ct===yt?jr(pe,rt)+Dn+yn:0,di&&(Gn.push(rt.d,di+Mt),si.style.flexBasis!=="auto"&&(si.style.flexBasis=di+Mt)),fa(Gn),cr&&Dt.forEach(function($s){$s.pin===cr&&$s.vars.pinSpacing!==!1&&($s._subPinOffset=!0)}),Ui&&Vn(kr)):(di=jr(pe,rt),di&&si.style.flexBasis!=="auto"&&(si.style.flexBasis=di+Mt)),Ui&&(Mi={top:yi.top+(Cc?Ro-Yt:hh)+Mt,left:yi.left+(Cc?hh:Ro-Yt)+Mt,boxSizing:"border-box",position:"fixed"},Mi[Ie]=Mi["max"+Xt]=Math.ceil(yi.width)+Mt,Mi[Ze]=Mi["max"+nt]=Math.ceil(yi.height)+Mt,Mi[Ut]=Mi[Ut+dt]=Mi[Ut+Ke]=Mi[Ut+St]=Mi[Ut+Xe]="0",Mi[yt]=pi[yt],Mi[yt+dt]=pi[yt+dt],Mi[yt+Ke]=pi[yt+Ke],Mi[yt+St]=pi[yt+St],Mi[yt+Xe]=pi[yt+Xe],Ws=P0(vs,Mi,Er),Li&&Vn(0)),R?(Ap=R._initted,Oe(1),R.render(R.duration(),!0,!0),xs=Nn(rt.a)-br+Dn+yn,Ss=Math.abs(Dn-xs)>1,Ui&&Ss&&Ws.splice(Ws.length-2,2),R.render(0,!0,!0),Ap||R.invalidate(!0),R.parent||R.totalTime(R.totalTime()),Oe(0)):xs=Dn,es&&(es.value?es.style["overflow"+rt.a.toUpperCase()]=es.value:es.style.removeProperty("overflow-"+rt.a));else if(ot&&Vn()&&!_t)for(yi=ot.parentNode;yi&&yi!==Ae;)yi._pinOffset&&(Yt-=yi._pinOffset,Un-=yi._pinOffset),yi=yi.parentNode;gl&&gl.forEach(function($s){return $s.revert(!1,!0)}),$.start=Yt,$.end=Un,Fi=qi=Li?kr:Vn(),!_t&&!Li&&(Fi<kr&&Vn(kr),$.scroll.rec=0),$.revert(!1,!0),_s=re(),Br&&(Tr=-1,Br.restart(!0)),Qe=0,R&&ri&&(R._initted||Co)&&R.progress()!==Co&&R.progress(Co||0,!0).render(R.time(),!0,!0),(Si||vi!==$.progress||_t||Pn||R&&!R._initted)&&(R&&!ri&&(R._initted||vi||R.vars.immediateRender!==!1)&&R.totalProgress(_t&&Yt<-.001&&!vi?se.utils.normalize(Yt,Un,0):vi,!0),$.progress=Si||(Fi-Yt)/Dn===vi?0:vi),pe&&ct&&(si._pinOffset=Math.round($.progress*xs)),kt&&kt.invalidate(),isNaN(vl)||(vl-=se.getProperty(oe,rt.p),Rc-=se.getProperty(lr,rt.p),bc(oe,rt,vl),bc(Ki,rt,vl-(Tt||0)),bc(lr,rt,Rc),bc(ar,rt,Rc-(Tt||0))),Si&&!Li&&$.update(),Zt&&!Li&&!Gs&&(Gs=!0,Zt($),Gs=!1)}},$.getVelocity=function(){return(Vn()-qi)/(re()-Pe)*1e3||0},$.endAnimation=function(){k($.callbackAnimation),R&&(kt?kt.progress(1):R.paused()?ri||k(R,$.direction<0,1):k(R,R.reversed()))},$.labelToScroll=function(Fe){return R&&R.labels&&(Yt||$.refresh()||Yt)+R.labels[Fe]/R.duration()*Dn||0},$.getTrailing=function(Fe){var Et=Dt.indexOf($),lt=$.direction>0?Dt.slice(0,Et).reverse():Dt.slice(Et+1);return(nn(Fe)?lt.filter(function(Tt){return Tt.vars.preventOverlaps===Fe}):lt).filter(function(Tt){return $.direction>0?Tt.end<=Yt:Tt.start>=Un})},$.update=function(Fe,Et,lt){if(!(_t&&!lt&&!Fe)){var Tt=Li===!0?kr:$.scroll(),oi=Fe?0:(Tt-Yt)/Dn,Gt=oi<0?0:oi>1?1:oi||0,On=$.progress,Si,Ln,yn,cn,zr,wn,cr,Jr;if(Et&&(qi=Fi,Fi=_t?Vn():Tt,wt&&(wo=Ys,Ys=R&&!ri?R.totalProgress():Gt)),pn&&pe&&!Qe&&!fe&&We&&(!Gt&&Yt<Tt+(Tt-qi)/(re()-Pe)*pn?Gt=1e-4:Gt===1&&Un>Tt+(Tt-qi)/(re()-Pe)*pn&&(Gt=.9999)),Gt!==On&&$.enabled){if(Si=$.isActive=!!Gt&&Gt<1,Ln=!!On&&On<1,wn=Si!==Ln,zr=wn||!!Gt!=!!On,$.direction=Gt>On?1:-1,$.progress=Gt,zr&&!Qe&&(yn=Gt&&!On?0:Gt===1?1:On===1?2:3,ri&&(cn=!wn&&ln[yn+1]!=="none"&&ln[yn+1]||ln[yn],Jr=R&&(cn==="complete"||cn==="reset"||cn in R))),$i&&(wn||Jr)&&(Jr||Bt||!R)&&(rn($i)?$i($):$.getTrailing($i).forEach(function(Ro){return Ro.endAnimation()})),ri||(kt&&!Qe&&!fe?(kt._dp._time-kt._start!==kt._time&&kt.render(kt._dp._time-kt._start),kt.resetTo?kt.resetTo("totalProgress",Gt,R._tTime/R._tDur):(kt.vars.totalProgress=Gt,kt.invalidate().restart())):R&&R.totalProgress(Gt,!!(Qe&&(_s||Fe)))),pe){if(Fe&&ct&&(si.style[ct+rt.os2]=ml),!Ui)Or(at(br+xs*Gt));else if(zr){if(cr=!Fe&&Gt>On&&Un+1>Tt&&Tt+1>=xn(pt,rt),Er)if(!Fe&&(Si||cr)){var di=Tn(pe,!0),pi=Tt-Yt;Sp(pe,Ae,di.top+(rt===ue?pi:0)+Mt,di.left+(rt===ue?0:pi)+Mt)}else Sp(pe,si);fa(Si||cr?Ws:bo),Ss&&Gt<1&&Si||Or(br+(Gt===1&&!cr?xs:0))}}wt&&!Oi.tween&&!Qe&&!fe&&Br.restart(!0),ee&&(wn||fi&&Gt&&(Gt<1||!Ce))&&z(ee.targets).forEach(function(Ro){return Ro.classList[Si||fi?"add":"remove"](ee.className)}),le&&!ri&&!Fe&&le($),zr&&!Qe?(ri&&(Jr&&(cn==="complete"?R.pause().totalProgress(1):cn==="reset"?R.restart(!0).pause():cn==="restart"?R.restart(!0):R[cn]()),le&&le($)),(wn||!Ce)&&(ft&&wn&&K($,ft),Ni[yn]&&K($,Ni[yn]),fi&&(Gt===1?$.kill(!1,1):Ni[yn]=0),wn||(yn=Gt===1?1:3,Ni[yn]&&K($,Ni[yn]))),Ii&&!Si&&Math.abs($.getVelocity())>(_n(Ii)?Ii:2500)&&(k($.callbackAnimation),kt?kt.progress(1):k(R,cn==="reverse"?1:!Gt,1))):ri&&le&&!Qe&&le($)}if(da){var yi=_t?Tt/_t.duration()*(_t._caScrollDist||0):Tt;Ac(yi+(oe._isFlipped?1:0)),da(yi)}ma&&ma(-Tt/_t.duration()*(_t._caScrollDist||0))}},$.enable=function(Fe,Et){$.enabled||($.enabled=!0,Rn(pt,"resize",dl),Zn||Rn(pt,"scroll",ha),jn&&Rn(Y,"refreshInit",jn),Fe!==!1&&($.progress=vi=0,Fi=qi=Tr=Vn()),Et!==!1&&$.refresh())},$.getTween=function(Fe){return Fe&&Oi?Oi.tween:kt},$.setPositions=function(Fe,Et,lt,Tt){if(_t){var oi=_t.scrollTrigger,Gt=_t.duration(),On=oi.end-oi.start;Fe=oi.start+On*Fe/Gt,Et=oi.start+On*Et/Gt}$.refresh(!1,!1,{start:je(Fe,lt&&!!$._startClamp),end:je(Et,lt&&!!$._endClamp)},Tt),$.update()},$.adjustPinSpacing=function(Fe){if(Gn&&Fe){var Et=Gn.indexOf(rt.d)+1;Gn[Et]=parseFloat(Gn[Et])+Fe+Mt,Gn[1]=parseFloat(Gn[1])+Fe+Mt,fa(Gn)}},$.disable=function(Fe,Et){if($.enabled&&(Fe!==!1&&$.revert(!0,!0),$.enabled=$.isActive=!1,Et||kt&&kt.pause(),kr=0,xi&&(xi.uncache=1),jn&&dn(Y,"refreshInit",jn),Br&&(Br.pause(),Oi.tween&&Oi.tween.kill()&&(Oi.tween=0)),!Zn)){for(var lt=Dt.length;lt--;)if(Dt[lt].scroller===pt&&Dt[lt]!==$)return;dn(pt,"resize",dl),Zn||dn(pt,"scroll",ha)}},$.kill=function(Fe,Et){$.disable(Fe,Et),kt&&!Et&&kt.kill(),ke&&delete rh[ke];var lt=Dt.indexOf($);lt>=0&&Dt.splice(lt,1),lt===x&&yc>0&&x--,lt=0,Dt.forEach(function(Tt){return Tt.scroller===$.scroller&&(lt=1)}),lt||Li||($.scroll.rec=0),R&&(R.scrollTrigger=null,Fe&&R.revert({kill:!1}),Et||R.kill()),Ki&&[Ki,ar,oe,lr].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),pl===$&&(pl=0),pe&&(xi&&(xi.uncache=1),lt=0,Dt.forEach(function(Tt){return Tt.pin===pe&&lt++}),lt||(xi.spacer=0)),A.onKill&&A.onKill($)},Dt.push($),$.enable(!1,!1),ys&&ys($),R&&R.add&&!Dn){var jt=$.update;$.update=function(){$.update=jt,w.cache++,Yt||Un||$.refresh()},se.delayedCall(.01,$.update),Dn=.01,Yt=Un=0}else $.refresh();pe&&A0()},Y.register=function(A){return Je||(se=A||xt(),gn()&&window.document&&Y.enable(),Je=It),Je},Y.defaults=function(A){if(A)for(var R in A)_c[R]=A[R];return _c},Y.disable=function(A,R){It=0,Dt.forEach(function(le){return le[R?"kill":"disable"](A)}),dn(De,"wheel",ha),dn(Ue,"scroll",ha),clearInterval(st),dn(Ue,"touchcancel",Ge),dn(Ae,"touchstart",Ge),qn(dn,Ue,"pointerdown,touchstart,mousedown",Re),qn(dn,Ue,"pointerup,touchend,mouseup",it),ut.kill(),Jt(dn);for(var V=0;V<w.length;V+=3)mc(dn,w[V],w[V+1]),mc(dn,w[V],w[V+2])},Y.enable=function(){if(De=window,Ue=document,I=Ue.documentElement,Ae=Ue.body,se&&(z=se.utils.toArray,gt=se.utils.clamp,Ve=se.core.context||Ge,Oe=se.core.suppressOverwrites||Ge,Me=De.history.scrollRestoration||"auto",ah=De.pageYOffset||0,se.core.globals("ScrollTrigger",Y),Ae)){It=1,tt=document.createElement("div"),tt.style.height="100vh",tt.style.position="absolute",gp(),vt(),Se.register(se),Y.isTouch=Se.isTouch,qe=Se.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Te=Se.isTouch===1,Rn(De,"wheel",ha),ze=[De,Ue,I,Ae],se.matchMedia?(Y.matchMedia=function(ft){var Zt=se.matchMedia(),Bt;for(Bt in ft)Zt.add(Bt,ft[Bt]);return Zt},se.addEventListener("matchMediaInit",function(){return oh()}),se.addEventListener("matchMediaRevert",function(){return pp()}),se.addEventListener("matchMedia",function(){Eo(0,1),yo("matchMedia")}),se.matchMedia().add("(orientation: portrait)",function(){return sh(),sh})):console.warn("Requires GSAP 3.11.0 or later"),sh(),Rn(Ue,"scroll",ha);var A=Ae.hasAttribute("style"),R=Ae.style,V=R.borderTopStyle,le=se.core.Animation.prototype,ee,ke;for(le.revert||Object.defineProperty(le,"revert",{value:function(){return this.time(-.01,!0)}}),R.borderTopStyle="solid",ee=Tn(Ae),ue.m=Math.round(ee.top+ue.sc())||0,W.m=Math.round(ee.left+W.sc())||0,V?R.borderTopStyle=V:R.removeProperty("border-top-style"),A||(Ae.setAttribute("style",""),Ae.removeAttribute("style")),st=setInterval(fp,250),se.delayedCall(.5,function(){return fe=0}),Rn(Ue,"touchcancel",Ge),Rn(Ae,"touchstart",Ge),qn(Rn,Ue,"pointerdown,touchstart,mousedown",Re),qn(Rn,Ue,"pointerup,touchend,mouseup",it),D=se.utils.checkPrefix("transform"),Mc.push(D),Je=re(),ut=se.delayedCall(.2,Eo).pause(),ce=[Ue,"visibilitychange",function(){var ft=De.innerWidth,Zt=De.innerHeight;Ue.hidden?(G=ft,ae=Zt):(G!==ft||ae!==Zt)&&dl()},Ue,"DOMContentLoaded",Eo,De,"load",Eo,De,"resize",dl],Jt(Rn),Dt.forEach(function(ft){return ft.enable(0,1)}),ke=0;ke<w.length;ke+=3)mc(dn,w[ke],w[ke+1]),mc(dn,w[ke],w[ke+2])}},Y.config=function(A){"limitCallbacks"in A&&(Ce=!!A.limitCallbacks);var R=A.syncInterval;R&&clearInterval(st)||(st=R)&&setInterval(fp,R),"ignoreMobileResize"in A&&(Te=Y.isTouch===1&&A.ignoreMobileResize),"autoRefreshEvents"in A&&(Jt(dn)||Jt(Rn,A.autoRefreshEvents||"none"),ge=(A.autoRefreshEvents+"").indexOf("resize")===-1)},Y.scrollerProxy=function(A,R){var V=U(A),le=w.indexOf(V),ee=$t(V);~le&&w.splice(le,ee?6:2),R&&(ee?P.unshift(De,R,Ae,R,I,R):P.unshift(V,R))},Y.clearMatchMedia=function(A){Dt.forEach(function(R){return R._ctx&&R._ctx.query===A&&R._ctx.kill(!0,!0)})},Y.isInViewport=function(A,R,V){var le=(nn(A)?U(A):A).getBoundingClientRect(),ee=le[V?Ie:Ze]*R||0;return V?le.right-ee>0&&le.left+ee<De.innerWidth:le.bottom-ee>0&&le.top+ee<De.innerHeight},Y.positionInViewport=function(A,R,V){nn(A)&&(A=U(A));var le=A.getBoundingClientRect(),ee=le[V?Ie:Ze],ke=R==null?ee/2:R in gc?gc[R]*ee:~R.indexOf("%")?parseFloat(R)*ee/100:parseFloat(R)||0;return V?(le.left+ke)/De.innerWidth:(le.top+ke)/De.innerHeight},Y.killAll=function(A){if(Dt.slice(0).forEach(function(V){return V.vars.id!=="ScrollSmoother"&&V.kill()}),A!==!0){var R=So.killAll||[];So={},R.forEach(function(V){return V()})}},Y})();Nt.version="3.13.0",Nt.saveStyles=function(Y){return Y?z(Y).forEach(function(E){if(E&&E.style){var F=or.indexOf(E);F>=0&&or.splice(F,5),or.push(E,E.style.cssText,E.getBBox&&E.getAttribute("transform"),se.core.getCache(E),Ve())}}):or},Nt.revert=function(Y,E){return oh(!Y,E)},Nt.create=function(Y,E){return new Nt(Y,E)},Nt.refresh=function(Y){return Y?dl(!0):(Je||Nt.register())&&Eo(!0)},Nt.update=function(Y){return++w.cache&&ps(Y===!0?2:0)},Nt.clearScrollMemory=mp,Nt.maxScroll=function(Y,E){return xn(Y,E?W:ue)},Nt.getScrollFunc=function(Y,E){return $e(U(Y),E?W:ue)},Nt.getById=function(Y){return rh[Y]},Nt.getAll=function(){return Dt.filter(function(Y){return Y.vars.id!=="ScrollSmoother"})},Nt.isScrolling=function(){return!!We},Nt.snapDirectional=gi,Nt.addEventListener=function(Y,E){var F=So[Y]||(So[Y]=[]);~F.indexOf(E)||F.push(E)},Nt.removeEventListener=function(Y,E){var F=So[Y],A=F&&F.indexOf(E);A>=0&&F.splice(A,1)},Nt.batch=function(Y,E){var F=[],A={},R=E.interval||.016,V=E.batchMax||1e9,le=function(ft,Zt){var Bt=[],ot=[],pe=se.delayedCall(R,function(){Zt(Bt,ot),Bt=[],ot=[]}).pause();return function(ct){Bt.length||pe.restart(!0),Bt.push(ct.trigger),ot.push(ct),V<=Bt.length&&pe.progress(1)}},ee;for(ee in E)A[ee]=ee.substr(0,2)==="on"&&rn(E[ee])&&ee!=="onRefreshInit"?le(ee,E[ee]):E[ee];return rn(V)&&(V=V(),Rn(Nt,"refresh",function(){return V=E.batchMax()})),z(Y).forEach(function(ke){var ft={};for(ee in A)ft[ee]=A[ee];ft.trigger=ke,F.push(Nt.create(ft))}),F};var Ep=function(E,F,A,R){return F>R?E(R):F<0&&E(0),A>R?(R-F)/(A-F):A<0?F/(F-A):1},uh=function Y(E,F){F===!0?E.style.removeProperty("touch-action"):E.style.touchAction=F===!0?"auto":F?"pan-"+F+(Se.isTouch?" pinch-zoom":""):"none",E===I&&Y(Ae,F)},wc={auto:1,scroll:1},L0=function(E){var F=E.event,A=E.target,R=E.axis,V=(F.changedTouches?F.changedTouches[0]:F).target,le=V._gsap||se.core.getCache(V),ee=re(),ke;if(!le._isScrollT||ee-le._isScrollT>2e3){for(;V&&V!==Ae&&(V.scrollHeight<=V.clientHeight&&V.scrollWidth<=V.clientWidth||!(wc[(ke=mt(V)).overflowY]||wc[ke.overflowX]));)V=V.parentNode;le._isScroll=V&&V!==A&&!$t(V)&&(wc[(ke=mt(V)).overflowY]||wc[ke.overflowX]),le._isScrollT=ee}(le._isScroll||R==="x")&&(F.stopPropagation(),F._gsapAllow=!0)},Tp=function(E,F,A,R){return Se.create({target:E,capture:!0,debounce:!1,lockAxis:!0,type:F,onWheel:R=R&&L0,onPress:R,onDrag:R,onScroll:R,onEnable:function(){return A&&Rn(Ue,Se.eventTypes[0],wp,!1,!0)},onDisable:function(){return dn(Ue,Se.eventTypes[0],wp,!0)}})},I0=/(input|label|select|textarea)/i,bp,wp=function(E){var F=I0.test(E.target.tagName);(F||bp)&&(E._gsapAllow=!0,bp=F)},U0=function(E){b(E)||(E={}),E.preventDefault=E.isNormalizer=E.allowClicks=!0,E.type||(E.type="wheel,touch"),E.debounce=!!E.debounce,E.id=E.id||"normalizer";var F=E,A=F.normalizeScrollX,R=F.momentum,V=F.allowNestedScroll,le=F.onRelease,ee,ke,ft=U(E.target)||I,Zt=se.core.globals().ScrollSmoother,Bt=Zt&&Zt.get(),ot=qe&&(E.content&&U(E.content)||Bt&&E.content!==!1&&!Bt.smooth()&&Bt.content()),pe=$e(ft,ue),ct=$e(ft,W),Pn=1,pn=(Se.isTouch&&De.visualViewport?De.visualViewport.scale*De.visualViewport.width:De.outerWidth)/De.innerWidth,Kn=0,bn=rn(R)?function(){return R(ee)}:function(){return R||2.8},fi,wt,Er=Tp(ft,E.type,!0,V),Sn=function(){return wt=!1},_t=Ge,Ii=Ge,$i=function(){ke=xn(ft,ue),Ii=gt(qe?1:0,ke),A&&(_t=gt(0,xn(ft,W))),fi=Mo},rt=function(){ot._gsap.y=at(parseFloat(ot._gsap.y)+pe.offset)+"px",ot.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(ot._gsap.y)+", 0, 1)",pe.offset=pe.cacheID=0},ri=function(){if(wt){requestAnimationFrame(Sn);var zn=at(ee.deltaY/2),Hn=Ii(pe.v-zn);if(ot&&Hn!==pe.v+pe.offset){pe.offset=Hn-pe.v;var $=at((parseFloat(ot&&ot._gsap.y)||0)-pe.offset);ot.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+$+", 0, 1)",ot._gsap.y=$+"px",pe.cacheID=w.cache,ps()}return!0}pe.offset&&rt(),wt=!0},pt,ms,Zn,Ui,Ni=function(){$i(),pt.isActive()&&pt.vars.scrollY>ke&&(pe()>ke?pt.progress(1)&&pe(ke):pt.resetTo("scrollY",ke))};return ot&&se.set(ot,{y:"+=0"}),E.ignoreCheck=function(ln){return qe&&ln.type==="touchmove"&&ri()||Pn>1.05&&ln.type!=="touchstart"||ee.isGesturing||ln.touches&&ln.touches.length>1},E.onPress=function(){wt=!1;var ln=Pn;Pn=at((De.visualViewport&&De.visualViewport.scale||1)/pn),pt.pause(),ln!==Pn&&uh(ft,Pn>1.01?!0:A?!1:"x"),ms=ct(),Zn=pe(),$i(),fi=Mo},E.onRelease=E.onGestureStart=function(ln,zn){if(pe.offset&&rt(),!zn)Ui.restart(!0);else{w.cache++;var Hn=bn(),$,jn;A&&($=ct(),jn=$+Hn*.05*-ln.velocityX/.227,Hn*=Ep(ct,$,jn,xn(ft,W)),pt.vars.scrollX=_t(jn)),$=pe(),jn=$+Hn*.05*-ln.velocityY/.227,Hn*=Ep(pe,$,jn,xn(ft,ue)),pt.vars.scrollY=Ii(jn),pt.invalidate().duration(Hn).play(.01),(qe&&pt.vars.scrollY>=ke||$>=ke-1)&&se.to({},{onUpdate:Ni,duration:Hn})}le&&le(ln)},E.onWheel=function(){pt._ts&&pt.pause(),re()-Kn>1e3&&(fi=0,Kn=re())},E.onChange=function(ln,zn,Hn,$,jn){if(Mo!==fi&&$i(),zn&&A&&ct(_t($[2]===zn?ms+(ln.startX-ln.x):ct()+zn-$[1])),Hn){pe.offset&&rt();var To=jn[2]===Hn,Hs=To?Zn+ln.startY-ln.y:pe()+Hn-jn[1],Tr=Ii(Hs);To&&Hs!==Tr&&(Zn+=Tr-Hs),pe(Tr)}(Hn||zn)&&ps()},E.onEnable=function(){uh(ft,A?!1:"x"),Nt.addEventListener("refresh",Ni),Rn(De,"resize",Ni),pe.smooth&&(pe.target.style.scrollBehavior="auto",pe.smooth=ct.smooth=!1),Er.enable()},E.onDisable=function(){uh(ft,!0),dn(De,"resize",Ni),Nt.removeEventListener("refresh",Ni),Er.kill()},E.lockAxis=E.lockAxis!==!1,ee=new Se(E),ee.iOS=qe,qe&&!pe()&&pe(1),qe&&se.ticker.add(Ge),Ui=ee._dc,pt=se.to(ee,{ease:"power4",paused:!0,inherit:!1,scrollX:A?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yp(pe,pe(),function(){return pt.pause()})},onUpdate:ps,onComplete:Ui.vars.onComplete}),ee};Nt.sort=function(Y){if(rn(Y))return Dt.sort(Y);var E=De.pageYOffset||0;return Nt.getAll().forEach(function(F){return F._sortY=F.trigger?E+F.trigger.getBoundingClientRect().top:F.start+De.innerHeight}),Dt.sort(Y||function(F,A){return(F.vars.refreshPriority||0)*-1e6+(F.vars.containerAnimation?1e6:F._sortY)-((A.vars.containerAnimation?1e6:A._sortY)+(A.vars.refreshPriority||0)*-1e6)})},Nt.observe=function(Y){return new Se(Y)},Nt.normalizeScroll=function(Y){if(typeof Y>"u")return we;if(Y===!0&&we)return we.enable();if(Y===!1){we&&we.kill(),we=Y;return}var E=Y instanceof Se?Y:U0(Y);return we&&we.target===E.target&&we.kill(),$t(E.target)&&(we=E),E},Nt.core={_getVelocityProp:Ct,_inputObserver:Tp,_scrollers:w,_proxies:P,bridge:{ss:function(){We||yo("scrollStart"),We=re()},ref:function(){return Qe}}},xt()&&se.registerPlugin(Nt),t.ScrollTrigger=Nt,t.default=Nt,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default}))})(Il,Il.exports)),Il.exports}var o_=sw();class ow{lenis;scroll;paralaxElements;startedScrolling;isTouchDevice;constructor(){this.lenis=new iw,this.lenis.scrollTo(0,{immediate:!0}),this.scroll=this.lenis.scroll,this.lenis.on("scroll",e=>{this.scroll=e.scroll,this.startedScrolling=!0}),requestAnimationFrame(this.raf.bind(this))}onScroll(e){this.lenis.on("scroll",e.bind(this))}resetScroll(){this.lenis.scrollTo(0,{immediate:!0}),this.scroll=0,o_.ScrollTrigger.refresh()}getScroll(){return this.scroll}raf(e){this.lenis.raf(e),o_.ScrollTrigger.update(),requestAnimationFrame(this.raf.bind(this))}}function aw(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lw(r,e,t){return e&&aw(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mi,bu,gr,ao,lo,qa,n0,zo,Vl,i0,Ls,Wr,r0,s0=function(){return mi||typeof window<"u"&&(mi=window.gsap)&&mi.registerPlugin&&mi},o0=1,za=[],Ft=[],hs=[],Gl=Date.now,_d=function(e,t){return t},cw=function(){var e=Vl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ft),i.push.apply(i,hs),Ft=n,hs=i,_d=function(o,a){return t[o](a)}},po=function(e,t){return~hs.indexOf(e)&&hs[hs.indexOf(e)+1][t]},Wl=function(e){return!!~i0.indexOf(e)},ki=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Bi=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},iu="scrollLeft",ru="scrollTop",gd=function(){return Ls&&Ls.isPressed||Ft.cache++},Xu=function(e,t){var n=function i(s){if(s||s===0){o0&&(gr.history.scrollRestoration="manual");var o=Ls&&Ls.isPressed;s=i.v=Math.round(s)||(Ls&&Ls.iOS?1:0),e(s),i.cacheID=Ft.cache,o&&_d("ss",s)}else(t||Ft.cache!==i.cacheID||_d("ref"))&&(i.cacheID=Ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Xi={s:iu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xu(function(r){return arguments.length?gr.scrollTo(r,ti.sc()):gr.pageXOffset||ao[iu]||lo[iu]||qa[iu]||0})},ti={s:ru,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xi,sc:Xu(function(r){return arguments.length?gr.scrollTo(Xi.sc(),r):gr.pageYOffset||ao[ru]||lo[ru]||qa[ru]||0})},Ji=function(e,t){return(t&&t._ctx&&t._ctx.selector||mi.utils.toArray)(e)[0]||(typeof e=="string"&&mi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},vo=function(e,t){var n=t.s,i=t.sc;Wl(e)&&(e=ao.scrollingElement||lo);var s=Ft.indexOf(e),o=i===ti.sc?1:2;!~s&&(s=Ft.push(e)-1),Ft[s+o]||ki(e,"scroll",gd);var a=Ft[s+o],l=a||(Ft[s+o]=Xu(po(e,n),!0)||(Wl(e)?i:Xu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mi.getProperty(e,"scrollBehavior")==="smooth"),l},vd=function(e,t,n){var i=e,s=e,o=Gl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Gl();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Gl();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Cl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},a_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},a0=function(){Vl=mi.core.globals().ScrollTrigger,Vl&&Vl.core&&cw()},l0=function(e){return mi=e||s0(),!bu&&mi&&typeof document<"u"&&document.body&&(gr=window,ao=document,lo=ao.documentElement,qa=ao.body,i0=[gr,ao,lo,qa],mi.utils.clamp,r0=mi.core.context||function(){},zo="onpointerenter"in qa?"pointer":"mouse",n0=kn.isTouch=gr.matchMedia&&gr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wr=kn.eventTypes=("ontouchstart"in lo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o0=0},500),a0(),bu=1),bu};Xi.op=ti;Ft.cache=0;var kn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){bu||l0(mi)||console.warn("Please gsap.registerPlugin(Observer)"),Vl||a0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,T=n.onPress,v=n.onRelease,w=n.onRight,P=n.onLeft,C=n.onUp,N=n.onDown,y=n.onChangeX,S=n.onChangeY,L=n.onChange,B=n.onToggleX,X=n.onToggleY,Z=n.onHover,te=n.onHoverEnd,J=n.onMove,Q=n.ignoreCheck,W=n.isNormalizer,ue=n.onGestureStart,U=n.onGestureEnd,be=n.onWheel,$e=n.onEnable,Ct=n.onDisable,et=n.onClick,ne=n.scrollSpeed,xe=n.capture,de=n.allowClicks,Se=n.lockAxis,se=n.onLockAxis;this.target=a=Ji(a)||lo,this.vars=n,d&&(d=mi.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(gr.getComputedStyle(qa).lineHeight)||22);var Je,De,Ue,I,Ae,ze,ut,z=this,gt=0,Pe=0,st=n.passive||!u&&n.passive!==!1,Qe=vo(a,Xi),Vt=vo(a,ti),D=Qe(),x=Vt(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Wr[0]==="pointerdown",ae=Wl(a),ce=a.ownerDocument||ao,ie=[0,0,0],Oe=[0,0,0],ge=0,we=function(){return ge=Gl()},Te=function(je,vt){return(z.event=je)&&d&&uw(je.target,d)||vt&&G&&je.pointerType!=="touch"||Q&&Q(je,vt)},_e=function(){z._vx.reset(),z._vy.reset(),De.pause(),h&&h(z)},Ee=function(){var je=z.deltaX=a_(ie),vt=z.deltaY=a_(Oe),Re=Math.abs(je)>=i,it=Math.abs(vt)>=i;L&&(Re||it)&&L(z,je,vt,ie,Oe),Re&&(w&&z.deltaX>0&&w(z),P&&z.deltaX<0&&P(z),y&&y(z),B&&z.deltaX<0!=gt<0&&B(z),gt=z.deltaX,ie[0]=ie[1]=ie[2]=0),it&&(N&&z.deltaY>0&&N(z),C&&z.deltaY<0&&C(z),S&&S(z),X&&z.deltaY<0!=Pe<0&&X(z),Pe=z.deltaY,Oe[0]=Oe[1]=Oe[2]=0),(I||Ue)&&(J&&J(z),Ue&&(m&&Ue===1&&m(z),M&&M(z),Ue=0),I=!1),ze&&!(ze=!1)&&se&&se(z),Ae&&(be(z),Ae=!1),Je=0},qe=function(je,vt,Re){ie[Re]+=je,Oe[Re]+=vt,z._vx.update(je),z._vy.update(vt),c?Je||(Je=requestAnimationFrame(Ee)):Ee()},Ve=function(je,vt){Se&&!ut&&(z.axis=ut=Math.abs(je)>Math.abs(vt)?"x":"y",ze=!0),ut!=="y"&&(ie[2]+=je,z._vx.update(je,!0)),ut!=="x"&&(Oe[2]+=vt,z._vy.update(vt,!0)),c?Je||(Je=requestAnimationFrame(Ee)):Ee()},Me=function(je){if(!Te(je,1)){je=Cl(je,u);var vt=je.clientX,Re=je.clientY,it=vt-z.x,Ge=Re-z.y,at=z.isDragging;z.x=vt,z.y=Re,(at||(it||Ge)&&(Math.abs(z.startX-vt)>=s||Math.abs(z.startY-Re)>=s))&&(Ue=at?2:1,at||(z.isDragging=!0),Ve(it,Ge))}},tt=z.onPress=function(Le){Te(Le,1)||Le&&Le.button||(z.axis=ut=null,De.pause(),z.isPressed=!0,Le=Cl(Le),gt=Pe=0,z.startX=z.x=Le.clientX,z.startY=z.y=Le.clientY,z._vx.reset(),z._vy.reset(),ki(W?a:ce,Wr[1],Me,st,!0),z.deltaX=z.deltaY=0,T&&T(z))},O=z.onRelease=function(Le){if(!Te(Le,1)){Bi(W?a:ce,Wr[1],Me,!0);var je=!isNaN(z.y-z.startY),vt=z.isDragging,Re=vt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),it=Cl(Le);!Re&&je&&(z._vx.reset(),z._vy.reset(),u&&de&&mi.delayedCall(.08,function(){if(Gl()-ge>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(ce.createEvent){var Ge=ce.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,gr,1,it.screenX,it.screenY,it.clientX,it.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Ge)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&vt&&!W&&De.restart(!0),Ue&&Ee(),p&&vt&&p(z),v&&v(z,Re)}},me=function(je){return je.touches&&je.touches.length>1&&(z.isGesturing=!0)&&ue(je,z.isDragging)},ve=function(){return(z.isGesturing=!1)||U(z)},Ce=function(je){if(!Te(je)){var vt=Qe(),Re=Vt();qe((vt-D)*ne,(Re-x)*ne,1),D=vt,x=Re,h&&De.restart(!0)}},fe=function(je){if(!Te(je)){je=Cl(je,u),be&&(Ae=!0);var vt=(je.deltaMode===1?l:je.deltaMode===2?gr.innerHeight:1)*g;qe(je.deltaX*vt,je.deltaY*vt,0),h&&!W&&De.restart(!0)}},re=function(je){if(!Te(je)){var vt=je.clientX,Re=je.clientY,it=vt-z.x,Ge=Re-z.y;z.x=vt,z.y=Re,I=!0,h&&De.restart(!0),(it||Ge)&&Ve(it,Ge)}},Be=function(je){z.event=je,Z(z)},We=function(je){z.event=je,te(z)},It=function(je){return Te(je)||Cl(je,u)&&et(z)};De=z._dc=mi.delayedCall(f||.25,_e).pause(),z.deltaX=z.deltaY=0,z._vx=vd(0,50,!0),z._vy=vd(0,50,!0),z.scrollX=Qe,z.scrollY=Vt,z.isDragging=z.isGesturing=z.isPressed=!1,r0(this),z.enable=function(Le){return z.isEnabled||(ki(ae?ce:a,"scroll",gd),o.indexOf("scroll")>=0&&ki(ae?ce:a,"scroll",Ce,st,xe),o.indexOf("wheel")>=0&&ki(a,"wheel",fe,st,xe),(o.indexOf("touch")>=0&&n0||o.indexOf("pointer")>=0)&&(ki(a,Wr[0],tt,st,xe),ki(ce,Wr[2],O),ki(ce,Wr[3],O),de&&ki(a,"click",we,!0,!0),et&&ki(a,"click",It),ue&&ki(ce,"gesturestart",me),U&&ki(ce,"gestureend",ve),Z&&ki(a,zo+"enter",Be),te&&ki(a,zo+"leave",We),J&&ki(a,zo+"move",re)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=I=Ue=!1,z._vx.reset(),z._vy.reset(),D=Qe(),x=Vt(),Le&&Le.type&&tt(Le),$e&&$e(z)),z},z.disable=function(){z.isEnabled&&(za.filter(function(Le){return Le!==z&&Wl(Le.target)}).length||Bi(ae?ce:a,"scroll",gd),z.isPressed&&(z._vx.reset(),z._vy.reset(),Bi(W?a:ce,Wr[1],Me,!0)),Bi(ae?ce:a,"scroll",Ce,xe),Bi(a,"wheel",fe,xe),Bi(a,Wr[0],tt,xe),Bi(ce,Wr[2],O),Bi(ce,Wr[3],O),Bi(a,"click",we,!0),Bi(a,"click",It),Bi(ce,"gesturestart",me),Bi(ce,"gestureend",ve),Bi(a,zo+"enter",Be),Bi(a,zo+"leave",We),Bi(a,zo+"move",re),z.isEnabled=z.isPressed=z.isDragging=!1,Ct&&Ct(z))},z.kill=z.revert=function(){z.disable();var Le=za.indexOf(z);Le>=0&&za.splice(Le,1),Ls===z&&(Ls=0)},za.push(z),W&&Wl(a)&&(Ls=z),z.enable(_)},lw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kn.version="3.13.0";kn.create=function(r){return new kn(r)};kn.register=l0;kn.getAll=function(){return za.slice()};kn.getById=function(r){return za.filter(function(e){return e.vars.id===r})[0]};s0()&&mi.registerPlugin(kn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,Ua,Ot,mn,mr,Qt,ip,Yu,cc,Xl,Ul,su,bi,ih,xd,Vi,l_,c_,Na,c0,sf,u0,Hi,Sd,h0,f0,to,yd,rp,Ka,sp,$u,Md,of,ou=1,wi=Date.now,af=wi(),Nr=0,Nl=0,u_=function(e,t,n){var i=dr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},h_=function(e,t){return t&&(!dr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hw=function r(){return Nl&&requestAnimationFrame(r)},f_=function(){return ih=1},d_=function(){return ih=0},ns=function(e){return e},Ol=function(e){return Math.round(e*1e5)/1e5||0},d0=function(){return typeof window<"u"},p0=function(){return Ye||d0()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},sa=function(e){return!!~ip.indexOf(e)},m0=function(e){return(e==="Height"?sp:Ot["inner"+e])||mr["client"+e]||Qt["client"+e]},_0=function(e){return po(e,"getBoundingClientRect")||(sa(e)?function(){return Pu.width=Ot.innerWidth,Pu.height=sp,Pu}:function(){return Ds(e)})},fw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=po(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?m0(s):e["client"+s])||0}},dw=function(e,t){return!t||~hs.indexOf(e)?_0(e):function(){return Pu}},cs=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=po(e,n))?o()-_0(e)()[s]:sa(e)?(mr[n]||Qt[n])-m0(i):e[n]-e["offset"+i])},au=function(e,t){for(var n=0;n<Na.length;n+=3)(!t||~t.indexOf(Na[n+1]))&&e(Na[n],Na[n+1],Na[n+2])},dr=function(e){return typeof e=="string"},Ci=function(e){return typeof e=="function"},Fl=function(e){return typeof e=="number"},Ho=function(e){return typeof e=="object"},Rl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},lf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},La=Math.abs,g0="left",v0="top",op="right",ap="bottom",Jo="width",Qo="height",Yl="Right",$l="Left",ql="Top",Kl="Bottom",Xn="padding",Pr="margin",ll="Width",lp="Height",ei="px",Dr=function(e){return Ot.getComputedStyle(e)},pw=function(e){var t=Dr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},p_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ds=function(e,t){var n=t&&Dr(e)[xd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},qu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},x0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},mw=function(e){return function(t){return Ye.utils.snap(x0(e),t)}},cp=function(e){var t=Ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_w=function(e){return function(t,n){return cp(x0(e))(t,n.direction)}},lu=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ci=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},li=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},m_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uu={toggleActions:"play",anticipatePin:0},Ku={top:0,left:0,center:.5,bottom:1,right:1},wu=function(e,t){if(dr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ku?Ku[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hu=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=mn.createElement("div"),_=sa(n)||po(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Qt:n,M=e.indexOf("start")!==-1,T=M?c:u,v="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===ti?op:ap)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Au(g,0,i,M),g},Au=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ll]=1,s["border"+a+ll]=0,s[n.p]=t+"px",Ye.set(e,s)},Lt=[],Ed={},uc,__=function(){return wi()-Nr>34&&(uc||(uc=requestAnimationFrame(Us)))},Ia=function(){(!Hi||!Hi.isPressed||Hi.startX>Qt.clientWidth)&&(Ft.cache++,Hi?uc||(uc=requestAnimationFrame(Us)):Us(),Nr||aa("scrollStart"),Nr=wi())},cf=function(){f0=Ot.innerWidth,h0=Ot.innerHeight},Bl=function(e){Ft.cache++,(e===!0||!bi&&!u0&&!mn.fullscreenElement&&!mn.webkitFullscreenElement&&(!Sd||f0!==Ot.innerWidth||Math.abs(Ot.innerHeight-h0)>Ot.innerHeight*.25))&&Yu.restart(!0)},oa={},gw=[],S0=function r(){return li(Ht,"scrollEnd",r)||$o(!0)},aa=function(e){return oa[e]&&oa[e].map(function(t){return t()})||gw},fr=[],y0=function(e){for(var t=0;t<fr.length;t+=5)(!e||fr[t+4]&&fr[t+4].query===e)&&(fr[t].style.cssText=fr[t+1],fr[t].getBBox&&fr[t].setAttribute("transform",fr[t+2]||""),fr[t+3].uncache=1)},up=function(e,t){var n;for(Vi=0;Vi<Lt.length;Vi++)n=Lt[Vi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));$u=!0,t&&y0(t),t||aa("revert")},M0=function(e,t){Ft.cache++,(t||!Gi)&&Ft.forEach(function(n){return Ci(n)&&n.cacheID++&&(n.rec=0)}),dr(e)&&(Ot.history.scrollRestoration=rp=e)},Gi,ea=0,g_,vw=function(){if(g_!==ea){var e=g_=ea;requestAnimationFrame(function(){return e===ea&&$o(!0)})}},E0=function(){Qt.appendChild(Ka),sp=!Hi&&Ka.offsetHeight||Ot.innerHeight,Qt.removeChild(Ka)},v_=function(e){return cc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$o=function(e,t){if(mr=mn.documentElement,Qt=mn.body,ip=[Ot,mn,mr,Qt],Nr&&!e&&!$u){ci(Ht,"scrollEnd",S0);return}E0(),Gi=Ht.isRefreshing=!0,Ft.forEach(function(i){return Ci(i)&&++i.cacheID&&(i.rec=i())});var n=aa("refreshInit");c0&&Ht.sort(),t||up(),Ft.forEach(function(i){Ci(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Lt.slice(0).forEach(function(i){return i.refresh()}),$u=!1,Lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Md=1,v_(!0),Lt.forEach(function(i){var s=cs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),v_(!1),Md=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ft.forEach(function(i){Ci(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M0(rp,1),Yu.pause(),ea++,Gi=2,Us(2),Lt.forEach(function(i){return Ci(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gi=Ht.isRefreshing=!1,aa("refresh")},Td=0,Cu=1,Zl,Us=function(e){if(e===2||!Gi&&!$u){Ht.isUpdating=!0,Zl&&Zl.update(0);var t=Lt.length,n=wi(),i=n-af>=50,s=t&&Lt[0].scroll();if(Cu=Td>s?-1:1,Gi||(Td=s),i&&(Nr&&!ih&&n-Nr>200&&(Nr=0,aa("scrollEnd")),Ul=af,af=n),Cu<0){for(Vi=t;Vi-- >0;)Lt[Vi]&&Lt[Vi].update(0,i);Cu=1}else for(Vi=0;Vi<t;Vi++)Lt[Vi]&&Lt[Vi].update(0,i);Ht.isUpdating=!1}uc=0},bd=[g0,v0,ap,op,Pr+Kl,Pr+Yl,Pr+ql,Pr+$l,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ru=bd.concat([Jo,Qo,"boxSizing","max"+ll,"max"+lp,"position",Pr,Xn,Xn+ql,Xn+Yl,Xn+Kl,Xn+$l]),xw=function(e,t,n){Za(n);var i=e._gsap;if(i.spacerIsNative)Za(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=bd.length,o=t.style,a=e.style,l;s--;)l=bd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ap]=a[op]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Jo]=qu(e,Xi)+ei,o[Qo]=qu(e,ti)+ei,o[Xn]=a[Pr]=a[v0]=a[g0]="0",Za(i),a[Jo]=a["max"+ll]=n[Jo],a[Qo]=a["max"+lp]=n[Qo],a[Xn]=n[Xn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Sw=/([A-Z])/g,Za=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Sw,"-$1").toLowerCase())}},fu=function(e){for(var t=Ru.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ru[s],n[Ru[s]]);return i.t=e,i},yw=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Pu={left:0,top:0},x_=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Ci(e)&&(e=e(l)),dr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?wu("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Fl(e))d&&(e=Ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Au(a,n,i,!0);else{Ci(t)&&(t=t(l));var T=(e||"0").split(" "),v,w,P,C;M=Ji(t,l)||Qt,v=Ds(M)||{},(!v||!v.left&&!v.top)&&Dr(M).display==="none"&&(C=M.style.display,M.style.display="block",v=Ds(M),C?M.style.display=C:M.style.removeProperty("display")),w=wu(T[0],v[i.d]),P=wu(T[1]||"0",n),e=v[i.p]-c[i.p]-u+w+s-P,a&&Au(a,P,i,n-P<20||a._isStart&&P>20),n-=n-P}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var N=e+n,y=o._isStart;m="scroll"+i.d2,Au(o,N,i,y&&N>20||!y&&(h?Math.max(Qt[m],mr[m]):o.parentNode[m])<=N+1),h&&(c=Ds(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ei))}return d&&M&&(m=Ds(M),d.seek(f),p=Ds(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},Mw=/(webkit|moz|length|cssText|inset)/i,S_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Qt){e._stOrig=s.cssText,a=Dr(e);for(o in a)!+o&&!Mw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},T0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},du=function(e,t,n){var i={};i[t.p]="+="+n,Ye.set(e,i)},y_=function(e,t){var n=vo(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=T0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Ft.cache++,o.tween&&Us()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ye.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ci(e,"wheel",n.wheelHandler),Ht.isTouch&&ci(e,"touchmove",n.wheelHandler),s},Ht=(function(){function r(t,n){Ua||r.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Nl){this.update=this.refresh=this.kill=ns;return}n=p_(dr(n)||Fl(n)||n.nodeType?{trigger:n}:n,uu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,T=s.once,v=s.snap,w=s.pinReparent,P=s.pinSpacer,C=s.containerAnimation,N=s.fastScrollEnd,y=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Xi:ti,L=!h&&h!==0,B=Ji(n.scroller||Ot),X=Ye.core.getCache(B),Z=sa(B),te=("pinType"in n?n.pinType:po(B,"pinType")||Z&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=L&&n.toggleActions.split(" "),W="markers"in n?n.markers:uu.markers,ue=Z?0:parseFloat(Dr(B)["border"+S.p2+ll])||0,U=this,be=n.onRefreshInit&&function(){return n.onRefreshInit(U)},$e=fw(B,Z,S),Ct=dw(B,Z),et=0,ne=0,xe=0,de=vo(B,S),Se,se,Je,De,Ue,I,Ae,ze,ut,z,gt,Pe,st,Qe,Vt,D,x,G,ae,ce,ie,Oe,ge,we,Te,_e,Ee,qe,Ve,Me,tt,O,me,ve,Ce,fe,re,Be,We;if(U._startClamp=U._endClamp=!1,U._dir=S,m*=45,U.scroller=B,U.scroll=C?C.time.bind(C):de,De=de(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(c0=1,n.refreshPriority===-9999&&(Zl=U)),X.tweenScroll=X.tweenScroll||{top:y_(B,ti),left:y_(B,Xi)},U.tweenTo=Se=X.tweenScroll[S.p],U.scrubDuration=function(Re){me=Fl(Re)&&Re,me?O?O.duration(Re):O=Ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:me,paused:!0,onComplete:function(){return p&&p(U)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),Me=0,l||(l=i.vars.id)),v&&((!Ho(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Qt.style&&Ye.set(Z?[Qt,mr]:B,{scrollBehavior:"auto"}),Ft.forEach(function(Re){return Ci(Re)&&Re.target===(Z?mn.scrollingElement||mr:B)&&(Re.smooth=!1)}),Je=Ci(v.snapTo)?v.snapTo:v.snapTo==="labels"?mw(i):v.snapTo==="labelsDirectional"?_w(i):v.directional!==!1?function(Re,it){return cp(v.snapTo)(Re,wi()-ne<500?0:it.direction)}:Ye.utils.snap(v.snapTo),ve=v.duration||{min:.1,max:2},ve=Ho(ve)?Xl(ve.min,ve.max):Xl(ve,ve),Ce=Ye.delayedCall(v.delay||me/2||.1,function(){var Re=de(),it=wi()-ne<500,Ge=Se.tween;if((it||Math.abs(U.getVelocity())<10)&&!Ge&&!ih&&et!==Re){var at=(Re-I)/Qe,gn=i&&!L?i.totalProgress():at,xt=it?0:(gn-tt)/(wi()-Ul)*1e3||0,$t=Ye.utils.clamp(-at,1-at,La(xt/2)*xt/.185),vn=at+(v.inertia===!1?0:$t),sn,tn,Kt=v,xn=Kt.onStart,Jt=Kt.onInterrupt,nn=Kt.onComplete;if(sn=Je(vn,U),Fl(sn)||(sn=vn),tn=Math.max(0,Math.round(I+sn*Qe)),Re<=Ae&&Re>=I&&tn!==Re){if(Ge&&!Ge._initted&&Ge.data<=La(tn-Re))return;v.inertia===!1&&($t=sn-at),Se(tn,{duration:ve(La(Math.max(La(vn-gn),La(sn-gn))*.185/xt/.05||0)),ease:v.ease||"power3",data:La(tn-Re),onInterrupt:function(){return Ce.restart(!0)&&Jt&&Jt(U)},onComplete:function(){U.update(),et=de(),i&&!L&&(O?O.resetTo("totalProgress",sn,i._tTime/i._tDur):i.progress(sn)),Me=tt=i&&!L?i.totalProgress():U.progress,M&&M(U),nn&&nn(U)}},Re,$t*Qe,tn-Re-$t*Qe),xn&&xn(U,Se.tween)}}else U.isActive&&et!==Re&&Ce.restart(!0)}).pause()),l&&(Ed[l]=U),f=U.trigger=Ji(f||d!==!0&&d),We=f&&f._gsap&&f._gsap.stRevert,We&&(We=We(U)),d=d===!0?f:Ji(d),dr(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Pr||(g=!g&&d.parentNode&&d.parentNode.style&&Dr(d.parentNode).display==="flex"?!1:Xn),U.pin=d,se=Ye.core.getCache(d),se.spacer?Vt=se.pinState:(P&&(P=Ji(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),se.spacerIsNative=!!P,P&&(se.spacerState=fu(P))),se.spacer=G=P||mn.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),se.pinState=Vt=fu(d)),n.force3D!==!1&&Ye.set(d,{force3D:!0}),U.spacer=G=se.spacer,Ve=Dr(d),we=Ve[g+S.os2],ce=Ye.getProperty(d),ie=Ye.quickSetter(d,S.a,ei),uf(d,G,Ve),x=fu(d)),W){Pe=Ho(W)?p_(W,m_):m_,z=hu("scroller-start",l,B,S,Pe,0),gt=hu("scroller-end",l,B,S,Pe,0,z),ae=z["offset"+S.op.d2];var It=Ji(po(B,"content")||B);ze=this.markerStart=hu("start",l,It,S,Pe,ae,0,C),ut=this.markerEnd=hu("end",l,It,S,Pe,ae,0,C),C&&(Be=Ye.quickSetter([ze,ut],S.a,ei)),!te&&!(hs.length&&po(B,"fixedMarkers")===!0)&&(pw(Z?Qt:B),Ye.set([z,gt],{force3D:!0}),_e=Ye.quickSetter(z,S.a,ei),qe=Ye.quickSetter(gt,S.a,ei))}if(C){var Le=C.vars.onUpdate,je=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){U.update(0,0,1),Le&&Le.apply(C,je||[])})}if(U.previous=function(){return Lt[Lt.indexOf(U)-1]},U.next=function(){return Lt[Lt.indexOf(U)+1]},U.revert=function(Re,it){if(!it)return U.kill(!0);var Ge=Re!==!1||!U.enabled,at=bi;Ge!==U.isReverted&&(Ge&&(fe=Math.max(de(),U.scroll.rec||0),xe=U.progress,re=i&&i.progress()),ze&&[ze,ut,z,gt].forEach(function(gn){return gn.style.display=Ge?"none":"block"}),Ge&&(bi=U,U.update(Ge)),d&&(!w||!U.isActive)&&(Ge?xw(d,G,Vt):uf(d,G,Dr(d),Te)),Ge||U.update(Ge),bi=at,U.isReverted=Ge)},U.refresh=function(Re,it,Ge,at){if(!((bi||!U.enabled)&&!it)){if(d&&Re&&Nr){ci(r,"scrollEnd",S0);return}!Gi&&be&&be(U),bi=U,Se.tween&&!Ge&&(Se.tween.kill(),Se.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(St){return St.vars.immediateRender&&St.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var gn=$e(),xt=Ct(),$t=C?C.duration():cs(B,S),vn=Qe<=.01||!Qe,sn=0,tn=at||0,Kt=Ho(Ge)?Ge.end:n.end,xn=n.endTrigger||f,Jt=Ho(Ge)?Ge.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),nn=U.pinnedContainer=n.pinnedContainer&&Ji(n.pinnedContainer,U),rn=f&&Math.max(0,Lt.indexOf(U))||0,_n=rn,b,k,K,j,H,he,ye,He,Ie,Ze,Ke,Xe,dt;for(W&&Ho(Ge)&&(Xe=Ye.getProperty(z,S.p),dt=Ye.getProperty(gt,S.p));_n-- >0;)he=Lt[_n],he.end||he.refresh(0,1)||(bi=U),ye=he.pin,ye&&(ye===f||ye===d||ye===nn)&&!he.isReverted&&(Ze||(Ze=[]),Ze.unshift(he),he.revert(!0,!0)),he!==Lt[_n]&&(rn--,_n--);for(Ci(Jt)&&(Jt=Jt(U)),Jt=u_(Jt,"start",U),I=x_(Jt,f,gn,S,de(),ze,z,U,xt,ue,te,$t,C,U._startClamp&&"_startClamp")||(d?-.001:0),Ci(Kt)&&(Kt=Kt(U)),dr(Kt)&&!Kt.indexOf("+=")&&(~Kt.indexOf(" ")?Kt=(dr(Jt)?Jt.split(" ")[0]:"")+Kt:(sn=wu(Kt.substr(2),gn),Kt=dr(Jt)?Jt:(C?Ye.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,I):I)+sn,xn=f)),Kt=u_(Kt,"end",U),Ae=Math.max(I,x_(Kt||(xn?"100% 0":$t),xn,gn,S,de()+sn,ut,gt,U,xt,ue,te,$t,C,U._endClamp&&"_endClamp"))||-.001,sn=0,_n=rn;_n--;)he=Lt[_n],ye=he.pin,ye&&he.start-he._pinPush<=I&&!C&&he.end>0&&(b=he.end-(U._startClamp?Math.max(0,he.start):he.start),(ye===f&&he.start-he._pinPush<I||ye===nn)&&isNaN(Jt)&&(sn+=b*(1-he.progress)),ye===d&&(tn+=b));if(I+=sn,Ae+=sn,U._startClamp&&(U._startClamp+=sn),U._endClamp&&!Gi&&(U._endClamp=Ae||-.001,Ae=Math.min(Ae,cs(B,S))),Qe=Ae-I||(I-=.01)&&.001,vn&&(xe=Ye.utils.clamp(0,1,Ye.utils.normalize(I,Ae,fe))),U._pinPush=tn,ze&&sn&&(b={},b[S.a]="+="+sn,nn&&(b[S.p]="-="+de()),Ye.set([ze,ut],b)),d&&!(Md&&U.end>=cs(B,S)))b=Dr(d),j=S===ti,K=de(),Oe=parseFloat(ce(S.a))+tn,!$t&&Ae>1&&(Ke=(Z?mn.scrollingElement||mr:B).style,Ke={style:Ke,value:Ke["overflow"+S.a.toUpperCase()]},Z&&Dr(Qt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ke.style["overflow"+S.a.toUpperCase()]="scroll")),uf(d,G,b),x=fu(d),k=Ds(d,!0),He=te&&vo(B,j?Xi:ti)(),g?(Te=[g+S.os2,Qe+tn+ei],Te.t=G,_n=g===Xn?qu(d,S)+Qe+tn:0,_n&&(Te.push(S.d,_n+ei),G.style.flexBasis!=="auto"&&(G.style.flexBasis=_n+ei)),Za(Te),nn&&Lt.forEach(function(St){St.pin===nn&&St.vars.pinSpacing!==!1&&(St._subPinOffset=!0)}),te&&de(fe)):(_n=qu(d,S),_n&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=_n+ei)),te&&(H={top:k.top+(j?K-I:He)+ei,left:k.left+(j?He:K-I)+ei,boxSizing:"border-box",position:"fixed"},H[Jo]=H["max"+ll]=Math.ceil(k.width)+ei,H[Qo]=H["max"+lp]=Math.ceil(k.height)+ei,H[Pr]=H[Pr+ql]=H[Pr+Yl]=H[Pr+Kl]=H[Pr+$l]="0",H[Xn]=b[Xn],H[Xn+ql]=b[Xn+ql],H[Xn+Yl]=b[Xn+Yl],H[Xn+Kl]=b[Xn+Kl],H[Xn+$l]=b[Xn+$l],D=yw(Vt,H,w),Gi&&de(0)),i?(Ie=i._initted,sf(1),i.render(i.duration(),!0,!0),ge=ce(S.a)-Oe+Qe+tn,Ee=Math.abs(Qe-ge)>1,te&&Ee&&D.splice(D.length-2,2),i.render(0,!0,!0),Ie||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sf(0)):ge=Qe,Ke&&(Ke.value?Ke.style["overflow"+S.a.toUpperCase()]=Ke.value:Ke.style.removeProperty("overflow-"+S.a));else if(f&&de()&&!C)for(k=f.parentNode;k&&k!==Qt;)k._pinOffset&&(I-=k._pinOffset,Ae-=k._pinOffset),k=k.parentNode;Ze&&Ze.forEach(function(St){return St.revert(!1,!0)}),U.start=I,U.end=Ae,De=Ue=Gi?fe:de(),!C&&!Gi&&(De<fe&&de(fe),U.scroll.rec=0),U.revert(!1,!0),ne=wi(),Ce&&(et=-1,Ce.restart(!0)),bi=0,i&&L&&(i._initted||re)&&i.progress()!==re&&i.progress(re||0,!0).render(i.time(),!0,!0),(vn||xe!==U.progress||C||_||i&&!i._initted)&&(i&&!L&&(i._initted||xe||i.vars.immediateRender!==!1)&&i.totalProgress(C&&I<-.001&&!xe?Ye.utils.normalize(I,Ae,0):xe,!0),U.progress=vn||(De-I)/Qe===xe?0:xe),d&&g&&(G._pinOffset=Math.round(U.progress*ge)),O&&O.invalidate(),isNaN(Xe)||(Xe-=Ye.getProperty(z,S.p),dt-=Ye.getProperty(gt,S.p),du(z,S,Xe),du(ze,S,Xe-(at||0)),du(gt,S,dt),du(ut,S,dt-(at||0))),vn&&!Gi&&U.update(),u&&!Gi&&!st&&(st=!0,u(U),st=!1)}},U.getVelocity=function(){return(de()-Ue)/(wi()-Ul)*1e3||0},U.endAnimation=function(){Rl(U.callbackAnimation),i&&(O?O.progress(1):i.paused()?L||Rl(i,U.direction<0,1):Rl(i,i.reversed()))},U.labelToScroll=function(Re){return i&&i.labels&&(I||U.refresh()||I)+i.labels[Re]/i.duration()*Qe||0},U.getTrailing=function(Re){var it=Lt.indexOf(U),Ge=U.direction>0?Lt.slice(0,it).reverse():Lt.slice(it+1);return(dr(Re)?Ge.filter(function(at){return at.vars.preventOverlaps===Re}):Ge).filter(function(at){return U.direction>0?at.end<=I:at.start>=Ae})},U.update=function(Re,it,Ge){if(!(C&&!Ge&&!Re)){var at=Gi===!0?fe:U.scroll(),gn=Re?0:(at-I)/Qe,xt=gn<0?0:gn>1?1:gn||0,$t=U.progress,vn,sn,tn,Kt,xn,Jt,nn,rn;if(it&&(Ue=De,De=C?de():at,v&&(tt=Me,Me=i&&!L?i.totalProgress():xt)),m&&d&&!bi&&!ou&&Nr&&(!xt&&I<at+(at-Ue)/(wi()-Ul)*m?xt=1e-4:xt===1&&Ae>at+(at-Ue)/(wi()-Ul)*m&&(xt=.9999)),xt!==$t&&U.enabled){if(vn=U.isActive=!!xt&&xt<1,sn=!!$t&&$t<1,Jt=vn!==sn,xn=Jt||!!xt!=!!$t,U.direction=xt>$t?1:-1,U.progress=xt,xn&&!bi&&(tn=xt&&!$t?0:xt===1?1:$t===1?2:3,L&&(Kt=!Jt&&Q[tn+1]!=="none"&&Q[tn+1]||Q[tn],rn=i&&(Kt==="complete"||Kt==="reset"||Kt in i))),y&&(Jt||rn)&&(rn||h||!i)&&(Ci(y)?y(U):U.getTrailing(y).forEach(function(K){return K.endAnimation()})),L||(O&&!bi&&!ou?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",xt,i._tTime/i._tDur):(O.vars.totalProgress=xt,O.invalidate().restart())):i&&i.totalProgress(xt,!!(bi&&(ne||Re)))),d){if(Re&&g&&(G.style[g+S.os2]=we),!te)ie(Ol(Oe+ge*xt));else if(xn){if(nn=!Re&&xt>$t&&Ae+1>at&&at+1>=cs(B,S),w)if(!Re&&(vn||nn)){var _n=Ds(d,!0),b=at-I;S_(d,Qt,_n.top+(S===ti?b:0)+ei,_n.left+(S===ti?0:b)+ei)}else S_(d,G);Za(vn||nn?D:x),Ee&&xt<1&&vn||ie(Oe+(xt===1&&!nn?ge:0))}}v&&!Se.tween&&!bi&&!ou&&Ce.restart(!0),a&&(Jt||T&&xt&&(xt<1||!of))&&cc(a.targets).forEach(function(K){return K.classList[vn||T?"add":"remove"](a.className)}),o&&!L&&!Re&&o(U),xn&&!bi?(L&&(rn&&(Kt==="complete"?i.pause().totalProgress(1):Kt==="reset"?i.restart(!0).pause():Kt==="restart"?i.restart(!0):i[Kt]()),o&&o(U)),(Jt||!of)&&(c&&Jt&&lf(U,c),J[tn]&&lf(U,J[tn]),T&&(xt===1?U.kill(!1,1):J[tn]=0),Jt||(tn=xt===1?1:3,J[tn]&&lf(U,J[tn]))),N&&!vn&&Math.abs(U.getVelocity())>(Fl(N)?N:2500)&&(Rl(U.callbackAnimation),O?O.progress(1):Rl(i,Kt==="reverse"?1:!xt,1))):L&&o&&!bi&&o(U)}if(qe){var k=C?at/C.duration()*(C._caScrollDist||0):at;_e(k+(z._isFlipped?1:0)),qe(k)}Be&&Be(-at/C.duration()*(C._caScrollDist||0))}},U.enable=function(Re,it){U.enabled||(U.enabled=!0,ci(B,"resize",Bl),Z||ci(B,"scroll",Ia),be&&ci(r,"refreshInit",be),Re!==!1&&(U.progress=xe=0,De=Ue=et=de()),it!==!1&&U.refresh())},U.getTween=function(Re){return Re&&Se?Se.tween:O},U.setPositions=function(Re,it,Ge,at){if(C){var gn=C.scrollTrigger,xt=C.duration(),$t=gn.end-gn.start;Re=gn.start+$t*Re/xt,it=gn.start+$t*it/xt}U.refresh(!1,!1,{start:h_(Re,Ge&&!!U._startClamp),end:h_(it,Ge&&!!U._endClamp)},at),U.update()},U.adjustPinSpacing=function(Re){if(Te&&Re){var it=Te.indexOf(S.d)+1;Te[it]=parseFloat(Te[it])+Re+ei,Te[1]=parseFloat(Te[1])+Re+ei,Za(Te)}},U.disable=function(Re,it){if(U.enabled&&(Re!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,it||O&&O.pause(),fe=0,se&&(se.uncache=1),be&&li(r,"refreshInit",be),Ce&&(Ce.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!Z)){for(var Ge=Lt.length;Ge--;)if(Lt[Ge].scroller===B&&Lt[Ge]!==U)return;li(B,"resize",Bl),Z||li(B,"scroll",Ia)}},U.kill=function(Re,it){U.disable(Re,it),O&&!it&&O.kill(),l&&delete Ed[l];var Ge=Lt.indexOf(U);Ge>=0&&Lt.splice(Ge,1),Ge===Vi&&Cu>0&&Vi--,Ge=0,Lt.forEach(function(at){return at.scroller===U.scroller&&(Ge=1)}),Ge||Gi||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Re&&i.revert({kill:!1}),it||i.kill()),ze&&[ze,ut,z,gt].forEach(function(at){return at.parentNode&&at.parentNode.removeChild(at)}),Zl===U&&(Zl=0),d&&(se&&(se.uncache=1),Ge=0,Lt.forEach(function(at){return at.pin===d&&Ge++}),Ge||(se.spacer=0)),n.onKill&&n.onKill(U)},Lt.push(U),U.enable(!1,!1),We&&We(U),i&&i.add&&!Qe){var vt=U.update;U.update=function(){U.update=vt,Ft.cache++,I||Ae||U.refresh()},Ye.delayedCall(.01,U.update),Qe=.01,I=Ae=0}else U.refresh();d&&vw()},r.register=function(n){return Ua||(Ye=n||p0(),d0()&&window.document&&r.enable(),Ua=Nl),Ua},r.defaults=function(n){if(n)for(var i in n)uu[i]=n[i];return uu},r.disable=function(n,i){Nl=0,Lt.forEach(function(o){return o[i?"kill":"disable"](n)}),li(Ot,"wheel",Ia),li(mn,"scroll",Ia),clearInterval(su),li(mn,"touchcancel",ns),li(Qt,"touchstart",ns),lu(li,mn,"pointerdown,touchstart,mousedown",f_),lu(li,mn,"pointerup,touchend,mouseup",d_),Yu.kill(),au(li);for(var s=0;s<Ft.length;s+=3)cu(li,Ft[s],Ft[s+1]),cu(li,Ft[s],Ft[s+2])},r.enable=function(){if(Ot=window,mn=document,mr=mn.documentElement,Qt=mn.body,Ye&&(cc=Ye.utils.toArray,Xl=Ye.utils.clamp,yd=Ye.core.context||ns,sf=Ye.core.suppressOverwrites||ns,rp=Ot.history.scrollRestoration||"auto",Td=Ot.pageYOffset||0,Ye.core.globals("ScrollTrigger",r),Qt)){Nl=1,Ka=document.createElement("div"),Ka.style.height="100vh",Ka.style.position="absolute",E0(),hw(),kn.register(Ye),r.isTouch=kn.isTouch,to=kn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=kn.isTouch===1,ci(Ot,"wheel",Ia),ip=[Ot,mn,mr,Qt],Ye.matchMedia?(r.matchMedia=function(c){var u=Ye.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ye.addEventListener("matchMediaInit",function(){return up()}),Ye.addEventListener("matchMediaRevert",function(){return y0()}),Ye.addEventListener("matchMedia",function(){$o(0,1),aa("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return cf(),cf})):console.warn("Requires GSAP 3.11.0 or later"),cf(),ci(mn,"scroll",Ia);var n=Qt.hasAttribute("style"),i=Qt.style,s=i.borderTopStyle,o=Ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ds(Qt),ti.m=Math.round(a.top+ti.sc())||0,Xi.m=Math.round(a.left+Xi.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Qt.setAttribute("style",""),Qt.removeAttribute("style")),su=setInterval(__,250),Ye.delayedCall(.5,function(){return ou=0}),ci(mn,"touchcancel",ns),ci(Qt,"touchstart",ns),lu(ci,mn,"pointerdown,touchstart,mousedown",f_),lu(ci,mn,"pointerup,touchend,mouseup",d_),xd=Ye.utils.checkPrefix("transform"),Ru.push(xd),Ua=wi(),Yu=Ye.delayedCall(.2,$o).pause(),Na=[mn,"visibilitychange",function(){var c=Ot.innerWidth,u=Ot.innerHeight;mn.hidden?(l_=c,c_=u):(l_!==c||c_!==u)&&Bl()},mn,"DOMContentLoaded",$o,Ot,"load",$o,Ot,"resize",Bl],au(ci),Lt.forEach(function(c){return c.enable(0,1)}),l=0;l<Ft.length;l+=3)cu(li,Ft[l],Ft[l+1]),cu(li,Ft[l],Ft[l+2])}},r.config=function(n){"limitCallbacks"in n&&(of=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(su)||(su=i)&&setInterval(__,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(au(li)||au(ci,n.autoRefreshEvents||"none"),u0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ji(n),o=Ft.indexOf(s),a=sa(s);~o&&Ft.splice(o,a?6:2),i&&(a?hs.unshift(Ot,i,Qt,i,mr,i):hs.unshift(s,i))},r.clearMatchMedia=function(n){Lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(dr(n)?Ji(n):n).getBoundingClientRect(),a=o[s?Jo:Qo]*i||0;return s?o.right-a>0&&o.left+a<Ot.innerWidth:o.bottom-a>0&&o.top+a<Ot.innerHeight},r.positionInViewport=function(n,i,s){dr(n)&&(n=Ji(n));var o=n.getBoundingClientRect(),a=o[s?Jo:Qo],l=i==null?a/2:i in Ku?Ku[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Ot.innerWidth:(o.top+l)/Ot.innerHeight},r.killAll=function(n){if(Lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=oa.killAll||[];oa={},i.forEach(function(s){return s()})}},r})();Ht.version="3.13.0";Ht.saveStyles=function(r){return r?cc(r).forEach(function(e){if(e&&e.style){var t=fr.indexOf(e);t>=0&&fr.splice(t,5),fr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),yd())}}):fr};Ht.revert=function(r,e){return up(!r,e)};Ht.create=function(r,e){return new Ht(r,e)};Ht.refresh=function(r){return r?Bl(!0):(Ua||Ht.register())&&$o(!0)};Ht.update=function(r){return++Ft.cache&&Us(r===!0?2:0)};Ht.clearScrollMemory=M0;Ht.maxScroll=function(r,e){return cs(r,e?Xi:ti)};Ht.getScrollFunc=function(r,e){return vo(Ji(r),e?Xi:ti)};Ht.getById=function(r){return Ed[r]};Ht.getAll=function(){return Lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ht.isScrolling=function(){return!!Nr};Ht.snapDirectional=cp;Ht.addEventListener=function(r,e){var t=oa[r]||(oa[r]=[]);~t.indexOf(e)||t.push(e)};Ht.removeEventListener=function(r,e){var t=oa[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ht.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ye.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Ci(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ci(s)&&(s=s(),ci(Ht,"refresh",function(){return s=e.batchMax()})),cc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ht.create(c))}),t};var M_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kn.isTouch?" pinch-zoom":""):"none",e===mr&&r(Qt,t)},pu={auto:1,scroll:1},Ew=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ye.core.getCache(s),a=wi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Qt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pu[(l=Dr(s)).overflowY]||pu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!sa(s)&&(pu[(l=Dr(s)).overflowY]||pu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},b0=function(e,t,n,i){return kn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Ew,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ci(mn,kn.eventTypes[0],T_,!1,!0)},onDisable:function(){return li(mn,kn.eventTypes[0],T_,!0)}})},Tw=/(input|label|select|textarea)/i,E_,T_=function(e){var t=Tw.test(e.target.tagName);(t||E_)&&(e._gsapAllow=!0,E_=t)},bw=function(e){Ho(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Ji(e.target)||mr,u=Ye.core.globals().ScrollSmoother,h=u&&u.get(),f=to&&(e.content&&Ji(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=vo(c,ti),g=vo(c,Xi),_=1,m=(kn.isTouch&&Ot.visualViewport?Ot.visualViewport.scale*Ot.visualViewport.width:Ot.outerWidth)/Ot.innerWidth,p=0,M=Ci(i)?function(){return i(a)}:function(){return i||2.8},T,v,w=b0(c,e.type,!0,s),P=function(){return v=!1},C=ns,N=ns,y=function(){l=cs(c,ti),N=Xl(to?1:0,l),n&&(C=Xl(0,cs(c,Xi))),T=ea},S=function(){f._gsap.y=Ol(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(P);var W=Ol(a.deltaY/2),ue=N(d.v-W);if(f&&ue!==d.v+d.offset){d.offset=ue-d.v;var U=Ol((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=Ft.cache,Us()}return!0}d.offset&&S(),v=!0},B,X,Z,te,J=function(){y(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Ye.set(f,{y:"+=0"}),e.ignoreCheck=function(Q){return to&&Q.type==="touchmove"&&L()||_>1.05&&Q.type!=="touchstart"||a.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){v=!1;var Q=_;_=Ol((Ot.visualViewport&&Ot.visualViewport.scale||1)/m),B.pause(),Q!==_&&hf(c,_>1.01?!0:n?!1:"x"),X=g(),Z=d(),y(),T=ea},e.onRelease=e.onGestureStart=function(Q,W){if(d.offset&&S(),!W)te.restart(!0);else{Ft.cache++;var ue=M(),U,be;n&&(U=g(),be=U+ue*.05*-Q.velocityX/.227,ue*=M_(g,U,be,cs(c,Xi)),B.vars.scrollX=C(be)),U=d(),be=U+ue*.05*-Q.velocityY/.227,ue*=M_(d,U,be,cs(c,ti)),B.vars.scrollY=N(be),B.invalidate().duration(ue).play(.01),(to&&B.vars.scrollY>=l||U>=l-1)&&Ye.to({},{onUpdate:J,duration:ue})}o&&o(Q)},e.onWheel=function(){B._ts&&B.pause(),wi()-p>1e3&&(T=0,p=wi())},e.onChange=function(Q,W,ue,U,be){if(ea!==T&&y(),W&&n&&g(C(U[2]===W?X+(Q.startX-Q.x):g()+W-U[1])),ue){d.offset&&S();var $e=be[2]===ue,Ct=$e?Z+Q.startY-Q.y:d()+ue-be[1],et=N(Ct);$e&&Ct!==et&&(Z+=et-Ct),d(et)}(ue||W)&&Us()},e.onEnable=function(){hf(c,n?!1:"x"),Ht.addEventListener("refresh",J),ci(Ot,"resize",J),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){hf(c,!0),li(Ot,"resize",J),Ht.removeEventListener("refresh",J),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new kn(e),a.iOS=to,to&&!d()&&d(1),to&&Ye.ticker.add(ns),te=a._dc,B=Ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:T0(d,d(),function(){return B.pause()})},onUpdate:Us,onComplete:te.vars.onComplete}),a};Ht.sort=function(r){if(Ci(r))return Lt.sort(r);var e=Ot.pageYOffset||0;return Ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ot.innerHeight}),Lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ht.observe=function(r){return new kn(r)};Ht.normalizeScroll=function(r){if(typeof r>"u")return Hi;if(r===!0&&Hi)return Hi.enable();if(r===!1){Hi&&Hi.kill(),Hi=r;return}var e=r instanceof kn?r:bw(r);return Hi&&Hi.target===e.target&&Hi.kill(),sa(e.target)&&(Hi=e),e};Ht.core={_getVelocityProp:vd,_inputObserver:b0,_scrollers:Ft,_proxies:hs,bridge:{ss:function(){Nr||aa("scrollStart"),Nr=wi()},ref:function(){return bi}}};p0()&&Ye.registerPlugin(Ht);Wu.registerPlugin(Ht);class ww{canvas;scroll;constructor(){this.scroll=new ow,this.canvas=new qb({scroll:this.scroll}),this.render()}render(){this.canvas.render(),requestAnimationFrame(this.render.bind(this))}}new ww;
