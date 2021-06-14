export const getAuthorizedUser = () => `{
    Viewer{
        id
        name
        avatar {
            large
            medium
        }
    }
}`;

export const getTopRated = (perPage=10, pageNumber=1) =>`{
    Page(perPage: ${perPage}, page: ${pageNumber}){
        pageInfo{
            hasNextPage,
        }
        media(type: MANGA, sort: SCORE_DESC){
            title {
                userPreferred
            }
        }
    }
}`