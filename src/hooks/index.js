import { useEffect } from "react";


// GET ACCESS TOKEN FROM THE URL AND SAVE IT IN THE LOCAL STORAGE
export const useAuth = () => {
    useEffect(() => {
        const [accessToken, tokenType, expiresIn] = window.location.hash.substr(1).split('&').map(item => item.split('=')[1]);
        
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenType', tokenType);
        localStorage.setItem('expiresIn', ((Number(expiresIn) * 1000) + Date.now()));
    
        window.location.replace(window.location.origin + '/home');
    }, []);
    return window.localStorage.getItem('expiresIn');
}