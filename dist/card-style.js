const callBack = () => {
  $(".card-middle").slideToggle();
  $(".close").toggleClass("closeRotate");
};

$(".circle-button").on("click", callBack);
