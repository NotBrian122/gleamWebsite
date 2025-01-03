/*
fetch("/jsonFiles/mainPage.json")
.then(response => response.json())
.then(value => console.log(value));

*/ //wasnt working on main page so im copying and its working now ish

let Games = [
    {
        "GameName":"Ultrakill",
        "gamePrice":"10.99",
        "gameRating":"95%",
        "discription":"Fast paced action gun play mixed with quake movement leaving this game to be a long lasting action fun-fest.",
        "blurb":"ULTRAKILL is a fast-paced, over-the-top first-person shooter developed by Arsi 'Hakita' Patala. Inspired by 90s FPS classics, the game focuses on high-intensity, blood-pumping combat where players blast through hordes of enemies in stylish, chaotic action. Set in a colorful and brutal world, ULTRAKILL features an arsenal of unique weapons, fast movement, and satisfying combat mechanics. It embraces a retro aesthetic, with pixelated visuals and a heavy metal soundtrack. With its focus on speed, reflexes, and scoring, ULTRAKILL appeals to fans of old-school shooters and those seeking a thrilling, adrenaline-filled experience.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence",
        "image":"/images/ultraKill.png",
        "GameCode":"1",
        "Specs":"OS: Windows 7 64-bit, Processor: Dual-core 2.8 GHz, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7870 (2 GB VRAM), Storage: 3 GB available space."
    },
    {
        "GameName":"Elden ring",
        "gamePrice":"49.99",
        "gameRating":"97%",
        "discription":"Vast open world that lives up to the 'from software' name, from here its only a matter of downloading the game to experreience true adventrue...",
        "blurb":"Elden Ring, developed by FromSoftware and produced in collaboration with George R.R. Martin, is an action RPG set in the mystical world of the Lands Between. Players explore vast, interconnected open-world environments filled with peril, secrets, and powerful enemies. Known for its deep lore, challenging combat, and atmospheric design, the game features a dark fantasy narrative and unique mechanics such as horseback riding and mounted combat. Players can customize their character’s abilities, forge weapons, and tackle challenging bosses. With its open-ended exploration and FromSoftware's signature difficulty, Elden Ring offers a captivating, rewarding experience for RPG fans.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence",
        "image":"/images/eldenRing.png",
        "GameCode":"2",
        "Specs":"OS: Windows 7 64-bit, Processor: Dual-core 2.4 GHz, Memory: 4 GB RAM, Graphics: DirectX 11 compatible with 1 GB VRAM, Storage: 4 GB available space."
    },
    {
        "GameName":"Devil May Cry 5",
        "gamePrice":"59.99",
        "gameRating":"92%",
        "discription":"The 5th installment in a long running series of deamon hunting, your stuck as the protagonist nero dantes astranged newphew. Along witho some friends you get vengenace for the thing that stole your arm",
        "blurb":"Devil May Cry 5 is an action-packed hack-and-slash game developed by Capcom. It continues the story of demon hunter Dante and introduces new characters, including the mysterious Nero and the enigmatic V. Players battle demons in high-speed, stylish combat, utilizing a variety of weapons, combos, and supernatural abilities. With a cinematic narrative, striking visuals, and pulse-pounding action, DMC5 delivers one of the most satisfying experiences in the genre. The game features diverse environments, intense boss battles, and an engaging story full of twists. Its fluid combat system and memorable characters make it a fan-favorite in the franchise.",
        "isOnWhishlist":true,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence",
        "image":"/images/devilMayCry.png",
        "GameCode":"3",
        "Specs":"OS: Windows 7 64-bit, Processor: Dual-core 2.8 GHz, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7870 (2 GB VRAM), Storage: 3 GB available space."
    },
    {
        "GameName":"Hell Divers",
        "gamePrice":"59.99",
        "gameRating":"78%",
        "discription":"Exterminate the xenos scum and save super earth",
        "blurb":"Helldivers 2 is a cooperative top-down shooter developed by Arrowhead Game Studios and a sequel to the 2015 game Helldivers. It continues the story of a futuristic military force called the Helldivers, tasked with protecting a democratic society known as Super Earth. The game focuses on intense, action-packed combat, requiring teamwork, tactical coordination, and strategic planning. Players face various alien enemies and hostile factions, with new mechanics and more refined graphics, offering an engaging multiplayer experience. It's expected to provide exciting and challenging gameplay for fans of action and cooperative shooters.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence",
        "image":"/images/HellDivers.png",
        "GameCode":"4",
         "Specs":"OS: Windows 7 64-bit, Processor: Dual-core 2.4 GHz, Memory: 4 GB RAM, Graphics: DirectX 11 compatible with 1 GB VRAM, Storage: 4 GB available space."
    },
    {
        "GameName":"Hollow Knight",
        "gamePrice":"9.99",
        "gameRating":"95%",
        "discription":"Venture into a sleepless kingdom to fix your fathers mistakes, this 2d metroid-venia will challange you not to break your keyboard",
        "blurb":"Hollow Knight is a critically acclaimed action-adventure game developed by Team Cherry. Set in the eerie, interconnected world of Hallownest, players control the titular Hollow Knight, a small, silent insect warrior on a quest to uncover the mysteries of a decaying kingdom. With tight, responsive combat, challenging bosses, and intricate platforming, the game emphasizes exploration and discovery. The atmospheric world is filled with rich lore, hidden secrets, and diverse enemies. Featuring a beautiful hand-drawn art style and a haunting soundtrack, Hollow Knight offers a deep and rewarding experience, becoming a beloved title among indie game fans.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"E: for everyone",
        "image":"/images/Hollow knight.png",
        "GameCode":"5",
        "Specs":"OS: Windows 7 64-bit, Processor: 2.0 GHz, Memory: 4 GB RAM, Graphics: NVIDIA GeForce 850M or equivalent, Storage: 9 GB available space."
    },
    {
        "GameName":"Space Mariene 2",
        "gamePrice":"59.99",
        "gameRating":"84%",
        "discription":"Asend to the forge world Gria as the now reformed luteniant Titus, as you battle the on coming xenos threat, the Terinads. But other powers are at play here...",
        "blurb":"Warhammer 40,000: Space Marine 2 is an upcoming third-person action game that continues the story of the Space Marines in the Warhammer 40k universe. Set in a grimdark future, players control Captain Titus, fighting against the Tyranid invasion. With brutal combat, visceral melee action, and powerful ranged weapons, Space Marine 2 emphasizes the heroic struggle of the Space Marines against overwhelming odds. The game features intense, action-packed gameplay and will likely explore the relentless war that defines the Warhammer 40k lore. Fans of the franchise can expect a thrilling, immersive experience as they battle for humanity’s survival.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence, Hereacy",
         "image":"/images/WH40k.png",
         "GameCode":"6",
          "Specs":""
    },
    {
        "GameName":"Black Myth WuKong",
        "gamePrice":"59.99",
        "gameRating":"95%",
        "discription":"You play as an up and comming warrior in the amazing world of chineese folklore. Based on the journey to the west, you battle your way to getting Syn Jin WUKONG back from the dead.",
        "blurb":"Black Myth: Wukong is an upcoming action role-playing game developed by Game Science, inspired by the classic Chinese novel Journey to the West. Players control the mythical Monkey King, Sun Wukong, as he embarks on an epic journey through a fantastical world filled with legendary creatures, powerful gods, and challenging adversaries. The game features stunning visuals, fluid combat, and a dynamic transformation system, where Wukong can change shape and gain new abilities. With a rich narrative rooted in Chinese mythology, Black Myth: Wukong promises an immersive experience that blends action, exploration, and folklore.",
        "isOnWhishlist":true,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence",
         "image":"/images/BMWK.png",
         "GameCode":"7",
          "Specs":"OS: Windows 7 64-bit, Processor: 2.0 GHz, Memory: 4 GB RAM, Graphics: NVIDIA GeForce 850M or equivalent, Storage: 9 GB available space."
    },
    {
        "GameName":"Terreria",
        "gamePrice":"11.99",
        "gameRating":"90%",
        "discription":"This isint 2d minecraft, this world is yours to explore and conqure. Have fun alone or with friends as terreria is jam packed with hundreads of hours worth of content.",
        "blurb":"Terraria is a sandbox adventure game developed by Re-Logic, where players explore, build, and survive in a procedurally generated world. Known for its pixelated art style and deep crafting mechanics, the game offers a mix of exploration, combat, and construction. Players can mine resources, craft tools, and battle various enemies, from simple creatures to massive bosses. With its ever-expanding content, Terraria encourages creativity, allowing players to shape their world and create anything they imagine. Its engaging gameplay, diverse environments, and modding community have made it a beloved title for both casual and dedicated gamers.",
        "isOnWhishlist":false,
        "isPurchased":false,
        "contentRating":"Warning: Contains slimes",
         "image":"/images/Terreria.png",
         "GameCode":"8",
          "Specs":"OS: Windows 7 64-bit, Processor: 2.0 GHz, Memory: 4 GB RAM, Graphics: NVIDIA GeForce 850M or equivalent, Storage: 9 GB available space."
    },
    {
        "GameName":"Red Dead Redemption 2",
        "gamePrice":"59.99",
        "gameRating":"98%",
        "discription":"Just because youve done bad stuff in the past doesnt mean your a bad person. If you havent played this game....what are you waiting for. ",
        "blurb":"Red Dead Redemption 2, developed by Rockstar Games, is an epic open-world action-adventure game set in the American Wild West. Players take on the role of Arthur Morgan, a member of the Van der Linde gang, as they navigate a brutal world filled with moral dilemmas, lawmen, outlaws, and complex relationships. The game features a rich narrative, stunning visuals, and a vast, immersive open world. Whether engaging in story missions, hunting wildlife, or participating in dynamic events, Red Dead Redemption 2 delivers a profound and cinematic experience, blending action, exploration, and deep character development.",
        "isOnWhishlist":true,
        "isPurchased":false,
        "contentRating":"Warning: heavy voilence,strong lanuge,mature themes",
         "image":"/images/RDR2.png",
         "GameCode":"9",
         "Specs":"OS: Windows 7 64-bit, Processor: Dual-core 2.4 GHz, Memory: 4 GB RAM, Graphics: DirectX 11 compatible with 1 GB VRAM, Storage: 4 GB available space."
    }
];


