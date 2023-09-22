const table = [
    "F", "Asha", "75", 1, 1,
    "F", "Sunayna", "18", 18, 1,
    "M", "Krishnakumar", "53", 1, 2,
    "M", "Balakrishnan", "78", 2, 2,
    "M", "Abhay", "26", 13, 2,
    "F", "Yaami", "50", 14, 2,
    "F", "Shirley", "23", 15, 2,
    "M", "Mukil", "23", 16, 2,
    "M", "Sanjay", "23", 17, 2,
    "F", "Lariat", "23", 18, 2,
    "F", "Resitha", "50", 1, 3,
    "F", "Cinta", "23", 2, 3,
    "F", "Britney", "23", 13, 3,
    "F", "Sandra", "23", 14, 3,
    "F", "Divya", "25", 15, 3,
    "F", "Varsha", "22", 16, 3,
    "M", "Mark", "30", 17, 3,
    "M", "David", "37", 18, 3,
    "M", "Akshay", "20", 1, 4,
    "M", "Basil", "22", 2, 4,
    "M", "Antonio", "20", 3, 4,
    "F", "Adlene", "23", 4, 4,
    "F", "Meera", "25", 5, 4,
    "M", "Prithvi", "40", 6, 4,
    "M", "Lee", "30", 7, 4,
    "M", "Ranveer", "45", 8, 4,
    "F", "Dona", "50", 9, 4,
    "M", "Suraj", "40", 10, 4,
    "F", "Dheeraj", "50", 11, 4,
    "M", "Mohan", "34", 12, 4,
    "M", "Kumar", "34", 13, 4,
    "F", "Sona", "34", 14, 4,
    "M", "Kyle", "34", 15, 4,
    "M", "Mithun", "34", 16, 4,
    "M", "Amal", "50", 17, 4,
    "F", "Mrudula", "50", 18, 4,
    "M", "Nithin", "50", 1, 5,
    "M", "Manoj", "34", 2, 5,
    "F", "Santha", "34", 3, 5,
    "M", "Prashanth", "34", 4, 5,
    "M", "Vishnu", "34", 5, 5,
    "F", "Tinu", "34", 6, 5,
    "M", "Ajmal", "34", 7, 5,
    "F", "Mary", "50", 8, 5,
    "M", "Jonas", "43", 9, 5,
    "F", "Cathryne", "43", 10, 5,
    "F", "Kate", "43", 11, 5,
    "M", "Vinayak", "43", 12, 5,
    "F", "Christina", "43", 13, 5,
    "M", "Jose", "43", 14, 5,
    "F", "Fiza", "43", 15, 5,
    "M", "Jeswin", "43", 16, 5,
    "F", "Senora", "43", 17, 5,
    "M", "Delo", "43", 18, 5,
    "F", "Jessica", "27", 1, 6,
    "F", "Hannah", "27", 2, 6,
    "F", "Lana", "27", 4, 9,
    "F", "Mia", "27", 5, 9,
    "F", "Kiara", "27", 6, 9,
    "F", "Jennifer", "27", 7, 9,
    "F", "Ruby", "27", 8, 9,
    "F", "Emma", "27", 9, 9,
    "F", "Anushka", "27", 10, 9,
    "M", "Vijay", "27", 11, 9,
    "M", "Arun", "27", 12, 9,
    "M", "Denny", "27", 13, 9,
    "F", "Litty", "27", 14, 9,
    "M", "Rabir", "27", 15, 9,
    "F", "Diana", "27", 16, 9,
    "M", "Matt", "27", 17, 9,
    "M", "Jason", "29", 18, 9,
    "F", "Jenna", "29", 4, 6,
    "M", "Jack", "29", 5, 6,
    "M", "Leo", "29", 6, 6,
    "F", "Cory", "29", 7, 6,
    "M", "Chase", "29", 8, 6,
    "M", "Jeff", "29", 9, 6,
    "M", "Elon", "29", 10, 6,
    "F", "Ann", "29", 11, 6,
    "M", "Bennet", "29", 12, 6,
    "F", "Rozaria", "29", 13, 6,
    "M", "Joe", "18", 14, 6,
    "M", "John", "18", 15, 6,
    "M", "Patrick", "18", 16, 6,
    "M", "Ryan", "18", 17, 6,
    "M", "Hugh", "18", 18, 6,
    "M", "Clint", "18", 1, 7,
    "M", "Dwayne", "18", 2, 7,
    "F", "Carla", "18", 4, 10,
    "F", "Adele", "18", 5, 10,
    "F", "Patricia", "18", 6, 10,
    "M", "Dan", "18", 7, 10,
    "M", "Ben", "18", 8, 10,
    "M", "Melvin", "18", 9, 10,
    "F", "Shiny", "18", 10, 10,
    "F", "Harsha", "19", 11, 10,
    "F", "Kriti", "19", 12, 10,
    "M", "Aryan", "19", 13, 10,
    "M", "Gibson", "19", 14, 10,
    "M", "James", "19", 15, 10,
    "M", "Tom", "60", 16, 10,
    "M", "Chris", "60", 17, 10,
    "M", "Conwell", "60", 18, 10,
    "F", "Charlotte", "60", 4, 7,
    "F", "Abigail", "60", 5, 7,
    "F", "Ava", "60", 6, 7,
    "F", "Isabella", "60", 7, 7,
    "F", "Olivia", "60", 8, 7,
    "M", "Kenneth", "30", 9, 7,
    "M", "Thomas", "30", 10, 7,
    "M", "Adith", "30", 11, 7,
    "M", "Haroon", "30", 12, 7,
    "F", "Celestina", "30", 13, 7,
    "M", "Kevin", "30", 14, 7,
    "M", "Aromal", "30", 15, 7,
    "M", "Donnal", "30", 16, 7,
    "F", "Alice", "30", 17, 7,
    "M", "Henry", "30", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    if(table[i]=='F'){
    element.style.backgroundColor = 'rgba(255,20,147,' + (Math.random() * 0.5 + 0.25) + ')';}
    else{
        element.style.backgroundColor = 'rgba(0,0,255,' + (Math.random() * 0.5 + 0.25) + ')';
    }

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector, index){
    const theta = index * 4 + Math.PI;
    const y = - (index *12) + 450;
    let object = new THREE.Object3D;

    object.position.setFromCylindricalCoords(theta, y);

    coneVector.x = object.position.x * 2;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z * 2;

    object.lookAt(coneVector);
    targets.cone.push(object);
}


function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
