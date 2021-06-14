import axios from 'axios';
import Spinner from '../../components/LoadingSpinner';
import PageContainer from '../../components/PageContent';
import { useAuth } from '../../hooks'

const CallbackPage = () => {
    
    useAuth();

    return (
        <PageContainer>
            <h1>Logging In...</h1>
            <Spinner />
        </PageContainer>
        
    )
}

export default CallbackPage
