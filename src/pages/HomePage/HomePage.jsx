import { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContent'
import { apiCall } from '../../services/api';
import { getAuthorizedUser, getTopRated } from '../../services/queries'
const HomePage = () => {
    useEffect(() =>{    
        apiCall(getAuthorizedUser()).then(data => data).then(console.log).catch(console.error);
    }, []);

    return (
        <PageContainer>
            <h1>Home</h1>
        </PageContainer>
    )
}

export default HomePage
