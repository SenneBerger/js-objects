//exercise one
let me, info, ilen, i;
me = [
  "Name: Senne Berger",
  "Age: 25",
  "Gender: Male",
  "Food: Pizza, Mexican, Burgers, Chinese. This list basicly never ends",
  "Series: Game of Thrones. Season 8 can go fork itself, The Good Place, Stranger Things, Lucifer",
  "Movie: Any Quentin Tarantino movie",
  "Single: D-Sturb - Universe"
];
ilen = me.length;

info = "<ul>";
for (i = 0; i < ilen; i++)  {
  info += "<li>" + me[i] + "</li>";
}
info += "</ul>";

document.getElementById("exone").innerHTML = info;
console.log(me);


//EXTWO-----


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

}


var myFather = new Person("Jo", "Berger", 57,);
var myMother = new Person("Wivina", "Moors", 54,);
var myBrother = new Person("Sam", "Berger", 30);

// my dad
myFather.name = function () {
  return "My father is" + " " + this.firstName + " " + this.lastName + ". He is" + " " + this.age;
};

document.getElementById("dad").innerHTML = myFather.name();

document.getElementById("myBtn").addEventListener("click", function() {
  showPictureDad();
});

function showPictureDad() {
  var img = document.getElementById('bigpic')
  img.style.display = "block";
}

// my mother
myMother.name = function () {
  return "My mother is" + " " + this.firstName + " " + this.lastName + ". She is" + " " + this.age;
};

document.getElementById("mom").innerHTML = myMother.name();

document.getElementById("myBtnTwo").addEventListener("click", function() {
  showPictureMom();
});

function showPictureMom() {
  var img = document.getElementById('mompic')
  img.style.display = "block";
}
// my brother
myBrother.name = function () {
  return "My brother is" + " " + this.firstName + " " + this.lastName + ". He is" + " " + this.age;
};

document.getElementById("bro").innerHTML = myBrother.name();

document.getElementById("myBtnThree").addEventListener("click", function() {
  showPictureBro();
});

function showPictureBro() {
  var img = document.getElementById('bropic')
  img.style.display = "block";
}



console.log(myBrother, myFather, myMother);
