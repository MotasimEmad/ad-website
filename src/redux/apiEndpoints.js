const BASE_URL = 'https://dev.hashtag-mybusiness.com/api/v1';

const endpoints = {
    // Auth
    login: `${BASE_URL}/login`,
    logout: `${BASE_URL}/logout`,
    forgetPassword: `${BASE_URL}/forget_password`,
    userSignUp: `${BASE_URL}/user_sign_up`,
    companySignUp: `${BASE_URL}/company_sign_up`,
    // OTP
    otpSend: `${BASE_URL}/send_otp`,
    otpVerify: `${BASE_URL}/verify_otp`,
    // User
    getUserProfile: `${BASE_URL}/get_user_profile`,
    updateUserProfile: `${BASE_URL}/edit_user_profile`,
    // Company
    getCompanyById: `${BASE_URL}/get_company_by_id?id=`,
    getCompanyAdsById: `${BASE_URL}/get_ads_by_company?id=`,
    getCompanyBannerAdsById: `${BASE_URL}/get_banner_ads_by_company?id=`,

    // Categories
    getCategories: `${BASE_URL}/get_categories`,
    // Ads
    getPremiumAds: `${BASE_URL}/get_premium_ads`,
    getAdById: `${BASE_URL}/get_ad_by_id?id=`,
    getPremiumAdvertisers: `${BASE_URL}/get_premium_advertisers`,
    getNewlyAddedAds: `${BASE_URL}/get_recently_added_ads`,
    getMostRatedAds: `${BASE_URL}/get_top_rated_ads`,
    // Notifications
    getNotifications: `${BASE_URL}/get_notifications`,
};

export default endpoints;
