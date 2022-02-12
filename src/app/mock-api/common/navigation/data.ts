/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'profile',
        title: 'Profile',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'profile',
                title: 'Profile',
                type: 'basic',
                link: '/ods/profile/my-profile'
            }
        ]
    },
    {
        id: 'accounts',
        title: 'Accounts',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'partner',
                title: 'Partner Accounts',
                type: 'basic',
                link: '/ods/accounts/partners'
            },
            {
                id: 'user',
                title: 'User Accounts',
                type: 'basic',
                link: '/ods/accounts/users'
            }
        ]
    },
    {
        id: 'catalogue',
        title: 'Catalogue',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    },
    {
        id: 'administration',
        title: 'Administration',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'profile',
        title: 'Profile',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    }, {
        id: 'accounts',
        title: 'Accounts',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    },
    {
        id: 'catalogue',
        title: 'Catalogue',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    },
    {
        id: 'administration',
        title: 'Administration',
        type: 'aside',
        icon: 'heroicons_outline:chart-pie',
        children: []
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
