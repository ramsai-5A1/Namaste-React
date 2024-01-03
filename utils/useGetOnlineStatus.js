const { useState, useEffect } = require("react")

const useGetOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
    }, []);

    

    return onlineStatus;
}

export default useGetOnlineStatus;