function loadHomePage(){
    console.log("your on the homepage");

    console.log(Games);
    //filling out the cards- t== top m== mid b== bottom
    let cardPos = "t"; 
    let j =0;//we need another internal counter
    let k=0;//this is so we can iterate using the loop but in segments of 3's
    
        for(let i=0;i<3;i++){
    
            //card title text
            let courselIdText = `gameTitleText-${cardPos}-${i}`;
            let gameCoursel1 = document.getElementById(courselIdText);
            gameCoursel1.textContent = Games[i+k].GameName;
    
        
            //card discriptioon
            let cardIdDisc = `gameText-c2-${cardPos}-${i}`;
            let gameDisc = document.getElementById(cardIdDisc);
            gameDisc.textContent = Games[i+k].discription;
    
            //card price + rating
            let cardIdPri =`gamePrice-c2-${cardPos}-${i}`;
            let gamePri = document.getElementById(cardIdPri);
            gamePri.textContent = "€"+ Games[i+k].gamePrice +"////"+"Game Rating:"+ Games[i+k].gameRating;
    
            //cardImage
            let cardIdImg = `gameImg-c${cardPos}-${i}`;
            let gameImg = document.getElementById(cardIdImg);
            gameImg.src = Games[i+k].image;
    
            //wishlistLogic
            let wishListButton =`AddToWishlist-${cardPos}-${i}`;
            let wishButton = document.getElementById(wishListButton);
            if(Games[i+k].isOnWhishlist == true){
                wishButton.textContent = "Already on wishlist";
            }
    
            if(i === 2 && j === 0){
                cardPos ="m";
                i = -1;
                j++;
                k=3;
            }else if(i == 2 && j == 1){
                cardPos ="b";
                i = -1;
                j++;
                k=6;
            }
        }

}
function loadGamePage(){
    console.log("This is my store page");
    console.log(localStorage);
    let gameCodeSelect = localStorage.getItem("gamePageSelected");
    console.log(gameCodeSelect);

    for(let i=0;i <9;i++)
        {
        if(Games[i].GameCode === gameCodeSelect){
           //image
            let img = document.getElementById('mainCardImage');
            img.src = Games[i].image;
            //titleText
            let title = document.getElementById('cardGameName');
            title.textContent = Games[i].GameName;
            //little easter egg
            if(title.textContent == "Ultrakill" || title.textContent == "Red Dead Redemption 2"){
                title.style.color = "red";
            }
            //game price
            let pricing = document.getElementById('cardGamePrice');
            pricing.textContent = Games[i].gamePrice;
           //contnet warning
            let contentWarning = document.getElementById('cardGameContentWarning');
            contentWarning.textContent = Games[i].contentRating;
            //gameText
            let gameText = document.getElementById('CardGameMainBlurb');
            gameText.textContent = Games[i].blurb;
            //minSpecs
            let minSpecs = document.getElementById('CardGameSepcks');
            minSpecs.textContent = Games[i].Specs;
        }
    }
}
function loadMyGames(){
        console.log("this is my games Page");
        console.log(localStorage);
    }

    if(window.location.href.includes("index")){
        loadHomePage();
    }else if (window.location.href.includes("gamePage")){
        loadGamePage();
    }else if (window.location.href.includes("purchase.html")){
        loadPurhcasePage()
    }

    //this is for when you click the page for the game 
