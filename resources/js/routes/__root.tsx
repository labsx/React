import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { FaHome, FaUserFriends, FaInfoCircle } from 'react-icons/fa';

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/users" className="[&.active]:font-bold">
                    Users
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/profile" className="[&.active]:font-bold">
                    Profile
                </Link>
            </div>
            
            <hr />
            <Outlet />
        </>
    ),
})
