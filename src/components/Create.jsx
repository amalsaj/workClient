import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../utils/apiUrl";
import { useNavigate } from "react-router-dom";

const ItemCreationForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    description: "",
    category: "Food",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const categories = ["Food", "Drinks", "Brunch"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${backendUrl}/api/items/addItem`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Item created successfully!");
        setFormData({
          itemName: "",
          price: "",
          description: "",
          category: "Food",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage("Failed to create item. Please try again.");
      }
    } catch (error) {
      setMessage("Error creating item. Check your backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-lg p-6 bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Item</h2>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("success") ? "text-green-400" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
          <div>
            <label className="block font-medium text-gray-300 mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter item name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-gray-300 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
              rows={4}
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Create Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemCreationForm;
