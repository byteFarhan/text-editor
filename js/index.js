// all id's
/*
 textarea
text-color
text-size
btn-justify
btn-right
btn-center
btn-left
text-underline
text-bold
text-italic
 */

function getElement(elementId) {
  const element = document.getElementById(elementId);
  return element;
}
const textarea = getElement("textarea");
const textColor = getElement("text-color");
// console.log(textColor);
const textSize = getElement("text-size");
const btnJustify = getElement("btn-justify");
const btnRight = getElement("btn-right");
const btnCenter = getElement("btn-center");
const btnLeft = getElement("btn-left");
const textUnderline = getElement("text-underline");
const textBold = getElement("text-bold");
const textItalic = getElement("text-italic");

textColor.addEventListener(`click`, function () {
  //   const textColorValue = textColor.value;
  //   console.log(textColorValue);
  //   textarea.value.style.color = "blue";
  //   textarea.style.color = "blue";
  var textColor = "red"; // Change the text color to red
  textarea.style.color = textColor;
  //   const textarea = document.getElementById("textarea").value;
  //   document.getElementById("textarea").value.style.color = "red";
});

textBold.addEventListener(`click`, function () {
  console.log(textarea.value);
  //   textarea.value.style.font;
  textarea.style.fontWeight = "bold";
});
textItalic.addEventListener(`click`, function () {
  //   textarea.style.fontWeight = "italic";
  textarea.style.fontStyle = "italic";
});
textUnderline.addEventListener(`click`, function () {
  textarea.style.textDecoration = "underline";
});
// text alignment
function textAlign(element, alignment) {
  //   document.getElementById(elementId).addEventListener(`click`, function () {
  element.addEventListener(`click`, function () {
    textarea.style.textAlign = alignment;
  });
}

textAlign(btnLeft, "left");
textAlign(btnCenter, "center");
textAlign(btnRight, "right");
textAlign(btnJustify, "justify");
/* 
btnLeft.addEventListener(`click`, function () {
  textarea.style.textAlign = "left";
});
btnCenter.addEventListener(`click`, function () {
  textarea.style.textAlign = "center";
});
btnRight.addEventListener(`click`, function () {
  textarea.style.textAlign = "right";
});
btnJustify.addEventListener(`click`, function () {
  textarea.style.textAlign = "justify";
});
 */
// function addStyle(styleType,){

// textarea.style.styleType

// }
