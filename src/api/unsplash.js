import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID nGYZAWpRh075FEdGSy9fYF2mO2CN7n5-txFPPiExu9g'
			}
});