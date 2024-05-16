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
          {isLoading ? "Loading ..." : categoriesList}
        </div>
      </div>
    </div>
  );
};

export default Categories;
