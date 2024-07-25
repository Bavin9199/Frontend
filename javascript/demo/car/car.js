function startChoose(){
    
    xun = setInterval(function(){start()},50);
}

function stop(){
    clearInterval(xun);
}

function start(){
    var i;
    number = document.getElementsByClassName("carnum");
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ01234567890123456789012345678901234567890123456789";

    for(i=0; i<number.length; i++){
        number[i].className=number[i].className.replace("active","");
        // 生成6位的随机组合
        let randomCombination = '鲁B';
        for (let i = 0; i < 5; i++) {
            // 从characters中随机选择一个字符
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCombination += characters.charAt(randomIndex);
        }
        // 输出随机组合
        number[i].innerHTML = randomCombination;
    }
}

function choose(event){
    event.currentTarget.className += " active";
}

function submit(){
    for(i=0; i<number.length; i++){
        if(number[i].className.match(/active/gi)){
            alert("选中的号码是"+number[i].innerHTML);
        }   
    }
    alert("感谢使用");
}

