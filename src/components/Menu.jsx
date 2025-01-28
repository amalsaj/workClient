import React, { useEffect, useState } from "react";
import menuBg from "../assets/menuBg.jpg";
import menuBg2 from "../assets/bgImage2.png";
import axios from "axios";
import { backendUrl } from "../utils/apiUrl";
import juice1 from "../assets/juice1.png";
import juice2 from "../assets/juice2.png";
import bg from "../assets/bg.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";

const Menu = () => {
  const [item, setItem] = useState();
  const [category, setCategory] = useState("Food");
  const [color, setColor] = useState("#0796EF");
  const [loading, setLoading] = useState(true);

  console.log("category: " + category);
  
  useEffect(() => {
    getAllProducts();
  }, [category]);
  
  const getAllProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/api/items/getAllItems`);
      console.log('response: ', response);
      const filteredItem = response.data.filter(
        (item) => item.category === category
      );
      console.log('filteredItem: ', filteredItem);
      setItem(filteredItem);
      console.log('item: ', item);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full">
      <div
        className="h-100 w-full flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menuBg})`,
          backgroundSize: "cover",
          height: "311px",
        }}
      >
        <div className="flex flex-col justify-center items-center w-10/12 md:w-7/12 lg:w-5/12 h-full px-4">
          <h3
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-center font-oswald"
            style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)" }}
          >
            MENU
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-[#BBBBBB] font-kelly text-center mt-4">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>

      <div
        className="h-100 w-100 flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menuBg2})`,
          backgroundSize: "cover",
          height: "79px",
          width: "100%",
        }}
      >
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("Food")}
          style={{ backgroundColor: category === "Food" ? color : "" }}
        >
          FOOD
        </button>
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("Drinks")}
          style={{ backgroundColor: category === "Drinks" ? color : "" }}
        >
          DRINKS
        </button>
        <button
          className="h-[50px] w-[115px] bg-black text-white border-2 border-blue-500 hover:bg-blue-500 ml-2 font-semibold"
          onClick={() => setCategory("Brunch")}
          style={{ backgroundColor: category === "Brunch" ? color : "" }}
        >
          BRUNCH
        </button>
      </div>

      <div
        className="h-auto md:h-[672px] lg:h-full flex justify-center items-center md:pt-20 px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="hidden md:block md:w-[299px] h-[641px] top-[518px] left-[-153px] gap-0 bg-no-repeat"
          style={{ backgroundImage: `url(${frame2})` }}
        ></div>

        <div className="w-full md:w-[2400px] sm:h-full md:h-full flex flex-col border justify-center pb-28 mt-32">
          <div>
            <img
              src={juice1}
              alt="juice 1"
              className="w-24 h-28 
            xl:w-[190px] xl:h-[281px] xl:top-[500px] xl:left-[93px] 
            lg:w-[180px] lg:h-[270px] lg:top-[480px] lg:left-[80px] 
            md:w-[160px] md:h-[240px] md:top-[450px] md:left-[70px] 
            absolute top-[600px] z-50"
            />
          </div>

          <div className="flex items-center justify-center h-[180px] mb-0 space-x-5">
            <hr
              className="border-[#857878] w-[68px]"
              style={{ borderWidth: "2px" }}
            />
            <h3
              className="text-4xl sm:text-5xl md:text-6xl text-center lg:text-[50px] font-semibold text-white font-oswald md:text-center sm:text-center"
              style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.6)" }}
            >
              BRUNCH COCKTAILS
            </h3>
            <hr
              className="border-[#857878] w-[68px]"
              style={{ borderWidth: "2px" }}
            />
          </div>

          <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-4">
            {loading ? (
              <div className="text-center text-white font-semibold">
                Loading...
              </div>
            ) : (
              item?.map((prod, index) => (
                <div
                  key={index}
                  className="m-2 w-full p-4 md:px-14 font-semibold max-[460px]:text-sm"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h2
                      style={{
                        color: "white",
                        fontSize: "1.25rem",
                        marginLeft: "0.5rem",
                        fontFamily: "Oswald",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <span className="text-xl">{prod.itemName}</span>
                      <span
                        style={{
                          flexGrow: 1,
                          borderBottom: "3px dotted white",
                          margin: "0 0.5rem",
                          marginTop: "0.8rem",
                          height: "0",
                        }}
                      ></span>
                      <span>${prod.price}</span>
                    </h2>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "gray",
                      textAlign: "left",
                      marginTop: "0.5rem",
                      marginLeft: "0.5rem",
                      marginRight: "0.5rem",
                      fontFamily: "Kelly Slab, sans-serif",
                    }}
                  >
                    {prod.description}
                  </p>
                </div>
              ))
            )}
          </div>
          <div>
            <img
              alt="juice2"
              src={juice2}
              className="w-24 h-28 
            xl:w-[292px] xl:h-[270px] xl:top-[1000px] xl:right-[148px] 
            lg:w-[250px] lg:h-[230px] lg:top-[1105px] lg:right-[120px] 
            md:w-[200px] md:h-[180px] md:top-[1027px] md:right-[96px] 
            absolute right-[20px] z-20"
            />
          </div>
        </div>

        <div
          className="hidden md:block w-[288px] h-[610px] top-[541px] left-[1290px] gap-0 bg-no-repeat"
          style={{ backgroundImage: `url(${frame1})` }}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
