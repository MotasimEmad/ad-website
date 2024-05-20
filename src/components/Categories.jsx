import React, { useEffect } from 'react';
import { getCategories } from '../redux/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from './atoms/CategoryCard';

const Categories = () => {
  const { isLoading, categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = categories.map((category) => (
    <CategoryCard key={category.id} id={category.id} image={category.image} title={category.category} />
  ));

  return (
    <div class="flex flex-col bg-white px-16">
      <div>
        <h3 className="mb-6 text-3xl font-bold text-slate-900">
          Main Categories
        </h3>
      </div>
      <div className="lg:flex lg:-mx-2">
        <div className="mt-6 lg:mt-0 lg:px-2">
          <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
            <p className="text-slate-700">{categoriesList.length} Categories</p>
          </div>
        </div>
      </div>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar mt-8">
        <div class="flex flex-nowrap">
          {isLoading ? <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto animate-pulse">
        <h1 class="w-40 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p class="w-64 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="w-48 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="flex flex-col items-center p-8">
                <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
                <h1 class="w-40 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <p class="w-32 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                <p class="w-56 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section> : categoriesList}
        </div>
      </div>
    </div>
  );
};

export default Categories;
