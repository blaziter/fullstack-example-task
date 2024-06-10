import React from 'react';
import {
    createRootRoute,
    Link,
    Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { ModeToggle } from '@components/ui/mode-toggle';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className='p-2 px-4 flex gap-2 items-center justify-between'>
            <div className='flex gap-2'>
                <Link to='/' className='[&.active]:font-bold'>
                    {t('navbar.index')}
                </Link>{' '}
                <Link to='/about' className='[&.active]:font-bold'>
                    {t('navbar.about')}
                </Link>
            </div>
            <ModeToggle />
        </div>
    );
};

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='border-t border-[#E4E4E7] dark:border-[#27272A]'>
            <div className='py-4 container'>{t('footer.contact')}</div>
            <TanStackRouterDevtools />
        </footer>
    );
};

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            <Navbar />
            <hr />
            <main>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    ),
});
