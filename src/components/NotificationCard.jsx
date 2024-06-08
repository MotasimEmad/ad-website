import React from 'react';
import { formatDate } from './DateUtils';

const NotificationCard = ({id, notification}) => {
  return (
    <div class="h-screen grid my-8 font-cairo" dir='rtl'>
      <div class=" bg-gray-50  rounded-xl border p-10 shadow-sm">
      <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
          <div class=" inline-flex items-center justify-between w-full">
            <div class="inline-flex items-center">
              <h3 class="font-bold text-base text-gray-800">{notification.title}</h3>
            </div>
            <p class="text-xs text-gray-500">
              {formatDate(notification.created_at)}
            </p>
          </div>
          <p class="mt-1 text-sm">
           {notification.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
