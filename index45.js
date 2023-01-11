function createCar(manufacturer, model, ...options) {
    const car = {
      manufacturer: manufacturer,
      model: model
    };
    for (let i = 0; i < options.length; i += 2) {
      car[options[i]] = options[i + 1];
    }
    return car;
  }
  
  console.log(createCar("Toyota", "Camry", "color", "red", "optional feature", "sunroof"));
  