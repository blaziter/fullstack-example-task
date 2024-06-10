import { RouterProvider, createRouter } from '@tanstack/react-router';

import { Toaster } from '@components/ui/toaster';

import { routeTree } from '../routeTree.gen';
import { ThemeProvider } from '@components/ui/theme-provider';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const App = () => {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    );
};

export default App;
