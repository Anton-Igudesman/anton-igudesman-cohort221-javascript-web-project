//arrays used for choosing outfits
const shoes = ['sneakers', 'sandals', 'winter boots', 'formal shoes', 'galoshes'];
const pants = ['jeans', 'rain pants', 'casual shorts', 'athletic shorts', 'sweatpants'];
const shirt = ['you don\'t need a shirt!!', 't-shirt', 'tanktop', 'button-up', 'long-sleeve'];
const jacket = ['you don\'t need a jacket!!', 'windbreaker', 'blazer', 'rain-coat', 'winter-coat'];

//initializing variable to use for DOM element within functions
let weather;
let activity;
let shoePlan = document.getElementById('shoes');
let pantsPlan = document.getElementById('pants');
let shirtPlan = document.getElementById('shirt');
let jacketPlan = document.getElementById('jacket');

//sunny weather function
function sun() {
    let sunClothes = document.getElementById('activity').value;
    switch(sunClothes) {
        case 'date':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[2];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[0]; 
            break;
        case 'run':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[3];
            shirtPlan.innerHTML = shirt[2];
            jacketPlan.innerHTML = jacket[0];
        break;
        case 'garden':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[3];
            shirtPlan.innerHTML = shirt[0];
            jacketPlan.innerHTML = jacket[0];
        break;
        case 'errands':
            shoePlan.innerHTML = shoes[1];
            pantsPlan.innerHTML = pants[2];
            shirtPlan.innerHTML = shirt[2];
            jacketPlan.innerHTML = jacket[0];  
        break;
        case 'segway':
            shoePlan.innerHTML = 'Really??!';
            pantsPlan.innerHTML = 'what is your';
            shirtPlan.innerHTML = 'obsession with';
            jacketPlan.innerHTML = 'Segways?!';
        break;
        case 'museum':
            shoePlan.innerHTML = shoes[1];
            pantsPlan.innerHTML = pants[2];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[0];
    }
}

//rainy weather function
function rain() {
    let rainGear = document.getElementById('activity').value;
    switch(rainGear) {
        case 'date':
            shoePlan.innerHTML = shoes[4];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[3];
            jacketPlan.innerHTML = jacket[3]; 
            break;
        case 'run':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[1];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[3];
        break;
        case 'garden':
            shoePlan.innerHTML = shoes[4];
            pantsPlan.innerHTML = pants[1];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[3];
        break;
        case 'errands':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[3];  
        break;
        case 'segway':
            shoePlan.innerHTML = 'Really??!';
            pantsPlan.innerHTML = 'Segways are';
            shirtPlan.innerHTML = 'not designed';
            jacketPlan.innerHTML = 'for rain!!';
        break;
        case 'museum':
            shoePlan.innerHTML = shoes[2];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[4];
        default:
            console.log('outfits here');
    }
}

//snow weather function
function snow() {
    let snowSuit = document.getElementById('activity').value;
    switch(snowSuit) {
        case 'date':
            shoePlan.innerHTML = shoes[2];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[3];
            jacketPlan.innerHTML = jacket[4]; 
            break;
        case 'run':
            shoePlan.innerHTML = 'I think';
            pantsPlan.innerHTML = 'you should relax';
            shirtPlan.innerHTML = 'and drink';
            jacketPlan.innerHTML = 'some hot cocoa';
        break;
        case 'garden':
            shoePlan.innerHTML = 'Your garden';
            pantsPlan.innerHTML = 'is asleep';
            shirtPlan.innerHTML = 'for the';
            jacketPlan.innerHTML = 'winter!!';
        break;
        case 'errands':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[4];  
        break;
        case 'segway':
            shoePlan.innerHTML = 'Really??!';
            pantsPlan.innerHTML = 'Segways are';
            shirtPlan.innerHTML = 'not designed';
            jacketPlan.innerHTML = 'for snow!!';
        break;
        case 'museum':
            shoePlan.innerHTML = shoes[2];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[4];
        default:
            console.log('outfits here');
    }

    //overcast weather function
}
function overcast() {
    let overcastOutfit = document.getElementById('activity').value;
    switch(overcastOutfit) {
        case 'date':
            shoePlan.innerHTML = shoes[3];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[2];
        break;
        case 'run':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[4];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[1];
        break;
        case 'garden':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[4];
            shirtPlan.innerHTML = shirt[1];
            jacketPlan.innerHTML = jacket[0];
        break;
        case 'errands':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[4];
            jacketPlan.innerHTML = jacket[1];  
        break;
        case 'segway':
            shoePlan.innerHTML = 'Really??!';
            pantsPlan.innerHTML = 'a';
            shirtPlan.innerHTML = 'SEGWAY';
            jacketPlan.innerHTML = 'tour???!!';
        break;
        case 'museum':
            shoePlan.innerHTML = shoes[0];
            pantsPlan.innerHTML = pants[0];
            shirtPlan.innerHTML = shirt[3];
            jacketPlan.innerHTML = jacket[0];
        default:
            console.log('outfits here');
    }
}

//click event function for Plan My Outfit button
function outfits() {
    weather = document.getElementById('weather').value;
    if(weather == 'overcast') {
        overcast();
    } else if(weather == 'snowing') {
        snow();
    } else if(weather == 'rainy') {
        rain();
    } else if(weather == 'sunny') {
        sun();
    } else {
        console.log('pick something ya bastard!!')
    }
}
    
//event listener for Plan My Outfit 'click'
document.getElementById('outfit').addEventListener('click', outfits);
