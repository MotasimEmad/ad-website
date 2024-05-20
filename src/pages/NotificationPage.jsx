import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { getNotifications } from "../redux/notificationsSlice";



const NotificatioPage = () => {

  const { isLoading, notifications, error } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  const notificatrionsList = notifications.map((notification) => (
    <NotificationCard key={notification.id} id={notification.id} notification={notification} />
  ));

  return (
    <section>
      
    </section>
  );
};

export default NotificatioPage;
