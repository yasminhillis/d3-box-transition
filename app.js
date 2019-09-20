const svgWidth = 800
const svgHeight = 400

const svg = d3
            .select('#chart')
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)

const bottomLine = 300
const circleRadius = 30
const bottomLineWidth = 5

const line = svg
            .append('line')
            .attr('x1', 0)
            .attr('y1', bottomLine)
            .attr('x2', svgWidth)
            .attr('y2', bottomLine)
            .attr('stroke', 'black')
            .attr('stroke-width', bottomLineWidth)


const circle = svg
            .append('circle')
            .attr('cx', 200)
            .attr('cy', bottomLine - circleRadius - bottomLineWidth)
            .attr('r', circleRadius)
            .attr('stroke', 'orange')
            .attr('stroke-width', 5)
            .attr('fill', 'pink')
