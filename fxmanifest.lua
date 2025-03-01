fx_version 'cerulean'
game 'gta5'

name "am-loadingscreenV2"
description "Loding screen for your Fivem server"
author "Amitae"
version "1.0"

shared_scripts {
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

loadscreen 'html/index.html'
loadscreen_manual_shutdown 'yes'
loadscreen_cursor 'yes'

files {
    'html/index.html',
    'html/styles.css',
    'html/scripts.js',
    'html/config.js',
    'html/src/*',
    'html/src/media/*'
}