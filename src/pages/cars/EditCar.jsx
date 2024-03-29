import { useState } from "react";
import logo from "/images/logo.png";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Select from "react-select";
import { useLoaderData } from "react-router-dom";
const EditCar = () => {
    const data=useLoaderData().data
    let{_id, brandLower,Image,Name,type,price,Rating,details}=data
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    const handleEditCar = e => {
      e.preventDefault();

      const form = e.target;
      const Image = form.Image.value;
      const Name = form.Name.value;
      const brand = form.brand.value;
      let brandLower = brand.toLowerCase();
      const type = form.type.value;
      const price = form.price.value;
      const Rating = form.Rating.value;
      const details = form.details.value;
  
  if(!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(Image)){
    return toast.error('please add valid link')
  }
  
  let car2={Image,Name, brandLower, type, price, Rating,details}

    fetch(`https://automotiveserver.vercel.app/cars/${_id}`,{
      method: 'PUT',headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(car2)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
      if (data.modifiedCount>0){
        toast.success("Edit Successful");
      }
    })
  .catch(err=>console.error(err))
      
    };
   
    const brands= [
      { value: "BMW", label: "BMW" },
      { value: "Ford", label: "Ford" },
      { value: "TOYOTA", label: "TOYOTA" },
      { value: "Bentley", label: "Bentley" },
      { value: "Audi", label: "Audi" },
      { value: "Nissan", label: "Nissan" },
      { value: "Honda", label: "Honda" },
      { value: "Volkswagen", label: "Volkswagen" },
      { value: "Mercedes", label: "Mercedes" },
    ];
    const types = [
      { value: "SUV", label: "SUV" },
      { value: "Hatchback", label: "Hatchback" },
      { value: "Sedan", label: "Sedan" },
      { value: "Coupe", label: "Coupe" },
      { value: "Convertible", label: "Convertible" },
      { value: "Station Wagon", label: "Station Wagon" },
      { value: "Crossover", label: "Crossover" },
      { value: "Minivan", label: "Minivan" },
      { value: "Sports car", label: "Sports car" },
    ];
  
    return (
      <div className="container mx-auto lg:flex justify-between gap-8 items-center py-10 mt-10 px-4 pt-14 lg:pt-0">
        <Helmet>
          <title>Car-Com || Add A Car</title>
        </Helmet>
        <div className="hidden lg:grid lg:justify-center">
          <img src={logo} alt="logo" className="" />
        </div>
        <div
          className="  w-full border rounded-lg border-[#29eeeed0] shadow-xl"
          onSubmit={handleEditCar}
        >
          <form className="grid p-10 bt-0 gap-10">
            <h2 className="py-2 font-semibold text-4xl text-center text-[#29eeeed0]">
              ADD CAR
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Image link"
                name="Image"
                defaultValue={Image}
                className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
              />
              <input
                type="text"
                placeholder="Name"
                name="Name"
                defaultValue={Name}
                className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
              />
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <Select
                  required
                  placeholder={'brand'}
                  className=" text-xs"
                  name="brand"
                  
                  defaultValue={selectedBrand}
                  onChange={setSelectedBrand}
                  options={brands}
                />
                <Select
                  required
                  placeholder={'type'}
                  className=" text-xs"
                  name="type"
                  defaultValue={selectedType}
                  onChange={setSelectedType}
                  options={types}
                />
              </div>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                name="price"
                className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
              />
              <input
                type="number"
                placeholder="Rating (0-5)"
                name="Rating"
                defaultValue={Rating}
                max={5}
                min={0}
                className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
              />
            </div>
            <textarea
              name="details"
              defaultValue={details}
              cols="30"
              rows="5"
              className="border-2 border-transparent outline-none rounded-md focus:border-[#8a322c] focus:border-2 p-3"
            ></textarea>
            <input
              className="btn uppercase py-4 rounded-lg px-10 bg-gradient-to-l from-[#ff1616b6] to-[#5f0606b6] hover:opacity-75 text-white text-lg font-bold text-center w-40 flex mx-auto"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    );
  };
  

export default EditCar;