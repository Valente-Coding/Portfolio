var Projects = [
    {
        "ProjectName": "Mar Made Sushi",
        "ProjectDescription": "Mar Made Sushi is a fun multiplayer prototype where players must work together to manage a bustling restaurant. Collaborate with your teammates to fish for ingredients, cook delicious dishes, and host clients efficiently. Teamwork and coordination are key to keeping the restaurant running smoothly and satisfying your customers.",
        "ProjectTags": ["Multiplayer", "Strategy", "Unity", "University Project"],
        "ProjectImage": "Images/MarMadeSushi.png",
        "ProjectVideo": "Images/MarMadeSushi.mp4",
        "ProjectVideoLink": "https://youtu.be/4pTJCFrdATc",
        "ProjectSourceLink": "",
    },
    {
        "ProjectName": "Deep Anomaly",
        "ProjectDescription": "Deep Anomaly is a thrilling local multiplayer party game where players must work together to uncover the mysteries of a strange underwater world. Explore the depths, solve puzzles, and outsmart your friends in a race against time.",
        "ProjectTags": ["Local Multiplayer", "Party", "Unity", "Game Jam"],
        "ProjectImage": "Images/DeepAnomaly.png",
        "ProjectVideo": "Images/DeepAnomaly.mp4",
        "ProjectVideoLink": "",
        "ProjectSourceLink": "",
    },
    {
        "ProjectName": "Mix & Serve",
        "ProjectDescription": "In Mix & Serve you impersonate a bartender in a busy bar. You must quickly mix and serve drinks to your customers while managing your time and resources effectively. Your goal is to have enough money to pay your rent at the end of the day.",
        "ProjectTags": ["Singleplayer", "Simulation", "Unity", "Game Jam"],
        "ProjectImage": "Images/MixAndServe.png",
        "ProjectVideo": "Images/MixAndServe.mp4",
        "ProjectVideoLink": "",
        "ProjectSourceLink": "",
    },
    {
        "ProjectName": "Comedy Showdown",
        "ProjectDescription": "Your goal is to provide jokes to different people based on their likings. Each person has a different sense of humor, so you must choose the right joke to make them laugh. If you tell a joke that they don't like, they will get angry. If you fail atleast 3 times, you lose the game.",
        "ProjectTags": ["Singleplayer", "Comedy", "Unity", "Game Jam"],
        "ProjectImage": "Images/ComedyShowdown.png",
        "ProjectVideo": "Images/ComedyShowdown.mp4",
        "ProjectVideoLink": "",
        "ProjectSourceLink": "",
    }
]

function LoadProjects() {
    let l_timelineContainer = document.getElementsByClassName("ProjectsTimelineContainer")[0];

    l_timelineContainer.innerHTML = "";

    for (let i = 0; i < Projects.length; i++) {
        let l_project = Projects[i];

        let l_card = 
        '<div class="ProjectTimelineCard" onmouseup="DisplayProject(' + i + ')">'+
            '<div class="ProjectTimelineLine">'+
                '<div class="ProjectTimelineLineProgress"></div>'+
            '</div>'+

            '<div class="ProjectTimelineCardInfo">'+
                '<div class="ProjectTimelineImage" style="background-image: url(\'' + l_project.ProjectImage + '\');"></div>'+
                '<div class="ProjectTimelineInfoContainer">'+
                    '<div class="ProjectTimelineTitle bebas-neue-regular">' + l_project.ProjectName + '</div>'+
                    '<div class="ProjectTimelineGameTags martel-sans-bold">' + l_project.ProjectTags.join('</br>') + '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

        l_timelineContainer.innerHTML += l_card;
    }

    DisplayProject(0);
}

function DisplayProject(p_index) {
    let l_project = Projects[p_index];

    // Update the project display section
    document.getElementsByClassName("VideoInfoTitle")[0].innerText = l_project.ProjectName;
    document.getElementsByClassName("VideoInfoDesc")[0].innerText = l_project.ProjectDescription;
    document.getElementsByClassName("VideoInfoPlayButton")[0].dataset.video = l_project.ProjectVideoLink;
    document.getElementsByClassName("VideoInfoMoreButton")[0].dataset.source = l_project.ProjectSourceLink;

    // Remove active class from previous active card
    let l_activeCards = document.getElementsByClassName("ActiveProjectCard");
    if (l_activeCards.length > 0)
        l_activeCards[0].classList.remove("ActiveProjectCard");

    // Add BeforeActiveProjectCard class to all previous cards
    let l_cards = document.getElementsByClassName("ProjectTimelineCard");
    for (let i = 0; i < Projects.length; i++) {

        if (i < p_index && !l_cards[i].classList.contains("BeforeActiveProjectCard"))
            l_cards[i].classList.add("BeforeActiveProjectCard");
        else if (i >= p_index && l_cards[i].classList.contains("BeforeActiveProjectCard"))
            l_cards[i].classList.remove("BeforeActiveProjectCard");
    }

    document.getElementsByClassName("ProjectTimelineCard")[p_index].classList.add("ActiveProjectCard");

    if (document.getElementsByClassName("BackgroundVideoFade")[0].classList.contains("ActiveFade"))
        document.getElementsByClassName("BackgroundVideoFade")[0].classList.remove("ActiveFade");

    document.getElementsByClassName("BackgroundVideo")[0].src = "https://valente-coding.github.io/" + l_project.ProjectVideo;

    // Clear any existing interval to stop auto-advancing when a card is clicked
    if (window.projectInterval) {
        clearInterval(window.projectInterval);
    }

    window.projectInterval = setInterval(() => {
        document.getElementsByClassName("BackgroundVideoFade")[0].classList.add("ActiveFade");
        setTimeout(() => {
            DisplayProject(p_index == Projects.length - 1 ? 0 : p_index + 1);
        }, 1000);
    }, 20000);
}

function StartTimeline() {

}

window.addEventListener("load", (event) => {
  LoadProjects();
});