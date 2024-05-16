const Header = () => {
    return (
        <div className="container my-12 px-6 pt-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Lorem ipsum <span className="text-secondary">dolor sit</span></h1>
                <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                    obcaecati illum mollitia.</p>
                    <div class="relative text-gray-600 flex gap-2 items-center mt-8">
                        <input type="search" placeholder="Search for ads" x-model="q" class="w-full px-6 py-4 rounded-md text-sm outline-none focus:outline-none bg-gray-100" />
                        <button className="bg-secondary text-white px-6 py-4 rounded-lg fex justify-center">
                            Search
                        </button>
                    </div>
            </div>
        </div>
    );
  };
  
  export default Header;
  