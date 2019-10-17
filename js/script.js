console.log('forms and js');

//reading form date
  document.getElementById('submit').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  console.log(name);

  var address = document.getElementById('address').value;
  console.log(address);

  document.getElementById('formData').innerHTML = '</br>' + name + '</br>' + address;
  // target based on tag Name, targeted first div, the index starts a 0
  //document.getElementsByTagName('div')[0].innerHTML = '</br>' + name + '</br>' + address;
});


var names=[];
var projectA = [];
var projectB = [];
var projectC = [];
var averagePerformance = [];
var largest = 0;

var n = parseInt(prompt('Enter the number of employees'));

document.getElementById('saveData').addEventListener('click', function(){
  console.log(names.length);
  if (names.length < n){

  var ename = document.getElementById('ename').value;
  console.log(ename);

  var projA = parseInt(document.getElementById('projectA').value);
  console.log(projA);

  var projB = parseInt(document.getElementById('projectB').value);
  console.log(projB);

  var projC = parseInt(document.getElementById('projectC').value);
  console.log(projC);

  var average = ((projA + projB + projC)/3).toFixed(2);
  console.log(average);

  document.getElementsByTagName('div')[0].innerHTML
  += '</br></br>' + ename + '</br>' + projA + '</br>' + projB + '</br>' + projC + '</br>' + 'Average Performance: ' + average;

  document.getElementById('average').value = average;

  names.push(ename); //push = adding a new value to the array
  projectA.push(projA);
  projectB.push(projB);
  projectC.push(projC);
  averagePerformance.push(average);
  console.log(names, projectA, projectB, projectC, averagePerformance);




  document.getElementById('highestData').addEventListener ('click', function(){
  //document.getElementsByTagName('div')[0].innerHTML += '</br></br> Highest performance is ' + largest;

    for (var i=0; i<averagePerformance.length; i++){
      if(largest < averagePerformance[i]){
        largest = averagePerformance[i];
        var listIndex = i;
        console.log(largest);
      }
    }

    for (var j=0; j<averagePerformance.length; j++){
      if (j === listIndex) {
      //var nameIndex = names[j];
      console.log(names[j]);
      document.getElementsByTagName('div')[0].innerHTML
      += '</br></br> ' + names[j] + ' is the outstanding employee' + ' and average performance is ' + largest;
      }
    }

  })




} else {
  alert('Sorry, cannot store more employees\' details');
}

});

document.getElementById('newData').addEventListener('click', function(){
  document.getElementById('ename').value = '';
  document.getElementById('projectA').value = '';
  document.getElementById('projectB').value = '';
  document.getElementById('projectC').value = '';
  document.getElementById('average').value = '';
});
