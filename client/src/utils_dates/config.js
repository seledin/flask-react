
let w = 1100;
let h = 500;

export const appConfig = {

  // ranges: {
  //   max_x: 100,
  //   min_x: 0,
  //   max_y: 100,
  //   min_y: 0
  // },

  dimensions: {
    width: w,
    height: h,
    height2: h * 1.35,
    width2:  w * 1.1,
    x_trans: 85,
    y_trans: 85,
    box_width: 400,
    box_height: 120
  },

  number_of_plots: 5,

  ranges_dates: {
    max_x: (255 + 48 + 0),
    min_x: 0,
    max_y: 100,
    min_y: 0,
    // max_x_forecast: 53
  },

  array_length_dates: 256,
  array_length_dates_forecast: 48,

  KEYWORDS_URL: "http://0.0.0.0:5000",


};
//53