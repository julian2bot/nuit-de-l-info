document.addEventListener("DOMContentLoaded", function() {
    let lesDefis = document.getElementsByClassName("unDefis");

    for (const defis of lesDefis) {
        let image = defis.getElementsByTagName("img")[0];

        image.addEventListener("click",function(){
            if(defis.className.split(' ').indexOf("close")>-1){
                defis.classList.remove("close");
            }
            else{
                defis.classList.add("close");
            }
        })
    }
});
