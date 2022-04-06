// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function calculates speed.
 */
function buttonClicked () {
  // get user input
  let sideA = parseFloat(document.getElementById('sideA').value)
  let sideB = parseFloat(document.getElementById('sideB').value)
  let height = parseFloat(document.getElementById('height').value)

  // calculate the speed
  let area = sideA

  // display the results
  document.getElementById('speed').innerHTML = "Your speed will be " + speed.toFixed(2) + "km/h"
}