import "styles/globals.scss";
import ProjectProvider from "context/ProjectProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

export default MyApp;
