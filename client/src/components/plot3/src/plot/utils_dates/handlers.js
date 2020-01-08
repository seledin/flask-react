

export function move(event){

    var e = event.target;
    var dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;

    console.log(x + " " + y)


    return `<g>
        <g className="highcharts-plot-lines-0" data-z-index="0"><path fill="none" stroke="red" strokeWidth="2" d="M ${event.clientX} 0 L ${event.clientX} 450"></path></g>
    </g>`
}
