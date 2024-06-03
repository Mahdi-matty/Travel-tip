const URL_PREFIX = "http://localhost:3001"

const Auth = {
    login: (userObj) => {
        return fetch(`${URL_PREFIX}/api/user/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error("invalid login")
            }
            return res.json()
        })
    },
    signup: userObj => {
        return fetch(`${URL_PREFIX}/api/users/register`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error("invalid signup")
            }
            return res.json()
        })
    },
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