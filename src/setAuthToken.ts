// setAuthToken.tsx

import axios from 'axios';

const setAuthToken = (token: string | boolean): void => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;