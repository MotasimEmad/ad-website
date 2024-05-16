const BASE_URL = 'https://dev.hashtag-mybusiness.com/api/v1';

const endpoints = {
    // Auth
    login: `${BASE_URL}/login`,
    userSignUp: `${BASE_URL}/user_sign_up`,
    // Categories
    getCategories: `${BASE_URL}/get_categories`,
    // Ads
    getPremiumAds: `${BASE_URL}/get_premium_ads`,
    getAdById: `${BASE_URL}/get_ad_by_id?id=`,
    getPremiumAdvertisers: `${BASE_URL}/get_premium_advertisers`,
};

export default endpoints;
