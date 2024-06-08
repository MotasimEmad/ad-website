import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categoriesSlice from "./categoriesSlice";
import premiumAdSlice from "./premiumAdSlice";
import adDetailsSlice from "./adDetailsSlice";
import premiumAdvertisersSlice from "./premiumAdvertisersSlice";
import userSlice from "./userSlice";
import companySlice from "./companySlice";
import notificationsSlice from "./notificationsSlice";
import otpSlice from "./otpSlice";
import passwordSlice from "./passwordSlice";
import newlyAddedAdSlice from "./newlyAddedAdSlice";
import mostRatedAdSlice from "./mostRatedAdSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        password: passwordSlice,
        otp: otpSlice,
        company: companySlice,
        category: categoriesSlice,
        premiumAd: premiumAdSlice,
        adDetails: adDetailsSlice,
        premiumAdvertisers: premiumAdvertisersSlice,
        newlyAddedAd: newlyAddedAdSlice,
        mostRatedAd: mostRatedAdSlice,
        notifictaion: notificationsSlice,
    }
});