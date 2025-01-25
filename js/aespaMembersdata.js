const karinaInfo = `{
    "karina": [
        {   
            "realName": "Yu Ji Min",
            "age": "24",
            "hometown": "Paldal-gu, Gyeonggi-do, South Korea",
            "birthday": "April 11, 2000"
        }
    ]
    
}`;

//KARINA'S INFORMATION
const aspObject = JSON.parse(karinaInfo);
document.getElementById("realname").innerHTML = `Real Name:  ${aspObject.karina[0].realName}`;
document.getElementById("karinaAge").innerHTML = `Age: ${aspObject.karina[0].age}`;
document.getElementById("karinaBirth").innerHTML = `Birthday: ${aspObject.karina[0].birthday}`;
document.getElementById("karinaHome").innerHTML = `Hometown: ${aspObject.karina[0].hometown}`;



const giselleInfo = `{
    "giselle": [
        {   
            "realName": "Uchinaga Aeri",
            "age": "24",
            "hometown": "Sinsa-dong, Gangnam, South Korea",
            "birthday": "October 30, 2000"
        }
    ]
}`;

//GISELLE INFORMATION
const giselleObject = JSON.parse(giselleInfo);
document.getElementById("gisellerealname").innerHTML = `Real Name:  ${giselleObject.giselle[0].realName}`;
document.getElementById("giselleAge").innerHTML = `Age: ${giselleObject.giselle[0].age}`;
document.getElementById("giselleBirth").innerHTML = `Birthday: ${giselleObject.giselle[0].birthday}`;
document.getElementById("giselleHome").innerHTML = `Hometown: ${giselleObject.giselle[0].hometown}`;


const winterInfo = `{
        "winter": [
            {
                "realName": "Kim Min Jeong",
                "age": "24",
                "hometown": "Busan, South Korea",
                "birthday": "January 1, 2001"
            }
        ]
}`;


//WINTER INFORMATION
const winterObject = JSON.parse(winterInfo);
document.getElementById("winterrealname").innerHTML = `Real Name:  ${winterObject.winter[0].realName}`;
document.getElementById("winterAge").innerHTML = `Age: ${winterObject.winter[0].age}`;
document.getElementById("winterBirth").innerHTML = `Birthday: ${winterObject.winter[0].birthday}`;
document.getElementById("winterHome").innerHTML = `Hometown: ${winterObject.winter[0].hometown}`;



const ningningInfo = `{
    "ningning": [
        {
            "realName": "Ning Yizhuo",
            "age": "22",
            "hometown": "Harbin, Heilongjiang, China",
            "birthday": "October 23, 2002"
        }
    ]
}`;

const ningObject = JSON.parse(ningningInfo);
document.getElementById("ningrealname").innerHTML = `Real Name:  ${ningObject.ningning[0].realName}`;
document.getElementById("ningAge").innerHTML = `Age: ${ningObject.ningning[0].age}`;
document.getElementById("ningBirth").innerHTML = `Birthday: ${ningObject.ningning[0].birthday}`;
document.getElementById("ningHome").innerHTML = `Hometown: ${ningObject.ningning[0].hometown}`;
