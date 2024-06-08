import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { getNotifications } from "../redux/notificationsSlice";
import NotificationCard from "../components/NotificationCard";

const NotificatioPage = () => {
  const { isLoading, notifications, error } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  const notificatrionsList = notifications.map((notification) => (
    // <NotificationCard key={notification.id} id={notification.id} notification={notification} />
    <p>jhjhjhjhjhjhjhjh</p>
  ));

  return (
    <section>
      {}
    </section>
  );
};

export default NotificatioPage;
