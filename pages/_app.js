import '../styles/app.css';
import Layout from '../components/layout';
import {InfoProvider} from '../context/info';

function App({Component, pageProps}) {
    return (
        <InfoProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </InfoProvider>
    )
}

export default App
