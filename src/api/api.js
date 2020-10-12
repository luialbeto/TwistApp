const apiGetNet = '';

export default function getAPI() {
  const fetchAPI = fetch(apiGetNet).then((resolve) => resolve.json());
  return fetchAPI;
}
