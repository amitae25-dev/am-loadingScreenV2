const config = {
  colors: { // general color settings
    backgroundColor: '#ffffff',  // not really matter
    menuBackground: 'rgba(0, 0, 0, 0.5)',  
    textColor: '#fff',  
  },
  font: {
    fontFamily: 'Trebuchet MS, sans-serif'
  },
  background: {
    source: 'gYO1uk7vIcc',  // in youtube link the part after the = 
  },
  animations: {
    borderAnimationEnabled: true, 
    borderColors: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  logo: {
    show: true, 
    source: 'src/media/logo.png', 
    width: '300px', 
    height: '193px' 
  },
  buttons: {
    color: '',
    hover: '',
    home: "Home",   
    news: "News",   
    team: "Team"    
  },
  sections: {
    home: {
      showHome: true,
      showSocialMedia: true,
      showUpdates: false,
      showDevelopers: false,
      showAdmins: false
    },
    news: {
      showSocialMedia: false,
      showUpdates: true,
      showDevelopers: true,
      showAdmins: false
    },
    team: {
      showSocialMedia: false,
      showUpdates: false,
      showDevelopers: false,
      showAdmins: true
    }
  },
  home: {
    title: {
      text: "Welcome to XY RolePlay!",
      color: "#4287f5"  
    },
    subtitle: "Before you start playing read the rules and join our discord server!",
    discord: {
      name: "XY RolePlay",
      invite: "https://discord.gg/GXCrWGM33Z", 
      svg: "src/media/discord_icon.svg"  
    },
    toggleMenu: {
      color: '#aaa',
      keyBind: 'F4',
      showHint: true,
      hintText: 'Press F4 to toggle the menu display.'
    },
    colors: {
      // Home header buttons
      homeButtonColor: '#5865F2',
      homeButtonText: '#fff',
      homeButtonHover: '#4752C4',

      // Discord button stats
      discordButtonColor: '#5865F2',
      discordButtonText: '#fff',
      discordButtonHover: '#4752C4'
    }
  },
  updates: {
    colors: {
      updateDateColor: '#888',
      updateLineColor: '#fff',
      updatesTitleColor: '#fff',
      updatesFontColor: '#fff'
    },
    items: [
      {
        title: "Development",
        content: "<p>We made <b>HUGE</b> updates on the server! Join and finde them!</p>",
        date: "2024-10-16"
      }
    ]
  },
  developers: {
    title: 'Developers',
    colors: {
      roleColor: '#888',
      devNameColor: '#5865F2',
      devLineColor: '#fff'
    },
    list: [
      {
        "name": "Amitae",
        "role": "Developer",
        "image": "src/media/dev.png"
      },
      {
        "name": "Amitae",
        "role": "Junior Developer",
        "image": "src/media/dev.png"
      }
    ]
  },
  admins: {
    title: 'Staff Team',
    colors: {
      roleColor: '#888',
      adminNameColor: '#5865F2',
    },
    list: [
      {
        "name": "Amitae",
        "role": "Owner",
        "image": "src/media/owner.png"
      },
      {
        "name": "Amitae",
        "role": "Admin",
        "image": "src/media/admin.png"
      }
    ]
  },
  socials: {
    title: 'Socials',
    colors: {
      descColor: '#888',
      socialNameColor: '#5865F2',
      sectionLineColor: '#fff'
    },
    items: [
      {
        "name": "Tiktok",
        "text": "Foolow us on tiktok!",
        "image": "src/media/tiktok.png",
        "link": "https://discord.gg/yourserver",
        "buttonColor": '#5865F2',  
        "hoverColor": '#4752C4'
      },
      {
        "name": "Twitter",
        "text": "Check out our posts on twitter!",
        "image": "src/media/twitter.png",
        "link": "https://twitter.com/yourprofile",
        "buttonColor": '#5865F2',  
        "hoverColor": '#4752C4'
      }
    ]
  }
};
