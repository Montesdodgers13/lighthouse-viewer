import SvelteLighthouseViewer from '..';
import reportJson from './report-v7.0.0.json';

const svelteAppElement = document.getElementById('svelte-app');
if (svelteAppElement) {
  const app = new SvelteLighthouseViewer({
    target: svelteAppElement,
    props: {
      json: reportJson,
    },
  });
}
