import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import ThemeCustomization from '../themes';
import NavigationScroll from '../layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { persister } from '../store';
import Locales from 'ui-component/Locales';
import { ConfigProvider } from '../contexts/ConfigContext';
import '../scss/style.scss';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import { FirebaseProvider as AuthProvider } from '../contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
import Snackbar from 'ui-component/extended/Snackbar';
import MainLayout from 'layout/MainLayout';
import GuestGuard from 'layout/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import { LayoutType } from 'types';
const Noop: React.FC = ({ children }) => {
  return <> {children} </>;
};

const prefix = '/berry-dashboard';

function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: LayoutType } }) {
  let Layout;
  switch (Component.Layout) {
    case 'authGuard':
      Layout = MainLayout;
      break;
    case 'guestGuard':
      Layout = GuestGuard;
      break;
    case 'minimalLayout':
      Layout = MinimalLayout;
      break;
    default:
      Layout = Noop;
  }

  return (
    <>
      <Head>
        <title>Berry - React Material Admin Dashboard Template</title>
        <link rel="icon" href={`/${prefix}/favicon.svg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <ConfigProvider>
            <ThemeCustomization>
              <RTLLayout>
                <Locales>
                  <NavigationScroll>
                    <AuthProvider>
                      <Layout>
                        <Component {...pageProps} />
                        <Snackbar />
                      </Layout>
                    </AuthProvider>
                  </NavigationScroll>
                </Locales>
              </RTLLayout>
            </ThemeCustomization>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
