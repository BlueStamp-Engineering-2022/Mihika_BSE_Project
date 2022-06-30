/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	language: 'en',
	timeFormat: 12,
	units: 'imperial',
	
	modules: [

		{
			module: "alert",
		},
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_right",

		  config: {
			clientID: "47521f2d9e13499abd26c52de355b6a5",
			clientSecret: "a2d53b65bb7b4094a05dfebf151185b2",
			accessToken: "BQAuOubTsDaWVWYbmcwEBo8F1iOBHp0nJM3W7vnq9-Plda45UT4_tlRSlelImltIf_jvPYs8GJvj4Z_ItOpe_LifdW35XcCnHH41zHoVLYcuuqufkOvESt2WRtJ5FGja9wBsqX6yIQsFM_i2fO2DXAFHd32iYukR2d6EeJWQsj_ZW2DVd6T2k8vhxp4",
			refreshToken: "AQD6czksoPA5dZKS8Ob5lO-BQOTnYnOYwsPOSYbyvQWikToN_WNaO-6mWeQlAzMEpfwQT34DkWByccVg8KvLwAz3CxdYuMlifd9JvHTeqFVyYNRlwfIaho_x8s24G7ZsX40"
		  }
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		
		{
			module: "weather",
			position: "top_right",
			config: {
				type: "current",
				location: "Sunnyvale,California",
				locationID: "",
				lat: "37.3688",
				lon: "-122.0363",
				apiKey: "c8db4245018c50eb495a32defc94cc8c",
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
