
function tab(x){
    // console.log(x);
    if(x==1){
        let share = document.querySelector("#share-inbox");
        let report = document.querySelector("#report"); 
        let automated = document.querySelector("#automated");
        let chat = document.querySelector("#live-chat");
        let shareFold = document.querySelector("#share-fold");
        let reportFold = document.querySelector("#report-fold");
        let automateFold = document.querySelector("#automate-fold");
        let chatFold = document.querySelector("#chat-fold")

        share.style.display="flex";
        automated.style.display="none";
        report.style.display="none";
        chat.style.display="none";
        shareFold.style.color ="black";
        // shareFold.style.text-decoration-color == "rgb(255,218,68)";
        reportFold.style.color ="grey";
        automateFold.style.color ="grey";
        chatFold.style.color ="grey"
    }  
    if(x==3){
        let share = document.querySelector("#share-inbox");
        let report = document.querySelector("#report"); 
        let automated = document.querySelector("#automated");
        let chat = document.querySelector("#live-chat");
        let shareFold = document.querySelector("#share-fold");
        let reportFold = document.querySelector("#report-fold");
        let automateFold = document.querySelector("#automate-fold");
        let chatFold = document.querySelector("#chat-fold")
        automated.style.display="flex";
        report.style.display="none";
        chat.style.display="none";
        share.style.display="none";
        shareFold.style.color ="grey";
        reportFold.style.color ="grey";
        automateFold.style.color ="black";
        // automateFold.style.text-decoration-color == "rgb(255,218,68)";
        chatFold.style.color ="grey"
    } 
     if(x==2){
        let share = document.querySelector("#share-inbox");
        let report = document.querySelector("#report"); 
        let automated = document.querySelector("#automated");
        let chat = document.querySelector("#live-chat");
        let shareFold = document.querySelector("#share-fold");
        let reportFold = document.querySelector("#report-fold");
        let automateFold = document.querySelector("#automate-fold");
        let chatFold = document.querySelector("#chat-fold")
        report.style.display="flex";
        chat.style.display="none";
        share.style.display="none";
        automated.style.display="none";
        shareFold.style.color ="grey";
        reportFold.style.color ="black";
        // reportFold.style.text-decoration-color == "rgb(255,218,68)";
        automateFold.style.color ="grey";
        chatFold.style.color ="grey"
    } 
     if(x==4){
        let share = document.querySelector("#share-inbox");
        let report = document.querySelector("#report"); 
        let automated = document.querySelector("#automated");
        let chat = document.querySelector("#live-chat");
        let shareFold = document.querySelector("#share-fold");
        let reportFold = document.querySelector("#report-fold");
        let automateFold = document.querySelector("#automate-fold");
        let chatFold = document.querySelector("#chat-fold")
        chat.style.display="flex";
        share.style.display="none";
        automated.style.display="none";
        report.style.display="none";
        shareFold.style.color ="grey";
        reportFold.style.color ="grey";
        automateFold.style.color ="grey";
        chatFold.style.color ="black"
        // chatFold.style.text-decoration-color == "rgb(255,218,68)";
    }    
}
