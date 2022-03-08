const callBack = (event) => {
  const target = event.target;
  console.log(target);
  if ($(target).is("img")) {
    $(".card-middle").slideToggle();
    $(".close").toggleClass("closeRotate");
  }
};

$(".circle-button").on("click", callBack);
