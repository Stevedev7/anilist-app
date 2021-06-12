import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/LoadingSpinner';
import PageContainer from '../../components/PageContent';

import { CLIENT_ID, CLIENT_SECRET } from '../../constants'

const CallbackPage = () => {

    useEffect(() => {
        let cancel;
        const code = window.location.search.split('=')[1];

        axios.post("https://anilist.co/api/v2/oauth/token",
            JSON.stringify({
                grant_type: 'authorization_code',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirect_uri: 'http://localhost:3000/callback',
                code
            })
            ,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                cancelToken: new axios.CancelToken((c) =>  {
                    cancel = c;
                })
            }
        )
            .then(res => res.data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        return () => cancel();
    }, []);

    return (
        <PageContainer>
            <h1>Logging In...</h1>
            <Spinner />
        </PageContainer>
        
    )
}

export default CallbackPage
