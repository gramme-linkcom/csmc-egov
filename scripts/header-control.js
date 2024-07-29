// スクロールされたらメソッド「output_log_scroll」を呼ぶ
window.addEventListener('scroll', output_log_scroll);
 
function output_log_scroll(){
    const header = document.querySelector("#header");
    if (window.scrollY >= 70){
        header.className = "header-scrolled";
    } else {
        header.className = "header";
    }
}
 