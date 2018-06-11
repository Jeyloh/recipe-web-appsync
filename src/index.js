import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import Client from 'aws-appsync'
import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import AppSync from './AppSync'
import awsmobileConf from './aws-exports';

Amplify.configure(awsmobileConf);

const client = new Client ({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AppSync.authenticationType,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
    }
})

const AppWithAuth = withAuthenticator(App);

const AppWithApollo = () => (
    <ApolloProvider client={client}> 
        <Rehydrated>
            <AppWithAuth />
        </Rehydrated>
    </ApolloProvider>
)

ReactDOM.render(<AppWithApollo />, document.getElementById('root'));
registerServiceWorker();
