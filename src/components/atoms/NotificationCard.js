function NotificationCard({ id, title, image }) {
    return (
        <div class="inline-block px-3">
            <div class="flex flex-col justify-center items-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                class=" w-32 h-32 rounded-full"
                src={image}
                alt="category image"
              />

              <h4 class="my-6 text-lg font-medium text-primary_dark">
                {title}
              </h4>
            </div>
          </div>
    );
 }
 
 export default NotificationCard;