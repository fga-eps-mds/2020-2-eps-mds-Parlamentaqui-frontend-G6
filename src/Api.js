export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://www.parlamentaqui.com';
export const basePort = '8001';
export const apiURL = `${baseURL}:${basePort}`;
export const camaraURL = `${apiURL}/camara`;
export const camaraSearchRoute = `${camaraURL}/resultado`;
export const tweetURL = `${apiURL}/twitter`;
export const homeTweetRoute = `${tweetURL}/tweets`;
export const newsURL = `${apiURL}/news`;
export const homeNewsRoute = `${newsURL}/latestNews`;
export const deputadosHomeRoute = `${camaraURL}/home`;
export const partiesSearchRoute = `${camaraURL}/parties`;
export const ufSearchRoute = `${camaraURL}/federative_unities`;
export const profileRoute = (id) => `${camaraURL}/profile/${id}`;
export const voteRoute = (id) => `${camaraURL}/get_votes_by_deputy_id/${id}`;
export const deputyNewsRoute = (id) => `${newsURL}/latestNews/${id}`;
export const propositionSearchRoute = `${camaraURL}/filtered_propositions`;
