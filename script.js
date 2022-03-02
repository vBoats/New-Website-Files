

function displayResults() {
  var pic;
  var elem = document.getElemntById
  if (this.value == "Submit") {
    pic = "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg"
    this.value = "Unsubmit"
  }
  else {
    pic = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg"
    this.value = "Submit"
  }
  document.getElementById('myImage').src = pic;
}


function changeColor() {

}
