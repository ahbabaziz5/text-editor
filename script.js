
    
 /// for cls button   
function clr(){
    let clr = document.getElementById('txt');
    clr.value = " "
}

//// for bold
function b(){
    let b = document.getElementById('txt');
    b.style.fontWeight = "bold";
}

//// for italic
function i(){
    let i = document.getElementById('txt');
    i.style.fontStyle = "italic";
}

//// for underline
function unlne(){
 let d = document.getElementById("txt");
  d.style.textDecoration="underline";
}


//// for toUpper case
function upper(){
    document.getElementById('txt').style.textTransform = "uppercase";
}
//to lower case
function lower(){
    document.getElementById('txt').style.textTransform = "lowercase";
}
//to align center
function alignCenter(){
    document.getElementById('txt').style.textAlign = "center";
}

//to align top
function alignEnd(){
    document.getElementById('txt').style.textAlign = "end";
}
//to align start
function alignStart(){
    document.getElementById('txt').style.textAlign = "start";
}
//font family
function font(){
    let f = document.getElementById('ff').value;
    document.getElementById('txt').style.fontFamily = f;

}
//bg color
function red(){
    document.getElementById('txt').style.backgroundColor = "red";
}
function green(){
    document.getElementById('txt').style.backgroundColor = "lightgreen";
}function blue(){
    document.getElementById('txt').style.backgroundColor = "blue";
}

function pink(){
    document.getElementById('txt').style.backgroundColor = "pink";
}

function yellow(){
    document.getElementById('txt').style.backgroundColor = "yellow";
}

function skyblue(){
    document.getElementById('txt').style.backgroundColor = "skyblue";
}

