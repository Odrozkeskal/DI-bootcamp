document.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementsByTagName('form')[0];
    let button = document.getElementById('lib-button');
    let story = document.getElementById('story');
    let shuffleButton = document.getElementById('shuffle-button');
    
    function generateStory(){
        let noun = document.getElementById('noun').value;
        let adjective = document.getElementById('adjective').value;
        let person = document.getElementById('person').value;
        let verb = document.getElementById('verb').value;
        let place = document.getElementById('place').value;
        
        // lyrics by "Slick Rick - Children's Story"
        if(noun && adjective && person && verb && place){
            let stories = [
                "Once upon a time not long ago.",
                "When people wore pajamas and lived life slow.",
                "When laws were stern and justice stood.",
                "And people were behaving' like they ought ta good.",
                `There lived a ${adjective} ${person} who was misled.`,
                `By another ${adjective} ${person} and this is what he said.`,
                `"Me and Ty, we gonna make sum cash.`,
                `${verb}' old folks and makin' the dash".`,
                "They did the job, money came with ease.",
                "But one couldn't stop, it's like he had a disease.",
                `He ${verb} another and another and a sister and her brother.`,
                "Tried to rob a man who was a D.T. undercover.",
                `The ${noun} grabbed his arm, he started acting erratic.`,
                `He said 'Keep still, ${person}, no need for static'.`,
                "Punched him in his belly and he gave him a slap.",
                `But ${adjective} did he know the little ${person} was strapped.`,
                `The ${person} pulled out a gun, he said, 'Why did ya hit me?'`,
                `The barrel was set straight for the ${noun}'s kidney.`,
                `The ${noun} got scared, the ${person}, he starts to figure.`,
                "'I'll do years if I pull this trigger'.",
                `So he cold dashed and ran around the block.`,
                `${noun} radios in to another lady ${noun}.`,
                "He ran by a tree, there he saw the sister.",
                "Shot for the head, he shot back but he missed her.",
                "Looked around good and from expectations.",
                "He decided he'd head for the subway stations.",
                "But she was coming and he made a left.",
                "He was runnin' top speed 'til he was outta breath.",
                "Knocked an old man down and swore he killed him.",
                `Then he made his move to a ${place}.`,
                "Ran up the stairs up to the top floor.",
                "Opened up the door there, guess who he saw?",
                "Dave the dope fiend shootin'' dope.",
                "Who don't know the meaning of water nor soap.",
                `The dope fiend brought back a ${adjective} shotgun.`,
                `He went outside but there was ${noun}s all over.`,
                "Then he dipped into a car, a stolen Nova.",
                "Raced up the block doing 83.",
                `Crashed into a tree near ${place}.`,
                "Escaped alive though the car was battered.",
                `Rat-a-tat-tatted and all the ${noun}s scattered.`,
                "Ran out of bullets and he still had static.",
                `Grabbed a ${adjective} lady and out the automatic.`,
                "Pointed at her head and he said the gun was full o' lead.",
                `He told the ${noun}s, 'Back off or honey here's dead'.`,
                "Deep in his heart he knew he was wrong.",
                "So he let the lady go and he starts to run on.",
                `${noun}s sounded, he seemed astounded.`,
                `Before long the ${adjective} ${person} got surrounded.`,
                "He dropped the gun, so went the glory.",
                "And this is the way I have end this story.",
                "He was only seventeen, in a madman's dream.",
                `The ${noun}s killed the ${adjective} ${person}, I still hear him scream.`,
                "This ain't funny so don't ya dare laugh.",
                "Just another case 'bout the wrong path.",
                "Straight 'n narrow or yo' soul gets cast.",
                "Good night! :)"
            ];

            
            let numberOfSentences = Math.floor(Math.random() * 30) + 29; 
            let selectedSentences = [];

            for (let i = 0; i < numberOfSentences; i++) {
                let randomIndex = Math.floor(Math.random() * stories.length);
                selectedSentences.push(stories[randomIndex]);
            }

           
            story.textContent = selectedSentences.join("\n");  // Join selected sentences with a line break
        }
    }
    
    button.addEventListener('click', function(e){
        e.preventDefault();
        generateStory();
    });

    shuffleButton.addEventListener('click', function(e){
        e.preventDefault();
        generateStory();
    });
});