function getStoreInfo(gameCode){
            console.log(gameCode);
    localStorage.setItem("gamePageSelected",gameCode);
    }

    //in theory this should work but its not, it was at one stage but now its not and I dont have the time.
    document.getElementById('gameSerch').addEventListener('submit',findGame)
function findGame(){
        let gameNameSerch = document.getElementById('gameSerching');

        for(let i=0;i <9;i++)
            {
                if(gameNameSerch === Games[i].GameName){
                    window.location.href="/gamePage.html";
                    localStorage.setItem("gamePageSelected",Games[i].GameCode)
                }

            }
    }

function loadPurhcasePage(){
    let gameCodeSelect = localStorage.getItem("purchaseSelected");
    //reusing the code here but im adjusting some of the parameters, whatever I can do in my time crunch
    for(let i=0;i <9;i++)
        {
        if(Games[i].GameCode === gameCodeSelect){
           //image
            let img = document.getElementById('mainCardImage');
            img.src = Games[i].image;
            //titleText
            let title = document.getElementById('cardGameName');
            title.textContent = Games[i].GameName;
            //little easter egg
            if(title.textContent == "Ultrakill" || title.textContent == "Red Dead Redemption 2"){
                title.style.color = "red";
            }
            let shortDis = document.getElementById('shortDisc');
            shortDis.textContent = Gamesp[i].discription;
            //game price
            let pricing = document.getElementById('cardGamePrice');
            pricing.textContent = Games[i].gamePrice;
           //contnet warning
            let contentWarning = document.getElementById('cardGameContentWarning');
            contentWarning.textContent = Games[i].contentRating;
            //gameText
            let gameText = document.getElementById('CardGameMainBlurb');
            gameText.textContent = Games[i].blurb;
            //minSpecs
            let minSpecs = document.getElementById('CardGameSepcks');
            minSpecs.textContent = Games[i].Specs;
        }
    }
}//im sorry this is such a mess, ive got like 12 hours to pull all of this off and im on hour 10.