//arrays used for choosing outfits
const shoes = ['sneakers', 'sandals', 'winter boots', 'formal shoes', 'galoshes'];
const pants = ['jeans', 'rain pants', 'casual shorts', 'athletic shorts', 'sweatpants'];
const shirt = ['you don\'t need a shirt!!', 't-shirt', 'tanktop', 'button-up', 'long-sleeve'];
const jacket = ['you don\'t need a jacket!!', 'windbreaker', 'blazer', 'rain-coat', 'winter-coat'];

//initializing variable to use for DOM element within functions
let weather;
let activity;

//sunny weather function
function sun() {
    let sunClothes = document.getElementById('activity').value;
    switch(sunClothes) {
        case 'date':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[2];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[0]; 
            break;
        case 'run':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[3];
            document.getElementById('shirt').innerHTML = shirt[2];
            document.getElementById('jacket').innerHTML = jacket[0];
        break;
        case 'garden':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[3];
            document.getElementById('shirt').innerHTML = shirt[0];
            document.getElementById('jacket').innerHTML = jacket[0];
        break;
        case 'errands':
            document.getElementById('shoes').innerHTML = shoes[1];
            document.getElementById('pants').innerHTML = pants[2];
            document.getElementById('shirt').innerHTML = shirt[2];
            document.getElementById('jacket').innerHTML = jacket[0];  
        break;
        case 'segway':
            document.getElementById('shoes').innerHTML = 'Really??!';
            document.getElementById('pants').innerHTML = 'what is your';
            document.getElementById('shirt').innerHTML = 'obsession with';
            document.getElementById('jacket').innerHTML = 'Segways?!';
        break;
        case 'museum':
            document.getElementById('shoes').innerHTML = shoes[1];
            document.getElementById('pants').innerHTML = pants[2];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[0];
    }
}

//rainy weather function
function rain() {
    let rainGear = document.getElementById('activity').value;
    switch(rainGear) {
        case 'date':
            document.getElementById('shoes').innerHTML = shoes[4];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[3];
            document.getElementById('jacket').innerHTML = jacket[3]; 
            break;
        case 'run':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[1];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[3];
        break;
        case 'garden':
            document.getElementById('shoes').innerHTML = shoes[4];
            document.getElementById('pants').innerHTML = pants[1];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[3];
        break;
        case 'errands':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[3];  
        break;
        case 'segway':
            document.getElementById('shoes').innerHTML = 'Really??!';
            document.getElementById('pants').innerHTML = 'Segways are';
            document.getElementById('shirt').innerHTML = 'not designed';
            document.getElementById('jacket').innerHTML = 'for rain!!';
        break;
        case 'museum':
            document.getElementById('shoes').innerHTML = shoes[2];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[4];
        default:
            console.log('outfits here');
    }
}

//snow weather function
function snow() {
    let snowSuit = document.getElementById('activity').value;
    switch(snowSuit) {
        case 'date':
            document.getElementById('shoes').innerHTML = shoes[2];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[3];
            document.getElementById('jacket').innerHTML = jacket[4]; 
            break;
        case 'run':
            document.getElementById('shoes').innerHTML = 'I think';
            document.getElementById('pants').innerHTML = 'you should relax';
            document.getElementById('shirt').innerHTML = 'and drink';
            document.getElementById('jacket').innerHTML = 'some hot cocoa';
        break;
        case 'garden':
            document.getElementById('shoes').innerHTML = 'Your garden';
            document.getElementById('pants').innerHTML = 'is asleep';
            document.getElementById('shirt').innerHTML = 'for the';
            document.getElementById('jacket').innerHTML = 'winter!!';
        break;
        case 'errands':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[1];  
        break;
        case 'segway':
            document.getElementById('shoes').innerHTML = 'Really??!';
            document.getElementById('pants').innerHTML = 'Segways are';
            document.getElementById('shirt').innerHTML = 'not designed';
            document.getElementById('jacket').innerHTML = 'for snow!!';
        break;
        case 'museum':
            document.getElementById('shoes').innerHTML = shoes[2];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[4];
        default:
            console.log('outfits here');
    }

    //overcast weather function
}
function overcast() {
    let overcastOutfit = document.getElementById('activity').value;
    switch(overcastOutfit) {
        case 'date':
            document.getElementById('shoes').innerHTML = shoes[3];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[2];
        break;
        case 'run':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[4];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[1];
        break;
        case 'garden':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[4];
            document.getElementById('shirt').innerHTML = shirt[1];
            document.getElementById('jacket').innerHTML = jacket[0];
        break;
        case 'errands':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[4];
            document.getElementById('jacket').innerHTML = jacket[1];  
        break;
        case 'segway':
            document.getElementById('shoes').innerHTML = 'Really??!';
            document.getElementById('pants').innerHTML = 'a';
            document.getElementById('shirt').innerHTML = 'SEGWAY';
            document.getElementById('jacket').innerHTML = 'tour???!!';
        break;
        case 'museum':
            document.getElementById('shoes').innerHTML = shoes[0];
            document.getElementById('pants').innerHTML = pants[0];
            document.getElementById('shirt').innerHTML = shirt[3];
            document.getElementById('jacket').innerHTML = jacket[0];
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
