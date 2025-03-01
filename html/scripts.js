// General
document.documentElement.style.setProperty('--background-color', config.colors.backgroundColor);
document.documentElement.style.setProperty('--menu-background', config.colors.menuBackground);
document.documentElement.style.setProperty('--text-color', config.colors.textColor);

// Hint
document.documentElement.style.setProperty('--hint-color', config.home.toggleMenu.color);

// Admins
document.documentElement.style.setProperty('--adminrole-color', config.admins.colors.roleColor);
document.documentElement.style.setProperty('--adminname-color', config.admins.colors.adminNameColor);

// Socials
document.documentElement.style.setProperty('--socialdesc-color', config.socials.colors.descColor);
document.documentElement.style.setProperty('--socialname-color', config.socials.colors.socialNameColor);
document.documentElement.style.setProperty('--socialline-color', config.socials.colors.sectionLineColor);

// Developers
document.documentElement.style.setProperty('--devrole-color', config.developers.colors.roleColor);
document.documentElement.style.setProperty('--devname-color', config.developers.colors.devNameColor);
document.documentElement.style.setProperty('--devline-color', config.developers.colors.devLineColor);

// Updates
document.documentElement.style.setProperty('--updatesdate-color', config.updates.colors.updateDateColor);
document.documentElement.style.setProperty('--updatesline-color', config.updates.colors.updateLineColor);
document.documentElement.style.setProperty('--updatestitle-color', config.updates.colors.updatesTitleColor);
document.documentElement.style.setProperty('--updatesfont-color', config.updates.colors.updatesFontColor);

// Home discord
document.documentElement.style.setProperty('--homebutton-color', config.home.colors.homeButtonColor);
document.documentElement.style.setProperty('--homefont-color', config.home.colors.homeButtonText);
document.documentElement.style.setProperty('--homebutton-color-h', config.home.colors.homeButtonHover);

document.documentElement.style.setProperty('--discordbutton-color', config.home.colors.discordButtonColor);
document.documentElement.style.setProperty('--discordfont-color', config.home.colors.discordButtonText);
document.documentElement.style.setProperty('--discordbutton-color-h', config.home.colors.discordButtonHover);

document.documentElement.style.setProperty('--animated-border-prim', config.animations.borderColors.primary);
document.documentElement.style.setProperty('--animated-border-sec', config.animations.borderColors.secondary);

document.body.style.fontFamily = config.font.fontFamily;

function playVideo (source) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Player beállítása
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
      videoId: source,
      events: {
          'onReady': onPlayerReady
      }
    });
  }
}
/*
var player;

// YouTube API betöltése és lejátszó inicializálása
function loadYouTubeAPI(videoID) {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Az API betöltése után azonnal létrehozzuk a lejátszót
  tag.onload = function() {
    initializePlayer(videoID);
  };
}

// Lejátszó inicializálása és videó betöltése
function initializePlayer(videoID) {
    player = new YT.Player('youtube-player', {
        videoId: videoID,
        events: {
          'onReady': function(event) {
              event.target.playVideo();
          }
        }
    });
    player.loadVideoById(videoID);
}

// Új videó beállítása, vagy új lejátszó létrehozása
function playVideo(videoID) {
  if (player) {
    player.loadVideoById(videoID);
  } else {
    loadYouTubeAPI(videoID);
    //player.loadVideoById(videoID);
  }
}*/

playVideo(config.background.source)

const menuElement = document.getElementById('menu');

if (config.animations.borderAnimationEnabled) {
  menuElement.classList.add('menu-right-border-animated');
} else {
  menuElement.classList.add('menu-right-border');
}

let show = true
document.addEventListener('keydown', (e) => {
  if (e.key === config.home.toggleMenu.keyBind) { 
    if (show) {
      document.getElementById('menu').style.display = 'none';
      //document.getElementById('musicPanel').style.display = 'none';
      show = false
    } else {
      document.getElementById('menu').style.display = 'block';
      //document.getElementById('musicPanel').style.display = 'block';
      show = true
    }
  }
});

if (config.logo.show) {
  const serverLogo = document.getElementById('serverLogo');
  serverLogo.src = config.logo.source;
  serverLogo.style.display = 'block';
  serverLogo.style.width = config.logo.width; 
  serverLogo.style.height = config.logo.height; 
}

const homeBtn = document.getElementById('homeBtn');
const newsBtn = document.getElementById('newsBtn');
const teamBtn = document.getElementById('teamBtn');


homeBtn.innerText = config.buttons.home;
newsBtn.innerText = config.buttons.news;
teamBtn.innerText = config.buttons.team;


toggleSectionVisibility('home');
setActiveButton(homeBtn);


homeBtn.addEventListener('click', () => {
  toggleSectionVisibility('home');
  setActiveButton(homeBtn);
});

newsBtn.addEventListener('click', () => {
  toggleSectionVisibility('news');
  setActiveButton(newsBtn);
});

teamBtn.addEventListener('click', () => {
  toggleSectionVisibility('team');
  setActiveButton(teamBtn);
});

function toggleSectionVisibility(section) {
  const sectionsConfig = config.sections[section];


  document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');


  if (sectionsConfig.showSocialMedia) document.getElementById('socialSection').style.display = 'block';
  if (sectionsConfig.showHome) document.getElementById('homeContent').style.display = 'block';
  if (sectionsConfig.showUpdates) document.getElementById('updatesSection').style.display = 'block';
  if (sectionsConfig.showDevelopers) document.getElementById('developersSection').style.display = 'block';
  if (sectionsConfig.showAdmins) document.getElementById('adminsSection').style.display = 'block';
}


