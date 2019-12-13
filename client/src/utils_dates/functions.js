

export function add(a, b){
    return a + b;
}

// get random int
export function get_random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get random double
export function get_random_double(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function get_random_array(size, min_x, max_x, min_y, max_y){
    let result = [];

    for (let i=0;i< size; i++){
        result.push([get_random(min_x, max_x), get_random(min_y, max_y)])
    }

    return result;
}

export function get_random_area_array(size, min_x, max_x, min_y, max_y, s_dev){
    let result = [];

    for (let i=0;i< size; i++){
        let y = get_random(min_y, max_y);
        result.push([i, y - s_dev, y + s_dev, y])
    }

    return result;
}

export function scale_data(data, ranges ,width, height){
    let result = [];

    let x_diff = ranges.max_x - ranges.min_x;
    let y_diff = ranges.max_y - ranges.min_y;

    let x_frame = width/x_diff;
    let y_frame = height/y_diff;

    for (let i=0; i<data.length; i++){
        result.push([data[i][0] * x_frame, height - data[i][1] * y_frame ])
    }

    return result;
}

export function scale_area_data(area_data, ranges, width, height){
    let result = [];

    let x_diff = ranges.max_x - ranges.min_x;
    let y_diff = ranges.max_y - ranges.min_y;

    let x_frame = width/x_diff;
    let y_frame = height/y_diff;

    for (let i=0; i<area_data.length; i++){
        result.push([area_data[i][0] * x_frame, height - area_data[i][1] * y_frame, height - area_data[i][2] * y_frame, height - area_data[i][3] * y_frame])
    }

    return result;
}


/////////////
// MOCKED DATA

export function get_random_mock_array(size, min_x, max_x, min_y, max_y){
    let result = [];

    for (let i=min_x; i<=max_x; i++){
        result.push([i, get_random(min_y, max_y)])
    }

    return result;
}


// /// RANDOM COLOR
// export function random_rgba() {
//     var o = Math.round, r = Math.random, s = 123;
//     return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }


export function get_random_colors(number) {
    let colors = ["#a2cd9f", "#6ef4ef", "#ea6e2e", "#6e224c", "#edfc35", "", ""];

    return colors.slice(0, number);
}

export function get_box_height(number){
    if (number === 0){
        return 0;
    }
    return 25*(number + 1) + 10;
}


///////////////////////////////
// MOCKED DATA with DATES


export function get_random_mock_array_dates(dates, min_y, max_y){
    let result = [];

    for (let i=0; i<dates.length; i++){
        result.push([i, dates[i] ,get_random(min_y, max_y)])
    }

    return result;
}

// export function get_random_mock_array_area_dates(dates, min_y, max_y){
//     let result = [];
//     let std

//     for (let i=0; i<dates.length; i++){
//         result.push([i, dates[i] ,get_random(min_y, max_y)])
//     }

//     return result;
// }

export function scale_data_dates(data, ranges ,width, height){
    let result = [];

    let x_diff = ranges.max_x - ranges.min_x;
    let y_diff = ranges.max_y - ranges.min_y;

    let x_frame = width/x_diff;
    let y_frame = height/y_diff;

    for (let i=0; i<data.length; i++){
        result.push([data[i][0] * x_frame, data[i][1], height - data[i][2] * y_frame ])
    }

    return result;
}

export function scale_data_area_dates(data, ranges ,width, height, prefix=0){
    let result = [];
    let x_diff = ranges.max_x - ranges.min_x;
    let y_diff = ranges.max_y - ranges.min_y;

    let x_frame = width/(x_diff - 1);
    let y_frame = height/y_diff;

    // let x_frame = dimensions.width/(ranges_dates.max_x-1)

    // let x = x_frame * (dimensions.historical_data_length - 1);

    // console.log("%%")
    // console.log(data)
    // console.log(x_diff)
    // console.log("width: " + width)
    // console.log("x_frame: " + x_frame)

    for (let i=0; i<data.length; i++){
        // console.log(data[i])
        // if(i<255){
        //     result.push([data[i][0] * x_frame, data[i][1], height - data[i][2] * y_frame, height - data[i][3] * y_frame, height - data[i][4] * y_frame ])
        // }else{
        //     result.push([(data[i][0] + 256) * x_frame, data[i][1], height - data[i][2] * y_frame, height - data[i][3] * y_frame, height - data[i][4] * y_frame ])
        // }

        result.push([(i+prefix) * x_frame, data[i][1], height - data[i][2] * y_frame, height - data[i][3] * y_frame, height - data[i][4] * y_frame ])
        
    }

    // console.log(result)

    return result;
}

export function get_random_mock_area_array_dates(dates, min_y, max_y){
    let result = [];
    



    for (let i=0; i<dates.length; i++){
        let s_d1 = get_random(2,8);
        let s_d2 = get_random(2,8);
        let random = get_random(min_y, max_y);
        result.push([i, dates[i], random, random - s_d1, random + s_d2])
    }

    return result;
}

export function get_data_mocks_area_DATES(data_mocks_area_DATES1, data_mocks_area_DATES2, number){
    let result = []

    for(let i=0;i<number;i++){
        result.push(data_mocks_area_DATES1[i].concat(data_mocks_area_DATES2[i]))
    }

    return result

}

export function scale_data_mocks(data_mocks_area_DATES1, data_mocks_area_DATES2, ranges, width, height, number_of_plots){
    let scaled_data_mocks_area_DATES = []
    let scaled_data_mocks_area_future_DATES = []

    for (let i=0; i<number_of_plots; i++){
        scaled_data_mocks_area_DATES.push(scale_data_area_dates(data_mocks_area_DATES1[i], ranges, width, height));
        // scaled_data_mocks_area_future_DATES.push(scale_data_area_dates(data_mocks_area_DATES2[i], ranges, width,  height, 256));
        scaled_data_mocks_area_future_DATES.push(scale_data_area_dates(data_mocks_area_DATES2[i], ranges, width,  height, data_mocks_area_DATES1[i].length - 1));
    }

    return [scaled_data_mocks_area_DATES, scaled_data_mocks_area_future_DATES]
}

export function get_data_map_area_DATES(data_mocks_area_DATES, array_length_dates, number_of_plots){

    let data_map_area_DATES = []

    for(let i = 0; i<array_length_dates; i++) {
        let y_data_normal = [];
        let y_data_min = [];
        let y_data_max = [];
        let date;
      
        date = data_mocks_area_DATES[0][i][1]
      
      
        for(let j=0; j<number_of_plots; j++) {
          y_data_normal.push(data_mocks_area_DATES[j][i][2])
          y_data_min.push(data_mocks_area_DATES[j][i][3])
          y_data_max.push(data_mocks_area_DATES[j][i][4])
        }
      
        data_map_area_DATES[i] = [i, date, y_data_normal, y_data_min, y_data_max]
    }

    return data_map_area_DATES;
}

export function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export function get_historical_dates(){
    let dates = []
    dates.push(Date.UTC(2010, 0, 18))
    dates.push(Date.UTC(2010, 1, 18))
    dates.push( Date.UTC(2010, 2, 18))
    dates.push(Date.UTC(2010, 3, 18))
    dates.push( Date.UTC(2010, 4, 18))
    dates.push( Date.UTC(2010, 5, 18))
    dates.push( Date.UTC(2010, 6, 18))
    dates.push( Date.UTC(2010, 7, 18))
    // dates.push(Date.UTC(2010, 8, 18))
    // dates.push( Date.UTC(2010, 9, 18))
    // dates.push( Date.UTC(2010, 10, 18))
    
    return dates;
}

export function get_forecasted_dates(){
    let dates = []
    // dates.push( Date.UTC(2010, 7, 18))
    dates.push(Date.UTC(2010, 8, 18))
    dates.push( Date.UTC(2010, 9, 18))

    return dates;

}