// Icons
const galary = document.getElementById("galary");
const imgModal = document.getElementById("imgModal");
const comment = document.getElementById("comment");
const cmtModal = document.getElementById("cmtModal");
const _Btn = document.querySelector("._Btn");
const xBtn = document.querySelector(".xBtn");
const prcs1 = document.getElementById("prcs1");
const prcs2 = document.getElementById("prcs2");

//to manage modal z-index(1) : toggleModal()
let modalArr = [];
galary.addEventListener("click", function () {
  imgModal.style.visibility = "visible";
  //   imgModal.classList.add("show");
  console.log("show");
  modalArr.push("imgModal");
  console.log(modalArr);
  toggleModal();
});
//to manage modal z-index(2) : toggleModal()
comment.addEventListener("click", function () {
  cmtModal.style.visibility = "visible";
  console.log("show");
  modalArr.push("cmtModal");
  console.log(modalArr);
  toggleModal();
});
_Btn.addEventListener("click", slide);
xBtn.addEventListener("click", close);

//Comment
const cmtRes = document.querySelector(".cmtRes");
const cmtWrite = document.getElementById("cmtWrite");
const cmtBtn = document.getElementById("cmtBtn");
cmtBtn.addEventListener("click", write);

//WindowBtn
const windowModal = document.querySelector(".windowModal");
const prgm = document.querySelector(".prgm");
const help = document.querySelector(".help");
const shtDwn = document.querySelector(".shtDwn");
const windowBtn = document.querySelector("#windowBtn");
windowBtn.addEventListener("click", showWindowModal);

//WindowModal
let prgmTxt = document.querySelector(".prgm p");
prgm.addEventListener("click", function () {
  prgmTxt.innerText = "Notion, Github, Naver Blog, Velog, Comment, Galary";
  prgmTxt.style.color = "#E55807";
});

let helpTxt = document.querySelector(".help p");
help.addEventListener("click", function () {
  helpTxt.innerText = "Explore the Bindow!";
  helpTxt.style.color = "#E55807";
});

const off = document.querySelector(".off");
const rtrn = document.getElementById("rtrn");
shtDwn.addEventListener("click", function () {
  off.style.display = "block";
});
rtrn.addEventListener("click", function () {
  off.style.display = "none";
});

//Bottombar : time
let today = new Date();
let hr = ("0" + today.getHours()).slice(-2);
let min = ("0" + today.getMinutes()).slice(-2);
var timeString = hr + ":" + min;
time.innerText = timeString;

//Functions
function toggleModal() {
  if (modalArr.slice(-1)[0] == "imgModal") {
    imgModal.style.zIndex = cmtModal.style.zIndex + 1;
    console.log(imgModal.style.zIndex);
    prcs1.style.visibility = "visible";
    prcs1.style.display = "block";
    console.log(modalArr);
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    cmtModal.style.zIndex = imgModal.style.zIndex + 1;
    prcs2.style.visibility = "visible";
    prcs2.style.display = "block";
    console.log(cmtModal.style.zIndex);
    console.log(modalArr);
  }
}
function slide() {
  //prcs2 안 먹음
  if (modalArr.slice(-1)[0] == "imgModal") {
    imgModal.style.visibility = "hidden";
    // console.log("slidePrcs1");
    console.log(modalArr);
    modalArr.pop();
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    // console.log("slidePrcs2");
    cmtModal.style.visibility = "hidden";
    modalArr.pop();
  }
  console.log(modalArr.slice(-1)[0]);
}

function close() {
  //prcs2 안 먹음
  if (modalArr.slice(-1)[0] == "imgModal") {
    imgModal.style.visibility = "hidden";
    prcs1.style.visibility = "hidden";
    prcs1.style.display = "none";
    modalArr.pop();
    console.log("closeP1");
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    cmtModal.style.visibility = "hidden";
    prcs2.style.visibility = "hidden";
    prcs2.style.display = "none";
    modalArr.pop();
    console.log("closeP2");
  }
}

function write() {
  let addText = `<p>${cmtWrite.value}</p>`;
  //   console.log(cmtWrite.value);
  cmtRes.innerHTML += addText;
  cmtWrite.value = "";
  console.log("wrote!");
}
function showWindowModal() {
  //   windowModal.style.visibility = "visible";
  windowModal.classList.toggle("show");
  console.log("windowBtn Clicked!");
}
