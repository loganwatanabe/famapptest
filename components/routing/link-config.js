import * as Linking from 'expo-linking';

const prefix = Linking.makeUrl('/');

const config = {
  prefixes: [prefix, "exps://localhost:19006/",'https://famapp.web.app', "famapp://", "exps://famapp.web.app"],
  config: {
    screens: {
      Main: {
		screens: {
			Landing: '',
			Auth: {
				screens:{
					Login: 'login',
				}
		    },
		    Account:{
		     	screens: {
		     		Home: 'home'
		     	}
		    },
		    About: 'about',
		    '404': '*',
		}
      }
    },
  }
};

export {config}