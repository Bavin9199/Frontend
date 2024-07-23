function openCity(event,cityName){
    var content, column, i;

    column = document.getElementsByClassName("column");
    for(i=0;i<column.length;i++){
        column[i].className = column[i].className.replace("active","");
    }

    content = document.getElementsByClassName("content");
    for(i=0;i<content.length;i++){
        content[i].style.display="none";
    }

    document.getElementById(cityName).style.display="block";
    event.currentTarget.className += " active";

}