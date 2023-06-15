const Items = [
    {
      name: "Milk",
      imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
      cost: 50,
      price: 5,
      quantity: 100,
      description: "alot of protien",
    },
    {
      name: "Dairy Milk",
      imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
      cost: 50,
      price: 5,
      quantity: 100,
      description: "alot of protien",
    },
    {
      name: "Dark Chocolate",
      imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
      cost: 50,
      price: 5,
      quantity: 100,
      description: "alot of protien",
    },
    {
      name: "yoGurt",
      imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
      cost: 50,
      price: 5,
      quantity: 100,
      description: "alot of protien",
    },
  ];
  
  const seed = async () => {
    await db.sync({ force: true });
    await Promise.all(
      Items.map((item) => {
        return Item.create(item);
      })
    );
  
    
    console.log(green("Seeding success!"));
    console.log("db synced");
    app.listen(port, () => console.log(`listening on port ${port}`));
    // db.close();
  };
  
  seed().catch((err) => {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  });
  