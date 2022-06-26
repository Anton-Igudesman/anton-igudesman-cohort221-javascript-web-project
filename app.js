//clothes constructors
class Clothes {
    constructor(bodyPart, type, acceptedActivity, acceptedWeather) {
        this.bodyPart = bodyPart;
        this.type = type;
        this.acceptedActivity = acceptedActivity;
        this.acceptedWeather = acceptedWeather;
    }
}
class Shoes extends Clothes{
    constructor(bodyPart, type, acceptedActivity, acceptedWeather, size) {
        super(bodyPart, type, acceptedActivity, acceptedWeather) 
        this.size = size;
    }
};
class Pants extends Clothes{};
class Shirt extends Clothes{};
class Jacket extends Clothes{};

//shoes
let sneakers = new Shoes('feet', 'Sneakers', ['running', 'errands', 'segway', 'garden'], 
['sunny', 'overcast'], 10);
let sandals = new Shoes('feet', 'Sandals', ['errands', 'segway'], ['sunny'], 11);
let winterBoots = new Shoes('feet', 'Winter Boots', ['date', 'errands'], ['snowing'], 12);
let formalShoes = new Shoes('feet', 'Formal Shoes', ['date'], ['sunny', 'rainy', 'overcast'], 10);
let galoshes = new Shoes('feet', 'Galoshes', ['errands', 'garden'], ['rainy'], 11);

//instantiating pants
let jeans = new Pants('legs', 'Jeans', ['date', 'errands', 'segway', 'museum'], 
['sunny', 'rainy', 'snowing', 'overcast']);
let rainPants = new Pants('legs', 'Gore-Tex Pants', ['errands', 'segway', 'garden'], ['rainy']);
let casualShorts = new Pants('legs', 'Casual Shorts', ['garden', 'errands', 'segway'], 
['sunny', 'overcast']);
let athleticShorts = new Pants('legs', 'Athletic Shorts', ['running', 'garden'], ['sunny', 'overcast']);
let sweatPants = new Pants('legs', 'Sweat Pants', ['errands', 'garden', 'segway'], ['overcast']);

//instantiating shirts
let shirtless = new Shirt('torso', 'No Shirt', ['running', 'garden'], ['sunny', 'overcast']);
let tshirt = new Shirt('torso', 'T-Shirt', ['running', 'garden', 'errands', 'segway'],
['sunny', 'overcast'])
let thermal = new Shirt('torso', 'Thermal Shirt', ['errands', 'museum'], ['snowing']);
let tanktop = new Shirt('torso', 'Tanktop', ['errands', 'garden', 'segway', 'running'], ['sunny']);
let buttonUp = new Shirt('torso', 'Button Up', ['date', 'museum'], 
['sunny', 'rainy', 'snowing', 'overcast']);
let longSleeve = new Shirt('torso', 'Long Sleeve', ['errands', 'segway'], ['overcast']);

//instantiating jackets
let noJacket = new Jacket('outer-torso', 'No Jacket', 
['errands', 'running', 'garden', 'museum', 'date', 'segway'], ['sunny']);
let windBreaker = new Jacket('outer-torso', 'Wind Breaker', 
['errands', 'running', 'garden', 'segway'], ['overcast']);
let blazer = new Jacket('outer-torso', 'Blazer', ['date', 'museum'], ['sunny', 'overcast']);
let rainCoat = new Jacket('outer-torso', 'Rain Coat', ['date', 'errands'], ['rainy']);
let winterCoat = new Jacket('outer-torso', 'Winter Coat', 
['date', 'errands', 'museum'], ['snowing']);

//creating empty arrays for different clothes objects to be pushed into for selection
let shoesArray = [];
let pantsArray = [];
let shirtArray = [];
let jacketArray = [];

//arrays of clothes objects to iterate through
let shoes = [sneakers, sandals, winterBoots, formalShoes, galoshes];
let pants = [jeans, rainPants, casualShorts, athleticShorts, sweatPants];
let shirt = [shirtless, tshirt, thermal, tanktop, buttonUp, longSleeve];
let jacket = [noJacket, windBreaker, blazer, rainCoat, winterCoat];
let clothes = [shoes, pants, shirt, jacket];


//function to iterate and choose a clothing item of each type
function clothingPlanner(activity, weather) {
    activityChoose = document.getElementById('activity').value;
    weatherChoose = document.getElementById('weather').value;
    console.log("in function:" + activityChoose);
    console.log("in function:" + weatherChoose);
    for (let i = 0; i < clothes.length; i++) {
        for (let j = 0; j < clothes[i].length; j++) {
            let clothingKey = clothes[i][j];
            if (clothingKey.acceptedActivity.indexOf(activity) > -1 
            && clothingKey.acceptedWeather.indexOf(weather) > -1) {
                if (clothingKey.bodyPart == 'feet') {
                    shoesArray.push(clothingKey.type);
                } else if (clothingKey.bodyPart == 'legs') {
                    pantsArray.push(clothingKey.type);
                } else if (clothingKey.bodyPart == 'torso') {
                    shirtArray.push(clothingKey.type);
                } else {
                    jacketArray.push(clothingKey.type);
                }
            } 
        }
    }

    let table = document.getElementById('outfit-table');
    //if arrays have more than 1 index - returning a random index
    function clothingPicker(arr1, arr2, arr3, arr4, item1, item2, item3, item4) {
        if (arr1.length === 0 || arr2.length === 0 || arr3.length === 0 || arr4.length === 0) {
            table.firstElementChild.innerHTML = 
            '<td>Your choice of activity is not appropriate for this Weather!</td>';
        } else {
            table.innerHTML = '<tr><th>Shoes</th><th>Pants</th><th>Shirt</th><th>Jacket</th></tr><tr><td id="shoes"></td><td id="pants"></td><td id="shirt"></td><td id="jacket"></td></tr>'
            let shoePlan = document.getElementById(item1);
            let pantsPlan = document.getElementById(item2);
            let shirtPlan = document.getElementById(item3);
            let jacketPlan = document.getElementById(item4);
            let randomNum1 = Math.floor(Math.random() * arr1.length);
            let randomNum2 = Math.floor(Math.random() * arr2.length);
            let randomNum3 = Math.floor(Math.random() * arr3.length);
            let randomNum4 = Math.floor(Math.random() * arr4.length);
            shoePlan.innerHTML = arr1[randomNum1];
            pantsPlan.innerHTML = arr2[randomNum2];
            shirtPlan.innerHTML = arr3[randomNum3];
            jacketPlan.innerHTML = arr4[randomNum4];
        }
    }
    clothingPicker(shoesArray, pantsArray, shirtArray, jacketArray, 'shoes', 'pants', 'shirt', 'jacket');
    shoesArray = [];
    pantsArray = [];
    shirtArray = [];
    jacketArray = [];
}


//event listener for Plan My Outfit 'click'let activityChoose;
let weatherChoose;
let activityChoose;

document.getElementById('outfit').addEventListener('click', function () {
    activityChoose = document.getElementById('activity').value;
    weatherChoose = document.getElementById('weather').value;
    console.log(activityChoose);
    console.log(weatherChoose);
    clothingPlanner(activityChoose, weatherChoose)
});



  
       
    


