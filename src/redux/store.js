import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categoriesSlice from "./categoriesSlice";
import premiumAdSlice from "./premiumAdSlice";
import adDetailsSlice from "./adDetailsSlice";
import premiumAdvertisersSlice from "./premiumAdvertisersSlice";
import userSlice from "./userSlice";
import companySlice from "./companySlice";
import notificationsSlice from "./notificationsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        company: companySlice,
        category: categoriesSlice,
        premiumAd: premiumAdSlice,
        adDetails: adDetailsSlice,
        premiumAdvertisers: premiumAdvertisersSlice,
        notifictaion: notificationsSlice,
    }
});