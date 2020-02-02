import * as faker from 'faker';

function getRegion() {
  const random = faker.random.number({ min: 0, max: 2 });
  return ['East', 'West', 'North'][random];
}

function getGender() {
  const random = faker.random.number({ min: 0, max: 1 });
  return ['Boy', 'Girl'][random];
}

function getColor() {
  const random = faker.random.number({ min: 0, max: 3 });
  return ['White', 'Blue', 'Red', 'Green'][random];
}

function getUnits() {
  return faker.random.number({ min: 0, max: 50 });
}

function getPrice() {
  return faker.random.number({ min: 50, max: 200 });
}

function getCost() {
  return faker.random.number({ min: 20, max: 200 });
}

export default (linesCount) => {
  const lines = [];
  for (let i = 0; i < linesCount; i++) {
    lines.push(
      {
        Region: getRegion(),
        Gender: getGender(),
        Color: getColor(),
        Units: getUnits(),
        Price: getPrice(),
        Cost: getCost(),
        Country: faker.fake('{{address.country}}'),
      },
    );
  }
  return lines;
};
