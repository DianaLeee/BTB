// var itemDescription = document.querySelector(".item-description");
var tableData = document.querySelectorAll("th, td");

// var toggleImgOn = document.querySelector(".toggle-on");
var toggleButtonContainer = document.querySelector(".toggle-button");

toggleButtonContainer.addEventListener("click", function() {
  if (this.on) {
    this.classList.remove("on");
    deactiveItemDescription();
  } else {
    this.classList.add("on");
    activeItemDescription();
  }
  this.on = !this.on;
});

function activeItemDescription() {
  var itemDescription = document.querySelectorAll(".item-description");
  var itemContainerImg = document.querySelectorAll(".item-container img");
  itemDescription.forEach(function(item) {
    item.classList.add("active");
  });

  itemContainerImg.forEach(function(item) {
    item.classList.add("active");
  });
}

function deactiveItemDescription() {
  var itemDescription = document.querySelectorAll(".item-description");
  var itemContainerImg = document.querySelectorAll(".item-container img");

  itemDescription.forEach(function(item) {
    item.classList.remove("active");
  });

  itemContainerImg.forEach(function(item) {
    item.classList.remove("active");
  });
}

tableData.forEach(function(item) {
  // item.addEventListener("mouseenter", onclick);
  // item.addEventListener("mouseleave", mouseLeave);
  item.addEventListener("click", onclick);
});

function onclick() {
  var itemDescription = this.querySelector(".item-description");

  if (itemDescription.active) {
    itemDescription.classList.remove("active");
  } else {
    itemDescription.classList.add("active");
  }

  itemDescription.active = !itemDescription.active;
}

function mouseLeave() {
  var itemDescription = this.querySelector(".item-description");

  if (itemDescription.active) {
    itemDescription.classList.remove("active");
  } else {
    itemDescription.classList.add("active");
  }

  itemDescription.active = !itemDescription.active;
}
