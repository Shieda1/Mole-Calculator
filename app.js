// https://www.omnicalculator.com/chemistry/mole

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molesRadio = document.getElementById('molesRadio');
const massRadio = document.getElementById('massRadio');
const molecularweightRadio = document.getElementById('molecularweightRadio');

let moles;
let mass = v1;
let molecularweight = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

molesRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass';
  variable2.textContent = 'Book Value of Asset';
  mass = v1;
  molecularweight = v2;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Moles';
  variable2.textContent = 'Book Value of Asset';
  moles = v1;
  molecularweight = v2;
  result.textContent = '';
});

molecularweightRadio.addEventListener('click', function() {
  variable1.textContent = 'Moles';
  variable2.textContent = 'Mass';
  moles = v1;
  mass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molesRadio.checked)
    result.textContent = `Moles = ${computeMoles().toFixed(2)}`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)}`;

  else if(molecularweightRadio.checked)
    result.textContent = `Book Value of Asset = ${computeMolecularweight().toFixed(2)}`;
})

// calculation

function computeMoles() {
  return Number(mass.value) / Number(molecularweight.value);
}

function computeMass() {
  return Number(moles.value) * Number(molecularweight.value);
}

function computeMolecularweight() {
  return Number(mass.value) / Number(moles.value);
}