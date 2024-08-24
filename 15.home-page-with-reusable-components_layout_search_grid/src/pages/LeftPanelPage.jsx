import { LeftPanel } from '../components/LeftPanel';

const items = [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
    { name: 'Logout', route: '/contact' }
];

export function LeftPanelPage() {
    return (
        <>
        <LeftPanel items={items} />
        </>
    );
}
