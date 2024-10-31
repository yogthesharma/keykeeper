// assets
import { IconLock } from '@tabler/icons-react';

// constant
const icons = { IconLock };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const login = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.IconLock,
            breadcrumbs: false
        }
    ]
};

export default login;
