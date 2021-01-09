import * as THREE from 'three';

class ParticleSystem {
  constructor(params) {
    this._geometry = new THREE.BufferGeometry();
    this._geometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3));
    
    this._material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: _VS,
      fragmentShader: _FS,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false,
      transparent: true,
      vertexColors: true
    });

    this._points = new THREE.Points(this._geometry, this._material);

    params.parent.add(this._points);
  }



}