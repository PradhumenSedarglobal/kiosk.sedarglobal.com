import { Provider } from "react-redux";
import store from '@/app/lib/redux/store';
import '../app/custom.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;