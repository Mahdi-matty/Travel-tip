const URL_PREFIX = "http://localhost:3001"

const Auth = {
    getTokenData: (token) => {
        return fetch(`${URL_PREFIX}/api/tokenData`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (!res.ok) {
                console.error('Invalid token');
                throw new Error("Invalid token");
            }
            return res.text();
        })
            .then((text) => {
                console.log('getSubject Response Text:', text);
                const data = JSON.parse(text);
                console.log('getSubject Data:', data);
                return data;
            }).catch((error)=>{
            console.log(error)
        })
    },

}

export default Auth