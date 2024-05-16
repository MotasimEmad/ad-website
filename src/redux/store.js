import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categoriesSlice from "./categoriesSlice";
import premiumAdSlice from "./premiumAdSlice";
import adDetailsSlice from "./adDetailsSlice";
import premiumAdvertisersSlice from "./premiumAdvertisersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        category: categoriesSlice,
        premiumAd: premiumAdSlice,
        adDetails: adDetailsSlice,
        premiumAdvertisers: premiumAdvertisersSlice,
    }
});