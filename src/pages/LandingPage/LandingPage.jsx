import PageContent from '../../components/PageContent';
import { CLIENT_ID } from '../../constants';
import { StyledAuthorizeBtton } from './styles';

import './LandingPage.css'
const { pageStyle } = {
    pageStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const AUTH_URL = `https://anilist.co/api/v2/oauth/authorize?client_id=${CLIENT_ID}&response_type=token`

const LandingPage = () => {
    return (
        <PageContent style={pageStyle}>
            <StyledAuthorizeBtton
                className="login-btn"
                href={AUTH_URL}>
                    Login with AniList
            </StyledAuthorizeBtton>
        </PageContent>
    )
}

export default LandingPage
