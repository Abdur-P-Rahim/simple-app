let count = 0;
document.getElementById('add').addEventListener('click', function(){
    count = count + 1;
    document.getElementById('count').innerText = count;
});

document.getElementById('minus').addEventListener('click', function(){
    if (count > 0 ){
    count = count - 1;
    document.getElementById('count').innerText = count;
     
    }

});