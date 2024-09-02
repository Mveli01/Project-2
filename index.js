/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const MeterToFeet = 3.281;
const LiterToGallon = 0.264;
const KiloToPounds = 2.204;

let meter = []
let liter = []
let kilogram = []

const conveterEl = document.getElementById("converter")
const conbtnEl = document.getElementById("con-btn")
const lenghtCalc = document.getElementById("lenght-calc")
const volumeCalc = document.getElementById("volume-calc")
const massCalc = document.getElementById("mass-calc")



conbtnEl.addEventListener("click", function(){
let inputBtn = parseFloat(conveterEl.value)

    if(!isNaN(inputBtn)) {

    meter.push(inputBtn)
    liter.push(inputBtn)
    kilogram.push(inputBtn)

    

    totalMeter = inputBtn * MeterToFeet 
    totalFoot = inputBtn / MeterToFeet

    totalGallons = inputBtn * LiterToGallon
    totalLiters = inputBtn / LiterToGallon

    totalPounds = inputBtn * KiloToPounds
    totalKilos = inputBtn / KiloToPounds

    lenghtCalc.innerHTML = ''
    volumeCalc.innerHTML = ''
    massCalc.innerHTML = ''

    lenghtCalc.innerHTML += `<p>${inputBtn} meters = ${totalMeter.toFixed(3)} feet | ${inputBtn} foot = ${totalFoot.toFixed(3)} meters </p>`
    volumeCalc.innerHTML += `<p>${inputBtn} liters = ${totalGallons.toFixed(3)} Gallons | ${inputBtn} Gallons = ${totalLiters.toFixed(3)} liters</p>`
    massCalc.innerHTML += `<p>${inputBtn} kilos = ${totalPounds.toFixed(3)} Pounds | ${inputBtn} Pounds = ${totalKilos.toFixed(3)} kilos</p>`

    conveterEl.value = " "

    conbtnEl.disabled = false

  }
})

conveterEl.addEventListener("input", function(){
    if(conveterEl.value.trim() !== "")
        conbtnEl.disabled = false
})

