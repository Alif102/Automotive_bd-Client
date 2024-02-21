import Title from "../Shared/Title";

const Galance = () => {
    return (
        <div className="relative text-center my-36">
            <div className="bg-[url('https://i.ibb.co/19p9FdT/wepik-export-20231017194232o-Pq-L.png')] w-screen md:h-[80vh] 2xl:h-[65vh] h-screen bg-cover bg-no-repeat bg-fixed"></div>
            <div className="absolute bg-black/75 tracking-widest w-full h-full inset-0">
            <h1 className=" xl:text-6xl text-5xl text-center font-semibold my-7 text-white">Everything <Title>  At A Glance</Title> 
            </h1>
            <p className="text-white/80 2xl:w-1/2 md:w-3/4 mx-auto xl:text-sm text-xs my-5 text-center ">Along with 1000s of cars to choose from, you can apply for finance online and value your existing car all from the comfort of your favourite armchair.</p>
            <div className="flex justify-center 2xl:w-3/4 mx-auto text-white xl:gap-10 gap-3 items-center h-1/2 text-center px-3">
                <div className="2xl:space-y-4">
                    <p className="text-xl">Over</p>
                    <h4 className="tracking-[0.2em] xl:text-6xl md:text-3xl ">100</h4>
                    <br />
                    <p>Markets</p>
                </div>               
                <hr className="text-white/50 px-5 2xl:px-14 rotate-90 "/>
                <div className="2xl:space-y-4">
                    <p className="xl:text-xl">Total Awards</p>
                    <h4 className=" tracking-[0.2em] xl:text-6xl md:text-3xl "> 32+</h4>
                    <br />
                    <p>Among The World</p>
                </div>
                <hr className="text-white/50 px-5 2xl:px-14 rotate-90 "/>
                <div className="2xl:space-y-4">
                <p className="xl:text-xl">More than</p>
                    <h4 className=" tracking-[0.2em] xl:text-6xl md:text-3xl ">20</h4>
                    <br />
                    <p>Brands Available</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Galance;