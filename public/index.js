$(()=>{
    $('#root').load('home.html');
    localStorage.setItem('cart', JSON.stringify({}));

    
})

function loadPage2(){
    $('#root').load('page2.html');
}

function loadPage3(){
    $('#root').load('page3.html');
}

function loadPage4(){
    $('#root').load('page4.html');
}

// module.exports = {
//     loadPage2
// }