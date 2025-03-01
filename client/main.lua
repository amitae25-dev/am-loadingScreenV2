local spawn1 = false							

AddEventHandler("playerSpawned", function () 	
	if not spawn1 then
		ShutdownLoadingScreenNui()	
		spawn1 = true
	end
end)

RegisterNuiCallback("am-loading:cb:settings", function(newSettings, cb)
	SetResourceKvp("am-loading:settings", json.encode(newSettings))
	cb({})
end)