
let w = 1100;
let h = 400;

export const appConfig = {


  dimensions: {
    box_width: 400,
    box_height: 120
  },

  number_of_plots: 5,

  ranges_dates: {
    max_x: (261 + 52 + 0),
    // max_x: (100 + 52 + 0),
    // max_x: (8 + 2 + 0),
    min_x: 0,
    max_y: 100,
    min_y: 0,
    // max_x_forecast: 53
  },

  // array_length_dates: 256,
  // array_length_dates_forecast: 48,

  array_length_dates: 261,
  // array_length_dates: 100,
  array_length_dates_forecast: 52,

  // array_length_dates: 8,
  // array_length_dates_forecast: 2,

  KEYWORDS_URL: "http://0.0.0.0:5000",


};
//53