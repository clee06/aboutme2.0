

let alertButton = document.getElementsByClassName('button_1');

function contactMe(){
    alert('contact details not available, please try again later')
}

// console.log(alertButton[0])

alertButton[0].addEventListener("click", contactMe);

// show more Photo Album

let content = document.getElementById("content");
let button = document.getElementById("show-more");

function showMore(){
    console.log('testmore')
    
    if(content.className == "open"){
        // shrink the box
        content.className = "";        
        button.innerHTML = "Show More";

    }  
    else {
        // expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
        
    }
}

// social media link function

let socialMediaLink = document.getElementsByClassName('socialMediaList');

function facebookLink(){
    alert('Redirecting to Facebook')
}

function linkedinLink(){
    alert('Redirecting to Linkedin')
}

function githubLink(){
    alert('Redirecting to GitHub')
}

function instagramLink(){
    alert('Redirecting to Instagram')
}

socialMediaLink[0].addEventListener("click", facebookLink);
socialMediaLink[1].addEventListener("click", linkedinLink);
socialMediaLink[2].addEventListener("click", githubLink);
socialMediaLink[3].addEventListener("click", instagramLink);


// console.log(socialMediaLink[0])
