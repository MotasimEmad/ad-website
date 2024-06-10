import React from 'react';
import { formatDate } from './DateUtils';

const NotificationCard = ({ id, notification }) => {
  return (
    <div className="font-cairo m-8 pt-12" dir='rtl'>
      <div className="flex flex-col border-b-2 border-gray-100 pb-4">
        <h1 className="text-start">{notification.title}</h1>
        <div className="flex justify-between mt-4">
          <p>{notification.content}</p>
          <p>{formatDate(notification.created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
