import * as Linking from 'expo-linking';

const prefix = Linking.makeUrl('/');

const config = {
  prefixes: [prefix, "exps://localhost:19006/",'https://famapp.web.app', "famapp://", "exps://famapp.web.app"],
  config: {
    screens: {
      Main: {
		screens: {
			Auth: {
				screens:{
					Login: 'login',
		      		Landing: '',
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