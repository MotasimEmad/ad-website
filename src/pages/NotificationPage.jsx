import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../redux/notificationsSlice";

const NotificationPage = () => {
  const { notifications, isLoading } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


  const notificatrionsList = notifications.map((notification) => (
    <NotificationCard key={notification.id} id={notification.id} notification={notification} />
  ));

  return (
    <section className="w-full h-96">
      {isLoading ? <p className="text-black">Loading ...</p> : notificatrionsList}
    </section>
  );
};

export default NotificationPage;
