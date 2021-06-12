import PageContent from '../../components/PageContent';
import { CLIENT_ID, REDIRECT_URL } from '../../constants'

const LandingPage = () => {
    return (
        <PageContent>
            <a href={`https://anilist.co/api/v2/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`}>Login with AniList</a>
        </PageContent>
    )
}

export default LandingPage
