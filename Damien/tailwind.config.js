/** @type {import('tailwindcss').Config} */
module.exports = {
  	"content": [
    		"./src/**/*.{js,jsx,ts,tsx}"
  	],
  	"theme": {
    		"extend": {
      			"colors": {
        				"gray": {
          					"100": "#1c1c21",
          					"200": "#131316"
        				},
        				"white": "#fff",
        				"darkgray": "#afb0b6"
      			},
      			"fontFamily": {
        				"manrope": "Manrope"
      			},
      			"padding": {
        				"num-30": "30px"
      			}
    		},
    		"fontSize": {
      			"num-18": "18px"
    		}
  	},
  	"corePlugins": {
    		"preflight": false
  	}
}