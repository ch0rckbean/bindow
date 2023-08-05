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

//WindowModal & bottomBar
const windowModal = document.querySelector(".windowModal");
const prgm = document.querySelector(".prgm");
const help = document.querySelector(".help");
const shtDwn = document.querySelector(".shtDwn");
const windowBtn = document.querySelector("#windowBtn");

windowBtn.addEventListener("click", showWindowModal);

//Functions
function toggleModal() {
  if (modalArr.slice(-1)[0] == "imgModal") {
    imgModal.style.zIndex = parseInt(cmtModal.style.zIndex) + 1;
    console.log(imgModal.style.zIndex);
    console.log(modalArr);
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    cmtModal.style.zIndex = parseInt(imgModal.style.zIndex) + 1;
    console.log(cmtModal.style.zIndex);
    console.log(modalArr);
  }
}
function slide() {
  if (modalArr.length === 0) return;
  //prcs2 안 먹음
  if (modalArr.slice(-1)[0] == "imgModal") {
    prcs1.style.display = "block";
    imgModal.style.visibility = "hidden";
    // modalArr.pop();
    console.log("prcs1");
    console.log(modalArr);
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    //   } else if (cmtModal.style.visibility == "visible") {
    console.log("prcs2");
    prcs2.style.display = "block";
    cmtModal.style.visibility = "hidden";
  }
}
function close() {
  if (modalArr.length === 0) return;
  //prcs2 안 먹음
  if (modalArr.slice(-1)[0] == "imgModal") {
    prcs1.style.display = "none";
    imgModal.style.visibility = "hidden";
    // modalArr.pop();
    console.log("closeP1");
    console.log(modalArr);
  } else if (modalArr.slice(-1)[0] == "cmtModal") {
    console.log("closeP2");
    prcs2.style.display = "none";
    cmtModal.style.visibility = "hidden";
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
