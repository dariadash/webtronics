import { Inter } from '@next/font/google'
import { FeedbackPage } from '../components/feedback'
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <FeedbackPage />
    </Provider>
  )
}
