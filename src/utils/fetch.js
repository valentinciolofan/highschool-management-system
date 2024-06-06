export async function checkSession() {
    try {
       const response = await fetch('http://localhost:3000/check-session', {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        const {loggedIn, status, userInfo} = await response.json();
        
        if (loggedIn && status === 200 && userInfo !== undefined) {
            console.log(userInfo)
            setUser(userInfo);
        } else {
            setUser(null);
            if (user === null) {
              navigate('/login');
            }
        }
    } catch (error) {
        console.log('Fetch failed, check the reason:', error);
        setUser(null);
    }
}

