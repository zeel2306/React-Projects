const handleOrderSubmit = (formData) => {
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    ...formData,
    cart: cartItems,
    total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    date: new Date().toLocaleString(),
  };

  // Add new order at the top
  localStorage.setItem("orders", JSON.stringify([newOrder, ...existingOrders]));

  clearCart(); 
  setShowNotification(true);

  setTimeout(() => {
    navigate("/");
  }, 2000);
};