function setActiveButton(activeButton) {
  homeBtn.classList.remove('active');
  newsBtn.classList.remove('active');
  teamBtn.classList.remove('active');

  activeButton.classList.add('active');
}

const homeTitle = document.getElementById('homeTitle');
const homeSubtitle = document.getElementById('homeSubtitle');
const discordLinkButton = document.getElementById('discordLinkButton');
const discordLogo = document.getElementById('discordLogo');
const discordName = document.getElementById('discordName');

homeTitle.textContent = config.home.title.text;
homeTitle.style.color = config.home.title.color;

homeSubtitle.textContent = config.home.subtitle;

discordLogo.src = config.home.discord.svg;
discordName.textContent = config.home.discord.name;

discordLinkButton.addEventListener('click', () => {
  window.invokeNative('openUrl', config.home.discord.invite);
  //window.open(config.home.discord.invite, '_blank', 'toolbar=0,location=0,menubar=0');
});

const updatesSection = document.getElementById('updatesSection');

config.updates.items.forEach(update => {
  const updateDiv = document.createElement('div');
  updateDiv.className = 'update-item';

  const updateTitle = document.createElement('h2');
  updateTitle.className = 'update-title';
  updateTitle.textContent = update.title;

  const updateContent = document.createElement('div');
  updateContent.className = 'update-content';
  updateContent.innerHTML = update.content; 

  const updateDate = document.createElement('p');
  updateDate.className = 'update-date';
  updateDate.textContent = update.date;

  updateDiv.appendChild(updateTitle);
  updateDiv.appendChild(updateContent);
  updateDiv.appendChild(updateDate);

  updatesSection.appendChild(updateDiv);
});

const developersSection = document.getElementById('developersSection');
developersSection.innerHTML = config.developers.title; 
    
config.developers.list.forEach((developer) => {
  const developerItem = document.createElement('div');
  developerItem.className = 'developer-item';

  const developerImage = document.createElement('img');
  developerImage.src = developer.image; 
  developerImage.alt = developer.name; 
  developerItem.appendChild(developerImage);

  const developerDetails = document.createElement('div');
  developerDetails.className = 'developer-details';

  const developerName = document.createElement('div');
  developerName.className = 'developer-name';
  developerName.textContent = developer.name;
  developerDetails.appendChild(developerName);

  const developerRole = document.createElement('div');
  developerRole.className = 'developer-role';
  developerRole.textContent = developer.role;
  developerDetails.appendChild(developerRole);

  developerItem.appendChild(developerDetails);
  developersSection.appendChild(developerItem);
});

const adminsSection = document.getElementById('adminsSection');
adminsSection.innerHTML = config.admins.title; 
    
config.admins.list.forEach((admin) => {
  const adminItem = document.createElement('div');
  adminItem.className = 'admin-item';

  const adminImage = document.createElement('img');
  adminImage.src = admin.image; 
  adminImage.alt = admin.name; 
  adminItem.appendChild(adminImage);

  const adminDetails = document.createElement('div');
  adminDetails.className = 'admin-details';

  const adminName = document.createElement('div');
  adminName.className = 'admin-name';
  adminName.textContent = admin.name;
  adminDetails.appendChild(adminName);

  const adminRole = document.createElement('div');
  adminRole.className = 'admin-role';
  adminRole.textContent = admin.role;
  adminDetails.appendChild(adminRole);

  adminItem.appendChild(adminDetails);
  adminsSection.appendChild(adminItem);
});

const socialSection = document.getElementById('socialSection');
socialSection.innerHTML = config.socials.title;

config.socials.items.forEach((social) => {
  const socialItem = document.createElement('div');
  socialItem.className = 'social-item';

  const socialImage = document.createElement('img');
  socialImage.src = social.image; 
  socialImage.alt = social.name; 
  socialItem.appendChild(socialImage);

  const socialDetails = document.createElement('div');
  socialDetails.className = 'social-details';

  const socialName = document.createElement('div');
  socialName.className = 'social-name';
  socialName.textContent = social.name;
  socialDetails.appendChild(socialName);

  const socialText = document.createElement('div');
  socialText.className = 'social-text';
  socialText.textContent = social.text;
  socialDetails.appendChild(socialText);

  socialItem.appendChild(socialDetails);

  const socialButton = document.createElement('button');
  socialButton.className = 'social-button';
  socialButton.textContent = 'Visit';

  socialButton.style.backgroundColor = social.buttonColor;  
  socialButton.style.transition = 'background-color 0.3s ease';  

  socialButton.addEventListener('mouseenter', function() {
      socialButton.style.backgroundColor = social.hoverColor;  
  });
  socialButton.addEventListener('mouseleave', function() {
      socialButton.style.backgroundColor = social.buttonColor;  
  });

  socialButton.onclick = () =>  window.invokeNative('openUrl', social.link);
 
  socialItem.appendChild(socialButton)

  socialSection.appendChild(socialItem);
});
/*
// Teszt

const settingsButton = document.getElementById('settingsButton');
settingsButton.addEventListener('click', () => {
  //window.open(config.home.discord.invite, '_blank', 'toolbar=0,location=0,menubar=0');
  const modal = document.getElementById('settingsModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
});

const saveSettings = document.getElementById('saveSettings');
saveSettings.addEventListener('click', () => {
  const videoId = document.getElementById('videoUrl').value;
  const muteAudio = document.getElementById('useAudio').checked;
  const modal = document.getElementById('settingsModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  if (videoId == '' || videoId == null) { } else {
    playVideo(videoId)
  }
});*/