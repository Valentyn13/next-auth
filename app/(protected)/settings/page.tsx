'use client'
import { logout } from "@/actions/logout";

import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const session = useCurrentUser();

    const handleSignOut = () =>{
        logout();
    }
    return(
        <div>
            <h1>Settings</h1>
            <p>{JSON.stringify(session)}</p>
            <button onClick={handleSignOut} type="submit">Sign out</button>
        </div>
    )
}

export default SettingsPage;