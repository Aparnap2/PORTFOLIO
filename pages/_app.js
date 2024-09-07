import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

/**
 * The root App component.
 *
 * This component wraps the entire app in a QueryClientProvider,
 * which allows us to use react-query's caching and other features
 * in our app. It also wraps the app in a Layout component, which
 * provides a consistent layout for all pages.
 *
 * @param {{Component: Function, pageProps: Object}} props
 *   The props passed to this component.
 * @prop {Function} Component
 *   The component to render as the main content of this page.
 * @prop {Object} pageProps
 *   The props passed to the Component component.
 * @returns {ReactElement}
 *   The rendered App component.
 */
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
