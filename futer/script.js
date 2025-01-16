let BlockWithNavig = document.querySelector("#FuterPodNavig");
let BlockWithInfo = document.querySelector("#FuterPodInfo");
let BlockWithHelps = document.querySelector("#FuterPodHelps");

let ListWithNavig = document.querySelector("#FuterPodListBlockNavig");
let ListWithInfo = document.querySelector("#FuterPodListBlockInfo");
let ListWithHelps = document.querySelector("#FuterPodListBlockHelps");

let ChetForBlockNavig = false;
let ChetForBlockInfo = false;
let ChetForBlockHelps = false;

BlockWithNavig.addEventListener("click", () => {
    if(ChetForBlockNavig == true){
        ListWithNavig.style.display = `none`;
        ChetForBlockNavig = false;
    }
    else{
        ListWithNavig.style.display = `flex`;
        ChetForBlockNavig = true;
    }
})
BlockWithInfo.addEventListener("click", () => {
    if(ChetForBlockInfo == true){
        ListWithInfo.style.display = `none`;
        ChetForBlockInfo = false;
    }
    else{
        ListWithInfo.style.display = `flex`;
        ChetForBlockInfo = true;
    }
})
BlockWithHelps.addEventListener("click", () => {
    if(ChetForBlockHelps == true){
        ListWithHelps.style.display = `none`;
        ChetForBlockHelps = false;
    }
    else{
        ListWithHelps.style.display = `flex`;
        ChetForBlockHelps = true;
    }
})