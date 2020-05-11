import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer LrA2VjgPZAj1Tv4Z748_kHj8mXsRdjk2UceT16RCsP9LP2eVl9KGulsl9aYeGjcltpAstRZZSW91wtfwKXSD-o2zGNnAvH4fjX7yrY5Txl8MM-3CDKuv2tW4NiKYXnYx',
        
    }
});

